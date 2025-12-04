'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';

type FeaturedProject = {
    slug: string;
    title: string;
    category: string;
    client: string;
    year: string;
    imageUrl: string;
};

const FEATURED_PROJECTS: FeaturedProject[] = [
    {
        slug: 'magic-radio-branding',
        title: 'Magic — devolvendo a magia ao rádio',
        category: 'branding & campanha',
        client: 'Magic',
        year: '2023',
        imageUrl:
            'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/Brand-Identity%20copy.webp',
    },
    {
        slug: 'branding-project-01',
        title: 'Uma marca ousada e consistente',
        category: 'branding',
        client: 'Cliente confidencial',
        year: '2022',
        imageUrl:
            'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/Branding-Project.webp',
    },
    {
        slug: 'key-visual-campaign',
        title: 'Key visual para campanha sazonal',
        category: 'campanha',
        client: 'Cliente confidencial',
        year: '2021',
        imageUrl:
            'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/Key-Visual.webp',
    },
    {
        slug: 'webdesigner-motion',
        title: 'Experiência web em movimento',
        category: 'web & motion',
        client: 'Cliente confidencial',
        year: '2023',
        imageUrl:
            'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/project-images/webdesigner-2%202.gif',
    },
];

const FeaturedProjectsSection: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            aria-labelledby="featured-projects-heading"
            className="bg-[#F4F5F7]"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                <motion.div
                    className="mb-8 flex items-center justify-between gap-4"
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
                >
                    <h2
                        id="featured-projects-heading"
                        className="text-2xl font-bold text-[#0057FF]"
                    >
                        Projetos em Destaque
                    </h2>
                    <Link href="/portfolio" className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-[#0057FF] md:inline-flex">
                        view projects →
                    </Link>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.08 },
                        },
                    }}
                >
                    {FEATURED_PROJECTS.map((project) => (
                        <motion.article
                            key={project.slug}
                            variants={{
                                hidden: {
                                    opacity: prefersReducedMotion ? 1 : 0,
                                    y: prefersReducedMotion ? 0 : 24,
                                    scale: prefersReducedMotion ? 1 : 0.96,
                                },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
                        >
                            <Link
                                href={`/portfolio/${project.slug}`}
                                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-xl hover:shadow-[#0057FF]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057FF]"
                                aria-label={`Ver projeto ${project.title}`}
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <motion.img
                                        src={project.imageUrl}
                                        alt={`Imagem do projeto ${project.title}`}
                                        className="h-full w-full object-cover"
                                        whileHover={
                                            prefersReducedMotion
                                                ? undefined
                                                : { scale: 1.03, y: -4 }
                                        }
                                        transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                                    <motion.div
                                        className="pointer-events-none absolute inset-x-4 bottom-4 opacity-0 transition-opacity group-hover:opacity-100"
                                        initial={false}
                                    >
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                                            {project.category}
                                        </p>
                                        <p className="text-sm font-semibold text-white">
                                            {project.title}
                                        </p>
                                    </motion.div>
                                </div>
                                <div className="flex flex-1 flex-col justify-between px-4 py-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                                            {project.client}
                                        </p>
                                        <p className="mt-1 text-sm font-medium text-[#111111]">
                                            {project.title}
                                        </p>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                                        <span>{project.category}</span>
                                        <span>{project.year}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}

                    {/* Card final CTA */}
                    <motion.article
                        variants={{
                            hidden: {
                                opacity: prefersReducedMotion ? 1 : 0,
                                y: prefersReducedMotion ? 0 : 24,
                                scale: prefersReducedMotion ? 1 : 0.96,
                            },
                            visible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
                        className="flex h-full items-center justify-center rounded-3xl bg-[#0057FF] p-6 text-white shadow-md md:col-span-2 lg:col-span-1"
                    >
                        <div className="space-y-4 text-center">
                            <p className="text-lg font-semibold">Like what you see?</p>
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ y: prefersReducedMotion ? 0 : -1, scale: prefersReducedMotion ? 1 : 1.02 }}
                                    whileTap={{ scale: prefersReducedMotion ? 1 : 0.97 }}
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0057FF] shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0057FF]"
                                >
                                    view projects
                                    <motion.span
                                        className="inline-block text-sm"
                                        animate={
                                            prefersReducedMotion
                                                ? { x: 0 }
                                                : { x: [0, 4, 0] }
                                        }
                                        transition={
                                            prefersReducedMotion
                                                ? undefined
                                                : { duration: 1.4, repeat: Infinity, ease: 'easeInOut' }
                                        }
                                    >
                                        →
                                    </motion.span>
                                </motion.button>
                            </Link>
                        </div>
                    </motion.article>
                </motion.div>

                {/* CTA mobile fallback */}
                <div className="mt-6 text-center md:hidden">
                    <Link href="/portfolio" className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0057FF]">
                        view projects →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjectsSection;
