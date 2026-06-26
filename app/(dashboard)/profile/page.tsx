import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma/prisma";
import { UserCog, Mail, ShieldCheck, Calendar } from "lucide-react";

export default async function ProfilePage() {
  const { user } = await auth();

  if (!user) {
    redirect("/login");
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: user.id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      phone: true,
      avatar: true,
      lastLoginAt: true,
      createdAt: true,
    },
  });

  if (!dbUser) {
    redirect("/login");
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">
          View and manage your personal information.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-effect border-border rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold">
              {dbUser.name?.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground">{dbUser.name || "User"}</h2>
              <p className="text-sm text-muted-foreground">{dbUser.role}</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">{dbUser.email}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <ShieldCheck className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">Status: {dbUser.status}</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground">Joined: {new Date(dbUser.createdAt).toLocaleDateString()}</span>
            </div>
            {dbUser.lastLoginAt && (
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Last login: {new Date(dbUser.lastLoginAt).toLocaleDateString()}</span>
              </div>
            )}
            {dbUser.phone && (
              <div className="flex items-center gap-3 text-sm">
                <UserCog className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Phone: {dbUser.phone}</span>
              </div>
            )}
          </div>
        </div>

        <div className="glass-effect border-border rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Account Settings</h3>
          <p className="text-sm text-muted-foreground">
            Profile editing functionality coming soon. Contact your administrator for account changes.
          </p>
        </div>
      </div>
    </div>
  );
}
