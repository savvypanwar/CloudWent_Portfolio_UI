export const dummyStats = [
  { icon: "users", value: "50+", label: "Happy Clients" },
  { icon: "code", value: "120+", label: "Projects Delivered" },
  { icon: "award", value: "15+", label: "Industry Awards" },
  { icon: "clock", value: "5+", label: "Years Experience" },
];

export const dummyServices = [
  {
    id: "1",
    name: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices.",
    icon: "code",
    color: "bg-gradient-to-br from-blue-500 to-indigo-600",
    features: ["React/Next.js", "Node.js", "Responsive Design", "Performance Optimized"],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: "2",
    name: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: "smartphone",
    color: "bg-gradient-to-br from-emerald-500 to-teal-600",
    features: ["iOS & Android", "React Native", "Flutter", "Push Notifications"],
    techStack: ["React Native", "Flutter", "Firebase"],
  },
  {
    id: "3",
    name: "SaaS Products",
    description: "End-to-end SaaS platform development from idea to launch.",
    icon: "cloud",
    color: "bg-gradient-to-br from-violet-500 to-purple-600",
    features: ["Multi-tenant", "Subscription Billing", "Admin Dashboard", "APIs"],
    techStack: ["Node.js", "PostgreSQL", "Stripe", "AWS"],
  },
  {
    id: "4",
    name: "AI Solutions",
    description: "Intelligent automation and AI-powered features for your products.",
    icon: "sparkles",
    color: "bg-gradient-to-br from-amber-500 to-orange-600",
    features: ["Machine Learning", "NLP", "Computer Vision", "Chatbots"],
    techStack: ["Python", "TensorFlow", "OpenAI", "LangChain"],
  },
  {
    id: "5",
    name: "LMS Platforms",
    description: "Learning management systems with modern course delivery features.",
    icon: "graduation",
    color: "bg-gradient-to-br from-rose-500 to-pink-600",
    features: ["Course Builder", "Video Streaming", "Quizzes", "Progress Tracking"],
    techStack: ["Next.js", "PostgreSQL", "AWS S3"],
  },
  {
    id: "6",
    name: "Cloud Infrastructure",
    description: "Scalable cloud architecture and DevOps solutions for your business.",
    icon: "cloud-cog",
    color: "bg-gradient-to-br from-cyan-500 to-blue-600",
    features: ["AWS/Azure", "Docker", "Kubernetes", "CI/CD"],
    techStack: ["AWS", "Docker", "Terraform", "GitHub Actions"],
  },
];

export const dummyProjects = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with payment integration, inventory management, and real-time analytics.",
    category: "Web",
    tags: ["React", "Node.js", "Stripe"],
    image: "/projects/ecommerce.jpg",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: "2",
    slug: "healthcare-app",
    title: "Healthcare App",
    description: "Telemedicine platform connecting patients with doctors via video calls and secure messaging.",
    category: "Mobile",
    tags: ["React Native", "Firebase", "WebRTC"],
    image: "/projects/healthcare.jpg",
    stack: ["React Native", "Firebase", "WebRTC"],
  },
  {
    id: "3",
    slug: "fintech-dashboard",
    title: "FinTech Dashboard",
    description: "Real-time financial analytics dashboard with data visualization and reporting.",
    category: "SaaS",
    tags: ["Next.js", "D3.js", "Python"],
    image: "/projects/fintech.jpg",
    stack: ["Next.js", "D3.js", "Python"],
  },
];

export const dummyTestimonials = [
  {
    id: "1",
    content: "CloudWent transformed our digital presence. Their team delivered a world-class platform that exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    rating: 5,
  },
  {
    id: "2",
    content: "The AI solutions they built for us increased our efficiency by 300%. Truly exceptional work and professionalism.",
    name: "Michael Chen",
    role: "CTO, DataFlow",
    rating: 5,
  },
  {
    id: "3",
    content: "From concept to deployment, the team was responsive, creative, and technically excellent. Highly recommended.",
    name: "Emily Rodriguez",
    role: "Director, Innovate Labs",
    rating: 5,
  },
];

