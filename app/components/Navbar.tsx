"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { siteContent } from "@/lib/content";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto w-[95%] max-w-7xl rounded-full",
                scrolled
                    ? "bg-[#020617]/50 backdrop-blur-xl shadow-lg border border-white/10 py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-6 h-12 flex items-center justify-between">
                {/* Logo */}
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img
                        src="/logos/Imagotipo.png"
                        alt="Integra AV"
                        className="h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {siteContent.global.navigation.filter(link => link.path !== "/").map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={cn(
                                "text-sm font-medium transition-colors font-body uppercase tracking-wide",
                                pathname === link.path
                                    ? "text-brand-blue"
                                    : "text-gray-300 hover:text-brand-blue"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 mx-4 p-6 bg-brand-dark/95 backdrop-blur-xl rounded-2xl border border-white/10 md:hidden flex flex-col gap-4 shadow-2xl"
                    >
                        {siteContent.global.navigation.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsOpen(false)}
                                className={cn(
                                    "text-lg font-medium text-center py-2 border-b border-white/5 last:border-0",
                                    pathname === link.path ? "text-brand-blue" : "text-gray-200 hover:text-brand-blue"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
