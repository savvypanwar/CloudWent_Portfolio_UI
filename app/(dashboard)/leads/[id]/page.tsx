import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Mail, Pencil } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { prisma } from "@/lib/prisma/prisma";

type LeadDetailsPageProps = {
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

export default async function LeadDetailsPage({ params }: LeadDetailsPageProps) {
  const { id } = await params;
  const lead = await prisma.contact.findUnique({ where: { id } });

  if (!lead) {
    notFound();
  }

  const statusColors: Record<string, string> = {
    new: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
    read: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-primary",
    replied: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-2">
          <Link
            href="/leads"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Contact
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{lead.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">{lead.subject}</p>
          </div>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href={`/leads/${lead.id}/edit`}>
            <Pencil className="w-4 h-4 mr-2" /> Edit Lead
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl p-6 md:p-8 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-primary-foreground">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-foreground">{lead.email}</p>
              <p className="text-sm text-muted-foreground">
                Received {new Date(lead.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[lead.status] || statusColors.new}`}>
            {lead.status}
          </span>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailItem label="Name" value={lead.name} />
          <DetailItem label="Email" value={lead.email} />
          <DetailItem label="Subject" value={lead.subject} />
          <DetailItem label="Updated" value={new Date(lead.updatedAt).toLocaleString()} />
        </dl>

        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">Message</h2>
          <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-foreground whitespace-pre-wrap">
            {lead.message}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t border-border pt-6">
          <Button asChild variant="outline" size="sm">
            <a href={`mailto:${lead.email}`}>
              <Mail className="w-4 h-4 mr-2" /> Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
