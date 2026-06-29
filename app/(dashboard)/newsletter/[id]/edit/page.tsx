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
} from "@/components/dashboard/DashboardFormShell";

export default function EditSubscriberPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    status: "active",
    source: "",
  });

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/newsletter/${id}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFormData({
          email: data.email ?? "",
          name: data.name ?? "",
          status: data.status ?? "active",
          source: data.source ?? "",
        });
      } catch {
        Toast.error("Failed to load subscriber");
        router.back();
      } finally {
        setIsLoading(false);
      }
    };
    fetchItem();
  }, [id, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const toastId = Toast.loading("Updating subscriber...");

    try {
      const res = await fetch(`/api/newsletter/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      Toast.dismiss(toastId);

      if (!res.ok) {
        Toast.error(data.error || "Failed to update subscriber");
        return;
      }

      Toast.success("Subscriber updated successfully!");
      router.push("/newsletter");
      router.refresh();
    } catch {
      Toast.dismiss(toastId);
      Toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DashboardFormShell backHref="/newsletter" backLabel="Back to Newsletter" title="Edit Subscriber" loading={isLoading}>
      <form onSubmit={handleSubmit} className="glass-effect border-border rounded-3xl p-8 md:p-10 space-y-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email <span className="text-destructive">*</span></label>
          <Input type="email" name="email" value={formData.email} onChange={handleChange} required className={dashboardInputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
          <Input name="name" value={formData.name} onChange={handleChange} className={dashboardInputClass} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Status</label>
            <select name="status" value={formData.status} onChange={handleChange} className={dashboardSelectClass}>
              <option value="active">Active</option>
              <option value="unsubscribed">Unsubscribed</option>
              <option value="bounced">Bounced</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Source</label>
            <Input name="source" value={formData.source} onChange={handleChange} className={dashboardInputClass} />
          </div>
        </div>
        <div className="flex justify-end gap-4 pt-4 border-t border-border">
          <Button type="button" variant="outline" onClick={() => router.back()} disabled={isSubmitting}>Cancel</Button>
          <Button type="submit" variant="primary" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Update Subscriber"}</Button>
        </div>
      </form>
    </DashboardFormShell>
  );
}
