"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Upload, X, CheckCircle } from "lucide-react";
import { submitJobApplication } from "@/app/actions/submit-job";

export const JobApplicationForm = ({ jobTitle = "General Application" }: { jobTitle?: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
    jobPosition: jobTitle,
  });

  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!file) {
      alert("Please upload your resume/CV.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Step 1: Upload resume file
      const fileFormData = new FormData();
      fileFormData.append("resume", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: fileFormData,
      });

      if (!uploadRes.ok) {
        const errorData = await uploadRes.json();
        throw new Error(errorData.error || "File upload failed");
      }

      const uploadData = await uploadRes.json();
      const resumeUrl = uploadData.url;

      // Step 2: Submit application with resume URL
      const form = new FormData();
      form.append("name", formData.name);
      form.append("email", formData.email);
      form.append("phone", formData.phone || "");
      form.append("linkedin", formData.linkedin || "");
      form.append("portfolio", formData.portfolio || "");
      form.append("coverLetter", formData.coverLetter || "");
      form.append("jobTitle", formData.jobPosition || jobTitle);
      form.append("resumeUrl", resumeUrl);

      const result = await submitJobApplication(form);

      if (result.success) {
        setSubmitted(true);
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          portfolio: "",
          coverLetter: "",
          jobPosition: jobTitle,
        });
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = "";
      } else {
        // Show validation errors from server
        const errorMessages = result.errors ? Object.values(result.errors).flat().join("\n") : "Something went wrong.";
        setError(errorMessages);
      }
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-effect border-border rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-green-500/10 dark:bg-green-500/20 text-green-500 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Application Submitted! 🎉</h3>
        <p className="text-muted-foreground">
          Thank you for applying to <strong>{jobTitle}</strong>. We'll review your application and get back to you within 5-7 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-xl bg-destructive/10 text-destructive border border-destructive/20">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Full Name <span className="text-destructive">*</span></label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Email Address <span className="text-destructive">*</span></label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Resume / CV <span className="text-destructive">*</span></label>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="w-full rounded-xl border border-dashed border-border bg-surface px-4 py-3 text-sm text-muted-foreground hover:border-primary transition-colors flex items-center justify-between">
              <span>{file ? file.name : "Upload your resume (PDF, DOC)"}</span>
              <Upload className="w-4 h-4" />
            </div>
          </div>
          {file && (
            <button
              type="button"
              onClick={handleRemoveFile}
              className="p-2 rounded-lg bg-destructive/10 dark:bg-destructive/20 text-destructive hover:bg-destructive/20 dark:hover:bg-destructive/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            placeholder="https://linkedin.com/in/johndoe"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1.5">Portfolio / GitHub</label>
          <input
            type="url"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="https://github.com/johndoe"
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">Cover Letter</label>
        <textarea
          name="coverLetter"
          rows={4}
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Tell us why you'd be a great fit for CloudWent..."
          className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-y"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full shadow-md hover:opacity-90 transition" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
};