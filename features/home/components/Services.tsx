"use client";

import { Code, Layers, Shield, Smartphone, Brain, Server } from "lucide-react";
import Link from "next/link";
import { FadeIn, StaggerContainer, SlideUp } from "@/components/animations";

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      desc: "Modern web apps, responsive design, and seamless user experiences.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: Layers,
      title: "LMS Development",
      desc: "Fully-featured e-Learning platforms with interactive courses and assessments.",
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "SaaS Development",
      desc: "Scalable SaaS products to streamline business operations and drive growth.",
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      icon: Smartphone,
      title: "Mobile Applications",
      desc: "Cross-platform mobile apps with intuitive interfaces and native performance.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: Brain,
      title: "AI Solutions",
      desc: "AI-powered solutions to automate processes, gain insights, and drive innovation.",
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      icon: Server,
      title: "Cloud & DevOps",
      desc: "Secure cloud architectures with CI/CD pipelines and comprehensive monitoring.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <SlideUp>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
                Our Services
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                End-to-end Solutions<br />For Every Need
              </h2>
            </SlideUp>
          </div>
          <SlideUp>
            <Link
              href="/services"
              className="text-blue-600 font-medium hover:underline hidden sm:block"
            >
              View all services →
            </Link>
          </SlideUp>
        </div>

        <StaggerContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <FadeIn
                key={i}
                direction="up"
                delay={i * 0.05}
                className="group p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div
                  className={`h-12 w-12 rounded-xl ${s.bg} ${s.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="text-blue-600">→</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </StaggerContainer>

        <div className="mt-8 text-center sm:hidden">
          <Link href="/services" className="text-blue-600 font-medium hover:underline">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
};