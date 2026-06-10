"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "소개", href: "#about" },
  { label: "서비스", href: "#services" },
  { label: "레퍼런스", href: "#reference" },
  { label: "후기", href: "#testimonials" },
  { label: "문의", href: "#contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(true);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors transition-shadow ${
        isScrolled
          ? "bg-white shadow-[0_8px_24px_rgba(26,26,26,0.08)]"
          : "bg-transparent backdrop-blur-sm"
      } border-b border-transparent`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-4 md:px-8 lg:px-10">
        <Link href="#top" className="flex-shrink-0">
          <img
            src="/images/logo_nav.png"
            alt="ANOTHER DOT"
            className="h-10 w-auto max-w-[240px] object-contain"
            style={{ filter: "brightness(0) invert(1)" }}
            onError={(event) => {
              event.currentTarget.style.display = "none";
              setLogoLoaded(false);
            }}
          />
          {!logoLoaded && (
            <span className="inline-flex h-9 items-center text-sm font-bold text-white">ANOTHER DOT</span>
          )}
          <span className="sr-only">ANOTHER DOT</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={`md:hidden inline-flex h-10 w-10 items-center justify-center ${
            isScrolled ? "text-[#1A1A1A]" : "text-white"
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          <span className="relative block h-4 w-5">
            <span className={`absolute left-0 top-0 block h-0.5 w-full ${isScrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`absolute left-0 top-1.5 block h-0.5 w-full ${isScrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
            <span className={`absolute left-0 top-3 block h-0.5 w-full ${isScrolled ? "bg-[#1A1A1A]" : "bg-white"}`} />
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-[#F7F8F8] bg-white">
          <div className="mx-auto flex max-w-8xl flex-col px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-[#F7F8F8] py-3 text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
