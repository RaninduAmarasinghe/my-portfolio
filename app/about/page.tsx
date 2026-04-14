"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaJava, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiPostman, SiNextdotjs  } from "react-icons/si";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="relative min-h-screen text-white px-6 md:px-24 py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">

    
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

     
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/50" />

      
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

        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Who I Am
        </h2>

        <p className="text-gray-400 leading-relaxed">
         I’m a Software Engineering graduate focused on building backend systems that solve real-world problems.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I work mainly with Java and Spring Boot, and I enjoy developing scalable applications while exploring modern technologies like AI.
        </p>

        <p className="text-gray-400 leading-relaxed">
          I’m continuously improving my skills by building practical projects and learning new tools, with a strong focus on performance, automation, and backend architecture.
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
          <Skill icon={<SiNextdotjs />} name="Next.js" />
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
            desc="Smart system monitoring and automation platform using Spring Boot, n8n, and Telegram to manage CPU, storage, and background processes in real time."
             link="https://github.com/RaninduAmarasinghe/home-server-guardian.git"
            
          />
          <Project
            title="Sentinel Vault AI"
            desc="A local-first, privacy-focused RAG system for secure document analysis using Spring Boot, Ollama 3.2, and n8n."
             link="https://github.com/RaninduAmarasinghe/sentinel-vault-ai.git"
          />

          <Project
            title="Auradocs AI"
            desc="An AI-powered API documentation and dynamic mocking engine using Spring Boot, MongoDB, and local LLMs (Ollama)."
             link="https://github.com/RaninduAmarasinghe/auradocs-ai-mock-engine.git"
          />

           <Project
            title="Ai Resume Analyzer"
            desc="AI-powered resume screening backend built with Spring Boot and Spring AI, using local LLMs (Ollama) to analyze resume–job description match and generate improvement insights."
             link="https://github.com/RaninduAmarasinghe/ai-resume-screener.git"
          />

           <Project
            title="NPC Verse AI"
            desc="NPC-Verse AI is a specialized backend framework built with Spring Boot designed to bring non-player characters to life using local Large Language Models (LLMs). By leveraging Ollama and Llama 3.2, this project enables real-time, context-aware, and personality-driven conversations with NPCs without relying on external APIs."
             link="https://github.com/RaninduAmarasinghe/npcverse-ai.git"
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
function Project({ title, desc, link }: { title: string; desc: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group p-6 
      rounded-2xl
      bg-white/[0.03]
      hover:bg-white/[0.06]
      transition-all duration-300
      cursor-pointer block
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
    </a>
  );
}