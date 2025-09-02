import { Phone, MapPin, Clock, Mail, Instagram, Facebook, Youtube, Linkedin, MessageCircle, ChevronRight, Send } from 'lucide-react';
import { Link } from '@inertiajs/react';

export function BiogalenisFooter() {
    
    return (
        <footer className="bg-black text-white relative">
            {/* Contenido principal del footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* Columna 1: Logo y Descripción */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-biogalenis-700 to-accent-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <h3 className="text-xl font-bold">BIOGALENIS</h3>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Donde la salud se convierte en cuidado integral y cada paciente es tratado con dedicación y empatía. 
                            Aquí, tu bienestar es nuestra prioridad, ofreciéndote un servicio humano y profesional inigualable.
                        </p>
                    </div>

                    {/* Columna 2: Accesos Directos */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">ACCESOS DIRECTOS</h4>
                        <ul className="space-y-2">
                            {[
                                { name: 'Sobre nosotros', href: '/sobre-nosotros' },
                                { name: 'Servicios', href: '/servicios' },
                                { name: 'Laboratorio', href: '/laboratorio' },
                                { name: 'Equipo Médico', href: '/equipo-medico' },
                                { name: 'Contacto', href: '/contacto' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a 
                                        href={item.href}
                                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors group"
                                    >
                                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Columna 3: Contáctanos Ahora */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">CONTÁCTANOS AHORA</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
                                <div className="text-sm text-gray-300">
                                    <p className="font-medium">Caracas:</p>
                                    <p>G38Q+P3X, Avenida Este 17, Caracas 1010</p>
                                    <p className="font-medium mt-2">Santa Teresa:</p>
                                    <p>Calle Santa Rafael, Local N° 91, Casco Central</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-accent-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300">info@biogalenis.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-accent-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300">+58 424-1047790</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Clock className="h-5 w-5 text-accent-400 flex-shrink-0" />
                                <div className="text-sm text-gray-300">
                                    <p>Caracas: 24h</p>
                                    <p>Santa Teresa: 7am-6pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Suscríbete y Redes Sociales */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold">SUSCRÍBETE A NOSOTROS</h4>
                        <div className="space-y-4">
                            {/* Campo de suscripción */}
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    className="w-full px-3 py-2 bg-transparent border-b-2 border-gray-400 text-white placeholder-gray-400 focus:border-accent-400 focus:outline-none transition-colors"
                                />
                                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-accent-400 hover:text-white transition-colors">
                                    <Send className="h-5 w-5" />
                                </button>
                            </div>
                            
                            {/* Redes sociales */}
                            <div className="space-y-3">
                                <p className="text-sm text-gray-300">Síguenos en redes sociales:</p>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                    <a href="https://instagram.com/biogalenis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <Youtube className="h-6 w-6" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <Linkedin className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Línea separadora */}
            <div className="border-t border-gray-600"></div>

            {/* Copyright */}
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        Copyright © 2024 Centro De Especialidades Médicas Quirúrgicas Biogalenis C.A.
                    </p>
                    <div className="mt-2 md:mt-0">
                        <a 
                            href="/portal-paciente"
                            className="text-accent-400 hover:text-white text-sm transition-colors"
                        >
                            Portal del Paciente
                        </a>
                    </div>
                </div>
            </div>

            {/* Botón flotante de chat */}
            <div className="fixed bottom-6 right-6 z-50">
                <button className="bg-[#34D399] hover:bg-[#10B981] text-white px-6 py-3 rounded-full shadow-lg flex items-center space-x-2 transition-colors">
                    <MessageCircle className="h-5 w-5" />
                    <span className="font-medium">Chatea con nosotros</span>
                </button>
            </div>
        </footer>
    );
}
