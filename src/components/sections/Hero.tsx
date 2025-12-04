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
          <div className="flex flex-col items-center justify-center gap-16 min-h-[80vh] h-full pt-24 md:pt-0 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-6 w-full max-w-2xl relative"
            >
              <span className="text-[#0057FF] text-sm md:text-base tracking-[0.4em] uppercase">
                [ BRAND AWARENESS ]
              </span>

              <div className="w-full h-[35vh] md:h-[50vh] flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <HeroGlassCanvas />
                </motion.div>
              </div>
            </motion.div>

            <div className="flex flex-col items-center gap-6 w-full max-w-3xl">
              <div className="text-[4rem] md:text-6xl lg:text-[6.5rem] font-extrabold tracking-[-0.04em] font-sans flex flex-col items-center gap-2 leading-[0.9]">
                <div className="md:hidden flex flex-col">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-[#0057FF]"
                  >
                    Design,
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-[#111111]"
                  >
                    não é só
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-[#111111]"
                  >
                    estética.
                  </motion.span>
                </div>

                <div className="hidden md:flex flex-col items-center gap-0">
                  <AnimatedTextLine text="Design," delay={0.2} colorClass="text-[#0057FF]" className="text-center" />
                  <AnimatedTextLine text="não é só" delay={0.5} colorClass="text-[#111111]" className="text-center" />
                  <AnimatedTextLine text="estética." delay={0.8} colorClass="text-[#111111]" className="text-center" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
                className="mb-4 md:mb-6"
              >
                <p className="text-[#0057FF] text-lg md:text-xl font-medium tracking-wide">
                  [ É intenção, é estratégia, é experiência. ]
                </p>
              </motion.div>

              <motion.a
                href="/sobre"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(0, 87, 255, 0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="group bg-[#0057FF] text-white rounded-full pl-8 pr-6 py-4 flex items-center gap-3 font-semibold text-base md:text-lg shadow-xl shadow-[#0057FF]/20 transition-all"
              >
                get to know me better
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-4 h-4 text-white" />
                </span>
              </motion.a>
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
