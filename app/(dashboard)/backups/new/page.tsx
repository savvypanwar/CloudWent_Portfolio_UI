"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import {
  DashboardFormShell,
  dashboardInputClass,
} from "@/components/dashboard/DashboardFormShell";

export default function NewBackupPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    filePath: "",
    fileSize: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Creating backup record...");

    try {
      const res = await fetch("/api/backups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, fileSize: Number(formData.fileSize) }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create backup record");
        return;
      }

      Toast.success("Backup record created successfully!");
      router.push("/backups");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/backups" title="Add Backup Record">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Backup Name <span className="text-destructive">*</span></label>
          <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. Daily Backup 2026-01-15" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">File Path <span className="text-destructive">*</span></label>
          <Input name="filePath" value={formData.filePath} onChange={handleChange} required className={dashboardInputClass} placeholder="/backups/backup-2026-01-15.zip" />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">File Size (bytes)</label>
          <Input type="number" name="fileSize" value={formData.fileSize} onChange={handleChange} className={dashboardInputClass} />
        </div>
        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Backup"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
