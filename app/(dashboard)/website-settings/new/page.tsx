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
} from "@/components/dashboard/DashboardFormShell";

export default function NewWebsiteSettingPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    key: "",
    value: "",
    group: "general",
    label: "",
    type: "text",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Creating setting...");

    try {
      const res = await fetch("/api/website-settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to create setting");
        return;
      }

      Toast.success("Setting created successfully!");
      router.push("/website-settings");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/website-settings" title="Add Website Setting">
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Key <span className="text-destructive">*</span></label>
            <Input name="key" value={formData.key} onChange={handleChange} required className={dashboardInputClass} placeholder="e.g. site_name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Label</label>
            <Input name="label" value={formData.label} onChange={handleChange} className={dashboardInputClass} placeholder="e.g. Site Name" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Value <span className="text-destructive">*</span></label>
          <Input name="value" value={formData.value} onChange={handleChange} required className={dashboardInputClass} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Group</label>
            <select name="group" value={formData.group} onChange={handleChange} className={dashboardSelectClass}>
              <option value="general">General</option>
              <option value="branding">Branding</option>
              <option value="contact">Contact</option>
              <option value="social">Social</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Type</label>
            <select name="type" value={formData.type} onChange={handleChange} className={dashboardSelectClass}>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="url">URL</option>
              <option value="email">Email</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Setting"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
