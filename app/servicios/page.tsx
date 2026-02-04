"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Package } from "lucide-react";

export default function ServicesPage() {
    const { services } = siteContent.pages;
    const icons = [<ShieldCheck key="0" />, <Wrench key="1" />, <Package key="2" />];

    return (
        <div className="pt-24 min-h-screen">
            <section className="relative py-20 bg-brand-dark text-center">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
                    >
                        {services.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-body max-w-3xl mx-auto"
                    >
                        {services.subtitle}
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-surface-dark p-8 rounded-xl border border-white/5 hover:border-brand-blue/30 transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center text-brand-blue mb-6 group-hover:scale-110 transition-transform">
                                {icons[idx] || <ShieldCheck />}
                            </div>
                            <h3 className="text-2xl font-bold font-heading text-white mb-6">
                                {section.title}
                            </h3>
                            <ul className="space-y-4">
                                {section.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
