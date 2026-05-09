"use client";

import { Card, Button } from "@heroui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
    {
        title: "GameHub: The Ultimate Livestreaming Platform",
        desc: "Twitch clone with real-time chat, streaming, and dashboard features.",
        img: "/project1.png",
        tech: ["JavaScript", "React.js", "Tailwind CSS", "Daisy Ui"],
        live: "https://jocular-basbousa-85eb43.netlify.app/",
        github: "https://github.com/Jihad4546/A13-A6",
    },
    {
        title: "Google Docs 2.0: Real-Time Collaboration",
        desc: "Full-stack collaborative editor with live editing & comments.",
        img: "/project1.png",
        tech: ["TypeScript", "Next.js", "Tailwind CSS", "Firebase"],
        live: "https://jocular-basbousa-85eb43.netlify.app/",
        github: "https://github.com/Jihad4546/A13-A6",
    },
    {
        title: "Google Drive Clone: File Sharing Platform",
        desc: "Secure cloud storage with real-time updates & file sharing.",
        img: "/project1.png", 
        tech: ["Next.js", "React", "Node.js", "Clerk", "Tailwind CSS"],
        live: "https://jocular-basbousa-85eb43.netlify.app/",
        github: "https://github.com/Jihad4546/A13-A6",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="w-full py-28 bg-[#05060e] text-white px-6 md:px-20"
        >
            {/* HEADER */}
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold">
                    Projects
                </h2>
                <p className="text-gray-400 mt-2">Recent Projects</p>
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className="
              bg-white/4
              border border-white/10
              backdrop-blur-xl
              rounded-3xl
              overflow-hidden
              hover:-translate-y-3
              transition-all duration-300
              shadow-[0_0_40px_rgba(0,255,255,0.06)]
            "
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-56 overflow-hidden">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="
      absolute inset-0
      w-full h-full
      object-cover
      scale-105
      hover:scale-110
      transition duration-500
    "
                            />

                            {/* subtle overlay for premium look */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold leading-snug">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                                {project.desc}
                            </p>

                            {/* TECH TAGS */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="
                      text-xs
                      px-3 py-1
                      rounded-full
                      bg-white/10
                      border border-white/10
                      text-gray-300
                    "
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* BUTTONS */}
                          <div className="flex flex-col sm:flex-row gap-3 mt-6">

  {/* LIVE DEMO */}
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="w-full sm:w-auto"
  >
    <Button
      size="sm"
      className="
        w-full sm:w-auto
        relative overflow-hidden
        px-5 py-2
        rounded-full

        bg-white/10
        backdrop-blur-xl
        border border-cyan-400/30

        text-cyan-300
        font-medium

        transition-all duration-300
        hover:scale-105
        hover:bg-cyan-400/10
        hover:border-cyan-400
        hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
      "
      startContent={<FaExternalLinkAlt />}
    >
      Live Demo
    </Button>
  </a>

  {/* GITHUB */}
  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="w-full sm:w-auto"
  >
    <Button
      size="sm"
      className="
        w-full sm:w-auto
        relative overflow-hidden
        px-5 py-2
        rounded-full

        bg-white/5
        backdrop-blur-xl
        border border-white/15

        text-white
        font-medium

        transition-all duration-300
        hover:scale-105
        hover:bg-white/10
        hover:border-white/30
        hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
      "
      startContent={<FaGithub />}
    >
      GitHub
    </Button>
  </a>

</div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
}