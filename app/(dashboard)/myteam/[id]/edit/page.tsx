
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Toast } from "@/services/toast.service";
import { ArrowLeft, Loader2 } from "lucide-react";
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

export default function EditTeamMemberPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  });

  // ✅ Fetch member data
  useEffect(() => {
    const fetchMember = async () => {
      try {
        const res = await fetch(`/api/team/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          name: data.name ?? "",
          slug: data.slug ?? "",
          role: data.role ?? "",
          initials: data.initials ?? "",
          avatarColor: data.avatarColor ?? data.color ?? avatarColors[0],
          bio: data.bio ?? "",
          location: data.location ?? "",
          experience: data.experience ?? "",
          email: data.email ?? "",
          linkedin: data.linkedin ?? "",
          twitter: data.twitter ?? "",
          github: data.github ?? "",
          team: data.team ?? teamOptions[0],
          order: data.order ?? 0,
        });
      } catch (error) {
        Toast.error("Failed to load team member data");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchMember();
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
    const toastId = Toast.loading("Updating team member...");

    try {
      const res = await fetch(`/api/team/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          order: Number(formData.order),
        }),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update team member");
        setIsSubmitting(false);
        return;
      }

      Toast.success("Team member updated successfully! 🎉");
      router.push("/myteam");
      router.refresh();
    } catch (err) {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="p-6 flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <Link
          href="/myteam"
          className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Team
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Edit Team Member</h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6"
      >
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
          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : "Update Team Member"}
          </Button>
        </div>
      </form>
    </div>
  );
}