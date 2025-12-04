"use client";

import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import TorusDan from "./Torus_dan";

/**
 * Canvas + container responsivo da orb de vidro
 */
const HeroGlassCanvas: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scrollScale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const scrollY = useTransform(scrollYProgress, [0, 1], [0, -40]);
    const scrollOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

    return (
        <motion.div
            ref={containerRef}
            style={{ scale: scrollScale, y: scrollY, opacity: scrollOpacity }}
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
            className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]"
        >
            {/* Glow de fundo 2D */}
            <div className="pointer-events-none absolute inset-[-25%] -z-20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,.6),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,.55),transparent_55%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,.5),transparent_55%)] blur-3xl opacity-80 mix-blend-screen" />
            </div>

            {/* Card de vidro atrás do canvas */}
            <div className="pointer-events-none absolute inset-1 rounded-[40px] border border-white/15 bg-white/5 shadow-[0_0_120px_rgba(15,23,42,0.58)] backdrop-blur-3xl" />

            <Canvas
                className="relative h-full w-full"
                dpr={[1, 1.8]}
                camera={{ position: [0, 0, 5], fov: 35 }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <color attach="background" args={["#000000"]} />
                    <fog attach="fog" args={["#000000", 8, 16]} />

                    <ambientLight intensity={0.4} />
                    <directionalLight intensity={1.6} position={[4, 6, 4]} />
                    <directionalLight intensity={0.9} position={[-4, -2, -4]} />
                    <directionalLight intensity={0.7} position={[0, 4, -6]} />

                    <Environment preset="city" />

                    <TorusDan />
                </Suspense>
            </Canvas>
        </motion.div>
    );
};

export default HeroGlassCanvas;
