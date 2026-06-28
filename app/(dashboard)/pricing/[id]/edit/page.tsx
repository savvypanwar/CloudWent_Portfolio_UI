"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import {
  DashboardFormShell,
  dashboardInputClass,
  dashboardTextareaClass,
  parseCommaList,
  joinCommaList,
} from "@/components/dashboard/DashboardFormShell";

export default function EditPricingPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/pricing/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          name: data.name ?? "",
          price: data.price ?? "",
          sub: data.sub ?? "",
          description: data.description ?? "",
          features: joinCommaList(data.features),
          cta: data.cta ?? "Get Started",
          featured: data.featured ?? false,
          order: data.order ?? 0,
          active: data.active ?? true,
        });
      } catch {
        Toast.error("Failed to load pricing plan");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchItem();
  }, [id, router]);

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
    const toastId = Toast.loading("Updating pricing plan...");

    try {
      const res = await fetch(`/api/pricing/${id}`, {
        method: "PUT",
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
        Toast.error(data.error || "Failed to update pricing plan");
        return;
      }

      Toast.success("Pricing plan updated successfully!");
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
    <DashboardFormShell backHref="/pricing" backLabel="Back to Pricing Plans" title="Edit Pricing Plan" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
            <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Price <span className="text-destructive">*</span></label>
            <Input name="price" value={formData.price} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Sub text</label>
            <Input name="sub" value={formData.sub} onChange={handleChange} className={dashboardInputClass} />
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
          <Input name="features" value={formData.features} onChange={handleChange} className={dashboardInputClass} />
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
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Pricing Plan"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
