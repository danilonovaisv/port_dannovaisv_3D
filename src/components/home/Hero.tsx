"use client";

import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Lazy-load do Canvas 3D (evita WebGL no SSR)
const HeroGlassCanvas = dynamic(
    () => import("../3d/HeroGlassCanvas"),
    {
        ssr: false,
        loading: () => (
            <div className="h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px] rounded-[40px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900/80 shadow-[0_0_120px_rgba(15,23,42,0.58)]" />
        ),
    }
);

const Hero: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Scroll geral do hero → parallax leve no conteúdo de texto
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const titleY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const subtitleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.6]);
    const badgeOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="relative mx-auto flex min-h-[90vh] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
        >
            {/* COLUNA DE TEXTO */}
            <div className="relative z-10 max-w-xl space-y-8">
                <motion.div
                    style={{ y: titleY }}
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
                    className="space-y-4"
                >
                    <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-[#0057FF]">
                        [ brand awareness ]
                    </p>

                    <h1 className="text-balance text-4xl font-semibold leading-tight text-[#111111] sm:text-5xl lg:text-6xl">
                        <span className="block text-[#0057FF]">Design,</span>
                        <span className="block">não é só</span>
                        <span className="block">estética.</span>
                    </h1>

                    <motion.p
                        style={{ opacity: subtitleOpacity }}
                        className="inline-block rounded-2xl bg-white/70 px-4 py-3 text-sm leading-relaxed text-zinc-700 shadow-sm backdrop-blur"
                    >
                        [É intenção, é estratégia, é experiência.]
                    </motion.p>
                </motion.div>

                {/* CTA + THUMB DO VÍDEO */}
                <motion.div
                    style={{ opacity: badgeOpacity }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-6 flex flex-wrap items-center gap-6"
                >
                    {/* CTA principal */}
                    <a
                        href="/sobre"
                        className="group inline-flex items-center gap-3 rounded-full bg-[#0057FF] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#0057FF]/40 transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                        <span>get to know me better</span>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </span>
                    </a>

                    {/* Thumb simples para o manifesto (linka para #manifesto) */}
                    <button
                        onClick={() => {
                            const el = document.querySelector("#manifesto");
                            if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="group flex items-center gap-3 rounded-2xl border border-zinc-200/80 bg-white/80 px-3 py-2 text-xs text-zinc-700 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                        <span className="h-10 w-16 overflow-hidden rounded-md bg-gradient-to-tr from-blue-500 via-sky-400 to-violet-400" />
                        <span className="flex flex-col items-start">
                            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                                vídeos & motions
                            </span>
                            <span className="text-[11px] font-medium text-zinc-800">
                                assistir manifesto
                            </span>
                        </span>
                    </button>
                </motion.div>
            </div>

            {/* ORB ABSOLUTA, ALINHADA AO TOPO DO HERO */}
            <div
                className="
          pointer-events-auto
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2
          sm:top-[-80px]
          md:top-[-60px]
          lg:top-[-40px]
          lg:left-auto
          lg:right-0
          lg:translate-x-0
          flex
          justify-center
          md:justify-end
          w-full
        "
            >
                <HeroGlassCanvas />
            </div>

            {/* INDICADOR DE SCROLL */}
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400"
            >
                <span>scroll</span>
                <div className="h-10 w-px bg-gradient-to-b from-zinc-400 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
