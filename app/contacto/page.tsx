"use client";

import { siteContent } from "@/lib/content";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    const { contact } = siteContent.global;

    return (
        <div className="pt-24 min-h-screen">
            <section className="py-20 relative">
                <div className="absolute inset-x-0 top-0 h-1/2 bg-brand-dark z-0" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-surface-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                        {/* Contact Info */}
                        <div className="md:w-2/5 bg-brand-blue p-12 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-6 relative z-10">Hablemos de su Proyecto</h2>
                                <p className="text-white/80 mb-12 relative z-10">
                                    Estamos listos para diseñar la solución que su empresa necesita.
                                </p>

                                <div className="space-y-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <Phone className="opacity-80" />
                                        <span>{contact.phone}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="opacity-80" />
                                        <span>{contact.email}</span>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <MapPin className="opacity-80" />
                                        <span>{contact.address}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 relative z-10">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <Send className="w-6 h-6 rotate-45" />
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="md:w-3/5 p-12 bg-surface-dark">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Nombre Completo</label>
                                        <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400 font-medium">Correo Corporativo</label>
                                        <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="john@company.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Empresa / Organización</label>
                                    <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="Integra AV" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400 font-medium">Mensaje</label>
                                    <textarea rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-brand-blue transition-colors" placeholder="Describa brevemente su proyecto..." />
                                </div>

                                <button type="button" className="w-full py-4 bg-brand-accent text-white font-bold rounded-lg hover:bg-brand-accent/90 transition-all shadow-lg">
                                    Enviar Mensaje
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
