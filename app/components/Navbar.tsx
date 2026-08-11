"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-white"
        >
          RA<span className="text-[#9BE51D]">.</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-xs text-gray-400">
          <Link
            href="/about"
            className="hover:text-white transition-colors"
          >
            About
          </Link>

          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="mailto:hello@ranindu.dev"
          className="
            flex items-center gap-1
            px-4 py-2
            rounded-full
            border border-white/20
            text-xs text-gray-300
            hover:text-white
            hover:border-white/40
            transition-all
          "
        >
          Let's talk
          <span className="text-[#9BE51D]">↗</span>
        </a>
      </div>
    </header>
  );
}