export const dummyProcessSteps = [
  { id: "1", step: "01", title: "Discovery", description: "We understand your goals, users, and constraints through stakeholder interviews and research.", icon: "search" },
  { id: "2", step: "02", title: "Strategy", description: "We define the roadmap, architecture, and tech stack aligned with your business objectives.", icon: "clipboard-list" },
  { id: "3", step: "03", title: "Design", description: "We create intuitive wireframes and high-fidelity prototypes focused on user experience.", icon: "palette" },
  { id: "4", step: "04", title: "Development", description: "We build your product using agile sprints with continuous integration and testing.", icon: "hammer" },
  { id: "5", step: "05", title: "Testing", description: "We ensure quality with comprehensive testing, security audits, and performance optimization.", icon: "flask-conical" },
  { id: "6", step: "06", title: "Launch", description: "We deploy to production and provide ongoing support and maintenance.", icon: "send" },
];

export const dummyBenefits = [
  { id: "1", title: "Expert Team", description: "Skilled developers with deep expertise in modern technologies.", icon: "target" },
  { id: "2", title: "Fast Delivery", description: "Agile processes that deliver value quickly and iteratively.", icon: "zap" },
  { id: "3", title: "Quality Assurance", description: "Rigorous testing and code review for production-ready solutions.", icon: "shield" },
];

export const dummyPricingPlans = [
  {
    id: "1",
    name: "Starter",
    price: "$2,999",
    sub: "/project",
    description: "Perfect for small projects and MVPs.",
    features: ["Custom Design", "Up to 5 Pages", "Mobile Responsive", "SEO Setup", "2 Revisions"],
    cta: "Get Started",
    featured: false,
  },
  {
    id: "2",
    name: "Professional",
    price: "$7,999",
    sub: "/project",
    description: "Ideal for growing businesses with advanced needs.",
    features: ["Everything in Starter", "Up to 15 Pages", "CMS Integration", "Analytics Setup", "5 Revisions", "Priority Support"],
    cta: "Get Started",
    featured: true,
  },
  {
    id: "3",
    name: "Enterprise",
    price: "Custom",
    sub: "",
    description: "Tailored solutions for large-scale organizations.",
    features: ["Everything in Professional", "Unlimited Pages", "Custom Features", "Dedicated Team", "24/7 Support", "SLA Guarantee"],
    cta: "Contact Us",
    featured: false,
  },
];

export const dummyFaqs = [
  { id: "1", question: "What services do you offer?", answer: "We offer web development, mobile apps, SaaS products, AI solutions, LMS platforms, and cloud infrastructure services." },
  { id: "2", question: "How long does a typical project take?", answer: "Project timelines vary based on scope. A typical MVP takes 4-8 weeks, while enterprise solutions may take 3-6 months." },
  { id: "3", question: "Do you offer ongoing support?", answer: "Yes, we offer maintenance and support packages with SLA guarantees for all our projects." },
  { id: "4", question: "What technologies do you use?", answer: "We use modern stacks including React, Next.js, Node.js, Python, AWS, and various AI/ML frameworks." },
  { id: "5", question: "How do you handle project communication?", answer: "We use agile methodology with weekly sprints, daily standups, and regular demo sessions via Slack and video calls." },
];

export const dummyTechnologies = [
  { id: "1", name: "React", icon: "Code", category: "Frontend" },
  { id: "2", name: "Next.js", icon: "Globe", category: "Frontend" },
  { id: "3", name: "Node.js", icon: "Server", category: "Backend" },
  { id: "4", name: "Python", icon: "Terminal", category: "Backend" },
  { id: "5", name: "AWS", icon: "Cloud", category: "Cloud" },
  { id: "6", name: "PostgreSQL", icon: "Database", category: "Database" },
  { id: "7", name: "Docker", icon: "Container", category: "DevOps" },
  { id: "8", name: "TensorFlow", icon: "Brain", category: "AI/ML" },
];


export const dummyBlogPosts = [
  {
    id: "1",
    slug: "future-of-web-development",
    title: "The Future of Web Development in 2025",
    excerpt: "Explore emerging trends and technologies shaping the next generation of web applications.",
    author: "Alex Morgan",
    category: "Technology",
    image: "/blog/web-dev.jpg",
    date: "January 15, 2025",
  },
  {
    id: "2",
    slug: "ai-in-business",
    title: "How AI is Transforming Business Operations",
    excerpt: "Real-world applications of AI that are revolutionizing how companies operate and grow.",
    author: "Riley Kim",
    category: "AI",
    image: "/blog/ai-business.jpg",
    date: "January 10, 2025",
  },
  {
    id: "3",
    slug: "scaling-saas-products",
    title: "Scaling SaaS Products: Best Practices",
    excerpt: "Learn proven strategies for scaling your SaaS product from startup to enterprise.",
    author: "Jordan Lee",
    category: "SaaS",
    image: "/blog/saas.jpg",
    date: "January 5, 2025",
  },
  {
    id: "4",
    slug: "design-systems",
    title: "Building Scalable Design Systems",
    excerpt: "A comprehensive guide to creating and maintaining design systems that scale.",
    author: "Taylor Wright",
    category: "Design",
    image: "/blog/design.jpg",
    date: "December 28, 2024",
  },
  {
    id: "5",
    slug: "cloud-architecture",
    title: "Modern Cloud Architecture Patterns",
    excerpt: "Key patterns and practices for building resilient cloud-native applications.",
    author: "Casey Patel",
    category: "Cloud",
    image: "/blog/cloud.jpg",
    date: "December 20, 2024",
  },
  {
    id: "6",
    slug: "mobile-development-trends",
    title: "Mobile Development Trends to Watch",
    excerpt: "Stay ahead of the curve with these emerging mobile development trends.",
    author: "Alex Morgan",
    category: "Mobile",
    image: "/blog/mobile.jpg",
    date: "December 15, 2024",
  },
];

