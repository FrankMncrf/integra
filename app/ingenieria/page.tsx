"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function EngineeringPage() {
    const { engineering } = siteContent.pages;

    return (
        <div className="pt-24 min-h-screen">
            {/* Header */}
            <section className="relative py-20 bg-brand-dark overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
                    >
                        {engineering.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-body max-w-3xl mx-auto"
                    >
                        {engineering.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="py-20 bg-black/20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {engineering.sections.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-surface-dark border border-white/5 rounded-xl p-8 hover:border-brand-blue/30 transition-colors group"
                            >
                                <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-brand-blue transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-gray-400 mb-6 font-body text-sm">
                                    {section.content}
                                </p>
                                <ul className="space-y-3">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                            <CheckCircle2 size={16} className="text-brand-accent mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
