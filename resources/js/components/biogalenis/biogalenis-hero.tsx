import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
    Stethoscope, 
    Microscope, 
    Activity, 
    Clock, 
    MapPin, 
    Users,
    ArrowRight,
    Shield,
    Zap,
    Heart,
    Brain,
    Eye,
    Pill,
    DollarSign,
    FileText,
    UserCheck,
    CheckCircle,
    Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

export function BiogalenisHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Centro de Especialidades",
            subtitle: "Quirúrgicas Biogalenis",
            description: "Servicios médicos y de laboratorio clínico con altos estándares de calidad, precisión y responsabilidad, utilizando tecnología avanzada y un equipo humano altamente capacitado.",
            background: "from-biogalenis-600 via-biogalenis-500 to-accent-600",
            backgroundImage: null, // Sin imagen por ahora
            icon: Stethoscope,
            stats: [
                { icon: Microscope, value: '200+', label: 'Exámenes de Laboratorio' },
                { icon: Clock, value: '24/7', label: 'Atención en Caracas' },
                { icon: MapPin, value: '2', label: 'Sucursales' },
            ],
            buttonText: "Nuestros Servicios",
            buttonVariant: "primary",
            style: "centered-with-bg"
        },
        {
            id: 2,
            title: "Laboratorio Clínico",
            subtitle: "de Vanguardia",
            description: "Más de 200 exámenes de laboratorio con tecnología de punta, resultados precisos y rápidos. Nuestros bioanalistas especializados garantizan la máxima calidad en cada análisis.",
            background: "from-biogalenis-600 via-biogalenis-500 to-accent-600",
            backgroundImage: null, // Sin imagen por ahora
            icon: Microscope,
            stats: [
                { icon: Activity, value: '200+', label: 'Exámenes Disponibles' },
                { icon: Clock, value: '2-4h', label: 'Resultados Rápidos' },
                { icon: Shield, value: '99.9%', label: 'Precisión' },
            ],
            buttonText: "Ver Exámenes",
            buttonVariant: "secondary",
            style: "split-with-image"
        },
        {
            id: 3,
            title: "Portal del Paciente",
            subtitle: "Consulta tus Resultados",
            description: "Accede a tu historial médico completo, consulta resultados de laboratorio en tiempo real, descarga reportes en PDF y recibe notificaciones automáticas cuando estén listos.",
            background: "from-biogalenis-600 via-biogalenis-500 to-accent-600",
            backgroundImage: null, // Sin imagen por ahora
            icon: UserCheck,
            features: [
                "Historial médico completo",
                "Resultados en tiempo real", 
                "Descarga de reportes PDF",
                "Notificaciones automáticas"
            ],
            buttonText: "Acceder al Portal",
            buttonVariant: "primary",
            style: "split-with-screenshot"
        },
        {
            id: 4,
            title: "Nuestros Médicos",
            subtitle: "Especialistas Calificados",
            description: "Equipo médico multidisciplinario con especialistas en ginecología, nutrición, cardiología y más. Cada profesional cuenta con amplia experiencia y certificaciones internacionales.",
            background: "from-biogalenis-600 via-biogalenis-500 to-accent-600",
            backgroundImage: null, // Sin imagen por ahora
            icon: Heart,
            specialties: [
                { name: "Ginecología", icon: Heart, doctors: 8 },
                { name: "Nutrición", icon: Brain, doctors: 5 },
                { name: "Cardiología", icon: Activity, doctors: 6 }
            ],
            buttonText: "Conocer Médicos",
            buttonVariant: "secondary",
            style: "image-tiles"
        },
        {
            id: 5,
            title: "Consulta de Precios",
            subtitle: "Transparencia Total",
            description: "Consulta los precios de todos nuestros exámenes de laboratorio de forma transparente. Encuentra promociones especiales y paquetes de exámenes con descuentos.",
            background: "from-biogalenis-600 via-biogalenis-500 to-accent-600",
            backgroundImage: null, // Sin imagen por ahora
            icon: DollarSign,
            highlights: [
                "Precios transparentes",
                "Promociones especiales",
                "Paquetes con descuento",
                "Consulta online 24/7"
            ],
            buttonText: "Ver Precios",
            buttonVariant: "primary",
            style: "bordered-screenshot"
        }
    ];

    // Auto-play del carrusel más lento
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000); // Cambia cada 10 segundos para ser más sutil

        return () => clearInterval(interval);
    }, [slides.length]);

    const floatingElements = [
        { icon: Stethoscope, delay: 0, position: 'top-20 left-20' },
        { icon: Activity, delay: 0.5, position: 'top-32 right-32' },
        { icon: Shield, delay: 1, position: 'bottom-32 left-32' },
        { icon: Zap, delay: 1.5, position: 'bottom-20 right-20' },
    ];

    // Renderizar slide según el estilo
    const renderSlide = (slide: any) => {
        switch (slide.style) {
            case "centered-with-bg":
                return (
                    <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                        <div className="text-center max-w-5xl mx-auto">
                            {/* Título principal */}
                            <motion.h1 
                                className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {slide.title}
                            </motion.h1>

                            {/* Subtítulo destacado */}
                            <motion.h2 
                                className="text-4xl md:text-6xl font-bold text-white mb-8 font-freight drop-shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                {slide.subtitle}
                            </motion.h2>

                            {/* Descripción */}
                            <motion.p 
                                className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            >
                                {slide.description}
                            </motion.p>

                            {/* Estadísticas */}
                            <motion.div 
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            >
                                {slide.stats.map((stat: any, index: number) => (
                                    <motion.div
                                        key={index}
                                        className="text-center group bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-biogalenis-600 to-accent-500 rounded-full mb-4 group-hover:shadow-lg transition-all duration-300">
                                            <stat.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <motion.div
                                            className="text-3xl md:text-4xl font-bold text-white mb-2"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 0.8 + index * 0.1,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                        >
                                            {stat.value}
                                        </motion.div>
                                        <p className="text-white font-medium">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Botón de acción */}
                            <motion.div 
                                className="flex justify-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                        size="lg" 
                                        className="btn-primary text-lg px-8 py-4 group hover:shadow-xl transition-all duration-300"
                                    >
                                        {slide.buttonText}
                                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                );

            case "split-with-image":
                return (
                    <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Contenido izquierdo */}
                            <motion.div 
                                className="text-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    {slide.title}
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-bold text-accent-200 mb-6 font-freight">
                                    {slide.subtitle}
                                </h2>
                                <p className="text-xl text-white mb-8 leading-relaxed">
                                    {slide.description}
                                </p>
                                
                                                                 {/* Estadísticas */}
                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                     {slide.stats.map((stat: any, index: number) => (
                                         <motion.div
                                             key={index}
                                             className="text-center"
                                             initial={{ opacity: 0, y: 20 }}
                                             animate={{ opacity: 1, y: 0 }}
                                             transition={{ delay: 0.5 + index * 0.1 }}
                                         >
                                             <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-400 rounded-full mb-3">
                                                 <stat.icon className="h-7 w-7 text-white" />
                                             </div>
                                             <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                             <p className="text-white text-sm">{stat.label}</p>
                                         </motion.div>
                                     ))}
                                 </div>

                                                                 <motion.div
                                     whileHover={{ scale: 1.05 }}
                                     whileTap={{ scale: 0.95 }}
                                 >
                                     <Button 
                                         size="lg" 
                                         className="border-2 border-white text-white hover:bg-white hover:text-biogalenis-600 text-lg px-8 py-4"
                                     >
                                         {slide.buttonText}
                                         <ArrowRight className="ml-2 h-5 w-5" />
                                     </Button>
                                 </motion.div>
                            </motion.div>

                                                         {/* Imagen derecha */}
                             <motion.div 
                                 className="relative"
                                 initial={{ opacity: 0, x: 30 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                             >
                                 <div className="relative">
                                     <div className="absolute inset-0 bg-gradient-to-br from-accent-400 to-accent-300 rounded-3xl transform rotate-6"></div>
                                     <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                                         <div className="text-center">
                                             <Microscope className="h-24 w-24 text-accent-600 mx-auto mb-4" />
                                             <h3 className="text-2xl font-bold text-gray-800 mb-2">Tecnología de Vanguardia</h3>
                                             <p className="text-gray-600">Equipos de última generación para resultados precisos</p>
                                         </div>
                                     </div>
                                 </div>
                             </motion.div>
                        </div>
                    </div>
                );

            case "split-with-screenshot":
                return (
                    <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Contenido izquierdo */}
                            <motion.div 
                                className="text-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    {slide.title}
                                </h1>
                                <h2 className="text-3xl md:text-4xl font-bold text-accent-200 mb-6 font-freight">
                                    {slide.subtitle}
                                </h2>
                                <p className="text-xl text-white mb-8 leading-relaxed">
                                    {slide.description}
                                </p>
                                
                                                                 {/* Características */}
                                 <div className="space-y-4 mb-8">
                                     {slide.features.map((feature: string, index: number) => (
                                         <motion.div
                                             key={index}
                                             className="flex items-center space-x-3"
                                             initial={{ opacity: 0, x: -20 }}
                                             animate={{ opacity: 1, x: 0 }}
                                             transition={{ delay: 0.5 + index * 0.1 }}
                                         >
                                             <CheckCircle className="h-6 w-6 text-accent-300 flex-shrink-0" />
                                             <span className="text-white">{feature}</span>
                                         </motion.div>
                                     ))}
                                 </div>

                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                        size="lg" 
                                        className="btn-primary text-lg px-8 py-4"
                                    >
                                        {slide.buttonText}
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </motion.div>
                            </motion.div>

                            {/* Dashboard preview derecha */}
                            <motion.div 
                                className="relative"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            >
                                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    {/* Header del dashboard */}
                                    <div className="bg-accent-600 px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <UserCheck className="h-6 w-6 text-white" />
                                            <h3 className="text-white font-semibold">Portal del Paciente</h3>
                                        </div>
                                    </div>
                                    
                                    {/* Contenido del dashboard */}
                                    <div className="p-6">
                                        <div className="space-y-4">
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-700">Hemograma Completo</span>
                                                    <span className="text-green-600 font-semibold">Disponible</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-700">Glicemia</span>
                                                    <span className="text-yellow-600 font-semibold">En Proceso</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-50 rounded-lg p-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-700">Perfil Lipídico</span>
                                                    <span className="text-green-600 font-semibold">Disponible</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                );

            case "image-tiles":
                return (
                    <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                        <div className="text-center mb-16">
                            <motion.h1 
                                className="text-5xl md:text-6xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold text-accent-200 mb-6 font-freight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                {slide.subtitle}
                            </motion.h2>
                            <motion.p 
                                className="text-xl text-white max-w-3xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            >
                                {slide.description}
                            </motion.p>
                        </div>

                        {/* Grid de especialidades */}
                        <motion.div 
                            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                        >
                            {slide.specialties.map((specialty: any, index: number) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-xl text-center group hover:shadow-2xl transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mb-6 group-hover:scale-110 transition-transform">
                                        <specialty.icon className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{specialty.name}</h3>
                                    <div className="text-4xl font-bold text-purple-600 mb-2">{specialty.doctors}</div>
                                    <p className="text-gray-600">Especialistas</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div 
                            className="text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    size="lg" 
                                    className="border-2 border-white text-white hover:bg-white hover:text-biogalenis-600 text-lg px-8 py-4"
                                >
                                    {slide.buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                );

            case "bordered-screenshot":
                return (
                    <div className="relative z-10 container mx-auto px-4 pt-20 pb-16">
                        <div className="text-center max-w-4xl mx-auto">
                            <motion.h1 
                                className="text-5xl md:text-6xl font-bold text-white mb-6"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            >
                                {slide.title}
                            </motion.h1>
                            <motion.h2 
                                className="text-3xl md:text-4xl font-bold text-accent-200 mb-6 font-freight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                            >
                                {slide.subtitle}
                            </motion.h2>
                            <motion.p 
                                className="text-xl text-white mb-12 leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            >
                                {slide.description}
                            </motion.p>

                            {/* Highlights */}
                            <motion.div 
                                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                            >
                                {slide.highlights.map((highlight: string, index: number) => (
                                                                         <motion.div
                                         key={index}
                                         className="text-center"
                                         initial={{ opacity: 0, scale: 0.8 }}
                                         animate={{ opacity: 1, scale: 1 }}
                                         transition={{ delay: 0.8 + index * 0.1 }}
                                     >
                                         <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-400 rounded-full mb-3">
                                             <Star className="h-8 w-8 text-white" />
                                         </div>
                                         <p className="text-white font-medium text-sm">{highlight}</p>
                                     </motion.div>
                                ))}
                            </motion.div>

                                                         {/* Interfaz de precios simulada */}
                             <motion.div 
                                 className="bg-white rounded-2xl shadow-2xl p-8 mb-12 border-4 border-accent-200"
                                 initial={{ opacity: 0, scale: 0.9 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                             >
                                                                <div className="text-center mb-6">
                                     <DollarSign className="h-12 w-12 text-accent-600 mx-auto mb-4" />
                                     <h3 className="text-2xl font-bold text-gray-800 mb-2">Consulta de Precios</h3>
                                     <p className="text-gray-600">Transparencia total en todos nuestros servicios</p>
                                 </div>
                                 
                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                     <div className="bg-gray-50 rounded-lg p-4 text-center">
                                         <div className="text-2xl font-bold text-accent-600 mb-1">$15</div>
                                         <div className="text-gray-600 text-sm">Hemograma</div>
                                     </div>
                                     <div className="bg-gray-50 rounded-lg p-4 text-center">
                                         <div className="text-2xl font-bold text-accent-600 mb-1">$25</div>
                                         <div className="text-gray-600 text-sm">Glicemia</div>
                                     </div>
                                     <div className="bg-gray-50 rounded-lg p-4 text-center">
                                         <div className="text-2xl font-bold text-accent-600 mb-1">$35</div>
                                         <div className="text-gray-600 text-sm">Perfil Lipídico</div>
                                     </div>
                                 </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button 
                                    size="lg" 
                                    className="btn-primary text-lg px-8 py-4"
                                >
                                    {slide.buttonText}
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden">
            {/* Carrusel de slides */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={currentSlide}
                    className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].background}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Imagen de fondo con overlay */}
                    {slides[currentSlide].backgroundImage && (
                        <div className="absolute inset-0">
                            <div 
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
                                    filter: 'brightness(0.3)'
                                }}
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40" />
                        </div>
                    )}

                    {/* Patrón de fondo sutil */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b98431' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        }} />
                    </div>

                    {/* Elementos flotantes animados */}
                    {floatingElements.map((element, index) => (
                        <motion.div
                            key={index}
                            className={`absolute ${element.position} text-white opacity-20`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ 
                                opacity: [0.2, 0.4, 0.2], 
                                y: [0, -10, 0] 
                            }}
                            transition={{
                                duration: 6,
                                delay: element.delay,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <element.icon className="h-12 w-12" />
                        </motion.div>
                    ))}

                    {/* Renderizar slide según el estilo */}
                    {renderSlide(slides[currentSlide])}

                    {/* Línea decorativa inferior */}
                    <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-biogalenis-500 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Indicadores de navegación */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                <div className="flex space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentSlide 
                                    ? 'bg-biogalenis-600 scale-125' 
                                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                        />
                    ))}
                </div>
            </div>

            {/* Botones de navegación manual */}
            <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-biogalenis-600 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            
            <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-80 hover:bg-opacity-100 text-biogalenis-600 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </section>
    );
}
