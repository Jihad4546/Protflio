import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full pt-20 border-t border-white/10 bg-[#05060e] text-white px-6 md:px-20 py-12">

  <div className="grid md:grid-cols-3 gap-10 items-center">

    {/* LEFT */}
    <div>
      <h2 className="text-2xl font-bold text-cyan-300">
        JIHAD HOSEN
      </h2>
      <p className="text-gray-400 text-sm mt-2">
        Web Designer • Web Developer • Problem Solver
      </p>
    </div>

    {/* CENTER */}
    <div className="flex flex-col items-center gap-2 text-gray-400 text-sm">
      <p>📍 Dhaka, Bangladesh</p>
      <p>📧 hasanjihad4546@gmail.com</p>
      <p>💬 Available for freelance work</p>
    </div>

    {/* RIGHT SOCIAL */}
    <div className="flex justify-center md:justify-end gap-4">

      <a
        href="https://github.com/yourusername"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-cyan-400 hover:scale-110 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-cyan-400 hover:scale-110 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:hasanjihad4546@gmail.com"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-cyan-400 hover:scale-110 transition"
      >
        <FaEnvelope />
      </a>

      <a
        href="https://wa.me/8801XXXXXXXXX"
        target="_blank"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/10 hover:border-green-400 hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

    </div>

  </div>

  {/* BOTTOM LINE */}
  <div className="text-center text-gray-500 text-xs mt-10 border-t border-white/10 pt-6">
    © {new Date().getFullYear()} Jihad Hosen. All Rights Reserved.
  </div>

</footer>
    );
};

export default Footer;