import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Pencil, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

type UserDetailsPageProps = {
  params: Promise<{ id: string }>;
};

function DetailItem({
  label,
  value,
}: {
  label: string;
  value?: string | null;
}) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-foreground break-words">{value || "-"}</dd>
    </div>
  );
}

export default async function UserDetailsPage({ params }: UserDetailsPageProps) {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    notFound();
  }

  const roleColors: Record<string, string> = {
    admin: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
    hr: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-primary",
    employee: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    user: "bg-surface text-foreground dark:bg-gray-900/30 dark:text-gray-300",
    super_admin: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  };

  const statusColors: Record<string, string> = {
    ACTIVE: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
    PENDING_EMAIL_VERIFY: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    SUSPENDED: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    BLOCKED: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  };

  const roleKey = (user.role as string).toLowerCase();

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-2">
          <Link
            href="/users"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Users
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{user.name || user.email}</h1>
            <p className="text-sm text-muted-foreground mt-1">{user.email}</p>
          </div>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href={`/users/${user.id}/edit`}>
            <Pencil className="w-4 h-4 mr-2" /> Edit User
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl p-6 md:p-8 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-primary-foreground">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{user.name || "Unnamed user"}</p>
              <p className="text-sm text-muted-foreground">
                Created {new Date(user.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${roleColors[roleKey] || roleColors.user}`}>
              {user.role}
            </span>
            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[user.status] || statusColors.ACTIVE}`}>
              {user.status}
            </span>
          </div>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailItem label="Name" value={user.name} />
          <DetailItem label="Email" value={user.email} />
          <DetailItem label="Phone" value={user.phone} />
          <DetailItem label="Auth Provider" value={user.authProvider} />
          <DetailItem label="Email Verified" value={user.emailVerified ? "Yes" : "No"} />
          <DetailItem label="Last Login" value={user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleString() : "Never"} />
          <DetailItem label="Last Seen" value={user.lastSeenAt ? new Date(user.lastSeenAt).toLocaleString() : "Never"} />
          <DetailItem label="Updated" value={new Date(user.updatedAt).toLocaleString()} />
        </dl>

        <div className="flex flex-wrap gap-3 border-t border-border pt-6">
          <Button asChild variant="outline" size="sm">
            <a href={`mailto:${user.email}`}>
              <Mail className="w-4 h-4 mr-2" /> Email
            </a>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/roles-permissions">
              <ShieldCheck className="w-4 h-4 mr-2" /> Roles
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
