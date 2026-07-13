import type { Metadata } from "next";

const siteUrl = "https://tech.cloudwent.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "CloudWent Tech | Software Development, Web Development, AI & Cloud Solutions",
    template: "%s | CloudWent Tech",
  },

  description:
    "CloudWent Tech is a leading software development company in India offering custom software development, website development, web application development, mobile app development, cloud solutions, DevOps, AI automation, cybersecurity, SaaS development, enterprise software, cloud migration, UI/UX design, and digital transformation services for startups, SMEs, and enterprises worldwide.",

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

    // Software Company
    "Software Company India",
    "Software Development Company",
    "Custom Software Development",
    "Enterprise Software Development",
    "Business Software Development",
    "Software Development Services",
    "Software Development Agency",
    "Software Engineering Company",
    "Best Software Company India",
    "IT Company India",

    // Website Development
    "Website Development Company",
    "Website Development Agency",
    "Website Design Company",
    "Website Designer",
    "Professional Website Development",
    "Responsive Website Development",
    "Corporate Website Development",
    "Business Website Development",
    "Custom Website Development",
    "Ecommerce Website Development",
    "Landing Page Development",

    // Web Development
    "Web Development Company",
    "Web Development Agency",
    "Web Application Development",
    "Web App Development",
    "Custom Web Development",
    "Frontend Development Company",
    "Backend Development Company",
    "Full Stack Development Company",
    "Next.js Agency",
    "React Development Company",
    "Node.js Development Company",

    // Mobile App Development
    "Mobile App Development Company",
    "App Development Company",
    "Android App Development Company",
    "iOS App Development Company",
    "Cross Platform App Development",
    "Flutter App Development",
    "React Native Development Company",
    "Mobile Application Development Agency",
    "Custom Mobile App Development",

    // SaaS
    "SaaS Development Company",
    "SaaS Application Development",
    "SaaS Software Development",
    "Cloud SaaS Development",

    // Cloud
    "Cloud Computing Company",
    "AWS Consulting",
    "Azure Consulting",
    "Google Cloud Consulting",
    "Cloud Infrastructure Services",
    "Cloud Hosting Solutions",
    "Cloud Architecture",
    "Cloud Engineering",

    // DevOps
    "DevOps Consulting",
    "DevOps Company",
    "CI CD Pipeline",
    "Docker Services",
    "Kubernetes Consulting",
    "Terraform Development",
    "Platform Engineering",

    // AI
    "AI Development Company",
    "Artificial Intelligence Company",
    "Generative AI Development",
    "AI Chatbot Development",
    "AI Automation Company",
    "Machine Learning Development",
    "LLM Development",
    "OpenAI Integration",

    // Enterprise
    "Digital Transformation Company",
    "Enterprise Application Development",
    "Business Automation",
    "Workflow Automation",
    "ERP Software Development",
    "CRM Software Development",

    // Cybersecurity
    "Cyber Security Company",
    "Cloud Security Services",
    "Server Security",
    "Network Security",
    "Security Consulting",

    // SEO Intent
    "Best Software Development Company India",
    "Top Software Company India",
    "Best Web Development Company",
    "Best Website Development Company",
    "Top App Development Company",
    "Software Company Near Me",
    "Hire Web Developers",
    "Hire Software Developers",
    "Hire React Developers",
    "Hire Next.js Developers",
    "Hire Node.js Developers",
    "Hire Full Stack Developers",
    "Dedicated Development Team",
    "Remote Development Team",

    // Branding
    "CloudWent Software",
    "CloudWent Technologies",
    "CloudWent Development",
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

  classification: "Business",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  manifest: "/site.webmanifest",

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  appleWebApp: {
    capable: true,
    title: "CloudWent Tech",
    statusBarStyle: "default",
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
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
    countryName: "India",

    url: siteUrl,

    siteName: "CloudWent Tech",

    title:
      "CloudWent Tech | Software Development Company in India | Web, Mobile, AI & Cloud Solutions",

    description:
      "CloudWent Tech is a leading software development company in India specializing in custom software development, website development, mobile app development, AI solutions, cloud infrastructure, DevOps, cybersecurity, SaaS development, and enterprise digital transformation.",

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

    creator: "@cloudwent", // Replace with your X username

    site: "@cloudwent", // Replace with your X username

    title: "CloudWent Tech | Software Development Company in India",

    description:
      "Custom software development, web development, mobile apps, AI, cloud solutions, DevOps, cybersecurity and enterprise software services.",

    images: [`${siteUrl}/og-image.jpg`],
  },

  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",

    // Optional
    // bing: "YOUR_BING_VERIFICATION_CODE",
    // yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/icon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
      },
    ],
  },
};
