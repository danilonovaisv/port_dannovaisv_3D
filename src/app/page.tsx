import React from "react";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";

import Hero from "../components/home/Hero";
import Manifesto from "../components/home/Manifesto";
import PortfolioShowcase from "../components/home/PortfolioShowcase";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Clients from "../components/home/Clients";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#111111] font-sans selection:bg-[#0057FF] selection:text-white">
      <SiteHeader />
      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Manifesto (vídeo) */}
        <Manifesto />

        {/* 3. Portfolio Showcase */}
        <PortfolioShowcase />

        {/* 4. Featured Projects */}
        <FeaturedProjects />

        {/* 5. Clients / Brands */}
        <Clients />

        {/* 6. Contact */}
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
