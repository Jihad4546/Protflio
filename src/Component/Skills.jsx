// app/page.jsx
import { SiHtml5, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiDocker, SiKubernetes } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const  home= {
  frontend: [
    { name: "HTML5", icon: SiHtml5, level: "Expert" },
    { name: "NextJS", icon: SiNextdotjs, level: "Intermediate" },
    { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate" },
    { name: "JavaScript", icon: SiJavascript, level: "Intermediate" },
    { name: "ReactJS", icon: SiReact, level: "Intermediate" },
  ],
  backend: [
    { name: "NodeJS", icon: SiNodedotjs, level: "Learing" },
    { name: "SQL", icon: FaDatabase, level: "Learing" },
    { name: "ExpressJS", icon: SiExpress, level: "Learing" },
    { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
  ],
};

export default function Skills() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#050816] to-[#0a0f2c] text-white flex flex-col items-center py-16">
      
      <h1 className="text-4xl font-bold mb-2">Skills</h1>
      <p className="text-gray-400 mb-10">My Technical Level</p>

      <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl px-4">
        
        <SkillCard title="Frontend Developer" data={home.frontend} />
        <SkillCard title="Backend Developer" data={home.backend} />

      </div>
    </main>
  );
}

function SkillCard({ title, data }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
      
      <h2 className="text-xl font-semibold mb-6">{title}</h2>

      <div className="grid grid-cols-2 gap-4">
        {data.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div key={i} className="flex items-start gap-3">
              
              <div className="text-blue-400 mt-1">
                <Icon size={18} />
              </div>

              <div>
                <p className="text-sm font-medium">{skill.name}</p>
                <p className="text-xs text-gray-400">{skill.level}</p>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}