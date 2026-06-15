"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Crown } from "lucide-react";
import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";

interface TeamSectionProps {
  label: string;
  subtitle: string;
  members: any[];
  viewAllLink?: string;
}

export const TeamSection = ({ label, subtitle, members, viewAllLink = "#" }: TeamSectionProps) => {
  return (
    <section className="py-16 bg-white dark:bg-[#0B101B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <Crown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{label}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
            </div>
          </div>
          <Link
            href={viewAllLink}
            className="hidden lg:inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map(({ name, role, image, initials, color }) => (
            <Link
              key={name}
              href={`/team/${name.toLowerCase().replace(/ /g, "-")}`}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md hover:border-blue-100 dark:hover:border-blue-500/50 transition-all text-center"
            >
              {/* Photo */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <span className="text-white text-2xl font-bold">{initials}</span>
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <a href="#" className="w-8 h-8 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-slate-600 dark:text-slate-400 rounded-lg flex items-center justify-center transition-all">
                  <FiLinkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-slate-600 dark:text-slate-400 rounded-lg flex items-center justify-center transition-all">
                  <FiTwitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-100 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white text-slate-600 dark:text-slate-400 rounded-lg flex items-center justify-center transition-all">
                  <FiGithub className="w-4 h-4" />
                </a>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-6 text-center lg:hidden">
          <Link
            href={viewAllLink}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            View all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};