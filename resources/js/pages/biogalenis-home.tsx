import { Head } from '@inertiajs/react';
import BiogalenisLayout from '@/layouts/biogalenis-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
    Microscope, 
    Stethoscope, 
    Activity, 
    Users, 
    Clock, 
    Shield,
    CheckCircle,
    Star
} from 'lucide-react';
import { BiogalenisHero } from '@/components/biogalenis/biogalenis-hero';

export default function BiogalenisHome() {
    const servicios = [
        {
            icon: Microscope,
            title: 'Laboratorio Clínico',
            description: 'Más de 200 exámenes con tecnología avanzada y personal especializado.',
            color: 'from-biogalenis-600 to-biogalenis-700'
        },
        {
            icon: Stethoscope,
            title: 'Consultas Médicas',
            description: 'Especialistas por áreas totalmente preparados para cualquier tipo de consulta.',
            color: 'from-accent-500 to-accent-600'
        },
        {
            icon: Activity,
            title: 'Imagenología',
            description: 'Servicios de diagnóstico por imagen con equipos de última generación.',
            color: 'from-biogalenis-500 to-accent-500'
        }
    ];

    const valores = [
        {
            icon: Shield,
            title: 'Responsabilidad',
            description: 'Actuamos con ética y compromiso en cada procedimiento.'
        },
        {
            icon: Star,
            title: 'Calidad',
            description: 'Garantizamos altos estándares en cada uno de nuestros procesos clínicos.'
        },
        {
            icon: CheckCircle,
            title: 'Confianza',
            description: 'Resultados precisos y atención profesional en la que puede confiar.'
        },
        {
            icon: Clock,
            title: 'Puntualidad',
            description: 'Valoramos el tiempo de nuestros pacientes con gestión eficiente.'
        }
    ];

    return (
        <BiogalenisLayout>
            <Head title="Biogalenis - Centro de Especialidades Médicas Quirúrgicas" />
            <BiogalenisHero />
            
            {/* Sección de Servicios */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-biogalenis-800 mb-4">
                            Nuestros Servicios
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Ofrecemos una amplia gama de servicios médicos y de laboratorio 
                            con la más alta calidad y tecnología avanzada.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-biogalenis-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-biogalenis-600 to-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-biogalenis-800 mb-4">Laboratorio Clínico</h3>
                            <p className="text-gray-600">
                                Más de 200 exámenes de laboratorio con resultados precisos y rápidos, 
                                utilizando tecnología de vanguardia.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-accent-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-biogalenis-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-accent-700 mb-4">Imagenología</h3>
                            <p className="text-gray-600">
                                Estudios de imagen avanzados con equipos modernos para un diagnóstico 
                                preciso y detallado.
                            </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-biogalenis-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-br from-biogalenis-600 to-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-biogalenis-800 mb-4">Consultas Médicas</h3>
                            <p className="text-gray-600">
                                Atención médica especializada con profesionales altamente capacitados 
                                en diversas áreas médicas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sección de Valores */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-biogalenis-800 mb-4">
                            Nuestros Valores
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Los principios que guían nuestro compromiso con la excelencia médica 
                            y el cuidado de nuestros pacientes.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-biogalenis-600 to-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-biogalenis-800 mb-3">Responsabilidad</h3>
                            <p className="text-gray-600">
                                Actuamos con ética y compromiso en cada procedimiento.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-biogalenis-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-accent-700 mb-3">Calidad</h3>
                            <p className="text-gray-600">
                                Garantizamos altos estándares en cada proceso clínico.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-biogalenis-600 to-accent-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-biogalenis-800 mb-3">Confianza</h3>
                            <p className="text-gray-600">
                                Ofrecemos un servicio en el que nuestros pacientes pueden confiar plenamente.
                            </p>
                        </div>
                        
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-accent-500 to-biogalenis-600 rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-accent-700 mb-3">Puntualidad</h3>
                            <p className="text-gray-600">
                                Valoramos el tiempo de nuestros pacientes con gestión eficiente.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-biogalenis-700 to-accent-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        ¿Listo para cuidar de tu salud?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Únete a miles de pacientes que confían en Biogalenis para su cuidado médico.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-biogalenis-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                            Agendar Cita
                        </button>
                        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-biogalenis-700 transition-colors">
                            Contactar
                        </button>
                    </div>
                </div>
            </section>
        </BiogalenisLayout>
    );
}
