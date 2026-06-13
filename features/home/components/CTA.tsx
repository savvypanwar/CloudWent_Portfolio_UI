"use client";

import { Button } from "@/components/ui/Button/Button";
import { ArrowRight } from "lucide-react";
import { FadeIn, SlideUp } from "@/components/animations";
import Link from "next/link";

export const CTA = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700"></div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
          </FadeIn>
          <SlideUp delay={0.2}>
            <p className="text-blue-100 text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
              Let's turn your vision into reality. Book a free consultation and
              let's discuss how we can help your business grow.
            </p>
          </SlideUp>
          <SlideUp delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="gradient" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl shadow-blue-900/30">
                  Book a Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
};