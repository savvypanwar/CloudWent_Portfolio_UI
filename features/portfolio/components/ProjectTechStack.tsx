export interface ProjectTechStackProps {
  technologies: string[];
}

export const ProjectTechStack = ({ technologies }: ProjectTechStackProps) => {
  const getTechColor = (tech: string) => {
    const colors: Record<string, string> = {
      "Next.js": "bg-blue-50 text-blue-600",
      "NestJS": "bg-red-50 text-red-600",
      "PostgreSQL": "bg-blue-50 text-blue-600",
      "AWS": "bg-orange-50 text-orange-600",
      "TypeScript": "bg-blue-50 text-blue-600",
      "Prisma": "bg-purple-50 text-purple-600",
      "React Native": "bg-cyan-50 text-cyan-600",
      "React": "bg-cyan-50 text-cyan-600",
      "Python": "bg-yellow-50 text-yellow-600",
      "TensorFlow": "bg-orange-50 text-orange-600",
      "D3.js": "bg-green-50 text-green-600",
      "Node.js": "bg-green-50 text-green-600",
      "Redis": "bg-red-50 text-red-600",
      "MQTT": "bg-gray-50 text-gray-600",
      "WebSockets": "bg-indigo-50 text-indigo-600",
    };
    return colors[tech] || "bg-gray-50 text-gray-600";
  };

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, i) => (
        <span
          key={i}
          className={`text-sm px-3 py-1.5 rounded-full font-medium ${getTechColor(
            tech
          )}`}
        >
          {tech}
        </span>
      ))}
    </div>
  );
};