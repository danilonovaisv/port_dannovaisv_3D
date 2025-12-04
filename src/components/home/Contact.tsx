'use client';

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Contact: React.FC = () => {
    const prefersReducedMotion = useReducedMotion();

    return (
        <section
            id="contact"
            className="bg-white"
            aria-labelledby="contact-heading"
        >
            <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
                <motion.div
                    className="mb-8 space-y-2 text-left"
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
                >
                    <h2
                        id="contact-heading"
                        className="text-2xl font-bold text-[#0057FF]"
                    >
                        contato
                    </h2>
                    <p className="text-base text-[#111111]">
                        Tem uma pergunta ou quer trabalhar junto?
                    </p>
                </motion.div>

                <motion.div
                    className="grid gap-10 md:grid-cols-2"
                    initial={{ opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] as const }}
                >
                    {/* Coluna esquerda: infos e redes */}
                    <div className="space-y-6 text-sm text-[#111111]">
                        <div>
                            <p className="font-semibold">Contato direto</p>
                            <div className="mt-2 space-y-1">
                                <a
                                    href="tel:+5511983966838"
                                    className="block text-sm text-[#0057FF] hover:underline"
                                >
                                    +55 11 98396-6838
                                </a>
                                <a
                                    href="mailto:dannovaisv@gmail.com"
                                    className="block text-sm text-[#0057FF] hover:underline"
                                >
                                    dannovaisv@gmail.com
                                </a>
                                <a
                                    href="mailto:danilo@portfoliodanilo.com"
                                    className="block text-sm text-[#0057FF] hover:underline"
                                >
                                    danilo@portfoliodanilo.com
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">Presença digital</p>
                            <div className="mt-2 space-y-1">
                                <a
                                    href="https://portfoliodanilo.com"
                                    className="block text-sm text-[#0057FF] hover:underline"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    portfoliodanilo.com
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="font-semibold">Redes sociais</p>
                            <div className="mt-3 flex flex-wrap gap-3 text-sm">
                                <a
                                    href="https://instagram.com/danilo_novais"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#0057FF] hover:underline"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://facebook.com/danilonovaisvilela"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#0057FF] hover:underline"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://linkedin.com/in/danilonovais"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#0057FF] hover:underline"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/danilo_novais"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#0057FF] hover:underline"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Coluna direita: formulário */}
                    <motion.form
                        action="https://formsubmit.co/danilo@portfoliodanilo.com"
                        method="POST"
                        className="space-y-4 text-sm"
                        initial={false}
                    >
                        <div className="space-y-1">
                            <label htmlFor="name" className="block font-medium text-[#111111]">
                                Nome
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                maxLength={100}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-[#111111] shadow-sm focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2 focus:ring-offset-white"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="block font-medium text-[#111111]">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                maxLength={100}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-[#111111] shadow-sm focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2 focus:ring-offset-white"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="subject" className="block font-medium text-[#111111]">
                                Assunto
                            </label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                maxLength={100}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-[#111111] shadow-sm focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2 focus:ring-offset-white"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="message" className="block font-medium text-[#111111]">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                maxLength={1000}
                                rows={5}
                                className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-[#111111] shadow-sm focus:border-[#0057FF] focus:outline-none focus:ring-2 focus:ring-[#0057FF] focus:ring-offset-2 focus:ring-offset-white"
                            />
                        </div>

                        {/* Proteções básicas do formsubmit (opcionais) */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />

                        <motion.button
                            type="submit"
                            whileHover={{ y: prefersReducedMotion ? 0 : -1, scale: prefersReducedMotion ? 1 : 1.02 }}
                            whileTap={{ scale: prefersReducedMotion ? 1 : 0.97 }}
                            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#0057FF] px-6 py-2.5 text-sm font-semibold text-white shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0057FF] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                        >
                            Enviar Mensagem
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
