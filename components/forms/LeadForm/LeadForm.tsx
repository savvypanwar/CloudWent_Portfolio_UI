"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { Input } from "@/components/ui/Input/Input";
import { Textarea } from "@/components/ui/Textarea/Textarea";
import { Select } from "@/components/ui/Select/Select";

export const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    details: "",
    source: "",
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert("Thank you! We'll be in touch within 24 hours.");
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      details: "",
      source: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Inc."
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Service Interested In <span className="text-red-500">*</span>
        </label>
        <Select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">Select a service</option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile Applications</option>
          <option value="lms">LMS Development</option>
          <option value="saas">SaaS Development</option>
          <option value="ai">AI Solutions</option>
          <option value="cloud">Cloud & DevOps</option>
        </Select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
          Budget Range
        </label>
        <Select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
        >
          <option value="">Select a budget range</option>
          <option value="<10k">Under $10,000</option>
          <option value="10-25k">$10,000 - $25,000</option>
          <option value="25-50k">$25,000 - $50,000</option>
          <option value="50-100k">$50,000 - $100,000</option>
          <option value=">100k">$100,000+</option>
        </Select>
      </div>

      <div>
        <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
          Project Details <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="details"
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us about your project requirements..."
          rows={4}
          required
        />
      </div>

      <div>
        <label htmlFor="source" className="block text-sm font-medium text-gray-700 mb-1">
          How Did You Hear About Us?
        </label>
        <Select
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
        >
          <option value="">Select a source</option>
          <option value="google">Google Search</option>
          <option value="linkedin">LinkedIn</option>
          <option value="referral">Referral</option>
          <option value="social">Social Media</option>
          <option value="event">Event / Conference</option>
          <option value="other">Other</option>
        </Select>
      </div>

      <Button type="submit" variant="gradient" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Get a Free Consultation"}
      </Button>
    </form>
  );
};