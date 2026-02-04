import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";
import { siteContent } from "@/lib/content";

export default function Footer() {
    return (
        <footer id="footer" className="bg-brand-dark border-t border-white/5 pt-16 pb-8 text-gray-400 font-body">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                {/* Brand */}
                <div className="col-span-1">
                    <Link href="/" className="mb-4 block">
                        <img
                            src="/logos/Isotipo.png"
                            alt="Integra AV"
                            className="h-20 w-auto object-contain"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed mb-6">
                        {siteContent.global.tagline}
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Empresa</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
                        <li><Link href="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                        <li><Link href="/ingenieria" className="hover:text-white transition-colors">Proyectos</Link></li>
                        <li><Link href="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Soluciones</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/ingenieria" className="hover:text-white transition-colors">Audio & Video</Link></li>
                        <li><Link href="/ingenieria" className="hover:text-white transition-colors">Automatización</Link></li>
                        <li><Link href="/ingenieria" className="hover:text-white transition-colors">Aulas Híbridas</Link></li>
                        <li><Link href="/eventos" className="hover:text-white transition-colors">Renta de Equipos</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contacto</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-brand-blue mt-1" />
                            <span>{siteContent.global.contact.address}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-brand-blue" />
                            <span>{siteContent.global.contact.phone}</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-brand-blue" />
                            <span>{siteContent.global.contact.email}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; {new Date().getFullYear()} {siteContent.global.companyName}. Todos los derechos reservados.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-white transition-colors">Aviso de Privacidad</Link>
                    <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
                </div>
            </div>
        </footer>
    );
}
