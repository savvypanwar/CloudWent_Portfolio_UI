import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub, FiYoutube } from "react-icons/fi";
import Logo from "@/components/common/Logo/Logo"; // ✅ Import shared Logo component

export const Footer = () => {
  const cols = [
    { title: "COMPANY", links: ["About Us", "Careers", "Our Team", "Contact"] },
    { title: "SERVICES", links: ["Web Development", "LMS Development", "SaaS Development", "AI Solutions", "Cloud & DevOps", "Mobile Apps"] },
    { title: "RESOURCES", links: ["Blog", "Case Studies", "Documentation", "FAQs"] },
  ];

  return (
    <footer className="bg-background dark:bg-dark transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2">
          <Logo /> {/* ✅ Bilkul Navbar jaisa logo */}
          <p className="text-sm text-muted-foreground mt-4 max-w-xs leading-relaxed">
            We build scalable web applications, LMS platforms, SaaS products, and AI solutions for ambitious businesses.
          </p>
          <div className="flex gap-3 mt-5 text-muted-foreground">
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border-border hover:bg-muted hover:text-foreground transition">
              <FiLinkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border-border hover:bg-muted hover:text-foreground transition">
              <FiTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border-border hover:bg-muted hover:text-foreground transition">
              <FiGithub className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border-border hover:bg-muted hover:text-foreground transition">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 grid place-items-center rounded-full border-border hover:bg-muted hover:text-foreground transition">
              <FiYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column Links */}
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-xs font-bold tracking-[0.2em] text-foreground/80 mb-4">
              {col.title}
            </h4>
            <ul className="space-y-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact Column */}
        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] text-foreground/80 mb-4">
            CONTACT US
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>info@cloudwent.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91 7489828908</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>BHOPAL Madhya Pradesh (India)</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 CloudWent. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};