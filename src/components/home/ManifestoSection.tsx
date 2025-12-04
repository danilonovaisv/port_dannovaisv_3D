'use client';

import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const MANIFESTO_VIDEO_URL =
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-videos/VIDEO-APRESENTACAO-PORTFOLIO.mp4';

const ManifestoSection: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const prefersReducedMotion = useReducedMotion();

    const togglePlay = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            void video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section
            id="manifesto"
            className="relative bg-black text-white"
            aria-label="Manifesto em vídeo de Danilo Novais"
        >
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
                <motion.div
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/80 shadow-2xl"
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 40, scale: prefersReducedMotion ? 1 : 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] as const }}
                >
                    <video
                        ref={videoRef}
                        src={MANIFESTO_VIDEO_URL}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    />
                    {/* Gradiente inferior */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    {/* Badge de play */}
                    <div className="absolute inset-0 flex items-end justify-between p-6">
                        <div className="space-y-2 max-w-xs">
                            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                                manifesto
                            </p>
                            <p className="text-sm text-white/85">
                                Um olhar por dentro do processo, da intenção e da estratégia que guiam cada
                                projeto.
                            </p>
                        </div>
                        <motion.button
                            type="button"
                            onClick={togglePlay}
                            whileHover={{ scale: prefersReducedMotion ? 1 : 1.06, y: prefersReducedMotion ? 0 : -2 }}
                            whileTap={{ scale: prefersReducedMotion ? 1 : 0.96 }}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black/80"
                            aria-label={isPlaying ? 'Pausar manifesto em vídeo' : 'Reproduzir manifesto em vídeo'}
                        >
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                                {isPlaying ? '❚❚' : '▶'}
                            </span>
                            {isPlaying ? 'Pausar manifesto' : 'Assistir manifesto'}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ManifestoSection;
