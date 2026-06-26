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

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    name: "",
    description: "",
    icon: "Server",
    color: "from-blue-500 to-indigo-600",
    features: "",
    techStack: "",
    order: 0,
    active: true,
  });

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`/api/services/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          slug: data.slug ?? "",
          name: data.name ?? "",
          description: data.description ?? "",
          icon: data.icon ?? "Server",
          color: data.color ?? "from-blue-500 to-indigo-600",
          features: joinCommaList(data.features),
          techStack: joinCommaList(data.techStack),
          order: data.order ?? 0,
          active: data.active ?? true,
        });
      } catch {
        Toast.error("Failed to load service");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchService();
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
    const toastId = Toast.loading("Updating service...");

    try {
      const res = await fetch(`/api/services/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: Number(formData.order),
          features: parseCommaList(formData.features),
          techStack: parseCommaList(formData.techStack),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update service");
        return;
      }

      Toast.success("Service updated successfully!");
      router.push("/allservices");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/allservices" backLabel="Back to Services" title="Edit Service" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
            <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Slug <span className="text-destructive">*</span></label>
            <Input name="slug" value={formData.slug} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Description <span className="text-destructive">*</span></label>
          <textarea name="description" rows={3} value={formData.description} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Icon <span className="text-destructive">*</span></label>
            <Input name="icon" value={formData.icon} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Color gradient <span className="text-destructive">*</span></label>
            <Input name="color" value={formData.color} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Features (comma-separated)</label>
            <Input name="features" value={formData.features} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Tech stack (comma-separated)</label>
            <Input name="techStack" value={formData.techStack} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div className="flex items-center gap-2 pt-8">
            <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="rounded border-border" />
            <label className="text-sm font-medium text-foreground">Active</label>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Service"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
