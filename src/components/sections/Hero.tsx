'use client';

import { motion, useMotionValueEvent, useScroll, useTransform, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { ASSETS } from '@/lib/constants';
import HeroGlassCanvas from '@/components/three/HeroGlassCanvas';

const AnimatedTextLine: React.FC<{
  text: string;
  className?: string;
  delay?: number;
  colorClass?: string;
}> = ({ text, className, delay = 0, colorClass = 'text-[#111111]' }) => {
  const letters = text.split('');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      y: '110%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      className={`flex overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className={`block ${colorClass} leading-[0.9]`}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const navItems = ['home', 'sobre', 'portfolio showcase', 'contato'];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!videoRef.current) return;
    videoRef.current.muted = latest <= 0.01;
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const contentY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  const videoScale = useTransform(scrollYProgress, [0, 0.25], [0.25, 1]);
  const videoX = useTransform(scrollYProgress, [0, 0.25], ['35%', '0%']);
  const videoY = useTransform(scrollYProgress, [0, 0.25], ['30%', '0%']);
  const videoRadius = useTransform(scrollYProgress, [0, 0.2], [12, 0]);

  return (
    <section id="hero" ref={sectionRef} className="relative h-[450vh] w-full bg-[#F4F5F7]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ opacity: contentOpacity, scale: contentScale, y: contentY }}
          className="absolute inset-0 container mx-auto px-6 md:px-12 lg:px-16 h-full z-10"
        >
          <div className="flex flex-col gap-16 h-full pt-10 md:pt-16">
            <header className="flex items-center justify-between w-full max-w-6xl mx-auto">
              <div className="text-2xl font-bold flex items-center gap-2 text-[#0057FF]">
                <span className="block w-10 h-10 rounded-2xl border border-[#0057FF]/30" />
                Danilo
              </div>
              <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-[#0057FF]">
                {navItems.map((item) => (
                  <a key={item} href={`/#${item.replace(' ', '-')}`} className="lowercase hover:text-[#111111]">
                    {item}
                  </a>
                ))}
              </nav>
            </header>

            <div className="flex flex-col items-center gap-6 h-full justify-center">
              <motion.div
                className="w-full max-w-[320px] md:max-w-[480px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full aspect-square"
                >
                  <HeroGlassCanvas />
                </motion.div>
              </motion.div>

              <div className="w-full max-w-3xl text-left">
                <div className="text-[4rem] md:text-[5.5rem] lg:text-[6.5rem] font-extrabold tracking-[-0.04em] leading-[0.95] text-[#111111]">
                  <div className="md:hidden flex flex-col">
                    <motion.span className="text-[#0057FF]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                      Design,
                    </motion.span>
                    <motion.span className="text-[#111111]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                      não é só
                    </motion.span>
                    <motion.span className="text-[#111111]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                      estética.
                    </motion.span>
                  </div>

                  <div className="hidden md:flex flex-col">
                    <AnimatedTextLine text="Design," delay={0.2} colorClass="text-[#0057FF]" />
                    <AnimatedTextLine text="não é só" delay={0.5} />
                    <AnimatedTextLine text="estética." delay={0.8} />
                  </div>
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
                  className="text-[#0057FF] text-lg md:text-xl font-medium tracking-wide mt-4"
                >
                  [ É intenção, é estratégia, é experiência. ]
                </motion.p>

                <motion.a
                  href="/sobre"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(0, 87, 255, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#0057FF] px-10 py-4 text-white font-semibold text-base md:text-lg shadow-xl shadow-[#0057FF]/20 transition-all"
                >
                  get to know me better
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{
            scale: videoScale,
            x: videoX,
            y: videoY,
            borderRadius: videoRadius,
          }}
          className="absolute z-40 w-full h-full flex items-center justify-center overflow-hidden shadow-2xl origin-center bg-black"
        >
          <div className="relative w-full h-full block group">
            <video
              ref={videoRef}
              src={ASSETS.videoManifesto}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
