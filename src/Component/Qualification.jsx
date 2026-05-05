"use client";

import { useState } from "react";
import { FaGraduationCap, FaBriefcase, FaCalendarAlt } from "react-icons/fa";

export default function Qualification() {
    const [activeTab, setActiveTab] = useState("education");

    const educationData = [
        {
            title: "SSC",
            institute: "Nobarun Biddanicaton High School",
            year: "2007 - 2017",
        },
        {
            title: "HSC",
            institute: "Shohit Shriti Gov. collage",
            year: "2017 - 2019",
        },
        {
            title: "BA Honours in Economics",
            institute: "National University",
            year: "2022 - Present",
        },
    ];

    const experienceData = [
        {
            title: "Frontend Development Trainee",
            institute: "Self-learning / Online Courses",
            year: "2024 - Present"
        },
        {
            title: "Frontend Developer (Learning & Projects)",
            institute: "Personal Projects / Self Practice",
            year: "2024 - Present"
        }
    ];

    const data = activeTab === "education" ? educationData : experienceData;

    return (
        <section className="w-full py-16 bg-black text-white flex flex-col items-center px-4">
            <h2 className="text-3xl font-semibold">Qualification</h2>
            <p className="text-gray-400 mb-8 text-center">My personal journey</p>

            {/* Tabs */}
            <div className="flex gap-4 sm:gap-6 mb-10 flex-wrap justify-center">
                <button
                    onClick={() => setActiveTab("experience")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeTab === "experience"
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <FaBriefcase />
                    Experience
                </button>

                <button
                    onClick={() => setActiveTab("education")}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${activeTab === "education"
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white"
                        }`}
                >
                    <FaGraduationCap />
                    Education
                </button>
            </div>

            {/* Timeline */}
            <div className="relative w-full max-w-3xl">
                {/* Line */}
                <div className="absolute left-4 sm:left-1/2 top-0 `w-[2px]` h-full bg-gray-600 sm:transform sm:-translate-x-1/2"></div>

                <div className="flex flex-col gap-10">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex w-full ${index % 2 === 0
                                ? "sm:justify-start"
                                : "sm:justify-end"
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 sm:left-1/2 top-6 sm:top-1/2 sm:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-2 border-black"></div>

                            {/* Card */}
                            <div className="w-full sm:w-1/2 pl-12 sm:px-6">
                                <div className="bg-gray-900 p-4 rounded-xl shadow-lg">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.institute}</p>
                                    <p className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                                        <FaCalendarAlt /> {item.year}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}