"use client";

import { useState } from "react";
import { z } from "zod";
import {
  ArrowRight,
  Lock,
  Mail,
  Phone,
  MessageSquare,
  Building2
} from "lucide-react";

// Zod Schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().trim().max(50).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more (10+ chars)").max(1000),
});

export const ContactForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: parsed.data.name,
          email: parsed.data.email,
          company: parsed.data.company,
          phone: parsed.data.phone,
          service: parsed.data.service,
          budget: parsed.data.budget,
          subject: parsed.data.service,
          message: parsed.data.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrors({ general: data.error || "Failed to send message. Please try again." });
      }
    } catch {
      setErrors({ general: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Input classes with dark mode support
  const inputCls = "w-full bg-surface border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
  const labelCls = "block text-sm font-medium text-foreground mb-1.5";

  const others = [
    { icon: Mail, color: "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-primary", title: "Email Us", desc: "Drop us an email anytime.", action: "info.cloudwent@gmail.com" },
    { icon: Phone, color: "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", title: "Call Us", desc: "Mon – Fri, 9AM – 6PM (EST)", action: "+91 7489828908" },
    { icon: MessageSquare, color: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400", title: "Live Chat", desc: "Chat with our team instantly.", action: "Start Live Chat →" },
    { icon: Building2, color: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400", title: "Office", desc: "BHOPAL, Madhya Pradesh (India)" },
  ];

  return (
    <section id="form" className="pb-20">

      {/* ✅ Light Mode Gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,oklch(0.92_0.06_250)_0%,transparent_60%)] dark:hidden" />

      {/* ✅ Dark Mode Gradient */}
      <div className="absolute inset-0 -z-10 hidden dark:block bg-[radial-gradient(ellipse_at_top_right,oklch(0.15_0.05_250)_0%,transparent_60%)]" />
      <div className="max-w-7xl mx-auto">
        
        <div className="bg-card border border-border rounded-3xl shadow-card p-8 md:p-10 grid lg:grid-cols-[1.1fr_1fr] gap-10">
          <div>
            <h2 className="text-3xl font-extrabold text-foreground">Get In Touch</h2>
            <p className="text-sm text-muted-foreground mt-2">Fill out the form and our team will get back to you shortly.</p>
            {submitted && (
              <div className="mt-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-4 py-3 text-sm">
                Thanks! Your message has been received. We'll be in touch within 24h.
              </div>
            )}
            <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4" noValidate>
              <div>
                <label htmlFor="name" className={labelCls}>Your Name</label>
                <input id="name" name="name" placeholder="Your Name" className={inputCls} maxLength={100} />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className={labelCls}>Your Email</label>
                <input id="email" name="email" type="email" placeholder="Your Email" className={inputCls} maxLength={255} />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="company" className={labelCls}>Company Name</label>
                <input id="company" name="company" placeholder="Company Name" className={inputCls} maxLength={120} />
              </div>
              <div>
                <label htmlFor="phone" className={labelCls}>Phone Number</label>
                <input id="phone" name="phone" placeholder="Phone Number" className={inputCls} maxLength={30} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service" className={labelCls}>Service Needed</label>
                <select id="service" name="service" defaultValue="" className={inputCls}>
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
                <label htmlFor="budget" className={labelCls}>Project Budget Range</label>
                <select id="budget" name="budget" defaultValue="" className={inputCls}>
                  <option value="" disabled>Select a budget range</option>
                  <option value="Under $10K">Under ₹10K</option>
                  <option value="$10K - $25K">₹10K - ₹25K</option>
                  <option value="$25K - $50K">₹25K - ₹50K</option>
                  <option value="$50K - $100K">₹50K - ₹100K</option>
                  <option value="$100K+">₹100K+</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={labelCls}>Project Details</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." className={inputCls} maxLength={1000} />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button type="submit" disabled={isSubmitting} className="sm:col-span-2 inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground px-6 py-3.5 rounded-xl font-semibold shadow-glow hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed">
                {isSubmitting ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4" />
                </button>
              {errors.general && (
                <p className="sm:col-span-2 text-xs text-destructive text-center">{errors.general}</p>
              )}
              <p className="sm:col-span-2 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" /> We respect your privacy. Your information is safe with us.
              </p>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold text-foreground">Other Ways to Connect</h2>
            <p className="text-sm text-muted-foreground mt-2">Choose the way that works best for you.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {others.map(o => (
                <div key={o.title} className="bg-surface border border-border rounded-2xl p-5">
                  <div className={`w-11 h-11 rounded-xl grid place-items-center ${o.color}`}>
                    <o.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold mt-3 text-foreground">{o.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 whitespace-pre-line">{o.desc}</p>
                  {o.action && <p className="text-sm font-semibold text-primary mt-2">{o.action}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
