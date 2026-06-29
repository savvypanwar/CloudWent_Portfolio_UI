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
} from "@/components/dashboard/DashboardFormShell";

export default function EditTechnologyPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    icon: "",
    category: "",
    description: "",
    order: 0,
    active: true,
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/technologies/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          name: data.name ?? "",
          icon: data.icon ?? "",
          category: data.category ?? "",
          description: data.description ?? "",
          order: data.order ?? 0,
          active: data.active ?? true,
        });
      } catch {
        Toast.error("Failed to load technology");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchItem();
  }, [id, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Updating technology...");

    try {
      const res = await fetch(`/api/technologies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, order: Number(formData.order) }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update technology");
        return;
      }

      Toast.success("Technology updated successfully!");
      router.push("/technologies");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/technologies" backLabel="Back to Technologies" title="Edit Technology" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
            <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Icon <span className="text-destructive">*</span></label>
            <Input name="icon" value={formData.icon} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Category <span className="text-destructive">*</span></label>
            <Input name="category" value={formData.category} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Description</label>
          <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className={dashboardTextareaClass} />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="w-4 h-4 rounded border-border" />
          <label className="text-sm text-foreground">Active</label>
        </div>
        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Technology"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
