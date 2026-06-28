"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Textarea } from "@/components/ui/Textarea/Textarea";
import { Select } from "@/components/ui/Select/Select";
import { Upload } from "lucide-react";

export const CareerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    linkedin: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFileName(file?.name || null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileInputRef.current?.files?.length) {
      alert("Please upload your resume.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Application submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
      linkedin: "",
    });
    setFileName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const positions = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "DevOps Engineer",
    "Project Manager",
    "QA Engineer",
    "Data Analyst",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          required
        />
      </div>

      <div>
        <label htmlFor="position" className="block text-sm font-medium text-foreground mb-1">
          Position Applying For <span className="text-red-500">*</span>
        </label>
        <Select
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        >
          <option value="">Select a position</option>
          {positions.map((pos) => (
            <option key={pos} value={pos}>
              {pos}
            </option>
          ))}
        </Select>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">
          Resume / CV <span className="text-red-500">*</span>
        </label>
        <div className="mt-1 flex items-center gap-4">
          <div className="relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".pdf,.doc,.docx,.txt"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <Button variant="outline" size="sm" type="button">
              <Upload className="h-4 w-4 mr-2" />
              Upload Resume
            </Button>
          </div>
          {fileName && (
            <span className="text-sm text-muted-foreground">{fileName}</span>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-1">Accepted: PDF, DOC, DOCX, TXT (Max 5MB)</p>
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-foreground mb-1">
          Cover Letter
        </label>
        <Textarea
          id="coverLetter"
          name="coverLetter"
          value={formData.coverLetter}
          onChange={handleChange}
          placeholder="Tell us why you'd be a great fit for CloudWent..."
          rows={4}
        />
      </div>

      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium text-foreground mb-1">
          LinkedIn Profile URL
        </label>
        <Input
          id="linkedin"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="https://linkedin.com/in/yourprofile"
        />
      </div>

      <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
};