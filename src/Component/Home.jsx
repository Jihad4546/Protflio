"use client";
import { useEffect, useRef, useState } from "react";
import { Button, Card } from "@heroui/react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Home() {
  const canvasRef = useRef(null);

  // roles
  const roles = ["Web Designer", "Web Developer", "Problem Solver"];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // TYPEWRITER EFFECT
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 50);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  // STAR BACKGROUND (same as yours)
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w, h, stars;

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;

      stars = Array.from({ length: 180 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2,
        a: Math.random(),
        d: Math.random() * 0.02,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);

      stars.forEach((s) => {
        s.a += s.d;
        if (s.a <= 0 || s.a >= 1) s.d *= -1;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);

    return () => window.removeEventListener("resize", init);
  }, []);

  return (
    <main className="relative  bg-[#05060e] text-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />

      <section className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-28 gap-12">
        <div className="max-w-xl">
          <p className="text-gray-400 text-sm">Hey, I'm</p>

          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Jihad Hosen <span className="animate-bounce inline-block">👋</span>
          </h1>

          {/* TYPEWRITER LINE */}
          <p className="text-gray-400 mt-3 text-lg">
            {text}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-gray-500 text-sm mt-4 leading-relaxed">
            Turning ideas into stunning websites 🌐 <br />
            Available for projects & collaborations 🤝
          </p>
          <div className="flex gap-3 mt-6">

            {/* LIVE DEMO */}
            <a href='' target="_blank" rel="noreferrer">
              <Button
                size="sm"
                className="
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
                Technologies
              </Button>
            </a>

            {/* GITHUB */}
            <a href='' target="_blank" rel="noreferrer">
              <Button
                size="sm"
                className="
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
                Contact Me
              </Button>
            </a>

          </div>
        </div>

        <Card className="bg-[#0b0d1c] border border-white/10 p-6 w-[320px] flex justify-center items-center">
          <div className="relative flex justify-center items-center">
            {/* Profile Circle */}
            <div className="w-40 h-40 rounded-full overflow-hidden border border-white/20">
              <img
                src="/2.jpg" // তোমার image path
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Experience (Left) */}
            <div className="absolute `left-[-60px]` top-[50%] -translate-y-1/2 bg-white/10 backdrop-blur px-3 py-2 rounded-lg text-xs text-white">
              3 Year of <br /> Experience
            </div>

            {/* Problems (Top Right) */}
            <div className="absolute -right-12.5 -top-2 bg-white/10 backdrop-blur px-3 py-2 rounded-lg text-xs text-white">
              <span className="font-bold">120</span> Problems
            </div>

            {/* Projects (Bottom) */}
            <div className="absolute -bottom-5 bg-white/10 backdrop-blur px-3 py-2 rounded-lg text-xs text-white">
              <span className="font-bold">150</span> Projects
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
