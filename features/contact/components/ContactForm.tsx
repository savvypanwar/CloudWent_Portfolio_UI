"use client";

import { useState } from "react";
import { z } from "zod";
import { ArrowRight, Lock } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

export const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = contactSchema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) fieldErrors[issue.path[0] as string] = issue.message;
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    e.currentTarget.reset();
  }

  const inputCls = "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <section id="form" className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-card border border-border rounded-3xl shadow-card p-8 md:p-10">
          <h2 className="text-3xl font-extrabold text-dark">Get In Touch</h2>
          <p className="text-sm text-muted-foreground mt-2">Fill out the form and our team will get back to you shortly.</p>
          {submitted && (
            <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-3 text-sm">
              Thanks! Your message has been received. We'll be in touch within 24h.
            </div>
          )}
          <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4" noValidate>
            <div>
              <input name="name" placeholder="Your Name" className={inputCls} maxLength={100} />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <input name="email" type="email" placeholder="Your Email" className={inputCls} maxLength={255} />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <input name="company" placeholder="Company Name" className={inputCls} maxLength={120} />
            <input name="phone" placeholder="Phone Number" className={inputCls} maxLength={30} />
            <div className="sm:col-span-2">
              <select name="service" defaultValue="" className={inputCls}>
                <option value="" disabled>Select a Service</option>
                <option>Web Development</option>
                <option>LMS Development</option>
                <option>SaaS Development</option>
                <option>Mobile Applications</option>
                <option>AI Solutions</option>
                <option>Cloud & DevOps</option>
              </select>
              {errors.service && <p className="text-xs text-destructive mt-1">{errors.service}</p>}
            </div>
            <div className="sm:col-span-2">
              <textarea name="message" rows={5} placeholder="Tell us about your project..." className={inputCls} maxLength={1000} />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:opacity-95 transition">
              Send Message <ArrowRight className="w-4 h-4" />
            </button>
            <p className="sm:col-span-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="w-3 h-3" /> We respect your privacy. Your information is safe with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};