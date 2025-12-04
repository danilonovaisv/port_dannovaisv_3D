"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BRAND_ASSETS } from "../../config/brand";
import { MAIN_ROUTES } from "../../config/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const handleAnchorClick = (anchor?: string) => (e: React.MouseEvent) => {
    if (!anchor) return;
    if (pathname !== "/") return;

    e.preventDefault();
    const el = document.querySelector(anchor);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/60 bg-[#F4F5F7]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={BRAND_ASSETS.logo}
            alt="Danilo Novais"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium text-zinc-700 sm:flex">
          {MAIN_ROUTES.map((route) => (
            <Link
              key={route.id}
              href={
                route.path +
                (route.anchor && pathname !== "/" ? route.anchor : "")
              }
              onClick={handleAnchorClick(route.anchor)}
              className="relative uppercase tracking-[0.2em] transition hover:text-[#0057FF]"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
