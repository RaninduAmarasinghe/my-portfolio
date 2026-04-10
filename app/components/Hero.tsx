"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-[#0d0d0d] text-white overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero.jpg"
        alt="Ranindu"
        fill
        priority
        className="object-cover opacity-60 grayscale"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-20 top-1/2 -translate-y-1/2 z-10"
      >
        <h1 className="text-6xl font-semibold leading-tight tracking-tight">
          Ranindu <br /> Amarasinghe
        </h1>

        <p className="text-gray-400 mt-4 text-sm tracking-wide">
          Backend Developer
        </p>

        <div className="w-12 h-[2px] bg-white mt-4 mb-6"></div>

        {/* Socials */}
        <div className="flex gap-5 text-gray-400 text-lg">
          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub className="hover:text-white transition cursor-pointer" />
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="hover:text-white transition cursor-pointer" />
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute right-20 top-1/2 -translate-y-1/2 max-w-md z-10 
        backdrop-blur-sm bg-white/5 p-6 rounded-xl"
      >
        <p className="mb-2 text-sm text-gray-400">- Introducing</p>

        <h2 className="text-2xl text-white font-medium leading-snug mb-4">
          Backend Developer, <br />
          based in Sri Lanka.
        </h2>

        <p className="text-sm mb-6 leading-relaxed text-gray-400">
          Passionate Software Engineering graduate focused on building scalable backend systems.
          I specialize in Java and Spring Boot, and I enjoy integrating modern AI technologies
          to create smart and efficient solutions.
        </p>

        <a
          href="#about"
          className="flex items-center gap-2 text-white hover:gap-3 transition-all duration-300"
        >
          My story →
        </a>
      </motion.div>

    </div>
  );
}