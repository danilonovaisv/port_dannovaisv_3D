'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const PORTFOLIO_CATEGORIES = [
    {
        id: 'brand-campaigns',
        label: 'Brand & Campaigns',
        labelPt: 'Brand & Campanhas',
    },
    {
        id: 'videos-motions',
        label: 'Videos & Motions',
        labelPt: 'Vídeos & Motions',
    },
    {
        id: 'websites-webcampaigns-tech',
        label: 'Web Campaigns, Websites & Tech',
        labelPt: 'Campanhas Web, Websites & Tech',
    },
];

const PortfolioShowcaseSection: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="portfolio-showcase"
            className="bg-[#F4F5F7]"
            aria-labelledby="portfolio-showcase-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
                <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:items-start">
                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#0057FF]">
                            [ what we love working on ]
                        </p>
                        <h2
                            id="portfolio-showcase-heading"
                            className="text-2xl font-bold uppercase tracking-[0.2em] text-[#0057FF]"
                        >
                            portfólio showcase
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {PORTFOLIO_CATEGORIES.map((category, index) => (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: prefersReducedMotion ? 1 : 0, x: prefersReducedMotion ? 0 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 0.61, 0.36, 1] as any }}
                            >
                                <Link
                                    href={`/portfolio?category=${encodeURIComponent(category.id)}`}
                                    className="group flex items-center justify-between rounded-full border border-black/5 bg-white px-5 py-4 text-left shadow-sm transition-colors hover:border-[#0057FF]/40 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057FF]"
                                >
                                    <div>
                                        <p className="text-sm font-semibold text-[#111111]">
                                            {category.label}
                                        </p>
                                        <p className="text-xs text-gray-500">{category.labelPt}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="relative inline-flex h-3 w-3 items-center justify-center">
                                            <span className="absolute inline-flex h-3 w-3 rounded-full bg-[#0057FF]/30 group-hover:scale-125 group-hover:bg-[#0057FF]/40 transition-transform" />
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#0057FF]" />
                                        </span>
                                        <motion.span
                                            className="text-xs font-semibold text-[#0057FF]"
                                            whileHover={{
                                                x: prefersReducedMotion ? 0 : 3,
                                            }}
                                        >
                                            explore →
                                        </motion.span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ y: prefersReducedMotion ? 0 : -1, scale: prefersReducedMotion ? 1 : 1.02 }}
                                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.97 }}
                                    className="rounded-full bg-[#0057FF] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F7]"
                                >
                                    VEJA MAIS →
                                </motion.button>
                            </Link>

                            <Link href="/#contact">
                                <button
                                    type="button"
                                    className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0057FF] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F5F7]"
                                >
                                    let&apos;s build something great →
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioShowcaseSection;
