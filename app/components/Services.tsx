"use client";

import { motion } from "framer-motion";
import { Monitor, Mic2, Settings, ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/lib/content";

const services = [
    {
        id: "engineering",
        title: "Ingeniería y Proyectos",
        description: "Diseño e implementación de sistemas fijos, aulas híbridas y automatización crítica.",
        icon: <Monitor className="w-10 h-10 text-brand-blue" />,
        link: "/ingenieria",
        bg: "bg-surface-dark",
        delay: 0
    },
    {
        id: "events",
        title: "Producción de Eventos",
        description: "Renta de equipo high-end y producción técnica para congresos y espectáculos.",
        icon: <Mic2 className="w-10 h-10 text-brand-accent" />,
        link: "/eventos",
        bg: "bg-[#0b2230]",
        delay: 0.2
    },
    {
        id: "services",
        title: "Soporte y Consultoría",
        description: "Mantenimiento preventivo, operación técnica y venta de equipo profesional.",
        icon: <Settings className="w-10 h-10 text-gray-300" />,
        link: "/servicios",
        bg: "bg-[#081822]",
        delay: 0.4
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <p className="text-brand-accent font-bold tracking-widest uppercase mb-4 text-sm">
                        Nuestras Divisiones
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
                        Soluciones 360° para su empresa
                    </h2>
                    <p className="text-xl text-gray-400 font-body">
                        {siteContent.home.intro.text}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <Link href={service.link} key={service.id} className="group">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: service.delay, duration: 0.6 }}
                                className={`h-full ${service.bg} p-10 rounded-3xl border border-white/5 hover:border-brand-blue/30 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden`}
                            >
                                {/* Hover Gradient Effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-8 p-4 bg-white/5 rounded-2xl w-fit group-hover:bg-white/10 transition-colors">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold font-heading text-white mb-4 group-hover:text-brand-blue transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-400 mb-8 font-body leading-relaxed flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white/50 group-hover:text-white transition-colors">
                                        Ver Detalles
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
