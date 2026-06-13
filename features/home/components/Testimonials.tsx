"use client";

import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { FadeIn, SlideUp } from "@/components/animations";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "James Carter",
      role: "CEO, EduSmart",
      quote:
        "CloudWent transformed our idea into a powerful platform. Their technical expertise and commitment to quality were exceptional.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Operations, LearnHub",
      quote:
        "Working with CloudWent was a game-changer. They delivered a robust LMS that exceeded our expectations on every level.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Michael Brown",
      role: "CEO, FinTech Solutions",
      quote:
        "The team at CloudWent is incredibly professional and talented. They built our entire fintech platform from scratch with flawless execution.",
      rating: 5,
      image: "https://i.pravatar.cc/150?img=12",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6 lg:px-8">
        <SlideUp>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              What Our Clients Say
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
              Trusted by Businesses<br />That Demand Excellence
            </h2>
          </div>
        </SlideUp>

        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-blue-100">
                <Quote className="h-16 w-16" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="h-14 w-14 rounded-full border-2 border-white shadow-sm overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-end gap-2 mt-6 pt-6 border-t border-gray-100">
                <button
                  onClick={handlePrev}
                  className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={handleNext}
                  className="h-10 w-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};