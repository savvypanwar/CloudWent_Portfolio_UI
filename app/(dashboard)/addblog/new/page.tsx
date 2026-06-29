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

export default function NewBlogPostPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: "",
    image: "",
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
    const toastId = Toast.loading("Creating blog post...");

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          tags: parseCommaList(formData.tags),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create blog post");
        return;
      }

      Toast.success("Blog post created successfully!");
      router.push("/addblog");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/addblog" title="Add Blog Post">
      <form
        onSubmit={handleSubmit}
        className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Title <span className="text-destructive">*</span>
            </label>
            <Input name="title" value={formData.title} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Slug <span className="text-destructive">*</span>
            </label>
            <Input name="slug" value={formData.slug} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Author <span className="text-destructive">*</span>
            </label>
            <Input name="author" value={formData.author} onChange={handleChange} required className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Category <span className="text-destructive">*</span>
            </label>
            <Input name="category" value={formData.category} onChange={handleChange} required className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Excerpt <span className="text-destructive">*</span>
          </label>
          <textarea name="excerpt" rows={2} value={formData.excerpt} onChange={handleChange} required className={dashboardTextareaClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Content</label>
          <textarea name="content" rows={6} value={formData.content} onChange={handleChange} className={dashboardTextareaClass} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Tags (comma-separated)</label>
            <Input name="tags" value={formData.tags} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Image URL</label>
            <Input name="image" value={formData.image} onChange={handleChange} className={dashboardInputClass} />
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
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Save Blog Post"}
          </Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
