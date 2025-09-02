import { useState } from 'react';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export function BiogalenisHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigation = [
        { name: 'Inicio', href: '/' },
        { name: 'Servicios', href: '/servicios' },
        { name: 'Laboratorio', href: '/laboratorio' },
        { name: 'Equipo Médico', href: '/equipo-medico' },
        { name: 'Contacto', href: '/contacto' },
    ];

    return (
        <header className="bg-white shadow-lg sticky top-0 z-50">
            {/* Barra superior de información */}
            <div className="bg-biogalenis-700 text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <span>+58 424-1047790</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span>Caracas: 24h | Santa Teresa: 7am-6pm</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a 
                                href="https://instagram.com/biogalenis" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-accent-500 transition-colors"
                            >
                                @biogalenis
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header principal */}
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-biogalenis-700 to-accent-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-biogalenis-700">
                                Biogalenis
                            </h1>
                            <p className="text-sm text-gray-600 font-freight">
                                Centro de Especialidades Médicas Quirúrgicas
                            </p>
                        </div>
                    </div>

                    {/* Navegación desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-700 hover:text-biogalenis-700 font-medium transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Botón de acción */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button className="btn-primary">
                            Portal del Paciente
                        </Button>
                    </div>

                    {/* Botón móvil */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Menú móvil */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4 pt-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-700 hover:text-biogalenis-700 font-medium transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Button className="btn-primary w-full mt-4">
                                Portal del Paciente
                            </Button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}
