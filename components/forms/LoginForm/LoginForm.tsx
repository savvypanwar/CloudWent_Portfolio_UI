"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Checkbox } from "@/components/ui/Checkbox/Checkbox";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";

type LoginResponse = {
  success: boolean;
  message?: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    name?: string | null;
    role: string;
  };
  errors?: Record<string, string[]>;
};

export const LoginForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin", // ✅ Default role
    remember: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const toastId = Toast.loading("Signing in...");

    try {
      // Tumhara backend /api/auth/login already hai — hum role bhej rahe hain
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          role: formData.role, // ✅ Role bhej rahe hain
        }),
      });

      const data = (await response.json()) as LoginResponse;

      if (!response.ok || !data.success || !data.token || !data.user) {
        const message =
          data.message ||
          data.errors?.email?.[0] ||
          data.errors?.password?.[0] ||
          "Invalid email or password";

        setError(message);
        Toast.error(message);
        return;
      }

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("authUser", JSON.stringify(data.user));

      Toast.success("Login successful");
      router.replace("/dashboard");
      router.refresh();
    } catch {
      const message = "Something went wrong. Please try again.";
      setError(message);
      Toast.error(message);
    } finally {
      Toast.dismiss(toastId);
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email Address <span className="text-red-500">*</span>
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="admin@cloudwent.com"
          autoComplete="email"
          required
          className="border-border bg-surface text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-foreground">
          Password <span className="text-red-500">*</span>
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          required
          className="border-border bg-surface text-foreground placeholder:text-muted-foreground"
        />
      </div>

      {/* ✅ Role Selection Dropdown */}
      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-foreground">
          Role <span className="text-red-500">*</span>
        </label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        >
          <option value="admin">Admin</option>
          <option value="hr">HR</option>
          <option value="employee">Employee</option>
        </select>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Checkbox
            id="remember"
            name="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          <label htmlFor="remember" className="ml-2 text-sm text-muted-foreground">
            Remember me
          </label>
        </div>
        <Link href="/forgot-password" className="text-sm text-primary hover:underline">
          Forgot password?
        </Link>
      </div>

      {error ? (
        <p className="rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="gradient"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Logging in..." : "Sign In"}
      </Button>

      <div className="text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline">
          Sign up
        </Link>
      </div>
    </form>
  );
};