"use client";

import { siteContent } from "@/lib/content";

export default function TrustSection() {
    const { brands } = siteContent.global;

    return (
        <section className="py-20 bg-[#050f16] border-t border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <p className="text-center text-gray-500 uppercase tracking-widest text-sm font-bold">
                    Aliados Tecnológicos
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex gap-16 py-4">
                    {brands.map((brand, idx) => (
                        <span key={idx} className="text-2xl md:text-3xl font-bold font-heading text-gray-600 hover:text-white transition-colors cursor-default mx-4">
                            {brand}
                        </span>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {brands.map((brand, idx) => (
                        <span key={`dup-${idx}`} className="text-2xl md:text-3xl font-bold font-heading text-gray-600 hover:text-white transition-colors cursor-default mx-4">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            {/* Tailwind Config Extension required for 'animate-marquee' or use inline style style={{ animation: 'marquee 60s linear infinite' }} */}
            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 60s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
