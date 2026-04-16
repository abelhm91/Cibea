import { motion, AnimatePresence } from 'motion/react';
import { Shield, Zap, Thermometer, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { useState, useEffect } from 'react';

const features = [
  {
    icon: Zap,
    title: "Láser de Diodo Pro Max+",
    description: "Nuestra tecnología de vanguardia permite una eliminación del vello eficaz en todo tipo de pieles, incluyendo pieles bronceadas.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Thermometer,
    title: "Enfriamiento Inteligente",
    description: "Cabezal con refrigeración de última generación que mantiene la piel a temperatura óptima, eliminando casi por completo la sensación de dolor.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Shield,
    title: "Seguridad Certificada",
    description: "Protocolos médicos estrictos y personal altamente cualificado para garantizar tu tranquilidad y resultados óptimos.",
    image: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    icon: Sparkles,
    title: "Resultados Duraderos",
    description: "Eliminación progresiva y permanente del vello, dejando una piel suave y rejuvenecida tras cada sesión.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
  },
];

export const Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % features.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1));

  return (
    <section id="tecnologia" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles size={14} />
            Ciencia y Excelencia
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl font-bold mb-4 text-brand-dark leading-tight"
          >
            Tecnología Médica de Vanguardia
          </motion.h2>
          <p className="text-brand-dark/60 text-base md:text-lg font-light leading-relaxed">
            Nuestra plataforma láser de grado médico garantiza resultados superiores con el máximo confort.
          </p>
        </div>

        <div className="flex justify-center md:justify-end gap-3">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all card-shadow bg-white group"
          >
            <ChevronLeft size={20} className="group-hover:scale-110 transition-transform" />
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-brand-dark/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all card-shadow bg-white group"
          >
            <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      <div className="relative h-[550px] sm:h-[600px] lg:h-[650px] rounded-[32px] md:rounded-[48px] overflow-hidden card-shadow bg-brand-muted">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col lg:flex-row"
          >
            {/* Image Section */}
            <div className="w-full lg:w-3/5 h-[45%] sm:h-[55%] lg:h-full relative overflow-hidden">
              <img 
                src={features[currentSlide].image} 
                alt={features[currentSlide].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-white/5 to-white lg:to-transparent pointer-events-none" />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5 h-[55%] sm:h-[45%] lg:h-full bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden">
              <div className="hidden sm:flex w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-brand-gold/10 items-center justify-center mb-6 md:mb-8">
                {(() => {
                  const Icon = features[currentSlide].icon;
                  return Icon ? <Icon className="text-brand-gold" size={32} /> : null;
                })()}
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-brand-dark leading-tight">
                {features[currentSlide].title}
              </h3>
              <p className="text-brand-dark/60 text-sm md:text-base lg:text-lg font-light leading-relaxed mb-6 md:mb-10">
                {features[currentSlide].description}
              </p>
              
              <div className="flex gap-2">
                {features.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={cn(
                      "h-1 md:h-1.5 rounded-full transition-all duration-500",
                      currentSlide === i ? "w-8 md:w-12 bg-brand-gold" : "w-3 bg-brand-dark/10 hover:bg-brand-dark/20"
                    )}
                  />
                ))}
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Trust Badge Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 py-8 md:py-12 border-y border-brand-dark/5 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 grayscale opacity-50"
      >
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">CE</span>
          <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1">Certificado UE</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">ISO</span>
          <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1">Normativa Médica</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">99%</span>
          <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1">Eficacia Clínica</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-serif text-2xl md:text-3xl font-bold text-brand-dark">SOFTCOOL</span>
          <span className="text-[9px] md:text-[10px] uppercase font-bold tracking-widest mt-1">Tecnología Indolora</span>
        </div>
      </motion.div>
    </section>
  );
};
