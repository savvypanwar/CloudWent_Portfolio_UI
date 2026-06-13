"use client";

import { ImLinkedin } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/animations";
import { ArrowRight } from "lucide-react";

export const TeamPreview = () => {
  const teamMembers = [
    {
      name: "Waseem Ahmad",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/300?img=11",
    },
    {
      name: "Aamila Khan",
      role: "CTO",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "Usman Tariq",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      name: "Sarah Ahmed",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=9",
    },
  ];

  return (
    <div>
      <StaggerContainer>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <FadeIn key={i} direction="up" delay={i * 0.05}>
              <div className="group text-center">
                <div className="relative mb-3 mx-auto w-28 h-28">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="rounded-full w-full h-full object-cover border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-gray-900 font-semibold">{member.name}</h3>
                <p className="text-blue-600 text-sm font-medium">{member.role}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </StaggerContainer>
      
      <div className="mt-10 text-center">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          Meet the full team <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};