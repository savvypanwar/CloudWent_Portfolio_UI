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

export default function EditTestimonialPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    company: "",
    content: "",
    avatar: "",
    rating: 5,
    featured: false,
    order: 0,
  });

  useEffect(() => {
    const fetchTestimonial = async () => {
      try {
        const res = await fetch(`/api/testimonials/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          name: data.name ?? "",
          role: data.role ?? "",
          company: data.company ?? "",
          content: data.content ?? "",
          avatar: data.avatar ?? "",
          rating: data.rating ?? 5,
          featured: data.featured ?? false,
          order: data.order ?? 0,
        });
      } catch {
        Toast.error("Failed to load testimonial");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchTestimonial();
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
    const toastId = Toast.loading("Updating testimonial...");

    try {
      const res = await fetch(`/api/testimonials/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          rating: Number(formData.rating),
          order: Number(formData.order),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update testimonial");
        return;
      }

      Toast.success("Testimonial updated successfully!");
      router.push("/testimonials");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/testimonials" backLabel="Back to Testimonials" title="Edit Testimonial" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name <span className="text-destructive">*</span></label>
            <Input name="name" value={formData.name} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Role <span className="text-destructive">*</span></label>
            <Input name="role" value={formData.role} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
            <Input name="company" value={formData.company} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Avatar URL</label>
            <Input name="avatar" value={formData.avatar} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Content <span className="text-destructive">*</span></label>
          <textarea name="content" rows={4} value={formData.content} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Rating (1-5)</label>
            <Input type="number" name="rating" min={1} max={5} value={formData.rating} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="featured" checked={formData.featured} onChange={handleChange} className="rounded border-border" />
          <label className="text-sm font-medium text-foreground">Featured</label>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Testimonial"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
