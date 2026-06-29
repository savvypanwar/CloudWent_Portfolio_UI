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

export default function EditSeoSettingPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    page: "",
    title: "",
    description: "",
    keywords: "",
    ogImage: "",
    canonical: "",
    noIndex: false,
    schemaJson: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/seo-settings/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          page: data.page ?? "",
          title: data.title ?? "",
          description: data.description ?? "",
          keywords: data.keywords?.join(", ") ?? "",
          ogImage: data.ogImage ?? "",
          canonical: data.canonical ?? "",
          noIndex: data.noIndex ?? false,
          schemaJson: data.schemaJson ?? "",
        });
      } catch {
        Toast.error("Failed to load SEO setting");
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
    const toastId = Toast.loading("Updating SEO setting...");

    try {
      const res = await fetch(`/api/seo-settings/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          keywords: formData.keywords.split(",").map((s) => s.trim()).filter(Boolean),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update SEO setting");
        return;
      }

      Toast.success("SEO setting updated successfully!");
      router.push("/seo-settings");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/seo-settings" backLabel="Back to SEO Settings" title="Edit SEO Setting" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Page Route <span className="text-destructive">*</span></label>
            <Input name="page" value={formData.page} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Title</label>
            <Input name="title" value={formData.title} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Meta Description</label>
          <textarea name="description" rows={3} value={formData.description} onChange={handleChange} className={dashboardTextareaClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Keywords (comma-separated)</label>
          <Input name="keywords" value={formData.keywords} onChange={handleChange} className={dashboardInputClass} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">OG Image URL</label>
            <Input name="ogImage" value={formData.ogImage} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Canonical URL</label>
            <Input name="canonical" value={formData.canonical} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Schema JSON</label>
          <textarea name="schemaJson" rows={4} value={formData.schemaJson} onChange={handleChange} className={dashboardTextareaClass} />
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" name="noIndex" checked={formData.noIndex} onChange={handleChange} className="w-4 h-4 rounded border-border" />
          <label className="text-sm text-foreground">No Index</label>
        </div>
        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update SEO Setting"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
