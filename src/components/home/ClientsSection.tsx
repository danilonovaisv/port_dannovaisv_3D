'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CLIENT_LOGOS: string[] = [
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client1.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client2.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client3.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client4.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client5.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client6.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client7.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client8.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client9.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client10.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client11.svg',
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/client-logos/client12.svg',
];

const ClientsSection: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="clients"
            className="bg-[#0057FF] text-white"
            aria-labelledby="clients-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                <motion.h2
                    id="clients-heading"
                    className="mb-8 text-center text-xl font-bold md:text-2xl"
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
                >
                    marcas com as quais já trabalhei
                </motion.h2>

                <motion.div
                    className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: prefersReducedMotion ? 0 : 0.03 },
                        },
                    }}
                >
                    {CLIENT_LOGOS.map((logo, index) => (
                        <motion.div
                            key={logo}
                            className="flex items-center justify-center rounded-2xl bg-white/5 p-4"
                            variants={{
                                hidden: {
                                    opacity: prefersReducedMotion ? 1 : 0,
                                    y: prefersReducedMotion ? 0 : 12,
                                    scale: prefersReducedMotion ? 1 : 0.9,
                                },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ duration: 0.45, delay: index * 0.02 }}
                        >
                            <motion.img
                                src={logo}
                                alt={`Logo de cliente ${index + 1}`}
                                className="max-h-10 w-auto filter brightness-0 invert"
                                whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
                                transition={{ duration: 0.2 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientsSection;
