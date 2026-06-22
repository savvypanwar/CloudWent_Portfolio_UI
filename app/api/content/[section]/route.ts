import { getSiteContent, siteContent, type SiteContentSection } from "@/lib/site-content";

export async function GET(_request: Request, context: RouteContext<"/api/content/[section]">) {
  const { section } = await context.params;
  const contentSection = section as SiteContentSection;

  if (!(contentSection in siteContent)) {
    return Response.json({ error: "Content section not found" }, { status: 404 });
  }

  return Response.json(getSiteContent(contentSection));
}
