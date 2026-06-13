"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeIn, SlideUp, StaggerContainer } from "@/components/animations";

export const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to build a web application?",
      answer:
        "The timeline depends on the complexity of your project. A simple MVP can be delivered in 4-6 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "What technologies does CloudWent specialize in?",
      answer:
        "We specialize in modern technologies including Next.js, React, Node.js, TypeScript, AWS, Docker, PostgreSQL, and various cloud platforms. We always choose the best tech stack for your specific needs.",
    },
    {
      question: "How much does a typical project cost?",
      answer:
        "Our pricing depends on the scope and complexity of your project. We offer flexible pricing models including fixed-price, time-and-materials, and retainers. Contact us for a custom quote tailored to your needs.",
    },
    {
      question: "Do you offer ongoing support after launch?",
      answer:
        "Yes! We offer comprehensive post-launch support plans including maintenance, updates, hosting, and 24/7 monitoring. You can choose a plan that fits your ongoing needs.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "We use agile methodologies with weekly standups, sprint reviews, and regular status updates via Slack, Trello, or your preferred project management tool. You'll have full visibility into the development process.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <SlideUp>
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              FAQ
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
              Frequently Asked Questions
            </h2>
          </div>
        </SlideUp>

        <div className="max-w-3xl mx-auto">
          <StaggerContainer>
            {faqs.map((faq, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="border-b border-gray-200 last:border-0">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    {openIndex === i ? (
                      <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === i && (
                    <div className="pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};