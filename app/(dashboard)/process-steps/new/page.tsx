"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import {
  DashboardFormShell,
  dashboardInputClass,
  dashboardTextareaClass,
} from "@/components/dashboard/DashboardFormShell";

export default function NewProcessStepPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    step: "",
    title: "",
    description: "",
    icon: "search",
    page: "services",
    order: 0,
    active: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Creating process step...");

    try {
      const res = await fetch("/api/process-steps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: Number(formData.order),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create process step");
        return;
      }

      Toast.success("Process step created successfully!");
      router.push("/process-steps");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/process-steps" title="Add Process Step">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Step Number <span className="text-destructive">*</span></label>
            <Input name="step" value={formData.step} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. 01, Discovery" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Title <span className="text-destructive">*</span></label>
            <Input name="title" value={formData.title} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Description <span className="text-destructive">*</span></label>
          <textarea name="description" rows={3} value={formData.description} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Icon <span className="text-destructive">*</span></label>
            <Input name="icon" value={formData.icon} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. search, clipboard-list, palette, hammer, flask-conical, send" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Page <span className="text-destructive">*</span></label>
            <Input name="page" value={formData.page} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. services, home, about" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div className="flex items-center gap-2 pt-8">
            <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="w-4 h-4 rounded border-border" />
            <label className="text-sm text-foreground">Active</label>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Process Step"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
