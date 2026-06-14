"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Cloud } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub, FiYoutube } from "react-icons/fi";

const Logo = () => (
  <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
    <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
      <Cloud className="w-5 h-5" strokeWidth={2.5} />
    </span>
    <span className="text-slate-900 dark:text-white transition-colors">
      Cloud<span className="text-primary">Went</span>
    </span>
  </Link>
);

export const Footer = () => {
  const cols = [
    { title: "COMPANY", links: ["About Us", "Careers", "Our Team", "Contact"] },
    { title: "SERVICES", links: ["Web Development", "LMS Development", "SaaS Development", "AI Solutions", "Cloud & DevOps", "Mobile Apps"] },
    { title: "RESOURCES", links: ["Blog", "Case Studies", "Documentation", "FAQs"] },
  ];

  return (
    <footer className="bg-slate-100 dark:bg-[#0B101B] transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <Logo />
          <p className="text-sm text-slate-600 dark:text-white/60 mt-4 max-w-xs leading-relaxed transition-colors">
            We build scalable web applications, LMS platforms, SaaS products, and AI solutions for ambitious businesses.
          </p>
          <div className="flex gap-3 mt-5 text-slate-600 dark:text-white/60 transition-colors">
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border border-slate-300 dark:border-white/15 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition">
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border border-slate-300 dark:border-white/15 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border border-slate-300 dark:border-white/15 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border border-slate-300 dark:border-white/15 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border border-slate-300 dark:border-white/15 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition">
              <FiYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column Links */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold tracking-[0.2em] text-slate-800 dark:text-white/80 mb-4 transition-colors">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-slate-600 dark:text-white/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-slate-800 dark:text-white/80 mb-4 transition-colors">
            CONTACT US
          </h4>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-white/70 transition-colors">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>hello@cloudwent.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>New York, USA</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-300 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600 dark:text-white/50 transition-colors">
          <p>© 2026 CloudWent. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};