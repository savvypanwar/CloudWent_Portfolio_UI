"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import {
  DashboardFormShell,
  dashboardInputClass,
  dashboardSelectClass,
} from "@/components/dashboard/DashboardFormShell";

export default function NewRoleUserPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
    status: "ACTIVE",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Creating user...");

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create user");
        return;
      }

      Toast.success("User created successfully!");
      router.push("/roles-permissions");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/roles-permissions" title="Add User">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
          <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email <span className="text-destructive">*</span></label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required className={dashboardInputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Password</label>
          <Input type="password" name="password" value={formData.password} onChange={handleChange} className={dashboardInputClass} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Role</label>
            <select name="role" value={formData.role} onChange={handleChange} className={dashboardSelectClass}>
              <option value="USER">User</option>
              <option value="EMPLOYEE">Employee</option>
              <option value="HR">HR</option>
              <option value="ADMIN">Admin</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className={dashboardSelectClass}>
              <option value="PENDING_EMAIL_VERIFY">Pending Email Verify</option>
              <option value="ACTIVE">Active</option>
              <option value="SUSPENDED">Suspended</option>
              <option value="BLOCKED">Blocked</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save User"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
