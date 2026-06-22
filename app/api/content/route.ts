import { getSiteContent } from "@/lib/site-content";

export function GET() {
  return Response.json(getSiteContent());
}
