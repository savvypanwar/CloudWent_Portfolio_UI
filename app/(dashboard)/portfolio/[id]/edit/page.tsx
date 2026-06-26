"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import {
  DashboardFormShell,
  dashboardInputClass,
  dashboardSelectClass,
  dashboardTextareaClass,
  parseCommaList,
  joinCommaList,
} from "@/components/dashboard/DashboardFormShell";

export default function EditProjectPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    description: "",
    category: "",
    tags: "",
    image: "",
    stack: "",
    link: "",
    status: "DRAFT",
    order: 0,
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/portfolio/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          slug: data.slug ?? "",
          title: data.title ?? "",
          description: data.description ?? "",
          category: data.category ?? "",
          tags: joinCommaList(data.tags),
          image: data.image ?? "",
          stack: joinCommaList(data.stack),
          link: data.link ?? "",
          status: data.status ?? "DRAFT",
          order: data.order ?? 0,
        });
      } catch {
        Toast.error("Failed to load project");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchProject();
  }, [id, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Updating project...");

    try {
      const res = await fetch(`/api/portfolio/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: Number(formData.order),
          tags: parseCommaList(formData.tags),
          stack: parseCommaList(formData.stack),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update project");
        return;
      }

      Toast.success("Project updated successfully!");
      router.push("/portfolio");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/portfolio" backLabel="Back to Portfolio" title="Edit Project" loading={isLoading}>
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

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Description <span className="text-destructive">*</span></label>
          <textarea name="description" rows={3} value={formData.description} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Category <span className="text-destructive">*</span></label>
            <Input name="category" value={formData.category} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Project link</label>
            <Input name="link" value={formData.link} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Tags (comma-separated)</label>
            <Input name="tags" value={formData.tags} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Stack (comma-separated)</label>
            <Input name="stack" value={formData.stack} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Image URL</label>
            <Input name="image" value={formData.image} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Order</label>
            <Input type="number" name="order" value={formData.order} onChange={handleChange} className={dashboardInputClass} />
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
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Project"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
