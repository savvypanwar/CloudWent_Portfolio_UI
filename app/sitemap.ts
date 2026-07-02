import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cloudwent.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/blog",
    "/team",
    "/careers",
    "/contact",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));
}

function getPriority(route: string): number {
  switch (route) {
    case "":
      return 1.0;

    case "/services":
      return 0.9;

    case "/blog":
    case "/careers":
      return 0.8;

    case "/about":
    case "/team":
    case "/contact":
      return 0.7;

    default:
      return 0.6;
  }
}

function getChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  switch (route) {
    case "":
      return "daily";

    case "/blog":
      return "daily";

    case "/services":
    case "/careers":
      return "weekly";

    default:
      return "monthly";
  }
}