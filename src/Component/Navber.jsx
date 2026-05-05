"use client";

import { useState } from "react";
import {
  HiHome,
  HiCode,
  HiAcademicCap,
  HiCollection,
  HiMail,
  HiDotsHorizontal,
  HiMenu,
  HiX,
} from "react-icons/hi";

const navItems = [
  { name: "Home", icon: HiHome, color: "text-yellow-400" },
  { name: "Tech Stack", icon: HiCode, color: "text-cyan-400" },
  { name: "Qualification", icon: HiAcademicCap, color: "text-purple-400" },
  { name: "Projects", icon: HiCollection, color: "text-pink-400" },
  { name: "Contact Me", icon: HiMail, color: "text-green-400" },
  { name: "More", icon: HiDotsHorizontal, color: "text-orange-400" },
];

export default function Navber() {
  const [active, setActive] = useState("Home");
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-4 left-0 w-full flex justify-center z-50 px-4">
      <nav
        className="w-full max-w-5xl flex items-center justify-between
        bg-white/5 backdrop-blur-xl border border-white/10
        rounded-full px-4 md:px-6 py-3 shadow-lg"
      >
        {/* LOGO */}
        <div className="text-white font-bold text-lg">A</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-sm transition-all duration-300
                ${
                  active === item.name
                    ? "bg-white/10 text-white shadow-inner"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Icon className={`text-lg ${item.color}`} />
                {item.name}
              </button>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="absolute top-20 w-full max-w-5xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-left transition
                  ${
                    active === item.name
                      ? "bg-white/10 text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className={`text-lg ${item.color}`} />
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}