import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Mail, Pencil, Users } from "lucide-react";

import { Button } from "@/components/ui/Button/Button";
import { getTeamMemberByIdentifier } from "@/lib/team";

type TeamMemberDetailsPageProps = {
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

function ListBlock({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h2 className="text-sm font-semibold text-foreground mb-3">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default async function TeamMemberDetailsPage({
  params,
}: TeamMemberDetailsPageProps) {
  const { id } = await params;
  const member = await getTeamMemberByIdentifier(id);

  if (!member) {
    notFound();
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="space-y-2">
          <Link
            href="/myteam"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Team
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{member.name}</h1>
            <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
          </div>
        </div>
        <Button asChild variant="primary" size="sm" className="glass-effect shadow-md">
          <Link href={`/myteam/${member.id}/edit`}>
            <Pencil className="w-4 h-4 mr-2" /> Edit Member
          </Link>
        </Button>
      </div>

      <div className="glass-effect border-border rounded-2xl p-6 md:p-8 space-y-8">
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-muted">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center text-primary-foreground font-bold text-lg`}>
                  {member.initials}
                </div>
              )}
            </div>
            <div>
              <p className="font-semibold text-foreground">{member.name}</p>
              <p className="text-sm text-muted-foreground">{member.email || "No email added"}</p>
            </div>
          </div>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
            <Users className="w-3.5 h-3.5 mr-1" />
            {member.team.charAt(0).toUpperCase() + member.team.slice(1)}
          </span>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DetailItem label="Slug" value={member.slug} />
          <DetailItem label="Role" value={member.role} />
          <DetailItem label="Location" value={member.location} />
          <DetailItem label="Experience" value={member.experience} />
          <DetailItem label="Email" value={member.email} />
          <DetailItem label="Order" value={String(member.order)} />
        </dl>

        <div>
          <h2 className="text-sm font-semibold text-foreground mb-3">Bio</h2>
          <div className="rounded-2xl border border-border bg-surface p-5 text-sm text-foreground whitespace-pre-wrap">
            {member.bio || "No bio added."}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListBlock title="Expertise" items={member.expertise} />
          <ListBlock title="Skills" items={member.skills} />
          <ListBlock title="Certifications" items={member.certifications} />
        </div>

        <div className="flex flex-wrap gap-3 border-t border-border pt-6">
          {member.email && (
            <Button asChild variant="outline" size="sm">
              <a href={`mailto:${member.email}`}>
                <Mail className="w-4 h-4 mr-2" /> Email
              </a>
            </Button>
          )}
          {member.linkedin && (
            <Button asChild variant="outline" size="sm">
              <a href={member.linkedin} target="_blank" rel="noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> LinkedIn
              </a>
            </Button>
          )}
          {member.github && (
            <Button asChild variant="outline" size="sm">
              <a href={member.github} target="_blank" rel="noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" /> GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
