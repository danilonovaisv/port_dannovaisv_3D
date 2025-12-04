"use client";

import React from "react";
import { HOMEPAGE_CONTENT } from "../../config/homepageContent";

const Footer: React.FC = () => {
  const { footer } = HOMEPAGE_CONTENT;

  const handleLinkClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-200/60 bg-[#F4F5F7] py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-[11px] text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
        <span>{footer.copyright}</span>

        <nav className="flex flex-wrap items-center gap-4">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick(link.href)}
              className="uppercase tracking-[0.25em] transition hover:text-[#0057FF]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
