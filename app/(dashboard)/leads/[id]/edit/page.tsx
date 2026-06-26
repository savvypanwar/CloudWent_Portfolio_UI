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
} from "@/components/dashboard/DashboardFormShell";

export default function ReviewLeadPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    status: "new",
  });

  useEffect(() => {
    const fetchLead = async () => {
      try {
        const res = await fetch(`/api/leads/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          name: data.name ?? "",
          email: data.email ?? "",
          subject: data.subject ?? "",
          message: data.message ?? "",
          status: data.status ?? "new",
        });
      } catch {
        Toast.error("Failed to load inquiry");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchLead();
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
    const toastId = Toast.loading("Updating inquiry...");

    try {
      const res = await fetch(`/api/leads/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update inquiry");
        return;
      }

      Toast.success("Inquiry updated successfully!");
      router.push("/leads");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/leads" backLabel="Back to Inquiries" title="Review Inquiry" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
            <Input name="name" value={formData.name} onChange={handleChange} className={dashboardInputClass} />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <Input name="email" value={formData.email} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
          <Input name="subject" value={formData.subject} onChange={handleChange} className={dashboardInputClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
          <textarea name="message" rows={6} value={formData.message} onChange={handleChange} className={dashboardTextareaClass} />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className={dashboardSelectClass}>
            <option value="new">New</option>
            <option value="read">Read</option>
            <option value="replied">Replied</option>
          </select>
        </div>

        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Inquiry"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
