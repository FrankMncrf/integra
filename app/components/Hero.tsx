"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const { hero } = siteContent.home;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-brand-dark/80 z-10" /> {/* Overlay to darken video */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/hero-poster.png"
                >
                    <source src="/hero-background.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-10 px-6 text-center pt-32 md:pt-40">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="max-w-5xl mx-auto"
                >
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, letterSpacing: "-0.5em", filter: "blur(10px)" },
                            visible: {
                                opacity: 1,
                                letterSpacing: "0.2em",
                                filter: "blur(0px)",
                                transition: { duration: 1.5, ease: "circOut" }
                            }
                        }}
                        className="text-brand-accent font-bold uppercase mb-6 text-sm md:text-base"
                    >
                        {siteContent.global.tagline}
                    </motion.h2>

                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            variants={{
                                hidden: { y: 100, opacity: 0, rotateX: 45 },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    rotateX: 0,
                                    transition: {
                                        duration: 1.2,
                                        ease: [0.22, 1, 0.36, 1], // Custom heavy ease
                                        delay: 0.5
                                    }
                                }
                            }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-white leading-tight transform-gpu"
                        >
                            Tecnología que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-accent">Conecta</span>, <br />
                            Espacios que <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-blue">Inspiran</span>
                        </motion.h1>
                    </div>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: { duration: 1, delay: 1.2, ease: "easeOut" }
                            }
                        }}
                        className="text-xl md:text-2xl text-gray-300 mb-12 font-body max-w-2xl mx-auto leading-relaxed"
                    >
                        {hero.subtitle}
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.8, delay: 1.5 }
                            }
                        }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link href="/ingenieria" className="px-8 py-4 bg-brand-blue text-white rounded-full font-bold text-lg hover:bg-brand-blue/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(74,139,178,0.4)] group hover:scale-105">
                            {hero.ctaPrimary}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/contacto" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all hover:scale-105">
                            {hero.ctaSecondary}
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-400"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
