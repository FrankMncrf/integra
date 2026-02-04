"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { Mic2, Film, Lightbulb } from "lucide-react";

export default function EventsPage() {
    const { events } = siteContent.pages;
    const icons = [<Mic2 key="0" />, <Film key="1" />, <Lightbulb key="2" />];

    return (
        <div className="pt-24 min-h-screen">
            {/* Header */}
            <section className="relative py-20 bg-brand-dark overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/10 to-transparent" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold font-heading text-white mb-6"
                    >
                        {events.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 font-body max-w-3xl mx-auto"
                    >
                        {events.subtitle}
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20">
                <div className="container mx-auto px-6 space-y-24">
                    {events.sections.map((section, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
                        >
                            {/* Text */}
                            <div className="md:w-1/2">
                                <div className="inline-block p-3 bg-brand-accent/20 rounded-lg text-brand-accent mb-4">
                                    {icons[idx] || <Mic2 />}
                                </div>
                                <h3 className="text-3xl font-bold font-heading text-white mb-4">
                                    {section.title}
                                </h3>
                                <p className="text-gray-300 text-lg mb-8">
                                    {section.content}
                                </p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg border border-white/5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                            <span className="text-gray-200">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Placeholder */}
                            <div className="md:w-1/2 w-full aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-white/10 flex items-center justify-center">
                                <span className="text-gray-600 font-bold text-xl uppercase tracking-widest opacity-50">
                                    {section.title} Visual
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
