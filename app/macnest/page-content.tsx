"use client";

import Image from "next/image";
import appIcon from "../../assets/macnest-icon.png";
import macnestLogo from "../../assets/macnest-logo.png";
import dashboard from "../../assets/macnestdashboard.png";
import dashboardLight from "../../assets/macnestdashboardlightmode.png";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Box,
  CircleHelp,
  Clock3,
  Command,
  Layers3,
  Moon,
  RefreshCw,
  ScanSearch,
  Sun,
} from "lucide-react";

const features = [
  { icon: Layers3, title: "Dashboard", description: "See your development environment and package activity at a glance." },
  { icon: Box, title: "Installed packages", description: "View and manage the development packages on your Mac." },
  { icon: RefreshCw, title: "Updates", description: "Review available package updates and manage your update workflow." },
  { icon: Clock3, title: "Activity tracking", description: "Review recent package management activity." },
  { icon: ScanSearch, title: "System scan", description: "Discover development tools available in your local environment." },
  { icon: Command, title: "Mac-inspired interface", description: "Work in a clean desktop interface with light and dark appearances." },
];

const technologies = ["Tauri", "React", "TypeScript", "Rust", "Homebrew"];

export default function MacNestPage() {
  const [appearance, setAppearance] = useState<"dark" | "light">("dark");
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? {}
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, amount: 0.12 },
        transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] as const },
      };
  const heroVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.075 } },
  };
  const itemVariants = reduceMotion
    ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } }
    : { hidden: { opacity: 0.88, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] as const } } };
  const featureVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.05 } },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080909] pb-20 text-white">
      <section className="mx-auto max-w-[1200px] px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12 lg:pb-24">
        <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: 0.35 }} variants={heroVariants} className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div variants={itemVariants}><Image src={appIcon} alt="MacNest app icon" width={76} height={76} className="mb-7 rounded-[22px] shadow-[0_12px_45px_rgba(0,0,0,0.42)]" priority /></motion.div>
          <motion.p variants={itemVariants} className="text-[11px] font-medium uppercase tracking-[0.22em] text-[#9BE51D]">A macOS developer tool</motion.p>
          <motion.h1 variants={itemVariants} className="mt-5 text-4xl font-medium tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px] lg:leading-[1.04]">Your development environment.<br className="hidden sm:block" /> Under control.</motion.h1>
          <motion.p variants={itemVariants} className="mt-6 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg sm:leading-8">Discover packages, manage development tools, and keep your Mac organized — all from one thoughtfully designed desktop application.</motion.p>
          <motion.div variants={itemVariants} className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <a href="https://github.com/RaninduAmarasinghe" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9BE51D] px-6 text-sm font-semibold text-[#10140a] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D]">GitHub profile <ArrowRight size={16} aria-hidden="true" /></a>
            <a href="#features" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm text-gray-200 transition hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D]">Explore features</a>
          </motion.div>
        </motion.div>

        <motion.figure initial={reduceMotion ? false : { opacity: 0.9, y: 10, scale: 0.995 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: false, amount: 0.12 }} transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="mx-auto mt-14 max-w-[1100px] sm:mt-20">
          <div className="overflow-hidden rounded-xl border border-white/[0.14] bg-[#111313] shadow-[0_30px_100px_rgba(0,0,0,0.5)] sm:rounded-2xl">
            <div className="flex h-10 items-center gap-2 border-b border-white/[0.08] px-3 sm:px-4">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[11px] text-gray-500">MacNest</span>
              <div role="group" aria-label="Choose screenshot appearance" className="ml-auto inline-flex rounded-full border border-white/[0.1] p-0.5">
                {(["dark", "light"] as const).map((mode) => (
                  <button key={mode} type="button" aria-pressed={appearance === mode} onClick={() => setAppearance(mode)} className={`rounded-full px-2.5 py-1 text-[10px] capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BE51D] sm:px-3 ${appearance === mode ? "bg-white/[0.12] text-white" : "text-gray-500 hover:text-gray-200"}`}>
                    {mode}
                  </button>
                ))}
              </div>
            </div>
            <Image src={appearance === "light" ? dashboardLight : dashboard} alt={`MacNest desktop application dashboard in ${appearance} appearance`} priority className="h-auto w-full" />
          </div>
          <figcaption className="mt-4 text-center text-xs text-gray-500 sm:text-sm">Explore the MacNest workspace in light and dark appearances.</figcaption>
        </motion.figure>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.018]">
        <motion.div {...reveal} initial={reduceMotion ? false : { opacity: 0.88, y: 8 }} className="mx-auto grid max-w-[1100px] gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#9BE51D]">Meet MacNest</p><h2 className="mt-4 max-w-sm text-3xl font-medium tracking-[-0.04em] sm:text-4xl">A better way to manage your Mac.</h2></div>
          <div className="space-y-4 text-sm leading-7 text-gray-400 sm:text-base sm:leading-8"><p>MacNest is a desktop application designed to simplify package management on macOS. Built with Tauri, React, TypeScript, and Rust, it pairs a macOS-inspired interface with the power of Homebrew.</p><p>Discover packages, manage installed tools, review updates, and keep your development environment organized through a graphical interface.</p></div>
        </motion.div>
      </section>

      <section id="features" className="mx-auto max-w-[1100px] scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <motion.div {...reveal} initial={reduceMotion ? false : { opacity: 0.88, y: 8 }} className="max-w-2xl"><p className="text-xs uppercase tracking-[0.18em] text-[#9BE51D]">Made for your workflow</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Everything your development environment needs.</h2><p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">The essential tools for discovering, managing, and maintaining your macOS development environment.</p></motion.div>
        <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: 0.08 }} variants={featureVariants} className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <motion.article key={title} variants={itemVariants} whileHover={reduceMotion ? undefined : { y: -2 }} className="group rounded-xl border border-white/[0.09] bg-white/[0.018] p-5 transition-colors duration-300 hover:border-[#9BE51D]/30 hover:bg-white/[0.035] sm:p-6">
              <Icon size={19} strokeWidth={1.7} className="text-[#9BE51D]" aria-hidden="true" />
              <h3 className="mt-5 text-sm font-medium text-gray-100">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{description}</p>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="border-y border-white/[0.08] bg-white/[0.018]">
        <motion.div {...reveal} initial={reduceMotion ? false : { opacity: 0.88, y: 8 }} className="mx-auto grid max-w-[1100px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-12">
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#9BE51D]">A considered desktop experience</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">Designed for the Mac.</h2><p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">A focused desktop experience with a familiar macOS-inspired interface, thoughtful interactions, and light and dark appearances.</p></div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/[0.09] p-5"><Sun size={18} className="text-[#9BE51D]" aria-hidden="true" /><p className="mt-4 text-sm text-gray-200">Light appearance</p><p className="mt-1 text-xs leading-5 text-gray-500">A clear, calm workspace.</p></div>
            <div className="rounded-xl border border-white/[0.09] p-5"><Moon size={18} className="text-[#9BE51D]" aria-hidden="true" /><p className="mt-4 text-sm text-gray-200">Dark appearance</p><p className="mt-1 text-xs leading-5 text-gray-500">Comfortable in low light.</p></div>
            <div className="col-span-2 flex items-center gap-4 rounded-xl border border-white/[0.09] p-5"><Activity size={18} className="shrink-0 text-[#9BE51D]" aria-hidden="true" /><p className="text-sm leading-6 text-gray-400">Developer-focused workflows in a lightweight desktop architecture powered by Tauri and Rust.</p></div>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <motion.div {...reveal} initial={reduceMotion ? false : { opacity: 0.88, y: 8 }} className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs uppercase tracking-[0.18em] text-[#9BE51D]">The stack</p><h2 className="mt-3 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">Built with modern technology.</h2></div><div className="flex flex-wrap gap-2">{technologies.map((technology, index) => <motion.span key={technology} initial={reduceMotion ? false : { opacity: 0.9, y: 6 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.35 }} transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.045 }} className="rounded-full border border-white/[0.12] px-4 py-2 text-xs text-gray-300">{technology}</motion.span>)}</div></motion.div>
      </section>

      <section className="mx-auto max-w-[1100px] px-5 pb-12 sm:px-8 lg:px-12">
        <motion.div {...reveal} initial={reduceMotion ? false : { opacity: 0.88, y: 8 }} className="rounded-2xl border border-white/[0.1] bg-white/[0.025] px-6 py-10 text-center sm:px-12 sm:py-14">
          <Image src={macnestLogo} alt="MacNest" width={64} height={64} className="mx-auto mb-5 rounded-2xl" />
          <h2 className="mx-auto max-w-2xl text-3xl font-medium tracking-[-0.045em] sm:text-4xl">Ready to organize your development environment?</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-400">Explore MacNest and discover a more convenient way to manage development tools on your Mac.</p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://github.com/RaninduAmarasinghe" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9BE51D] px-6 text-sm font-semibold text-[#10140a] transition hover:bg-white">Visit GitHub profile <ArrowRight size={16} aria-hidden="true" /></a><a href="mailto:hello@ranindu.dev" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm text-gray-200 transition hover:border-white/35">Contact <CircleHelp size={15} aria-hidden="true" /></a></div>
          <p className="mt-5 text-xs text-gray-500">For anything private, email <a className="text-gray-300 underline decoration-white/20 underline-offset-4 hover:text-white" href="mailto:hello@ranindu.dev">hello@ranindu.dev</a>.</p>
        </motion.div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-gray-600">Available features depend on the current implementation, Homebrew, and your local environment. Package installation, update detection, progress reporting, and system scanning may have environment-specific limitations.</p>
      </section>
    </main>
  );
}
