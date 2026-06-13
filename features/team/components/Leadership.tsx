"use client";

import { CiLinkedin , CiTwitter  } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/animations";

export const Leadership = () => {
  const leaders = [
    {
      name: "Waseem Ahmad",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/300?img=11",
      bio: "15+ years of experience in tech leadership and enterprise architecture.",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Aamila Khan",
      role: "CTO",
      image: "https://i.pravatar.cc/300?img=5",
      bio: "Expert in distributed systems, cloud architecture, and AI technologies.",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Usman Tariq",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=13",
      bio: "Full-stack expert with a passion for clean code and performance optimization.",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sarah Ahmed",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=9",
      bio: "Award-winning designer focused on user-centered design and accessibility.",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Bilal Ahmed",
      role: "DevOps Engineer",
      image: "https://i.pravatar.cc/300?img=15",
      bio: "Specialist in CI/CD pipelines, containerization, and cloud infrastructure.",
      socials: { linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {leaders.map((leader, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.05}>
            <div className="group p-4 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center bg-white">
              <div className="relative mb-4 mx-auto w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  width={128}
                  height={128}
                  className="rounded-full w-full h-full object-cover border-4 border-white shadow-lg relative z-10"
                />
              </div>
              <h3 className="text-gray-900 font-semibold text-lg">{leader.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-1">{leader.role}</p>
              <p className="text-gray-500 text-xs mb-3 px-2">{leader.bio}</p>
              <div className="flex justify-center gap-3">
                <Link href={leader.socials.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <CiLinkedin className="h-4 w-4" />
                </Link>
                <Link href={leader.socials.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <CiTwitter className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </StaggerContainer>
  );
};