import { prisma } from "@/lib/prisma/prisma";

export const dynamic = "force-dynamic";

export default async function AnalyticsPage() {
  const counts = {
    totalUsers: await prisma.user.count(),
    totalProjects: await prisma.project.count(),
    totalBlogPosts: await prisma.blogPost.count(),
    totalServices: await prisma.service.count(),
    totalTeamMembers: await prisma.teamMember.count(),
    totalTestimonials: await prisma.testimonial.count(),
    totalApplications: await prisma.application.count(),
    totalLeads: await prisma.contact.count(),
    totalSubscribers: await (prisma as any).newsletterSubscriber.count(),
    totalTechnologies: await (prisma as any).technology.count(),
    totalCareers: await prisma.jobOpening.count(),
  };

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

  const statCards = [
    { label: "Total Users", value: counts.totalUsers, color: "from-blue-500 to-indigo-600" },
    { label: "Projects", value: counts.totalProjects, color: "from-violet-500 to-purple-600" },
    { label: "Blog Posts", value: counts.totalBlogPosts, color: "from-orange-500 to-amber-600" },
    { label: "Services", value: counts.totalServices, color: "from-cyan-500 to-blue-600" },
    { label: "Team Members", value: counts.totalTeamMembers, color: "from-emerald-500 to-teal-600" },
    { label: "Testimonials", value: counts.totalTestimonials, color: "from-pink-500 to-rose-600" },
    { label: "Applications", value: counts.totalApplications, color: "from-amber-500 to-yellow-600" },
    { label: "Leads", value: counts.totalLeads, color: "from-red-500 to-rose-600" },
    { label: "Subscribers", value: counts.totalSubscribers, color: "from-green-500 to-emerald-600" },
    { label: "Technologies", value: counts.totalTechnologies, color: "from-sky-500 to-blue-600" },
    { label: "Careers", value: counts.totalCareers, color: "from-fuchsia-500 to-purple-600" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of all platform metrics and recent activity.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {statCards.map((card) => (
          <div key={card.label} className="glass-effect border-border rounded-2xl p-5">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-3`}>
              <span className="text-lg font-bold">{card.value}</span>
            </div>
            <p className="text-sm text-muted-foreground">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-effect border-border rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Users</h3>
          <div className="space-y-3">
            {recentUsers.length === 0 ? (
              <p className="text-sm text-muted-foreground">No users yet.</p>
            ) : (
              recentUsers.map((u) => (
                <div key={u.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-foreground font-medium">{u.name || "—"}</p>
                    <p className="text-muted-foreground text-xs">{u.email}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{new Date(u.createdAt).toLocaleDateString()}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="glass-effect border-border rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Contacts</h3>
          <div className="space-y-3">
            {recentContacts.length === 0 ? (
              <p className="text-sm text-muted-foreground">No contacts yet.</p>
            ) : (
              recentContacts.map((c) => (
                <div key={c.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-foreground font-medium">{c.name}</p>
                    <p className="text-muted-foreground text-xs truncate max-w-[180px]">{c.subject}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{new Date(c.createdAt).toLocaleDateString()}</span>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="glass-effect border-border rounded-2xl p-5">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Applications</h3>
          <div className="space-y-3">
            {recentApplications.length === 0 ? (
              <p className="text-sm text-muted-foreground">No applications yet.</p>
            ) : (
              recentApplications.map((a) => (
                <div key={a.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-foreground font-medium">{a.name}</p>
                    <p className="text-muted-foreground text-xs">{a.jobTitle || "—"}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{new Date(a.createdAt).toLocaleDateString()}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
