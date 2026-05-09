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
            JIHAD HOSEN <span className="animate-bounce inline-block">👋</span>
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

        <Card className="relative bg-[#0b0d1c]/80 backdrop-blur-xl border border-cyan-400/20 p-8 w-[360px] h-[420px] flex justify-center items-center overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.12)] rounded-[30px]">

          {/* Glow Effects */}
          <div className="absolute -top-20 -left-20 w-52 h-52 bg-cyan-400/20 blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-52 h-52 bg-blue-500/20 blur-[100px]" />

          <div className="relative z-10 flex justify-center items-center">

            {/* Main Profile Image */}
            <div className="relative animate-[float_4s_ease-in-out_infinite]">

              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full" />

              {/* Image */}
              <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-[0_0_35px_rgba(0,255,255,0.35)]">
                <img
                  src="/profile.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Experience Card */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl text-xs text-white shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-cyan-300 font-bold text-lg">6+</p>
              <p className="text-gray-300">Month Experience</p>
            </div>

            {/* Problems Card */}
            <div className="absolute -right-10 top-3 bg-white/10 backdrop-blur-xl border border-white/10 px-4 -mx-6 py-3 rounded-2xl text-xs text-white shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-cyan-300 font-bold text-lg">20</p>
              <p className="text-gray-300">Problems Solved</p>
            </div>

            {/* Projects Card */}
            <div className="absolute bottom-0 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl text-xs text-white shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-cyan-300 font-bold text-lg text-center">10+</p>
              <p className="text-gray-300">Projects Completed</p>
            </div>
          </div>

          {/* Floating Animation */}
          <style jsx>{`
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-12px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  `}</style>
        </Card>
      </section>
    </main>
  );
}
