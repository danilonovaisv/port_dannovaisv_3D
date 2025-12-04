'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useReducedMotion } from 'framer-motion';

const NAV_ITEMS = [
    { label: 'home', href: '/#hero', ariaLabel: 'Ir para seção hero' },
    { label: 'sobre', href: '/sobre', ariaLabel: 'Ir para página Sobre' },
    {
        label: 'portfolio showcase',
        href: '/portfolio',
        ariaLabel: 'Ir para página de portfólio',
    },
    { label: 'contato', href: '/#contact', ariaLabel: 'Ir para seção de contato' },
];

const LOGO_LIGHT =
    'https://aymuvxysygrwoicsjgxj.supabase.co/storage/v1/object/public/logo_site/faivcon-02.svg';

const SiteHeader: React.FC = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerVariants = {
        hidden: { y: prefersReducedMotion ? 0 : -24, opacity: prefersReducedMotion ? 1 : 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const } },
    };

    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className={`fixed inset-x-0 top-0 z-40 border-b border-black/5 transition-all ${isScrolled ? 'bg-white/95 backdrop-blur-md py-2' : 'bg-white py-4'
                }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">
                <Link href="/" aria-label="Ir para a página inicial" className="flex items-center gap-2">
                    <img
                        src={LOGO_LIGHT}
                        alt="Logo de Danilo Novais"
                        className="h-7 w-auto"
                        loading="lazy"
                    />
                </Link>

                <nav aria-label="Navegação principal" className="hidden items-center md:flex">
                    <ul className="flex items-center space-x-6 text-sm font-medium text-gray-700">
                        {NAV_ITEMS.map((item) => {
                            const isActive =
                                item.href === '/#hero'
                                    ? pathname === '/'
                                    : pathname === item.href || pathname.startsWith(item.href);
                            return (
                                <li key={item.href}>
                                    <Link href={item.href} aria-label={item.ariaLabel}>
                                        <motion.span
                                            className="group relative inline-flex cursor-pointer items-center gap-1"
                                            whileHover={{ y: -1 }}
                                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                        >
                                            <span
                                                className={`transition-colors ${isActive ? 'text-[#0057FF]' : 'text-gray-700 group-hover:text-[#0057FF]'
                                                    }`}
                                            >
                                                {item.label}
                                            </span>
                                            <motion.span
                                                className="absolute -bottom-1 left-0 h-[2px] w-full origin-left bg-[#0057FF]"
                                                initial={{ scaleX: isActive ? 1 : 0 }}
                                                animate={{ scaleX: isActive ? 1 : 0 }}
                                                whileHover={{ scaleX: 1 }}
                                                transition={{ duration: 0.25, ease: 'easeOut' }}
                                                aria-hidden="true"
                                            />
                                        </motion.span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
};

export default SiteHeader;
