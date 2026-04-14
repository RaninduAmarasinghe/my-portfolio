"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Hero() {
  const pathname = usePathname();

  return (
    <>
      {/*HERO*/}
      <div
        key={pathname}
        className="relative min-h-screen w-full text-white overflow-hidden flex items-center bg-black"
      >
        {/* Background */}
        <Image
          src="/hero.webp" // 🔥 convert your image to webp
          alt="Ranindu"
          fill
          priority
          quality={75}
          sizes="100vw"
          className="object-cover opacity-80 grayscale brightness-105 contrast-105"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.05),transparent_40%)]" />

        {/* CONTENT */}
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-24 py-16 lg:py-0">
          
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
            <p className="text-gray-300 mt-4 text-sm lg:text-lg max-w-xl">
              I build backend systems using Java and Spring Boot, and I’m constantly improving by working on real-world projects
            </p>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap gap-3 mt-5 justify-center lg:justify-start">
              <a
                href="/Ranindu_Amarasinghe_Trainee_Software_Engineer.pdf"
                download
                className="px-4 py-2 text-xs sm:text-sm rounded-full bg-white text-black font-medium shadow-md shadow-white/20 hover:scale-105 active:scale-95 transition"
              >
                Download CV
              </a>

              <Link
                href="/about"
                className="px-4 py-2 text-xs sm:text-sm rounded-full bg-white/15 border border-white/10 hover:bg-white/25 active:scale-95 transition"
              >
                About me
              </Link>
            </div>

            {/* Socials */}
            <div className="flex justify-center lg:justify-start gap-6 text-lg text-gray-300 mt-5">
              <a
                href="https://github.com/RaninduAmarasinghe"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 active:scale-95 transition duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/ranindu-amarasinghe/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white hover:scale-110 active:scale-95 transition duration-300"
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
            className="w-full max-w-md backdrop-blur-xl bg-white/[0.06] rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/[0.08]"
          >
            <h2 className="text-lg lg:text-3xl font-medium mb-4">
              Backend Developer
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              I build backend systems using Java and Spring Boot, focusing on scalability and real-world applications. I’m constantly learning and improving by working on practical projects and exploring new technologies.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {["Java", "Spring Boot", "Ollama", "n8n","Docker","Next.js","MongoDB"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="w-full h-px bg-white/10 my-4" />

            <div className="text-xs text-gray-300 mb-4">
              <p className="text-gray-400">Currently building</p>
              <p className="text-white">
                Developing a RAG-based system to analyze and understand code repositories
              </p>
            </div>

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

        {/* Scroll */}
        <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 animate-bounce">
          Scroll ↓
        </div>
      </div>

      {/* ================= CONTACT ================= */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative px-6 md:px-24 pt-24 pb-7 text-white bg-black"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.06),transparent_60%)]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Get in touch
          </h2>

          <p className="text-gray-400 mb-8">
            Open to internship, job, and freelance opportunities. Feel free to reach out.
          </p>

          <a
            href="mailto:hello@ranindu.dev"
            className="inline-block px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
          >
            hello@ranindu.dev
          </a>
        </div>

        <footer className="mt-16 text-center text-gray-500 text-xs border-t border-white/5 pt-6">
          <p>
            Designed & built by{" "}
            <a
              href="https://ranindu.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              Ranindu Amarasinghe
            </a>{" "}
            · 2026
          </p>
        </footer>
      </motion.section>
    </>
  );
}