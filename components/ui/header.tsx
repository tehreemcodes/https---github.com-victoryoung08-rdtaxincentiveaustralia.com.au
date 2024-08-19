"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li className="px-3 py-1">
                <Link
                  href="/pricing"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/customers"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  R&D Eligibility
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/blog"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  Industries
                </Link>
              </li>
              <li className="px-3 py-1">
                <Link
                  href="/documentation"
                  className="flex items-center text-gray-700 transition hover:text-gray-900"
                >
                  FAQs
                </Link>
              </li>
              
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3 hidden md:flex md:grow">
          
            <li>
              <Link
                href="/signup"
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
              >
                Speak with an R&D Tax Specialist <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">-&gt;</span>
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
