"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Toast } from "@/services/toast.service";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "hr" | "employee">("admin");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = Toast.loading("Signing in...");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
          role,
        }),
      });

      const data = await res.json();

      Toast.dismiss(loadingToast);
      setLoading(false);

      if (!res.ok || !data.success) {
        Toast.error(data.message || "Invalid credentials");
        return;
      }

      // Store auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      Toast.success("Login successful 🚀");

      router.replace("/");
      router.refresh();
    } catch (err) {
      Toast.dismiss(loadingToast);
      setLoading(false);
      Toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="glass-effect border-border rounded-3xl p-8 md:p-10 max-w-md w-full shadow-glow">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground mt-2">Sign in to your CloudWent dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as "admin" | "hr" | "employee")}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              <option value="admin">Admin</option>
              <option value="hr">HR</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
              placeholder="admin@cloudwent.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-border bg-surface px-4 py-3 pr-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>
          </div>

          

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full shadow-md"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}