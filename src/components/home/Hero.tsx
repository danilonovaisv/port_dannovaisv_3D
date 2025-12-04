"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HOMEPAGE_CONTENT } from "../../config/homepageContent";

const HeroGlassCanvas = dynamic(
  () => import("../3d/HeroGlassCanvas"),
  {
    ssr: false,
  }
);

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { hero } = HOMEPAGE_CONTENT;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);

  const handleCtaClick = () => {
    const target = document.querySelector(`#${hero.ctaTargetId}`);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
    >
      <div className="relative z-10 max-w-xl space-y-8">
        <motion.div
          style={{ y: titleY }}
          className="space-y-4"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#0057FF]">
            {hero.tag}
          </p>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
            <span className="block text-[#0057FF]">
              {hero.title.split(",")[0]},
            </span>
            <span className="block">não é só</span>
            <span className="block">estética.</span>
          </h1>

          <motion.p
            style={{ opacity: subtitleOpacity }}
            className="inline-block rounded-2xl bg-white/70 px-4 py-3 text-sm leading-relaxed text-zinc-700 shadow-sm backdrop-blur"
          >
            {hero.subtitle}
          </motion.p>
        </motion.div>

        <button
          onClick={handleCtaClick}
          className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#0057FF] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#0057FF]/40 transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          <span>{hero.ctaLabel}</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>

      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 sm:top-[-80px] md:top-[-60px] lg:top-[-40px] lg:left-auto lg:right-0 lg:translate-x-0 flex justify-center md:justify-end w-full">
        <HeroGlassCanvas />
      </div>
    </section>
  );
};

export default Hero;
