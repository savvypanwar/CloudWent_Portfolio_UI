"use client";

import { CiLinkedin, CiTwitter  } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer } from "@/components/animations";

export const TeamGrid = () => {
  const teamMembers = [
    {
      name: "Ahmed Hassan",
      role: "Frontend Developer",
      image: "https://i.pravatar.cc/300?img=1",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Fatima Ali",
      role: "Backend Developer",
      image: "https://i.pravatar.cc/300?img=2",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Omar Malik",
      role: "UI/UX Designer",
      image: "https://i.pravatar.cc/300?img=3",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Zara Khan",
      role: "Data Analyst",
      image: "https://i.pravatar.cc/300?img=4",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Rizwan Ahmed",
      role: "Project Manager",
      image: "https://i.pravatar.cc/300?img=6",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sana Tariq",
      role: "QA Engineer",
      image: "https://i.pravatar.cc/300?img=7",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Imran Raza",
      role: "Cloud Architect",
      image: "https://i.pravatar.cc/300?img=8",
      socials: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Nadia Shah",
      role: "AI/ML Engineer",
      image: "https://i.pravatar.cc/300?img=10",
      socials: { linkedin: "#", twitter: "#" },
    },
  ];

  return (
    <StaggerContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.03}>
            <div className="group p-4 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300 text-center bg-white">
              <div className="relative mb-3 mx-auto w-24 h-24">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="rounded-full w-full h-full object-cover border-2 border-gray-100"
                />
              </div>
              <h3 className="text-gray-900 font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
              <div className="flex justify-center gap-2 mt-2">
                <Link href={member.socials.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                  <CiLinkedin className="h-3.5 w-3.5" />
                </Link>
                <Link href={member.socials.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                  <CiTwitter className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </StaggerContainer>
  );
};