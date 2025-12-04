"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Volume2, VolumeX, AlertCircle } from "lucide-react";
import { HOMEPAGE_CONTENT } from "../../config/homepageContent";

const Manifesto: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const videoUrl = HOMEPAGE_CONTENT.about.videoUrl;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, [videoUrl]);

  const handleVideoReady = () => {
    setStatus("ready");
  };

  const handleVideoError = () => {
    setStatus("error");
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto w-full max-w-6xl px-4 pb-24 pt-8 sm:px-6 lg:px-8"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
            vídeos & motions
          </p>
          <h2 className="text-sm font-medium text-zinc-800 sm:text-base">
            Manifesto em movimento
          </h2>
        </div>

        <span className="hidden rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-100 sm:inline-flex">
          brand awareness
        </span>
      </div>

      <motion.div
        style={{ y, scale, opacity }}
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative aspect-[16/7] overflow-hidden rounded-[32px] bg-slate-900 shadow-[0_40px_160px_rgba(15,23,42,0.55)]"
      >
        <video
          ref={videoRef}
          src={videoUrl}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="h-full w-full object-cover"
          onCanPlay={handleVideoReady}
          onLoadedData={handleVideoReady}
          onError={handleVideoError}
        />

        {status === "loading" && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_20%_0%,rgba(96,165,250,0.4),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.35),transparent_45%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.35),transparent_50%)]" />
          </div>
        )}

        {status === "error" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950/80 px-6 text-center text-zinc-200">
            <AlertCircle className="h-7 w-7 text-red-400" />
            <p className="text-sm font-medium">
              Não foi possível carregar o manifesto.
            </p>
            <p className="text-xs text-zinc-400">
              Verifique a URL do vídeo na configuração da homepage.
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-5 pb-4 sm:px-6 sm:pb-5">
          <div className="space-y-1 text-left text-zinc-100">
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-300">
              manifesto
            </p>
            <p className="max-w-md text-xs sm:text-sm">
              Estratégia, storytelling e movimento — condensados em um vídeo
              que apresenta como você pensa design além da estética.
            </p>
          </div>

          <div className="flex flex-col items-end gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition hover:bg-white/25"
            >
              <Play
                className={`h-4 w-4 transition-transform ${
                  isPlaying ? "group-hover:scale-110" : ""
                }`}
              />
            </button>

            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-100 backdrop-blur"
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-3 w-3" />
                  <span>som desligado</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-3 w-3" />
                  <span>som ligado</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Manifesto;