export const dummyJobOpenings = [
  {
    id: "1",
    slug: "senior-frontend-developer",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120K - $160K",
    description: "We're looking for an experienced frontend developer to join our growing team.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "Next.js experience"],
    benefits: ["Health insurance", "Stock options", "Flexible hours"],
  },
  {
    id: "2",
    slug: "ai-engineer",
    title: "AI Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$140K - $180K",
    description: "Join our AI team to build cutting-edge machine learning solutions.",
    requirements: ["Python expertise", "ML frameworks experience", "NLP or Computer Vision"],
    benefits: ["Health insurance", "Stock options", "Conference budget"],
  },
  {
    id: "3",
    slug: "ux-designer",
    title: "UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    salary: "$100K - $140K",
    description: "Create beautiful and intuitive user experiences for our products.",
    requirements: ["Portfolio demonstrating UX work", "Figma expertise", "User research experience"],
    benefits: ["Health insurance", "Design tool budget", "Flexible hours"],
  },
  {
    id: "4",
    slug: "devops-engineer",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$130K - $170K",
    description: "Build and maintain our cloud infrastructure and CI/CD pipelines.",
    requirements: ["AWS/Azure experience", "Docker & Kubernetes", "Terraform experience"],
    benefits: ["Health insurance", "Stock options", "Certification budget"],
  },
];

export const dummyPerks = [
  { id: "1", title: "Remote First", description: "Work from anywhere in the world.", icon: "laptop" },
  { id: "2", title: "Flexible Hours", description: "Choose your own working hours.", icon: "coffee" },
  { id: "3", title: "Health Insurance", description: "Comprehensive health coverage for you and family.", icon: "heart" },
  { id: "4", title: "Stock Options", description: "Equity in a growing company.", icon: "trending-up" },
  { id: "5", title: "Learning Budget", description: "Annual budget for courses and conferences.", icon: "users" },
  { id: "6", title: "Team Retreats", description: "Annual team retreats in exciting locations.", icon: "plane" },
];

export const dummyCompanyValues = [
  { id: "1", title: "Innovation" },
  { id: "2", title: "Excellence" },
  { id: "3", title: "Collaboration" },
  { id: "4", title: "Integrity" },
];

export const dummyCareerProcessSteps = [
  { id: "1", step: "01", title: "Apply", description: "Submit your application with resume and portfolio.", icon: "search" },
  { id: "2", step: "02", title: "Screening", description: "Initial chat to learn about you and your goals.", icon: "clipboard-list" },
  { id: "3", step: "03", title: "Interview", description: "Technical and culture fit interviews with the team.", icon: "palette" },
  { id: "4", step: "04", title: "Task", description: "A paid craft round to show your skills.", icon: "hammer" },
  { id: "5", step: "05", title: "Review", description: "We review everything and give feedback.", icon: "flask-conical" },
  { id: "6", step: "06", title: "Offer", description: "Welcome to the team! Let's build together.", icon: "send" },
];

export const dummyCareerFaqs = [
  { id: "1", question: "What is the interview process?", answer: "Our interview process typically includes a phone screen, technical assessment, and final interview with the team." },
  { id: "2", question: "Do you offer remote work?", answer: "Yes, we are a fully remote-first company. You can work from anywhere in the world." },
  { id: "3", question: "What benefits do you offer?", answer: "We offer health insurance, stock options, flexible hours, learning budget, and annual team retreats." },
  { id: "4", question: "How do I apply?", answer: "Click on any job listing to view the full description and submit your application directly." },
];
