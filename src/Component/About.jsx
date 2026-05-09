"use client";

import { Card, Button } from "@heroui/react";

import {
    HiBriefcase,
    HiMiniPhone,
    HiOutlineClipboardDocumentList,
} from "react-icons/hi2";

import { HiArrowDown, HiOutlineDocumentDownload } from "react-icons/hi";
import { FaRegFile } from "react-icons/fa";

export default function About() {
    return (
    <div>      
            <section
            id="about"
            className="
      bg-[#05060e]
      text-white
      flex
      items-center
      px-6
      md:px-20
      overflow-hidden
      relative
    "
        >
            
            {/* BACKGROUND LIGHT */}
            <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[140px]" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[140px]" />

            <div
                className="max-w-7xl  mx-auto      w-full        grid
        lg:grid-cols-2
        gap-20
        items-center
        relative
        z-10
      "
            >
                {/* LEFT SIDE */}
                <div className="flex justify-center">
                    <div className="relative">
                        {/* IMAGE GLOW */}
                        <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-[35px]" />

                        {/* IMAGE CONTAINER */}
                        <div
                            className="
              relative
              `w-[300px]`
             ` h-[400px]`
              `md:w-[360px]`
              `md:h-[480px]`
              rounded-[35px]
              overflow-hidden
              border
              border-white/10
              bg-[#0c1220]
              shadow-[0_0_40px_rgba(0,255,255,0.08)]
            "
                        >
                            {/* IMAGE */}
                            <img
                                src="/profile.png"
                                alt="Developer"
                                fill
                                priority
                                className="
                  object-cover
                  scale-[1.02]
                "
                            />

                            {/* OVERLAY */}
                            <div className="absolute inset-0 `bg-gradient-to-t` from-[#05060e]/70 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    {/* SMALL TITLE */}
                    <p
                        className="
            text-cyan-400
            uppercase
            tracking-[5px]
            text-sm
            font-medium
          "
                    >
                        About Me
                    </p>

                    {/* MAIN HEADING */}
                    <h2
                        className="
            text-4xl
            md:text-5xl
            font-bold
            mt-4
            leading-tight
          "
                    >
                        Why Hire Me For Your
                        <br />
                        Next <span className="text-cyan-400">Project?</span>
                    </h2>

                    {/* TEXT */}
                    <p
                        className="
            text-gray-400
            leading-8
            mt-6
            text-[17px]
            max-w-2xl
          "
                    >
                        I’m a passionate Full Stack Developer who builds modern,
                        scalable and user-friendly applications with premium UI and
                        powerful backend architecture.
                    </p>

                    {/* CARDS */}
                    <div
                        className="
            grid
            grid-cols-1
            sm:grid-cols-3
            gap-5
            mt-10
          "
                    >
                        {/* CARD 1 */}
                        <Card
                            className="
              `bg-white/[0.03]`
              border
              border-white/10
              rounded-[28px]
              p-6
              flex
              flex-col
              items-center
              justify-center
              text-center
              backdrop-blur-xl
              `h-[170px]`
              hover:-translate-y-2
              transition-all
              duration-300
            "
                        >
                            <HiBriefcase className="text-cyan-400 text-4xl mb-4" />

                            <h3 className="font-semibold text-lg">Experience</h3>

                            <p className="text-gray-400 text-sm mt-2">
                                6 Month Working
                            </p>
                        </Card>

                        {/* CARD 2 */}
                        <Card
                            className="
              `bg-white/[0.03]`
              border
              border-white/10
              rounded-[28px]
              p-6
              flex
              flex-col
              items-center
              justify-center
              text-center
              backdrop-blur-xl
              `h-[170px]`
              hover:-translate-y-2
              transition-all
              duration-300
            "
                        >
                            <HiOutlineClipboardDocumentList className="text-pink-400 text-4xl mb-4" />

                            <h3 className="font-semibold text-lg">Projects</h3>

                            <p className="text-gray-400 text-sm mt-2">
                                10+ Completed
                            </p>
                        </Card>

                        {/* CARD 3 */}
                        <Card
                            className="
              `bg-white/[0.03]`
              border
              border-white/10
              rounded-[28px]
              p-6
              flex
              flex-col
              items-center
              justify-center
              text-center
              backdrop-blur-xl
              `h-[170px]`
              hover:-translate-y-2
              transition-all
              duration-300
            "
                        >
                            <HiMiniPhone className="text-green-400 text-4xl mb-4" />

                            <h3 className="font-semibold text-lg">Support</h3>

                            <p className="text-gray-400 text-sm mt-2">
                                Online 24/7
                            </p>
                        </Card>
                    </div>

                    {/* EXTRA TEXT */}
                    <div className="mt-10 space-y-5">
                        <p className="text-gray-300 leading-8">
                            Skilled in React.js, Next.js, Express.js, MongoDB,
                            Node.js backend systems.
                        </p>

                        <p className="text-gray-500 leading-8">
                            Focused on building premium UI/UX with optimized and
                            high-performance architecture.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-12">
                      
                        <Button radius="full" className="flex justify-center items-center gap-3 group `h-[58px]` py-5 px-8 mb-5 bg-white/5 border border-cyan-400/30 text-white text-base font-medium backdrop-blur-xl transition-all duration-300 shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400/10 rounded-2xl" startContent={<HiOutlineDocumentDownload className=" text-xl text-cyan-400 transition-all duration-300 group-hover:animate-bounce " />} endContent={<div className=" w-7 h-7 rounded-full bg-cyan-400 flex items-center justify-center text-black transition-all duration-300 group-hover:translate-y-1 " > <HiArrowDown className="text-sm" /> </div>}  >
                              <FaRegFile/>Download Resume </Button>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}