export const homeContent = {
  heroStack: [
    { name: "Next.js", icon: "nextjs", alt: "Next.js", position: "top-4 left-2" },
    { name: "NestJS", icon: "nestjs", alt: "NestJS", position: "top-32 left-0" },
    { name: "AWS", icon: "aws", alt: "AWS", position: "top-4 right-2" },
    { name: "React.js", icon: "react", alt: "React.js", position: "top-32 right-0" },
    { name: "Docker", icon: "docker", alt: "Docker", position: "top-64 right-8" },
  ],
  technologies: [
    { name: "NEXT.", icon: "nextjs" },
    { name: "Tailwindcss", icon: "tailwind" },
    { name: "TypeScript", icon: "typescript" },
    { name: "", icon: "aws" },
    { name: "Docker", icon: "docker" },
    { name: "", icon: "vercel" },
  ],
  services: [
    { icon: "code", title: "Web Development", desc: "Modern, responsive and high-performance websites and web applications.", color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { icon: "graduation", title: "LMS Development", desc: "Feature-rich LMS platforms for education, training and corporate learning.", color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
    { icon: "cloud", title: "SaaS Development", desc: "Scalable SaaS products that help you grow your business globally.", color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
    { icon: "smartphone", title: "Mobile Applications", desc: "Cross-platform mobile apps that deliver exceptional user experiences.", color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400" },
    { icon: "sparkles", title: "AI Solutions", desc: "AI-powered solutions to automate processes and unlock new opportunities.", color: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400" },
    { icon: "cloud-cog", title: "Cloud & DevOps", desc: "Secure, reliable and cost-effective cloud solutions on AWS and beyond.", color: "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400" },
  ],
  stats: [
    { icon: "rocket", value: "50+", label: "Projects Delivered", iconColor: "text-teal-400", boxColor: "bg-teal-400/10", borderColor: "border-teal-400/20" },
    { icon: "users", value: "20+", label: "Happy Clients", iconColor: "text-blue-400", boxColor: "bg-blue-400/10", borderColor: "border-blue-400/20" },
    { icon: "shield", value: "99.9%", label: "Uptime & Reliability", iconColor: "text-yellow-400", boxColor: "bg-yellow-400/10", borderColor: "border-yellow-400/20" },
    { icon: "calendar", value: "5+", label: "Years of Experience", iconColor: "text-lime-400", boxColor: "bg-lime-400/10", borderColor: "border-lime-400/20" },
  ],
  benefits: [
    { icon: "zap", title: "Fast Delivery", desc: "We deliver projects on time, every time, with agile methodology." },
    { icon: "award", title: "Quality Assured", desc: "Rigorous testing and code reviews ensure the highest quality." },
    { icon: "users", title: "Client-First", desc: "Your success is our success. We prioritize your business goals." },
  ],
  process: [
    { icon: "search", number: "01", title: "Discover", desc: "We understand your business and goals", color: "text-blue-600" },
    { icon: "file-text", number: "02", title: "Plan", desc: "We analyze and create a strategy", color: "text-amber-600" },
    { icon: "pen-tool", number: "03", title: "Design", desc: "We design intuitive and engaging UI/UX", color: "text-emerald-600" },
    { icon: "code", number: "04", title: "Develop", desc: "We build with clean and scalable code", color: "text-purple-600" },
    { icon: "check-circle", number: "05", title: "Test", desc: "We ensure quality through rigorous testing", color: "text-pink-600" },
    { icon: "rocket", number: "06", title: "Launch", desc: "We deploy and support your long-term growth", color: "text-teal-600" },
  ],
  projects: [
    { id: 1, title: "EduSmart LMS", desc: "A comprehensive learning management system for modern education.", tag: "LMS Platform", tagColor: "bg-blue-500", image: "lms", stack: ["Next.js", "NestJS", "API Routes", "AWS"] },
    { id: 2, title: "CloudFinance", desc: "SaaS platform for financial management and analytics.", tag: "SaaS Product", tagColor: "bg-amber-500", image: "finance", stack: ["Next.js", "TypeScript", "API Routes", "AWS"] },
    { id: 3, title: "HealthCare+", desc: "Cross-platform mobile app for healthcare booking and patient management.", tag: "Mobile App", tagColor: "bg-emerald-500", image: "health", stack: ["React Native", "NestJS", "REST API"] },
  ],
  teamPreview: [
    { name: "Waseem Ahmad", role: "CEO & Founder", grad: "from-blue-300 to-blue-500", initials: "WA" },
    { name: "Ayesha Khan", role: "CTO", grad: "from-pink-300 to-rose-500", initials: "AK" },
    { name: "Usman Tariq", role: "Lead Developer", grad: "from-amber-300 to-orange-500", initials: "UT" },
    { name: "Sarah Ahmed", role: "UI/UX Designer", grad: "from-purple-300 to-fuchsia-500", initials: "SA" },
    { name: "Bilal Ashraf", role: "DevOps Engineer", grad: "from-emerald-300 to-teal-500", initials: "BA" },
  ],
  testimonials: [
    { quote: "CloudWent transformed our idea into a powerful platform. Their technical expertise and communication are exceptional.", name: "James Carter", role: "CTO, EduSmart" },
    { quote: "The team is professional, responsive and truly invested in our success. Highly recommended!", name: "Sarah Johnson", role: "Head of Operations, LearnHub" },
    { quote: "Reliable, innovative and a great partner for our digital journey. We're extremely satisfied.", name: "Michael Brown", role: "CEO, FinTrack" },
  ],
};

export const servicesContent = {
  services: homeContent.services.map((service, index) => ({
    ...service,
    bullets: [
      ["Next.js / TanStack", "SSR & SEO", "Headless CMS"],
      ["Courses & quizzes", "Live classes", "Reporting"],
      ["Multi-tenant", "Billing & auth", "Analytics"],
      ["React Native", "Offline first", "Push & analytics"],
      ["RAG pipelines", "Agentic flows", "Fine-tuning"],
      ["AWS / GCP / Azure", "Terraform", "Zero-downtime deploys"],
    ][index],
    iconColor: service.color.split(" ").filter((token) => token.startsWith("text-") || token.startsWith("dark:text-")).join(" "),
    iconBg: service.color.split(" ").filter((token) => token.startsWith("bg-") || token.startsWith("dark:bg-")).join(" "),
  })),
  workflow: [
    { title: "Discover", desc: "A focused strategy sprint to define outcomes, risks, users and the delivery roadmap." },
    { title: "Design", desc: "Product flows, interface systems and technical architecture aligned before build." },
    { title: "Build", desc: "Incremental delivery with demos, test coverage and transparent delivery checkpoints." },
    { title: "Launch", desc: "Production release, monitoring, training and iteration plans after handoff." },
  ],
  technologies: ["Next.js", "React", "Node.js", "NestJS", "AWS", "Docker", "TypeScript", "Tailwind CSS", "API Routes", "Redis", "Stripe"],
  plans: [
    { name: "Starter", price: "$4,900", sub: "/ project", desc: "For landing pages, MVPs and small marketing sites.", features: ["Up to 6 pages", "CMS integration", "Responsive design", "Basic SEO", "2 weeks delivery"], cta: "Start small", featured: false },
    { name: "Growth", price: "$14,900", sub: "/ project", desc: "For SaaS dashboards, web apps and production launches.", features: ["Custom web app", "Auth & payments", "API + database", "Analytics & SEO", "6-8 weeks delivery"], cta: "Most popular", featured: true },
    { name: "Scale", price: "Custom", sub: "", desc: "For multi-product platforms, AI features and enterprise needs.", features: ["Dedicated squad", "Cloud architecture", "AI integrations", "SLA + on-call", "Quarterly roadmaps"], cta: "Talk to us", featured: false },
  ],
  faqs: [
    { q: "How long does a typical project take?", a: "Most marketing sites ship in 2-3 weeks. SaaS products usually run 6-10 weeks for a first release, then continuous iteration after launch." },
    { q: "Do you work with existing teams?", a: "Yes, we embed with in-house engineering and design teams, or run end-to-end as a dedicated squad. We adapt to your rituals." },
    { q: "What do you need from us to start?", a: "A 30-minute discovery call, any existing brand or product context, and a single point of contact. We handle the rest of the scoping." },
    { q: "Do you offer ongoing support?", a: "Every project includes 30 days of post-launch support. After that we offer monthly retainers for maintenance, growth and new features." },
    { q: "Can you sign an NDA?", a: "Absolutely. We sign mutual NDAs before any sensitive details are shared, and we follow strict data-handling practices." },
  ],
};

export const careersContent = {
  openings: [
    { title: "Senior Full Stack Engineer", dept: "Engineering", type: "Full-time", location: "Remote" },
    { title: "Product Designer", dept: "Design", type: "Full-time", location: "Remote" },
    { title: "Cloud DevOps Engineer", dept: "Infrastructure", type: "Contract", location: "Hybrid" },
  ],
  perks: [
    { title: "Remote First", desc: "Work where you do your best work, with strong async habits." },
    { title: "Learning Budget", desc: "Annual budget for books, courses, conferences and certifications." },
    { title: "Flexible Hours", desc: "A healthy rhythm that respects deep work and personal commitments." },
  ],
  values: ["Ownership", "Clear communication", "Craft", "Curiosity", "Kindness", "Reliable delivery"],
  process: [
    { icon: "search", title: "Apply", desc: "Send your CV or portfolio. We read every application." },
    { icon: "message", title: "Intro Call", desc: "A short conversation about fit, goals and expectations." },
    { icon: "shield", title: "Craft Round", desc: "Paid practical work that mirrors real project situations." },
    { icon: "handshake", title: "Offer", desc: "Reference checks, offer letter and welcome to the team." },
  ],
  faqs: [
    { q: "What's your interview process like?", a: "A short intro call, a paid craft round that mirrors real work, and a values conversation. Most candidates finish the loop in under two weeks." },
    { q: "Do you hire remotely?", a: "Yes. We are remote-first and coordinate across time zones with clear communication." },
    { q: "Do you consider contractors?", a: "Yes. Several roles can start as contract or part-time depending on project needs." },
  ],
};

export const blogContent = {
  featuredPost: { slug: "future-of-web-development-2025", title: "The Future of Web Development: Trends to Watch in 2025", excerpt: "Discover the emerging technologies and frameworks shaping the future of web development, from AI-driven tools to edge computing.", author: "Aamila Khan", date: "January 15, 2025", category: "Technology", image: "featured" },
  posts: [
    { id: 1, title: "Building Scalable AI Solutions for Enterprise Applications", excerpt: "Learn how to design and implement AI-powered features that scale seamlessly across large enterprise environments.", author: "Usman Tariq", date: "January 8, 2025", category: "AI/ML", image: "ai", slug: "building-scalable-ai-solutions" },
    { id: 2, title: "Cloud-Native DevOps Strategies for Modern Teams", excerpt: "Explore best practices for implementing cloud-native DevOps workflows that accelerate delivery and improve reliability.", author: "Bilal Ahmed", date: "December 20, 2024", category: "Cloud", image: "devops", slug: "cloud-native-devops-strategies" },
    { id: 3, title: "Designing for AI Interfaces: UX Best Practices", excerpt: "A comprehensive guide to designing intuitive, user-centered interfaces for AI-powered applications.", author: "Sarah Ahmed", date: "December 10, 2024", category: "Design", image: "design", slug: "designing-for-ai-interfaces" },
    { id: 4, title: "Top 10 Productivity Hacks for Developers in 2025", excerpt: "Practical tips and tools to help developers code smarter, not harder, and boost daily productivity.", author: "Waseem Ahmad", date: "November 28, 2024", category: "Productivity", image: "productivity", slug: "productivity-hacks-2025" },
    { id: 5, title: "API Performance Optimization: Advanced Techniques", excerpt: "Deep dive into request optimization, caching strategies, and performance tuning for modern APIs.", author: "Ahmed Hassan", date: "November 15, 2024", category: "Development", image: "api", slug: "api-performance-optimization" },
  ],
  categories: ["All", "Technology", "AI/ML", "Cloud", "Design", "Development", "Productivity"],
};

export const contactContent = {
  faqs: [
    { q: "How soon can we start?", a: "Most projects can begin within one to two weeks after discovery and scope approval." },
    { q: "Can you help with an ongoing project?", a: "Absolutely. We routinely join existing teams to ship, stabilize and improve product delivery." },
    { q: "Do you sign NDA for projects?", a: "Yes, we are happy to sign your NDA or provide our standard one." },
  ],
  contactMethods: [
    { icon: "mail", color: "bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", title: "Email Us", desc: "Drop us an email anytime.", action: "hello@cloudwent.com" },
    { icon: "phone", color: "bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", title: "Call Us", desc: "Mon - Fri, 9AM - 6PM (EST)", action: "+1 (630) 123-4567" },
    { icon: "message", color: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400", title: "Live Chat", desc: "Chat with our team instantly.", action: "Start Live Chat" },
    { icon: "building", color: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400", title: "Office", desc: "1520 Market St, Suite 1000\nSan Francisco, CA 94102, USA" },
  ],
  officePins: [
    { city: "San Francisco", offset: "left-[18%] top-[36%]" },
    { city: "London", offset: "left-[48%] top-[31%]" },
    { city: "Dubai", offset: "left-[59%] top-[48%]" },
    { city: "Singapore", offset: "left-[75%] top-[62%]" },
  ],
};

export const siteContent = {
  home: homeContent,
  services: servicesContent,
  careers: careersContent,
  blog: blogContent,
  contact: contactContent,
};

export type SiteContentSection = keyof typeof siteContent;

export function getSiteContent(section?: SiteContentSection) {
  return section ? siteContent[section] : siteContent;
}
