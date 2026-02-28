import { Languages, Globe, Palette, Wrench } from "lucide-react";

export const skilllistItems = [
  {
    icon: <Languages className="w-6 h-6" />,
    title: "LANGUAGE",
    skills: ["JavaScript", "TypeScript", "HTML/CSS", "PHP"],
    description:
      "Core languages for building robust web applications and modern backend logic",
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-500/30",
    hoverBorderColor: "hover:border-blue-400/80",
    shadow: "shadow-[0_0_15px_rgba(59,130,246,0.15)]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "FRAMEWORK & RUNTIME",
    skills: ["React", "Next.js", "Node.js", "Express.js"],
    description:
      "Modern JavaScript ecosystem for building scalable Full-Stack platforms",
    color: "from-green-500 to-green-700",
    bgColor: "bg-green-50",
    borderColor: "border-green-500/30",
    hoverBorderColor: "hover:border-green-400/80",
    shadow: "shadow-[0_0_15px_rgba(34,197,94,0.15)]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "STYLING",
    skills: ["TailwindCSS", "daisyUI", "Bootstrap 5", "Ant Design"],
    description:
      "CSS frameworks and component libraries for creating professional UI/UX",
    color: "from-purple-500 to-purple-700",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-500/30",
    hoverBorderColor: "hover:border-purple-400/80",
    shadow: "shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "DATABASE, TOOLS & METHODOLOGY",
    skills: ["PostgreSQL", "MySQL", "Git", "Agile/Scrum", "Windsurf", "Cursor"],
    description:
      "Database management, development methodologies, and AI-powered tools",
    color: "from-orange-500 to-orange-700",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-500/30",
    hoverBorderColor: "hover:border-orange-400/80",
    shadow: "shadow-[0_0_15px_rgba(249,115,22,0.15)]",
    hoverShadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]",
  },
];
