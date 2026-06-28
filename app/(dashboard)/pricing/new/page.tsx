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
  parseCommaList,
} from "@/components/dashboard/DashboardFormShell";

export default function NewPricingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sub: "",
    description: "",
    features: "",
    cta: "Get Started",
    featured: false,
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
    const toastId = Toast.loading("Creating pricing plan...");

    try {
      const res = await fetch("/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: Number(formData.order),
          features: parseCommaList(formData.features),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create pricing plan");
        return;
      }

      Toast.success("Pricing plan created successfully!");
      router.push("/pricing");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/pricing" title="Add Pricing Plan">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
            <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Price <span className="text-destructive">*</span></label>
            <Input name="price" value={formData.price} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. $2,999" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Sub text</label>
            <Input name="sub" value={formData.sub} onChange={handleChange} className={dashboardInputClass} placeholder="e.g. /project" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">CTA Button Text <span className="text-destructive">*</span></label>
            <Input name="cta" value={formData.cta} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Description <span className="text-destructive">*</span></label>
          <textarea name="description" rows={3} value={formData.description} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Features (comma-separated)</label>
          <Input name="features" value={formData.features} onChange={handleChange} className={dashboardInputClass} placeholder="e.g. Feature 1, Feature 2, Feature 3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div className="flex items-center gap-4 pt-8">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="w-4 h-4 rounded border-border" />
              <label className="text-sm text-foreground">Active</label>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="w-4 h-4 rounded border-border" />
              <label className="text-sm text-foreground">Featured</label>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Pricing Plan"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
