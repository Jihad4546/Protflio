"use client";

import {
  Code2,
  Atom,
  Zap,
  FileCode,
  Database,
  CodeXml,
  GitBranch,
  Box,
  UserCheck,
} from "lucide-react";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiDaisyui } from "react-icons/si";

const techStack = [
  { name: "JavaScript", icon: Code2, color: "text-yellow-400" },
  { name: "React", icon: Atom, color: "text-cyan-400" },
  { name: "Next.js", icon: Zap, color: "text-white" },
  { name: "MongoDB", icon: Database, color: "text-green-400" },
  { name: "Tailwind", icon: Code2, color: "text-teal-400" },
  { name: "Git", icon: GitBranch, color: "text-orange-500" },
  { name: "HTMl 5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS 3", icon: FaCss3Alt, color: "text-orange-500" },
  { name: "Hero Ui", icon: Box, color: "text-orange-500" },
  { name: "Daisyui", icon: SiDaisyui, color: "text-orange-500" },
  { name: "Figma", icon: FiFigma, color: "text-orange-500" },
  { name: "Better Auth", icon: UserCheck, color: "text-orange-500" },
];

export default function Technologies() {
  return (
    <section className="py-10 bg-linear-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">

        <h2 className="text-xl font-semibold">Technologies</h2>
        <p className="text-gray-400 text-sm">My Tech Stack</p>

        <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 mt-6">
          {techStack.map((tech, i) => {
            const Icon = tech.icon;

            return (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-3 rounded-lg 
                bg-white/5 border border-white/10 
                hover:bg-white/10 hover:scale-105 transition"
              >
                <Icon size={24} className={tech.color} />
                <p className="text-[10px] mt-1 text-gray-300">
                  {tech.name}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}