"use client";

import Link from "next/link";
import {
  Globe,
  Mail,
  Phone,
  MapPin,
  Zap
} from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#0B101B] text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">C</div>
              <span className="text-xl font-bold text-white tracking-tight">CLOUDWENT</span>
            </div>
            <p className="text-sm max-w-xs text-gray-400">
              CloudWent empowers businesses to transform ideas into powerful digital products with modern technologies, AI, and cloud solutions.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Mobile Apps</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">SaaS Development</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">Cloud & DevOps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>hello@cloudwent.com</li>
              <li>+1 (800) 123-4567</li>
              <li>123 Innovation Drive,</li>
              <li>New York, NY 10001, USA</li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Globe className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-gray-500 text-center flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} CloudWent. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};