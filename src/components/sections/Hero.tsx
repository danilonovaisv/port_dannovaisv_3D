'use client';

import {
    type MotionValue,
    motion,
    useScroll,
    useTransform,
} from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import type { RefObject } from 'react';
import { useRef } from 'react';

const HeroGlassCanvas = dynamic(
  () => import('@/components/three/HeroGlassCanvas'),
  { ssr: false }
);

function useHeroScroll(sectionRef: RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const orbOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const brandY = useTransform(scrollYProgress, [0, 3], [0, 40]);

  return { scrollYProgress, orbOpacity, brandY };
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress, orbOpacity, brandY } = useHeroScroll(sectionRef);

  const navItems = ['home', 'sobre', 'portfolio', 'contato'];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#f5f7fb]"
    >
      {/* HEADER */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-blue-500/40 bg-white">
            {/* Logo minimal */}
            <div className="h-6 w-6 rounded-xl border border-blue-500/70" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Danilo
          </span>
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-blue-600 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="group relative lowercase tracking-wide transition hover:text-blue-700"
            >
              <span>{item}</span>
              <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[1px] origin-left scale-x-0 bg-blue-600 transition-transform duration-200 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>
      </header>

      {/* HERO GRID */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-14 md:flex-row md:items-center md:px-10">
        {/* Coluna esquerda – texto */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-3"
          >


            <h1 className="text-4xl font-black leading-tight text-blue-600 md:text-5xl lg:text-6xl">
              Design,
              <br />
              <span className="text-slate-900">não é só estética.</span>
            </h1>

            <p className="max-w-xl text-sm text-slate-500 md:text-base">
              [É intenção, é estratégia, é experiência.]
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
          >
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-500/30"
            >
              get to know me better
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
              brand awareness
            </span>
          </motion.div>
        </div>

        {/* Coluna central – orb 3D */}
        <motion.div
          style={{ opacity: orbOpacity as MotionValue<number> }}
          className="relative flex-[0.9]"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          <div className="pointer-events-auto mx-auto aspect-square w-full max-w-xl">
            <HeroGlassCanvas scrollYProgress={scrollYProgress} />
          </div>
        </motion.div>

        {/* Coluna direita – cards / brand block */}
        <motion.aside
          className="hidden flex-[0.7] flex-col gap-6 md:flex"
          style={{ y: brandY }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-3xl border border-blue-500/40 bg-white/60 px-6 py-5 text-xs font-medium uppercase tracking-[0.25em] text-blue-600">
            [ BRAND AWARENESS ]
          </div>

          <div className="relative rounded-3xl border border-cyan-300/80 bg-cyan-100/40 p-2 shadow-lg shadow-cyan-500/30">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900/90">
              {/* Placeholder – substituir por imagem real depois */}
              <div className="flex h-full w-full items-center justify-center text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200">
                strategy • product • brand
              </div>
            </div>
          </div>
        </motion.aside>
      </main>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-400"
      >
        <span>scroll</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
}
