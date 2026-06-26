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
  dashboardTextareaClass,
  parseCommaList,
} from "@/components/dashboard/DashboardFormShell";

export default function NewJobPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
    status: "DRAFT",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Creating job opening...");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          requirements: parseCommaList(formData.requirements),
          benefits: parseCommaList(formData.benefits),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create job opening");
        return;
      }

      Toast.success("Job opening created successfully!");
      router.push("/careersapplications");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/careersapplications" title="Add Job Opening">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Title <span className="text-destructive">*</span></label>
            <Input name="title" value={formData.title} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Slug <span className="text-destructive">*</span></label>
            <Input name="slug" value={formData.slug} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Department <span className="text-destructive">*</span></label>
            <Input name="department" value={formData.department} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Location <span className="text-destructive">*</span></label>
            <Input name="location" value={formData.location} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Type <span className="text-destructive">*</span></label>
            <Input name="type" value={formData.type} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Salary</label>
            <Input name="salary" value={formData.salary} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Description <span className="text-destructive">*</span></label>
          <textarea name="description" rows={4} value={formData.description} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Requirements (comma-separated)</label>
            <Input name="requirements" value={formData.requirements} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Benefits (comma-separated)</label>
            <Input name="benefits" value={formData.benefits} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className={dashboardSelectClass}>
            <option value="DRAFT">Draft</option>
            <option value="PUBLISHED">Published</option>
            <option value="ARCHIVED">Archived</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Job Opening"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
