'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

const SiteFooter: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.footer
            className="fixed inset-x-0 bottom-0 z-30 bg-[#0057FF] text-white"
            initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            aria-label="Rodapé do site"
        >
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 text-xs md:flex-row md:items-center md:justify-between md:px-6">
                <p className="text-[11px] md:text-xs">
                    © 2025 Danilo Novais Vilela — todos os direitos reservados.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                    <nav aria-label="Links do rodapé">
                        <ul className="flex flex-wrap items-center gap-3">
                            <li>
                                <Link
                                    href="/#hero"
                                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                                >
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#portfolio-showcase"
                                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                                >
                                    portfólio showcase
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/sobre"
                                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                                >
                                    sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                                >
                                    contato
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden h-4 w-px bg-white/40 md:block" aria-hidden="true" />

                    <div className="flex items-center gap-3 text-[11px] md:text-xs">
                        <a
                            href="https://instagram.com/danilo_novais"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                        >
                            IG
                        </a>
                        <a
                            href="https://linkedin.com/in/danilonovais"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                        >
                            IN
                        </a>
                        <a
                            href="https://portfoliodanilo.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                        >
                            site
                        </a>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
};

export default SiteFooter;
