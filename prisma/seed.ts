import { PrismaClient, UserRole, PublishStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

import { teamMembers } from "../lib/team-data";

const prisma = new PrismaClient();

async function main() {
  // ─── Seed Users ───
  const users = [
    { name: "Admin User", email: "admin@cloudwent.com", role: UserRole.admin },
    { name: "HR User", email: "hr@cloudwent.com", role: UserRole.hr },
    { name: "Employee User", email: "employee@cloudwent.com", role: UserRole.employee },
  ];

  for (const user of users) {
    const hashedPassword = await bcrypt.hash("password123", 10);
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        role: user.role,
      },
    });
  }

  // ─── Seed Team Members ───
  for (const [index, member] of teamMembers.entries()) {
    await prisma.teamMember.upsert({
      where: { slug: member.slug },
      update: {
        name: member.name,
        role: member.role,
        initials: member.initials,
        avatarColor: member.color,
        bio: member.bio,
        location: member.location,
        experience: member.experience,
        email: member.email,
        linkedin: member.linkedin,
        team: member.team,
        order: index,
        expertise: member.expertise,
        skills: member.skills,
        experienceTimeline: member.experience_timeline,
        education: member.education,
        projects: member.projects,
        certifications: member.certifications,
      },
      create: {
        slug: member.slug,
        name: member.name,
        role: member.role,
        initials: member.initials,
        avatarColor: member.color,
        bio: member.bio,
        location: member.location,
        experience: member.experience,
        email: member.email,
        linkedin: member.linkedin,
        team: member.team,
        order: index,
        expertise: member.expertise,
        skills: member.skills,
        experienceTimeline: member.experience_timeline,
        education: member.education,
        projects: member.projects,
        certifications: member.certifications,
      },
    });
  }

  // ─── Seed Services ───
  const services = [
    { slug: "web-development", name: "Web Development", description: "Modern, responsive and high-performance websites and web applications.", icon: "code", color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400", features: ["Next.js / TanStack", "SSR & SEO", "Headless CMS"], techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript"], order: 0 },
    { slug: "lms-development", name: "LMS Development", description: "Feature-rich LMS platforms for education, training and corporate learning.", icon: "graduation", color: "bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400", features: ["Courses & quizzes", "Live classes", "Reporting"], techStack: ["Next.js", "NestJS", "PostgreSQL"], order: 1 },
    { slug: "saas-development", name: "SaaS Development", description: "Scalable SaaS products that help you grow your business globally.", icon: "cloud", color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400", features: ["Multi-tenant", "Billing & auth", "Analytics"], techStack: ["Next.js", "Stripe", "Prisma", "AWS"], order: 2 },
    { slug: "mobile-applications", name: "Mobile Applications", description: "Cross-platform mobile apps that deliver exceptional user experiences.", icon: "smartphone", color: "bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400", features: ["React Native", "Offline first", "Push & analytics"], techStack: ["React Native", "Expo", "Firebase"], order: 3 },
    { slug: "ai-solutions", name: "AI Solutions", description: "AI-powered solutions to automate processes and unlock new opportunities.", icon: "sparkles", color: "bg-fuchsia-50 text-fuchsia-600 dark:bg-fuchsia-900/30 dark:text-fuchsia-400", features: ["RAG pipelines", "Agentic flows", "Fine-tuning"], techStack: ["Python", "OpenAI", "LangChain", "Pinecone"], order: 4 },
    { slug: "cloud-devops", name: "Cloud & DevOps", description: "Secure, reliable and cost-effective cloud solutions on AWS and beyond.", icon: "cloud-cog", color: "bg-sky-50 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400", features: ["AWS / GCP / Azure", "Terraform", "Zero-downtime deploys"], techStack: ["AWS", "Docker", "Kubernetes", "Terraform"], order: 5 },
  ];

  for (const svc of services) {
    await prisma.service.upsert({
      where: { slug: svc.slug },
      update: svc,
      create: { ...svc, active: true },
    });
  }

  // ─── Seed Projects ───
  const projects = [
    { slug: "edusmart-lms", title: "EduSmart LMS", description: "A comprehensive learning management system for modern education.", category: "LMS Platform", tags: ["Education", "LMS"], stack: ["Next.js", "NestJS", "API Routes", "AWS"], image: "lms", order: 0, status: PublishStatus.PUBLISHED },
    { slug: "cloudfinance", title: "CloudFinance", description: "SaaS platform for financial management and analytics.", category: "SaaS Product", tags: ["Finance", "SaaS"], stack: ["Next.js", "TypeScript", "API Routes", "AWS"], image: "finance", order: 1, status: PublishStatus.PUBLISHED },
    { slug: "healthcare-plus", title: "HealthCare+", description: "Cross-platform mobile app for healthcare booking and patient management.", category: "Mobile App", tags: ["Healthcare", "Mobile"], stack: ["React Native", "NestJS", "REST API"], image: "health", order: 2, status: PublishStatus.PUBLISHED },
  ];

  for (const proj of projects) {
    await prisma.project.upsert({
      where: { slug: proj.slug },
      update: proj,
      create: proj,
    });
  }

  // ─── Seed Testimonials ───
  const testimonials = [
    { name: "James Carter", role: "CTO", company: "EduSmart", content: "CloudWent transformed our idea into a powerful platform. Their technical expertise and communication are exceptional.", rating: 5, featured: true, order: 0 },
    { name: "Sarah Johnson", role: "Head of Operations", company: "LearnHub", content: "The team is professional, responsive and truly invested in our success. Highly recommended!", rating: 5, featured: true, order: 1 },
    { name: "Michael Brown", role: "CEO", company: "FinTrack", content: "Reliable, innovative and a great partner for our digital journey. We're extremely satisfied.", rating: 5, featured: true, order: 2 },
  ];

  for (const t of testimonials) {
    await prisma.testimonial.createMany({ data: t });
  }

  // ─── Seed Blog Posts ───
  const blogPosts = [
    { slug: "future-of-web-development-2025", title: "The Future of Web Development: Trends to Watch in 2025", excerpt: "Discover the emerging technologies and frameworks shaping the future of web development, from AI-driven tools to edge computing.", author: "Aamila Khan", category: "Technology", tags: ["Web Development", "Trends"], image: "featured", status: PublishStatus.PUBLISHED, publishedAt: new Date("2025-01-15") },
    { slug: "building-scalable-ai-solutions", title: "Building Scalable AI Solutions for Enterprise Applications", excerpt: "Learn how to design and implement AI-powered features that scale seamlessly across large enterprise environments.", author: "Usman Tariq", category: "AI/ML", tags: ["AI", "Enterprise"], image: "ai", status: PublishStatus.PUBLISHED, publishedAt: new Date("2025-01-08") },
    { slug: "cloud-native-devops-strategies", title: "Cloud-Native DevOps Strategies for Modern Teams", excerpt: "Explore best practices for implementing cloud-native DevOps workflows that accelerate delivery and improve reliability.", author: "Bilal Ahmed", category: "Cloud", tags: ["DevOps", "Cloud"], image: "devops", status: PublishStatus.PUBLISHED, publishedAt: new Date("2024-12-20") },
    { slug: "designing-for-ai-interfaces", title: "Designing for AI Interfaces: UX Best Practices", excerpt: "A comprehensive guide to designing intuitive, user-centered interfaces for AI-powered applications.", author: "Sarah Ahmed", category: "Design", tags: ["UX", "AI"], image: "design", status: PublishStatus.PUBLISHED, publishedAt: new Date("2024-12-10") },
    { slug: "productivity-hacks-2025", title: "Top 10 Productivity Hacks for Developers in 2025", excerpt: "Practical tips and tools to help developers code smarter, not harder, and boost daily productivity.", author: "Waseem Ahmad", category: "Productivity", tags: ["Productivity", "Development"], image: "productivity", status: PublishStatus.PUBLISHED, publishedAt: new Date("2024-11-28") },
    { slug: "api-performance-optimization", title: "API Performance Optimization: Advanced Techniques", excerpt: "Deep dive into request optimization, caching strategies, and performance tuning for modern APIs.", author: "Ahmed Hassan", category: "Development", tags: ["API", "Performance"], image: "api", status: PublishStatus.PUBLISHED, publishedAt: new Date("2024-11-15") },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }

  // ─── Seed Job Openings ───
  const jobOpenings = [
    { slug: "senior-full-stack-engineer", title: "Senior Full Stack Engineer", department: "Engineering", location: "Remote", type: "Full-time", salary: "$120k - $160k", description: "We're looking for an experienced full-stack engineer to lead product development and mentor the team.", requirements: ["5+ years of experience", "Strong TypeScript and React skills", "Experience with Node.js and databases"], benefits: ["Remote-first", "Learning budget", "Health insurance"], status: PublishStatus.PUBLISHED },
    { slug: "product-designer", title: "Product Designer", department: "Design", location: "Remote", type: "Full-time", salary: "$90k - $130k", description: "Join our design team to craft beautiful, intuitive interfaces for our products and clients.", requirements: ["3+ years of product design experience", "Figma expert", "Portfolio demonstrating strong UX work"], benefits: ["Remote-first", "Design tools budget", "Conference attendance"], status: PublishStatus.PUBLISHED },
    { slug: "cloud-devops-engineer", title: "Cloud DevOps Engineer", department: "Infrastructure", location: "Hybrid", type: "Contract", salary: "$100k - $140k", description: "Help us build and maintain robust cloud infrastructure for our growing client base.", requirements: ["AWS/GCP/Azure certification", "Terraform experience", "CI/CD pipeline expertise"], benefits: ["Flexible hours", "Certification support", "Contract-to-hire possible"], status: PublishStatus.PUBLISHED },
  ];

  for (const job of jobOpenings) {
    await prisma.jobOpening.upsert({
      where: { slug: job.slug },
      update: job,
      create: job,
    });
  }

  // ─── Seed FAQs ───
  const faqs = [
    { question: "How long does a typical project take?", answer: "Most marketing sites ship in 2-3 weeks. SaaS products usually run 6-10 weeks for a first release, then continuous iteration after launch.", category: "services", order: 0 },
    { question: "Do you work with existing teams?", answer: "Yes, we embed with in-house engineering and design teams, or run end-to-end as a dedicated squad. We adapt to your rituals.", category: "services", order: 1 },
    { question: "What do you need from us to start?", answer: "A 30-minute discovery call, any existing brand or product context, and a single point of contact. We handle the rest of the scoping.", category: "services", order: 2 },
    { question: "Do you offer ongoing support?", answer: "Every project includes 30 days of post-launch support. After that we offer monthly retainers for maintenance, growth and new features.", category: "services", order: 3 },
    { question: "Can you sign an NDA?", answer: "Absolutely. We sign mutual NDAs before any sensitive details are shared, and we follow strict data-handling practices.", category: "services", order: 4 },
    { question: "What's your interview process like?", answer: "A short intro call, a paid craft round that mirrors real work, and a values conversation. Most candidates finish the loop in under two weeks.", category: "careers", order: 0 },
    { question: "Do you hire remotely?", answer: "Yes. We are remote-first and coordinate across time zones with clear communication.", category: "careers", order: 1 },
    { question: "Do you consider contractors?", answer: "Yes. Several roles can start as contract or part-time depending on project needs.", category: "careers", order: 2 },
    { question: "How soon can we start?", answer: "Most projects can begin within one to two weeks after discovery and scope approval.", category: "contact", order: 0 },
    { question: "Can you help with an ongoing project?", answer: "Absolutely. We routinely join existing teams to ship, stabilize and improve product delivery.", category: "contact", order: 1 },
    { question: "Do you sign NDA for projects?", answer: "Yes, we are happy to sign your NDA or provide our standard one.", category: "contact", order: 2 },
  ];

  for (const faq of faqs) {
    await prisma.faq.createMany({ data: faq });
  }

  // ─── Seed Technologies ───
  const technologies = [
    { name: "Next.js", icon: "nextjs", category: "Frontend", description: "React framework for production", order: 0 },
    { name: "React", icon: "react", category: "Frontend", description: "JavaScript library for building user interfaces", order: 1 },
    { name: "TypeScript", icon: "typescript", category: "Language", description: "Typed JavaScript", order: 2 },
    { name: "Tailwind CSS", icon: "tailwind", category: "Styling", description: "Utility-first CSS framework", order: 3 },
    { name: "Node.js", icon: "nodejs", category: "Backend", description: "JavaScript runtime", order: 4 },
    { name: "NestJS", icon: "nestjs", category: "Backend", description: "Progressive Node.js framework", order: 5 },
    { name: "AWS", icon: "aws", category: "Cloud", description: "Cloud computing platform", order: 6 },
    { name: "Docker", icon: "docker", category: "DevOps", description: "Containerization platform", order: 7 },
    { name: "PostgreSQL", icon: "postgres", category: "Database", description: "Relational database", order: 8 },
    { name: "Redis", icon: "redis", category: "Database", description: "In-memory data store", order: 9 },
    { name: "Stripe", icon: "stripe", category: "Payments", description: "Payment processing platform", order: 10 },
  ];

  for (const tech of technologies) {
    await prisma.technology.upsert({
      where: { name: tech.name },
      update: tech,
      create: { ...tech, active: true },
    });
  }

  // ─── Seed Process Steps ───
  const processSteps = [
    { step: "01", title: "Discover", description: "We understand your business and goals", icon: "search", page: "home", order: 0 },
    { step: "02", title: "Plan", description: "We analyze and create a strategy", icon: "file-text", page: "home", order: 1 },
    { step: "03", title: "Design", description: "We design intuitive and engaging UI/UX", icon: "pen-tool", page: "home", order: 2 },
    { step: "04", title: "Develop", description: "We build with clean and scalable code", icon: "code", page: "home", order: 3 },
    { step: "05", title: "Test", description: "We ensure quality through rigorous testing", icon: "check-circle", page: "home", order: 4 },
    { step: "06", title: "Launch", description: "We deploy and support your long-term growth", icon: "rocket", page: "home", order: 5 },
    { step: "1", title: "Apply", description: "Send your CV or portfolio. We read every application.", icon: "search", page: "careers", order: 0 },
    { step: "2", title: "Intro Call", description: "A short conversation about fit, goals and expectations.", icon: "message", page: "careers", order: 1 },
    { step: "3", title: "Craft Round", description: "Paid practical work that mirrors real project situations.", icon: "shield", page: "careers", order: 2 },
    { step: "4", title: "Offer", description: "Reference checks, offer letter and welcome to the team.", icon: "handshake", page: "careers", order: 3 },
  ];

  for (const step of processSteps) {
    await prisma.processStep.upsert({
      where: { id: "nonexistent" }, // upsert by id doesn't work well for createMany patterns, we'll use createMany
      update: step,
      create: { ...step, active: true },
    });
  }
  // Actually, let me just create them directly since we don't have unique fields for process steps
  // We need to clear existing first to avoid duplicates
  await prisma.processStep.deleteMany({});
  await prisma.processStep.createMany({ data: processSteps.map(s => ({ ...s, active: true })) });

  // ─── Seed Perks ───
  const perks = [
    { title: "Remote First", description: "Work where you do your best work, with strong async habits.", icon: "globe", order: 0 },
    { title: "Learning Budget", description: "Annual budget for books, courses, conferences and certifications.", icon: "book", order: 1 },
    { title: "Flexible Hours", description: "A healthy rhythm that respects deep work and personal commitments.", icon: "clock", order: 2 },
    { title: "Health & Wellness", description: "Comprehensive health coverage and wellness stipend.", icon: "heart", order: 3 },
    { title: "Team Retreats", description: "Quarterly in-person gatherings to connect and recharge.", icon: "plane", order: 4 },
    { title: "Home Office", description: "Equipment budget to build your ideal workspace.", icon: "monitor", order: 5 },
  ];

  await prisma.perk.deleteMany({});
  await prisma.perk.createMany({ data: perks.map(p => ({ ...p, active: true })) });

  // ─── Seed Company Values ───
  const companyValues = [
    { title: "Ownership", description: "We take full responsibility for our work and outcomes.", icon: "shield", order: 0 },
    { title: "Clear Communication", description: "We communicate openly, honestly, and with empathy.", icon: "message", order: 1 },
    { title: "Craft", description: "We care deeply about the quality of our work.", icon: "pen-tool", order: 2 },
    { title: "Curiosity", description: "We never stop learning and exploring new ideas.", icon: "search", order: 3 },
    { title: "Kindness", description: "We treat everyone with respect and compassion.", icon: "heart", order: 4 },
    { title: "Reliable Delivery", description: "We do what we say we'll do, on time and with quality.", icon: "check-circle", order: 5 },
  ];

  await prisma.companyValue.deleteMany({});
  await prisma.companyValue.createMany({ data: companyValues.map(v => ({ ...v, active: true })) });

  // ─── Seed Site Stats ───
  const siteStats = [
    { label: "Projects Delivered", value: "50+", icon: "rocket", section: "home", order: 0 },
    { label: "Happy Clients", value: "20+", icon: "users", section: "home", order: 1 },
    { label: "Uptime & Reliability", value: "99.9%", icon: "shield", section: "home", order: 2 },
    { label: "Years of Experience", value: "5+", icon: "calendar", section: "home", order: 3 },
    { label: "Team Members", value: "50+", icon: "users", section: "about", order: 0 },
    { label: "Projects Completed", value: "200+", icon: "folder", section: "about", order: 1 },
    { label: "Countries Served", value: "30+", icon: "globe", section: "about", order: 2 },
    { label: "Years in Business", value: "5+", icon: "calendar", section: "about", order: 3 },
  ];

  await prisma.siteStat.deleteMany({});
  await prisma.siteStat.createMany({ data: siteStats.map(s => ({ ...s, active: true })) });

  // ─── Seed Pricing Plans ───
  const pricingPlans = [
    { name: "Starter", price: "$4,900", sub: "/ project", description: "For landing pages, MVPs and small marketing sites.", features: ["Up to 6 pages", "CMS integration", "Responsive design", "Basic SEO", "2 weeks delivery"], cta: "Start small", featured: false, order: 0 },
    { name: "Growth", price: "$14,900", sub: "/ project", description: "For SaaS dashboards, web apps and production launches.", features: ["Custom web app", "Auth & payments", "API + database", "Analytics & SEO", "6-8 weeks delivery"], cta: "Most popular", featured: true, order: 1 },
    { name: "Scale", price: "Custom", sub: "", description: "For multi-product platforms, AI features and enterprise needs.", features: ["Dedicated squad", "Cloud architecture", "AI integrations", "SLA + on-call", "Quarterly roadmaps"], cta: "Talk to us", featured: false, order: 2 },
  ];

  await prisma.pricingPlan.deleteMany({});
  await prisma.pricingPlan.createMany({ data: pricingPlans.map(p => ({ ...p, active: true })) });

  console.log("✅ Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
