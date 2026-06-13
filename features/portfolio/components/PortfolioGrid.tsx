import { PortfolioCard } from "./PortfolioCard";

export const PortfolioGrid = () => {
  const projects = [
    {
      title: "EduSmart LMS",
      description: "A comprehensive learning management system for modern education.",
      tags: ["Next.js", "NestJS", "PostgreSQL", "AWS"],
      gradient: "from-blue-600 to-indigo-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "/portfolio/edusmart",
    },
    {
      title: "CloudFinance",
      description: "Enterprise-grade financial platform for managing assets and investments.",
      tags: ["Next.js", "TypeScript", "Prisma", "AWS"],
      gradient: "from-purple-600 to-pink-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "/portfolio/cloudfinance",
    },
    {
      title: "HealthCare+",
      description: "Cross-platform mobile app for healthcare providers and patients.",
      tags: ["React Native", "NestJS", "PostgreSQL", "TypeScript"],
      gradient: "from-green-600 to-emerald-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      link: "/portfolio/healthcare",
    },
    {
      title: "AI Analytics Dashboard",
      description: "Real-time AI-powered analytics dashboard for business intelligence.",
      tags: ["Python", "TensorFlow", "React", "D3.js"],
      gradient: "from-indigo-600 to-purple-600",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      link: "/portfolio/ai-dashboard",
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable e-commerce platform with AI-powered recommendations.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
      gradient: "from-orange-600 to-red-600",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      link: "/portfolio/ecommerce",
    },
    {
      title: "IoT Smart Home",
      description: "Smart home automation system with real-time device monitoring.",
      tags: ["React Native", "Node.js", "MQTT", "WebSockets"],
      gradient: "from-teal-600 to-cyan-600",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      link: "/portfolio/iot-smart-home",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <PortfolioCard
          key={i}
          title={project.title}
          description={project.description}
          tags={project.tags}
          gradient={project.gradient}
          image={project.image}
          link={project.link}
        />
      ))}
    </div>
  );
};