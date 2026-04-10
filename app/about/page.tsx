"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen text-white px-6 md:px-24 py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">

      {/* 🔙 BACK BUTTON */}
      <div className="absolute top-6 left-6 md:left-24 z-20">
        <Link
          href="/"
          className="
          flex items-center gap-2 px-4 py-2 
          bg-white/[0.04] backdrop-blur-xl 
          rounded-full text-sm text-gray-400
          hover:text-white hover:bg-white/[0.08] 
          transition-all duration-300 group
          "
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition" />
          Back
        </Link>
      </div>

      {/* 🌫️ Soft Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      {/* 🌫️ Apple Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.06),transparent_50%)]" />

      {/* ABOUT */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="
        max-w-3xl mb-24 relative z-10 space-y-6
        "
      >
        <p className="text-sm text-gray-500">About</p>

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Who I Am
        </h2>

        <p className="text-gray-400 leading-relaxed">
          I am a Software Engineering graduate passionate about building backend systems that solve real-world problems.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I specialize in Java and Spring Boot, and I enjoy integrating modern AI technologies to create efficient and scalable solutions.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Currently focused on performance optimization, automation, and backend architecture.
        </p>
      </motion.div>

      {/* SKILLS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mb-24 relative z-10"
      >
        <p className="text-sm text-gray-500 mb-6">Skills</p>

        <div className="flex flex-wrap gap-3 max-w-4xl">
          <Skill icon={<FaJava />} name="Java" />
          <Skill icon={<SiSpringboot />} name="Spring Boot" />
          <Skill icon={<FaReact />} name="React" />
          <Skill icon={<SiMongodb />} name="MongoDB" />
          <Skill icon={<FaDocker />} name="Docker" />
          <Skill icon={<FaGitAlt />} name="Git" />
          <Skill icon={<SiPostman />} name="Postman" />
        </div>
      </motion.div>

      {/* PROJECTS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10"
      >
        <p className="text-sm text-gray-500 mb-6">Projects</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl">
          <Project
            title="Home Server Guardian"
            desc="Smart monitoring system using Spring Boot, n8n, and Telegram."
          />
          <Project
            title="Sentinel Vault AI"
            desc="Privacy-focused RAG system using Spring Boot and Ollama."
          />
          <Project
            title="BusBuddy"
            desc="Real-time transport tracking system using WebSocket and MongoDB."
          />
          <Project
            title="Auradocs AI"
            desc="AI-powered API documentation and mock engine."
          />
        </div>
      </motion.div>

    </section>
  );
}

/* ---------- SKILL ---------- */
function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div
      className="
      flex items-center gap-2 px-4 py-2 
      rounded-full 
      text-sm text-gray-300
      bg-white/[0.03]
      hover:bg-white/[0.08]
      transition-all duration-300
      "
    >
      {icon}
      {name}
    </div>
  );
}

/* ---------- PROJECT ---------- */
function Project({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="
      group p-6 
      rounded-2xl
      bg-white/[0.03]
      hover:bg-white/[0.06]
      transition-all duration-300
      cursor-pointer
      "
    >
      <h3 className="text-white text-lg font-medium mb-2">
        {title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed">
        {desc}
      </p>

      <div className="mt-4 text-xs text-gray-500 group-hover:text-gray-300 transition">
        View project →
      </div>
    </div>
  );
}