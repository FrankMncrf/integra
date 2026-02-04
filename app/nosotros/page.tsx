"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";

export default function AboutPage() {
    const { about } = siteContent.pages;

    return (
        <div className="pt-24 min-h-screen">
            <section className="py-20 bg-brand-dark">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="max-w-4xl mx-auto text-center mb-16">
                            <h2 className="text-4xl font-bold font-heading text-white mb-6">
                                Nuestra Filosofía
                            </h2>
                            <p className="text-xl text-gray-300 font-body leading-relaxed">
                                &quot;{siteContent.pages.about.mission}&quot;
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-white mb-16">Nuestros Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {about.values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-surface-dark p-10 rounded-full aspect-square flex items-center justify-center border border-white/5 hover:border-brand-blue/50 transition-colors shadow-2xl relative group overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-brand-blue/5 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                                <h3 className="text-xl md:text-2xl font-bold text-center text-white relative z-10">
                                    {value}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
