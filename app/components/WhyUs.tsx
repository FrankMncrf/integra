"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Users } from "lucide-react";

const icons = [
    <ShieldCheck key="shield" className="w-12 h-12 text-brand-blue" />,
    <Zap key="zap" className="w-12 h-12 text-brand-accent" />,
    <Users key="users" className="w-12 h-12 text-green-400" />
];

export default function WhyUs() {
    return (
        <section className="py-24 bg-[#0A1D29] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(#4A8BB2 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold font-heading text-white mb-6"
                        >
                            ¿Por qué elegir <span className="text-brand-blue">Integra AV</span>?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-300 font-body leading-relaxed mb-8"
                        >
                            {siteContent.home.intro.text}
                        </motion.p>

                        <div className="flex gap-4">
                            <div className="h-1 w-20 bg-brand-accent rounded-full"></div>
                            <div className="h-1 w-10 bg-brand-blue rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {siteContent.pages.about.values.map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors"
                            >
                                <div className="p-4 bg-brand-dark rounded-xl border border-white/5">
                                    {icons[idx % icons.length]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading text-white mb-1">
                                        {value}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        Estándar de calidad garantizado en cada proyecto.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
