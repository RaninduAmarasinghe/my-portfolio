"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      className="relative min-h-screen w-full text-white overflow-hidden flex items-center bg-black"
    >
      {/* Background */}
      <Image
        src="/hero.jpg"
        alt="Ranindu"
        fill
        priority
        className="object-cover opacity-85 grayscale brightness-110 contrast-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.05),transparent_40%)]" />

      {/* CONTENT */}
      <div
        className="
        relative z-10 w-full px-6 md:px-16 lg:px-24
        flex flex-col lg:flex-row  
        items-center 
        justify-center lg:justify-between 
        gap-12 lg:gap-24 
        py-16 lg:py-0
      "
      >
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-md lg:max-w-2xl"
        >
          {/* Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 text-xs text-gray-200">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Available for work
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-semibold leading-tight">
            Ranindu <br className="hidden lg:block" />
            Amarasinghe
          </h1>

          {/* Subtitle */}
          <p className="text-gray-300 mt-4 text-sm lg:text-lg">
           Java & Spring Boot developer focused on scalable architecture, performance, and AI integration
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start">
            <a
              href="/Ranindu_Amarasinghe_Trainee_Software_Engineer.pdf"
              download
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition"
            >
              Download CV
            </a>

            <Link
              href="/about"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 text-sm hover:bg-white/20 transition"
            >
              About me
            </Link>
          </div>

          {/* Socials */}
          <div className="flex justify-center lg:justify-start gap-6 text-lg text-gray-300 mt-8">
            <a
              href="https://github.com/RaninduAmarasinghe"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ranindu-amarasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          w-full max-w-md  
          backdrop-blur-xl 
          bg-white/[0.06] 
          rounded-2xl lg:rounded-3xl 
          p-6 lg:p-8
          border border-white/[0.08]
        "
        >
          {/* Title */}
          <h2 className="text-lg lg:text-2xl font-medium mb-3">
            Backend Developer crafting scalable & AI-powered systems
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            I build high-performance backend systems using Java and Spring Boot, focused on scalability, automation, and integrating AI into real-world applications.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {["Java", "Spring Boot", "MongoDB", "n8n", "AI", "NextJs"].map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-4" />

          {/* Stats */}
      {/*    <div className="flex gap-6 text-xs text-gray-300 mb-4">
            <div>
              <p className="text-white font-medium">4+</p>
              <p className="text-gray-400">Projects</p>
            </div>
            <div>
              <p className="text-white font-medium">1+</p>
              <p className="text-gray-400">Years Exp</p>
            </div>
          </div> */}

          {/* Current Work */}
          <div className="text-xs text-gray-300 mb-4">
            <p className="text-gray-400">Currently building</p>
            <p className="text-white">repo-insight-rag
Public
</p>
          </div>

          {/* CTA */}
       <a
  href="https://github.com/RaninduAmarasinghe?tab=repositories"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xs text-gray-400 hover:text-white transition"
>
  View my work →
</a>
        </motion.div>
      </div>
    </div>
  );
}