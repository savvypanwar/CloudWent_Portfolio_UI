"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import { ArrowLeft, Upload, X } from "lucide-react";
import Link from "next/link";

const avatarColors = [
  "from-blue-600 to-indigo-700",
  "from-pink-500 to-rose-600",
  "from-green-500 to-emerald-600",
  "from-purple-500 to-violet-700",
  "from-orange-500 to-amber-600",
  "from-cyan-500 to-blue-600",
];

const teamOptions = ["leadership", "engineering", "design"];

export default function AddTeamMemberPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    role: "",
    initials: "",
    avatarColor: avatarColors[0],
    bio: "",
    location: "",
    experience: "",
    email: "",
    linkedin: "",
    twitter: "",
    github: "",
    team: teamOptions[0],
    order: 0,
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Creating team member...");

    try {
      const res = await fetch("/api/team", {
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
        Toast.error(data.error || "Failed to create team member");
        setIsSubmitting(false);
        return;
      }

      Toast.success("Team member created successfully! 🎉");
      router.push("/myteam");
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
          href="/myteam"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Add Team Member</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6"
      >
        {/* Image Upload Section */}
        <div className="flex flex-col items-center gap-4 pb-6 border-b border-border">
          <label className="block text-sm font-medium text-foreground self-start mb-1">
            Profile Image
          </label>
          
          <div className="w-24 h-24 rounded-full overflow-hidden bg-muted border border-border flex items-center justify-center">
            {imagePreview ? (
              <Image
                src={imagePreview}
                alt="Preview"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${formData.avatarColor} flex items-center justify-center text-primary-foreground text-2xl font-bold`}>
                {formData.initials || "?"}
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
              Full Name <span className="text-destructive">*</span>
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Role <span className="text-destructive">*</span>
            </label>
            <Input
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              placeholder="CEO & Founder"
              className="border-border bg-surface"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Slug <span className="text-destructive">*</span>
            </label>
            <Input
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              required
              placeholder="john-doe"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Initials <span className="text-destructive">*</span>
            </label>
            <Input
              name="initials"
              value={formData.initials}
              onChange={handleChange}
              required
              placeholder="JD"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Team <span className="text-destructive">*</span>
            </label>
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              {teamOptions.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Avatar Color <span className="text-destructive">*</span>
            </label>
            <select
              name="avatarColor"
              value={formData.avatarColor}
              onChange={handleChange}
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            >
              {avatarColors.map((color) => (
                <option key={color} value={color}>
                  {color.replace("from-", "").replace(" to-", " → ")}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Order
            </label>
            <Input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              className="border-border bg-surface"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">
            Bio
          </label>
          <textarea
            name="bio"
            rows={3}
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about this team member..."
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Location
            </label>
            <Input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="New York, USA"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Experience
            </label>
            <Input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="10+ years"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@cloudwent.com"
              className="border-border bg-surface"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              LinkedIn URL
            </label>
            <Input
              type="url"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/johndoe"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Twitter URL
            </label>
            <Input
              type="url"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              placeholder="https://twitter.com/johndoe"
              className="border-border bg-surface"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              GitHub URL
            </label>
            <Input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/johndoe"
              className="border-border bg-surface"
            />
          </div>
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
          <Button type="submit" variant="primary" disabled={isSubmitting || isUploading}>
            {isSubmitting ? "Saving..." : "Save Team Member"}
          </Button>
        </div>
      </form>
    </div>
  );
}