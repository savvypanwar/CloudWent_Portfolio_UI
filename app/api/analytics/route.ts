import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma/prisma";
import { handleApiError } from "@/lib/api-utils";

export async function GET() {
  try {
    const [
      totalUsers,
      totalProjects,
      totalBlogPosts,
      totalServices,
      totalTeamMembers,
      totalTestimonials,
      totalApplications,
      totalLeads,
      totalSubscribers,
      totalTechnologies,
      totalCareers,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.project.count(),
      prisma.blogPost.count(),
      prisma.service.count(),
      prisma.teamMember.count(),
      prisma.testimonial.count(),
      prisma.application.count(),
      prisma.contact.count(),
      (prisma as any).newsletterSubscriber.count(),
      (prisma as any).technology.count(),
      (prisma as any).jobOpening.count(),
    ]);

    const recentUsers = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    const recentContacts = await prisma.contact.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, name: true, email: true, subject: true, createdAt: true },
    });

    const recentApplications = await prisma.application.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      select: { id: true, name: true, email: true, jobTitle: true, status: true, createdAt: true },
    });

    return NextResponse.json({
      counts: {
        totalUsers,
        totalProjects,
        totalBlogPosts,
        totalServices,
        totalTeamMembers,
        totalTestimonials,
        totalApplications,
        totalLeads,
        totalSubscribers,
        totalTechnologies,
        totalCareers,
      },
      recentUsers,
      recentContacts,
      recentApplications,
    });
  } catch (error) {
    return handleApiError(error);
  }
}
