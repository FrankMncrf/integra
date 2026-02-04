"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";

export default function About() {
    const { intro } = siteContent.home;

    return (
        <section id="about" className="py-24 bg-surface-dark relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold font-heading text-white mb-6"
                        >
                            {intro.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-300 font-body text-lg leading-relaxed mb-6"
                        >
                            {intro.text}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-300 font-body text-lg leading-relaxed"
                        >
                            No solo instalamos equipos; creamos experiencias fluidas que potencian la colaboración y la productividad.
                        </motion.p>
                    </div>

                    {/* Visual/Image Placeholder */}
                    <div className="md:w-1/2 relative">
                        <div className="aspect-video rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-white/10 flex items-center justify-center relative overflow-hidden group">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                                poster="/experience-poster.png"
                            >
                                <source src="/experience-video.mp4" type="video/mp4" />
                            </video>

                            {/* Overlay Text */}
                            <div className="absolute bottom-4 right-4 bg-brand-dark/80 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                <span className="text-gray-400 text-xs uppercase tracking-widest">Experiencia Inmersiva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
