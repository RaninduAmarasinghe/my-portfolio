"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
        absolute
        top-0
        left-0
        right-0
        z-50
      "
    >

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <div
        className="
          mx-auto
          flex
          h-[68px]
          max-w-[1400px]
          items-center
          justify-between
          px-5
          sm:h-20
          sm:px-6
          md:px-12
          lg:px-16
        "
      >

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          href="/"
          onClick={closeMenu}
          aria-label="Ranindu Amarasinghe home"
          className="
            flex
            min-h-[44px]
            min-w-[44px]
            items-center
            text-lg
            font-semibold
            tracking-tight
            text-white
            transition
            hover:text-gray-200
            sm:text-xl
          "
        >
          RA
          <span className="text-[#9BE51D]">
            .
          </span>
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          aria-label="Main navigation"
          className="
            hidden
            items-center
            gap-8
            text-xs
            text-gray-500
            md:flex
            lg:gap-10
          "
        >

          <Link
            href="/about"
            className="
              relative
              py-3
              transition-colors
              hover:text-white
            "
          >
            About Me
          </Link>


          <a
            href="#projects"
            className="
              relative
              py-3
              transition-colors
              hover:text-white
            "
          >
            Projects
          </a>


          <a
            href="#contact"
            className="
              relative
              py-3
              transition-colors
              hover:text-white
            "
          >
            Contact
          </a>

        </nav>


        {/* =================================================
            DESKTOP CTA
        ================================================= */}

        <a
          href="mailto:hello@ranindu.dev"
          className="
            hidden
            min-h-[40px]
            items-center
            gap-1
            rounded-full
            border
            border-white/20
            px-4
            py-2
            text-xs
            text-gray-300
            transition-all
            hover:border-[#9BE51D]/60
            hover:text-white
            active:scale-[0.98]
            sm:inline-flex
          "
        >
         Let&apos;s talk

          <span
            className="
              text-[#9BE51D]
            "
          >
            ↗
          </span>

        </a>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            text-gray-300
            transition
            hover:border-[#9BE51D]/50
            hover:text-[#9BE51D]
            active:scale-95
            sm:h-11
            sm:w-11
            md:hidden
          "
        >

          <span
            className="
              text-lg
              leading-none
            "
          >
            {menuOpen ? "×" : "☰"}
          </span>

        </button>

      </div>


      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="
              overflow-hidden
              border-t
              border-white/[0.08]
              bg-[#080909]/95
              backdrop-blur-xl
              md:hidden
            "
          >

            <nav
              aria-label="Mobile navigation"
              className="
                mx-auto
                max-w-[1400px]
                px-5
                py-5
                sm:px-6
              "
            >

              {/* About */}

              <Link
                href="/about"
                onClick={closeMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  text-sm
                  text-gray-300
                  transition
                  hover:text-white
                "
              >
                <span>
                  About
                </span>

                <span className="text-gray-600">
                  ↗
                </span>
              </Link>


              {/* Projects */}

              <a
                href="#projects"
                onClick={closeMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  text-sm
                  text-gray-300
                  transition
                  hover:text-white
                "
              >
                <span>
                  Projects
                </span>

                <span className="text-gray-600">
                  ↓
                </span>
              </a>


              {/* Contact */}

              <a
                href="#contact"
                onClick={closeMenu}
                className="
                  flex
                  min-h-[48px]
                  items-center
                  justify-between
                  border-b
                  border-white/[0.07]
                  text-sm
                  text-gray-300
                  transition
                  hover:text-white
                "
              >
                <span>
                  Contact
                </span>

                <span className="text-gray-600">
                  ↓
                </span>
              </a>


              {/* Mobile CTA */}

              <a
                href="mailto:hello@ranindu.dev"
                onClick={closeMenu}
                className="
                  mt-5
                  flex
                  min-h-[46px]
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#9BE51D]
                  px-5
                  py-3
                  text-xs
                  font-semibold
                  text-black
                  transition
                  hover:bg-white
                  active:scale-[0.98]
                "
              >
               Let&apos;s talk

                <span>
                  ↗
                </span>

              </a>

            </nav>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
}