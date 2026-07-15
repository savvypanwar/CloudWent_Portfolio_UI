"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import { ArrowLeft, Upload, X, Plus, Minus } from "lucide-react";
import Link from "next/link";

const statusOptions = ["DRAFT", "PUBLISHED", "ARCHIVED"];

export default function AddBlogPostPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [tagInput, setTagInput] = useState("");
  const [formData, setFormData] = useState({
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    author: "",
    category: "",
    tags: [] as string[],
    image: "",
    status: "DRAFT" as "DRAFT" | "PUBLISHED" | "ARCHIVED",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, image: url }));
    setImagePreview(url || null);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const toastId = Toast.loading("Uploading image...");

    try {
      const uploadFormData = new FormData();
      uploadFormData.append("image", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: uploadFormData,
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok || !data.success) {
        Toast.error(data.error || "Failed to upload image");
        setIsUploading(false);
        return;
      }

      setFormData((prev) => ({ ...prev, image: data.url }));
      setImagePreview(data.url);
      Toast.success("Image uploaded successfully!");
    } catch (err) {
      Toast.dismiss(toastId);
      Toast.error("Upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  const clearImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }));
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const addTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !formData.tags.includes(trimmed)) {
      setFormData((prev) => ({ ...prev, tags: [...prev.tags, trimmed] }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tagToRemove),
    }));
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
          publishedAt:
            formData.status === "PUBLISHED" ? new Date().toISOString() : null,
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create blog post");
        setIsSubmitting(false);
        return;
      }

      Toast.success("Blog post created successfully!");
      router.push("/manage-blog");
      router.refresh();
    } catch (err) {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/manage-blog"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Add Blog Post</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6"
      >
        {/* Image Upload Section */}
        <div className="flex flex-col items-center gap-4 pb-6 border-b border-border">
          <label className="block text-sm font-medium text-foreground self-start mb-1">
            Cover Image
          </label>

          <div className="w-full h-48 rounded-xl overflow-hidden bg-muted border border-border flex items-center justify-center">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Preview"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-muted-foreground text-sm">
                No image selected
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 w-full">
            <Input
              name="image"
              value={formData.image}
              onChange={handleImageUrlChange}
              placeholder="Image URL (or upload below)"
              className="border-border bg-surface flex-1"
            />
            <input
              type="file"
              ref={fileInputRef}
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex-shrink-0"
            >
              <Upload className="w-4 h-4 mr-1" />
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
            {imagePreview && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={clearImage}
                className="flex-shrink-0 hover:bg-destructive/10 hover:text-destructive"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Title <span className="text-destructive">*</span>
            </label>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="The Future of Web Development"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Slug <span className="text-destructive">*</span>
            </label>
            <Input
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              placeholder="future-of-web-development"
              className="border-border bg-surface"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Author <span className="text-destructive">*</span>
            </label>
            <Input
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Category <span className="text-destructive">*</span>
            </label>
            <Input
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              placeholder="Technology"
              className="border-border bg-surface"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Excerpt <span className="text-destructive">*</span>
          </label>
          <textarea
            name="excerpt"
            rows={2}
            value={formData.excerpt}
            onChange={handleChange}
            required
            placeholder="A short summary of the blog post..."
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Content
          </label>
          <textarea
            name="content"
            rows={8}
            value={formData.content}
            onChange={handleChange}
            placeholder="Write your blog post content here... (HTML supported)"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Tags
          </label>
          <div className="flex items-center gap-2 mb-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              placeholder="Add a tag and press +"
              className="border-border bg-surface flex-1"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addTag();
                }
              }}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={addTag}
              className="flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {formData.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="hover:text-destructive"
                >
                  <Minus className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          >
            {statusOptions.map((s) => (
              <option key={s} value={s}>
                {s.charAt(0) + s.slice(1).toLowerCase()}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting || isUploading}
          >
            {isSubmitting ? "Saving..." : "Save Blog Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
