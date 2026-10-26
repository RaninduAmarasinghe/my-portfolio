"use client";

import Image from "next/image";
import appIcon from "../../assets/macnest-icon.png";
import macnestLogo from "../../assets/macnest-logo.png";
import dashboard from "../../assets/macnestdashboard.png";
import dashboardLight from "../../assets/macnestdashboardlightmode.png";
import MacNestDownloadButton from "./download-button";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  Box,
  CircleHelp,
  Clock3,
  Command,
  Download,
  FolderOpen,
  Layers3,
  Moon,
  RefreshCw,
  ScanSearch,
  Settings2,
  ShieldCheck,
  Sun,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

const features = [
  { icon: Layers3, title: "Dashboard", description: "See your development environment and package activity at a glance." },
  { icon: Box, title: "Installed packages", description: "View and manage the development packages on your Mac." },
  { icon: RefreshCw, title: "Updates", description: "Review available package updates and manage your update workflow." },
  { icon: Clock3, title: "Activity tracking", description: "Review recent package management activity." },
  { icon: ScanSearch, title: "System scan", description: "Discover development tools available in your local environment." },
  { icon: Command, title: "Mac-inspired interface", description: "Work in a clean desktop interface with light and dark appearances." },
];

const technologies = ["Tauri", "React", "TypeScript", "Rust", "Homebrew"];
const primaryDownloadButtonClass = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9BE51D] px-6 text-sm font-semibold text-[#10140a] transition duration-200 hover:-translate-y-0.5 hover:bg-[#b2ed4c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D] motion-reduce:transform-none motion-reduce:transition-none";

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
            <MacNestDownloadButton className={primaryDownloadButtonClass} />
            <a href="#features" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm text-gray-200 transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D] motion-reduce:transform-none motion-reduce:transition-none">Explore features</a>
          </motion.div>
          <motion.p variants={itemVariants} className="mt-4 text-xs text-gray-500">First time installing? <a href="#installation" className="text-gray-300 underline decoration-white/20 underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D]">View the setup guide</a></motion.p>
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

      <section id="installation" className="scroll-mt-24 border-y border-white/[0.08] bg-white/[0.018]">
        <motion.div initial={reduceMotion ? false : "hidden"} whileInView="visible" viewport={{ once: false, amount: 0.08 }} variants={featureVariants} className="mx-auto max-w-[1100px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <motion.div variants={itemVariants} className="max-w-3xl">
            <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">How to Install MacNest</h2>
            <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">macOS may require an additional approval before opening MacNest for the first time. Follow these steps to get started.</p>
            <p className="mt-5 text-sm leading-7 text-gray-500">Gatekeeper may block an app when macOS can’t verify its developer identity, code signature, or notarization status. Code signing and Apple notarization are separate checks: signing identifies the developer and protects the app’s integrity, while notarization is Apple’s automated review for known malicious content and signing issues. The specific warning depends on how an app was built and distributed.</p>
          </motion.div>

          <ol className="mt-9 divide-y divide-white/[0.09] border-y border-white/[0.09]">
            <motion.li variants={itemVariants} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7">
              <div className="flex items-center gap-3 sm:block"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#9BE51D]/25 bg-[#9BE51D]/[0.08] text-xs font-medium tabular-nums text-[#9BE51D]">01</span><Download size={17} className="text-gray-500 sm:hidden" aria-hidden="true" /></div>
              <div><div className="flex items-center gap-2"><Download size={17} className="hidden text-[#9BE51D] sm:block" aria-hidden="true" /><h3 className="text-base font-medium text-gray-100">Download MacNest</h3></div><ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-gray-400"><li>Click <MacNestDownloadButton label="Download for macOS" iconSize={13} className="inline-flex items-center gap-1 text-gray-200 underline decoration-white/20 underline-offset-4 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BE51D]" /> and open the downloaded MacNest DMG file.</li><li>Drag MacNest into the Applications folder if the installer provides this option.</li></ul></div>
            </motion.li>

            <motion.li variants={itemVariants} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7">
              <div className="flex items-center gap-3 sm:block"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#9BE51D]/25 bg-[#9BE51D]/[0.08] text-xs font-medium tabular-nums text-[#9BE51D]">02</span><FolderOpen size={17} className="text-gray-500 sm:hidden" aria-hidden="true" /></div>
              <div><div className="flex items-center gap-2"><FolderOpen size={17} className="hidden text-[#9BE51D] sm:block" aria-hidden="true" /><h3 className="text-base font-medium text-gray-100">Try opening MacNest</h3></div><ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-gray-400"><li>Open Applications and double-click MacNest.</li><li>If macOS says it can’t verify the app, choose <span className="text-gray-200">Done</span> to close the warning. Don’t choose “Move to Trash” if you intend to continue.</li></ul><p className="mt-3 rounded-lg border border-white/[0.08] bg-black/20 px-4 py-3 text-xs leading-5 text-gray-500">This warning alone doesn’t prove that an app contains malware. Still, only continue if you trust the source and have verified the download.</p></div>
            </motion.li>

            <motion.li variants={itemVariants} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7">
              <div className="flex items-center gap-3 sm:block"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#9BE51D]/25 bg-[#9BE51D]/[0.08] text-xs font-medium tabular-nums text-[#9BE51D]">03</span><Settings2 size={17} className="text-gray-500 sm:hidden" aria-hidden="true" /></div>
              <div><div className="flex items-center gap-2"><Settings2 size={17} className="hidden text-[#9BE51D] sm:block" aria-hidden="true" /><h3 className="text-base font-medium text-gray-100">Allow MacNest in System Settings</h3></div><ol className="mt-3 list-inside list-decimal grid gap-x-8 gap-y-2 text-sm leading-6 text-gray-400 sm:grid-cols-2"><li>Open the Apple menu.</li><li>Select System Settings.</li><li>Go to Privacy &amp; Security.</li><li>Scroll down to the Security section.</li><li>Look for the message that MacNest was blocked.</li><li>If macOS offers <span className="text-gray-200">Open Anyway</span>, select it.</li><li>Authenticate with your password or Touch ID if asked.</li></ol><p className="mt-3 text-xs leading-5 text-gray-500">“Open Anyway” may appear only after you’ve tried to open the app, and may be unavailable for other types of security restriction.</p></div>
            </motion.li>

            <motion.li variants={itemVariants} className="grid gap-4 py-6 sm:grid-cols-[52px_1fr] sm:gap-5 sm:py-7">
              <div className="flex items-center gap-3 sm:block"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#9BE51D]/25 bg-[#9BE51D]/[0.08] text-xs font-medium tabular-nums text-[#9BE51D]">04</span><ShieldCheck size={17} className="text-gray-500 sm:hidden" aria-hidden="true" /></div>
              <div><div className="flex items-center gap-2"><ShieldCheck size={17} className="hidden text-[#9BE51D] sm:block" aria-hidden="true" /><h3 className="text-base font-medium text-gray-100">Open MacNest</h3></div><ul className="mt-3 list-inside list-disc space-y-2 text-sm leading-6 text-gray-400"><li>Return to Applications and open MacNest again.</li><li>Review any confirmation dialog carefully. Select <span className="text-gray-200">Open</span> only if you trust the app and have verified that it came from the official MacNest download on this page or the project repository.</li></ul></div>
            </motion.li>
          </ol>

          <motion.aside variants={itemVariants} className="mt-7 rounded-xl border border-[#9BE51D]/20 bg-[#9BE51D]/[0.035] p-5 sm:p-6" aria-labelledby="macos-security-note">
            <div className="flex items-start gap-3"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#9BE51D]" aria-hidden="true" /><div><h3 id="macos-security-note" className="text-sm font-medium text-gray-100">A note about macOS security</h3><ul className="mt-3 list-inside list-disc space-y-2 text-xs leading-5 text-gray-400 sm:text-sm sm:leading-6"><li>Download MacNest only from the download button on this page or the <a href="https://github.com/RaninduAmarasinghe/MacNest" target="_blank" rel="noopener noreferrer" className="text-gray-200 underline decoration-white/20 underline-offset-4 hover:text-white">official MacNest repository</a>.</li><li>Don’t bypass macOS warnings for apps from unknown sources. “Open Anyway” may not be available when macOS blocks an app for another security reason.</li><li>Apps that are properly code-signed and notarized generally install more smoothly. Notarization is a security check, not a guarantee that software is risk-free.</li></ul></div></div>
          </motion.aside>

          <motion.div variants={itemVariants} className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-white/[0.09] px-5 py-5 sm:flex-row sm:px-6">
            <div><h3 className="text-base font-medium text-gray-100">Ready to explore MacNest?</h3><p className="mt-1 text-xs leading-5 text-gray-500">Download the app or review its source and releases.</p></div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <MacNestDownloadButton className={primaryDownloadButtonClass} />
              <a href="https://github.com/RaninduAmarasinghe/MacNest" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-transparent px-6 text-sm text-gray-200 transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9BE51D] motion-reduce:transform-none motion-reduce:transition-none">
                <SiGithub size={15} aria-hidden="true" />
                View source
                <ArrowRight size={13} className="text-gray-500" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-5 text-center text-[11px] leading-5 text-gray-600">These steps apply to the relevant Gatekeeper warning. They may not work for every security restriction or managed Mac.</motion.p>
        </motion.div>
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
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://github.com/RaninduAmarasinghe/MacNest" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#9BE51D] px-6 text-sm font-semibold text-[#10140a] transition hover:bg-white">View on GitHub <ArrowRight size={16} aria-hidden="true" /></a><a href="mailto:hello@ranindu.dev" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 px-6 text-sm text-gray-200 transition hover:border-white/35">Contact <CircleHelp size={15} aria-hidden="true" /></a></div>
          <p className="mt-5 text-xs text-gray-500">For anything private, email <a className="text-gray-300 underline decoration-white/20 underline-offset-4 hover:text-white" href="mailto:hello@ranindu.dev">hello@ranindu.dev</a>.</p>
        </motion.div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] leading-5 text-gray-600">Available features depend on the current implementation, Homebrew, and your local environment. Package installation, update detection, progress reporting, and system scanning may have environment-specific limitations.</p>
      </section>
    </main>
  );
}
