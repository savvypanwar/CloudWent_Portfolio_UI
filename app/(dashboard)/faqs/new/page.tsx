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

export default function NewFaqPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    category: "services",
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
    const toastId = Toast.loading("Creating FAQ...");

    try {
      const res = await fetch("/api/faqs", {
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
        Toast.error(data.error || "Failed to create FAQ");
        return;
      }

      Toast.success("FAQ created successfully!");
      router.push("/faqs");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/faqs" title="Add FAQ">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Question <span className="text-destructive">*</span></label>
          <Input name="question" value={formData.question} onChange={handleChange} required className={dashboardInputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Answer <span className="text-destructive">*</span></label>
          <textarea name="answer" rows={4} value={formData.answer} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Category <span className="text-destructive">*</span></label>
            <Input name="category" value={formData.category} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. services, general, careers" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="w-4 h-4 rounded border-border" />
          <label className="text-sm text-foreground">Active</label>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save FAQ"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
