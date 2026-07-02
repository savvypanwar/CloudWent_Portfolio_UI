import type { Metadata } from "next";

const siteUrl = "https://tech.cloudwent.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "CloudWent Tech | Cloud, AI, DevOps & Software Solutions",
    template: "%s | CloudWent Tech",
  },

  description:
    "CloudWent Tech provides enterprise-grade cloud solutions, DevOps services, server management, AI automation, cybersecurity, web development, mobile app development, cloud migration, digital transformation, and custom software development for startups, businesses, and enterprises worldwide.",

  applicationName: "CloudWent Tech",

  keywords: [
    "CloudWent",
    "CloudWent Tech",
    "Cloud Solutions",
    "Cloud Infrastructure",
    "Cloud Migration",
    "Cloud Consulting",
    "Managed Cloud Services",
    "Cloud Hosting",
    "Enterprise Cloud Solutions",
    "Server Management",
    "Linux Server Management",
    "Windows Server Management",
    "Dedicated Server Management",
    "VPS Management",
    "Infrastructure Management",
    "DevOps",
    "DevOps Services",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Infrastructure as Code",
    "AWS",
    "Amazon Web Services",
    "Microsoft Azure",
    "Google Cloud Platform",
    "GCP",
    "DigitalOcean",
    "Cybersecurity",
    "Network Security",
    "Cloud Security",
    "IT Security",
    "Security Audits",
    "Software Development",
    "Custom Software Development",
    "Enterprise Software",
    "Business Applications",
    "SaaS Development",
    "CRM Development",
    "ERP Development",
    "Web Development",
    "Website Development",
    "React Development",
    "Next.js Development",
    "Node.js Development",
    "TypeScript Development",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development",
    "Mobile App Development",
    "Android App Development",
    "iOS App Development",
    "Cross Platform Apps",
    "Flutter Development",
    "React Native Development",
    "Artificial Intelligence",
    "AI Development",
    "Machine Learning",
    "AI Automation",
    "Generative AI",
    "Chatbot Development",
    "Business Automation",
    "Technology Consulting",
    "IT Consulting",
    "Digital Transformation",
    "Startup Technology Partner",
    "Enterprise Technology Solutions",
  ],

  authors: [
    {
      name: "CloudWent Tech",
      url: siteUrl,
    },
  ],

  creator: "CloudWent Tech",
  publisher: "CloudWent Tech",
  category: "Technology",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "CloudWent Tech",
    title: "CloudWent Tech | Cloud, AI, DevOps & Software Solutions",
    description:
      "CloudWent Tech delivers cloud infrastructure, DevOps, AI automation, server management, cybersecurity, web applications, mobile apps, and enterprise software solutions.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "CloudWent Tech",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CloudWent Tech | Cloud, AI, DevOps & Software Solutions",
    description:
      "Cloud infrastructure, DevOps, AI automation, server management, cybersecurity, web development, mobile applications, and enterprise software solutions.",
    images: [`${siteUrl}/og-image.jpg`],
  },

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
  },
};