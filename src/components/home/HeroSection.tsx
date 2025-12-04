'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Environment,
    MeshTransmissionMaterial,
    PerspectiveCamera,
    useGLTF,
} from '@react-three/drei';
import * as THREE from 'three';
import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
    Variants,
} from 'framer-motion';
import { Suspense } from 'react';

const HERO_VIDEO_URL =
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-videos/VIDEO-APRESENTACAO-PORTFOLIO.mp4';

type GlassOrbProps = {
    reducedMotion?: boolean;
};

const GlassOrbInner: React.FC<GlassOrbProps> = ({ reducedMotion }) => {
    // Adjusted path to match actual file name
    const gltf = useGLTF('/media/Torus_dan.glb') as unknown as { scene: THREE.Group };
    const meshRef = useRef<THREE.Mesh>(null);

    const geometry = React.useMemo(() => {
        let firstMesh: THREE.Mesh | null = null;
        gltf.scene.traverse((child: THREE.Object3D) => {
            if (!firstMesh && (child as THREE.Mesh).isMesh) {
                firstMesh = child as THREE.Mesh;
            }
        });
        if (firstMesh && firstMesh.geometry) {
            return firstMesh.geometry as THREE.BufferGeometry;
        }
        // Fallback para um toro procedural caso o GLB falhe
        return new THREE.TorusKnotGeometry(1, 0.35, 320, 32);
    }, [gltf]);

    useFrame((state, delta) => {
        if (!meshRef.current || reducedMotion) return;

        const { mouse, clock } = state;
        const t = clock.getElapsedTime();

        // Rotação contínua suave
        meshRef.current.rotation.y += delta * 0.4;

        // Parallax por mouse
        const targetX = -mouse.y * 0.4;
        const targetZ = mouse.x * 0.4;
        meshRef.current.rotation.x = THREE.MathUtils.damp(
            meshRef.current.rotation.x,
            targetX,
            4,
            delta,
        );
        meshRef.current.rotation.z = THREE.MathUtils.damp(
            meshRef.current.rotation.z,
            targetZ,
            4,
            delta,
        );

        // Pulsar sutil no scale
        const scale = 1 + Math.sin(t * 0.6) * 0.04;
        meshRef.current.scale.setScalar(scale);
    });

    return (
        <group>
            <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
                <MeshTransmissionMaterial
                    resolution={512}
                    samples={12}
                    transmission={1}
                    thickness={0.6}
                    roughness={0.08}
                    anisotropicBlur={0.3}
                    ior={1.25}
                    chromaticAberration={0.06}
                    distortion={0.5}
                    distortionScale={0.35}
                    temporalDistortion={0.22}
                    backside
                    attenuationColor="#80b9ff"
                    attenuationDistance={0.65}
                    envMapIntensity={1.2}
                />
            </mesh>
        </group>
    );
};

// Adjusted path to match actual file name
useGLTF.preload('/media/Torus_dan.glb');

const GlassOrbCanvas: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <div className="pointer-events-none h-[260px] w-[260px] md:h-[340px] md:w-[340px]">
            <Canvas
                dpr={[1, 2]}
                gl={{ antialias: true }}
                camera={{ position: [0, 0, 4.2], fov: 40 }}
            >
                <color attach="background" args={['#F4F5F7']} />
                <ambientLight intensity={0.4} />
                <directionalLight position={[3, 4, 5]} intensity={1.2} />
                <directionalLight position={[-4, -3, -2]} intensity={0.5} />
                <Suspense fallback={null}>
                    <Environment preset="city" background={false} />
                    <PerspectiveCamera makeDefault position={[0, 0, 4.2]} fov={40} />
                    <GlassOrbInner reducedMotion={!!prefersReducedMotion} />
                </Suspense>
            </Canvas>
        </div>
    );
};

const titleContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const titleLine: Variants = {
    hidden: { opacity: 0, y: 24, rotateX: -40 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

const HeroSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start start', 'end start'],
    });

    const thumbScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
    const thumbY = useTransform(scrollYProgress, [0, 1], [0, -160]);
    const thumbX = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const thumbRadius = useTransform(scrollYProgress, [0, 1], ['24px', '0px']);
    const thumbShadow = useTransform(
        scrollYProgress,
        [0, 1],
        ['0 24px 80px rgba(0,0,0,0.25)', '0 32px 120px rgba(0,0,0,0.45)'],
    );
    const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            id="hero"
            className="relative min-h-[200vh] bg-[#F4F5F7]"
            ref={sectionRef}
            aria-labelledby="hero-heading"
        >
            {/* Orb central absoluta, por trás do conteúdo */}
            <div className="pointer-events-none absolute left-1/2 top-[-120px] -translate-x-1/2 -z-10">
                <GlassOrbCanvas />
            </div>

            {/* Bloco interno sticky */}
            <div className="sticky top-0 flex min-h-screen items-center">
                <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 lg:px-0">
                    {/* Coluna esquerda: texto */}
                    <motion.div
                        className="max-w-xl space-y-8"
                        style={prefersReducedMotion ? undefined : { opacity: textOpacity }}
                    >
                        <motion.span
                            className="inline-flex items-center rounded-full border border-[#0057FF]/30 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#0057FF] backdrop-blur"
                            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            [ BRAND AWARENESS ]
                        </motion.span>

                        <motion.h1
                            id="hero-heading"
                            className="text-4xl font-extrabold leading-tight text-[#111111] md:text-6xl"
                            variants={titleContainer}
                            initial="hidden"
                            animate="visible"
                            aria-label="Design, não é só estética."
                        >
                            <motion.span className="block" variants={prefersReducedMotion ? undefined : titleLine}>
                                Design,
                            </motion.span>
                            <motion.span className="block" variants={prefersReducedMotion ? undefined : titleLine}>
                                não é só
                            </motion.span>
                            <motion.span className="block" variants={prefersReducedMotion ? undefined : titleLine}>
                                estética.
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            className="inline-flex max-w-md rounded-2xl bg-white/80 px-5 py-4 text-sm font-medium text-[#0057FF] shadow-sm backdrop-blur"
                            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] as const }}
                        >
                            [ É intenção, é estratégia, é experiência. ]
                        </motion.div>

                        <motion.div
                            initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] as const }}
                        >
                            <Link href="/sobre" aria-label="Conhecer melhor o trabalho de Danilo">
                                <motion.button
                                    whileHover={{ y: prefersReducedMotion ? 0 : -2, scale: prefersReducedMotion ? 1 : 1.02 }}
                                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.97 }}
                                    className="group inline-flex items-center gap-2 rounded-full bg-[#0057FF] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0057FF]/25 transition-colors hover:bg-[#0043c1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F7]"
                                >
                                    get to know me better →
                                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-[#0057FF] transition-transform group-hover:translate-x-0.5">
                                        ↑
                                    </span>
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Coluna direita: thumb do vídeo manifesto */}
                    <motion.div
                        className="relative mt-6 flex w-full justify-end md:mt-0 md:w-auto"
                        initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <motion.div
                            style={
                                prefersReducedMotion
                                    ? undefined
                                    : {
                                        scale: thumbScale,
                                        y: thumbY,
                                        x: thumbX,
                                        borderRadius: thumbRadius,
                                        boxShadow: thumbShadow,
                                    }
                            }
                            className="relative aspect-video w-full max-w-sm overflow-hidden rounded-3xl border border-white/60 bg-black/80 md:max-w-md"
                        >
                            <motion.video
                                src={HERO_VIDEO_URL}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="h-full w-full object-cover"
                                initial={{ scale: prefersReducedMotion ? 1 : 1.06, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
                            />
                            {/* Overlay play badge */}
                            <button
                                type="button"
                                onClick={() => {
                                    const el = document.getElementById('manifesto');
                                    if (el) {
                                        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
                                    }
                                }}
                                className="group absolute inset-x-4 bottom-4 flex items-center justify-between rounded-full bg-black/55 px-4 py-2 text-xs font-medium text-white backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black/60"
                                aria-label="Rolar até o manifesto em vídeo"
                            >
                                <span className="uppercase tracking-[0.16em] text-[10px] opacity-90">
                                    manifesto em vídeo
                                </span>
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-semibold text-black transition-transform group-hover:translate-x-0.5">
                                    ▶
                                </span>
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
