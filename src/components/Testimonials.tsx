import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const testimonials = [
  {
    name: "Elena García",
    role: "Cliente desde 2023",
    content: "Increíble experiencia. He notado resultados desde la primera sesión y el trato es inmejorable.",
    rating: 5,
    size: "large",
    image: "https://picsum.photos/seed/elena/200/200"
  },
  {
    name: "Marcos Torres",
    role: "Deportista",
    content: "La mejor decisión para el rendimiento deportivo. Indoloro y muy profesional.",
    rating: 5,
    size: "small",
    image: "https://picsum.photos/seed/marcos/200/200"
  },
  {
    name: "Javier Ruiz",
    role: "Cliente habitual",
    content: "Puntualidad y eficacia. El sistema de enfriamiento realmente hace que no duela nada.",
    rating: 4,
    size: "small",
    image: "https://picsum.photos/seed/javier/200/200"
  },
  {
    name: "Sofía Martínez",
    role: "Pack Cuerpo Completo",
    content: "Limpieza absoluta y tecnología de vanguardia. Te sientes en las mejores manos.",
    rating: 5,
    size: "medium",
    image: "https://picsum.photos/seed/sofia/200/200"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl font-bold mb-4 text-brand-dark"
        >
          Voces de Confianza
        </motion.h2>
        <p className="text-brand-dark/60 max-w-xl mx-auto">
          La satisfacción de nuestros clientes es el reflejo de nuestro compromiso con la excelencia.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {testimonials.map((testi, i) => (
          <motion.div
            key={testi.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={cn(
              "p-8 rounded-[32px] bg-white card-shadow flex flex-col justify-between relative overflow-hidden group min-h-[220px]",
              testi.size === "large" ? "md:col-span-2 md:row-span-2" : 
              testi.size === "medium" ? "md:col-span-2 md:row-span-1" : "md:col-span-1 md:row-span-1"
            )}
          >
            <div className="relative z-10">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    className={cn(i < testi.rating ? "text-brand-gold fill-brand-gold" : "text-brand-muted")} 
                  />
                ))}
              </div>
              <p className={cn(
                "text-brand-dark/80 font-medium leading-relaxed mb-6",
                testi.size === "large" ? "text-xl" : "text-sm"
              )}>
                "{testi.content}"
              </p>
            </div>

            <div className="flex items-center gap-4 relative z-10">
              <img 
                src={testi.image} 
                alt={testi.name} 
                className="w-10 h-10 rounded-full object-cover border-2 border-brand-gold/20"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="text-sm font-bold text-brand-dark">{testi.name}</h4>
                <p className="text-[10px] uppercase tracking-wider text-brand-dark/40 font-bold">{testi.role}</p>
              </div>
            </div>

            <Quote className="absolute -bottom-4 -right-4 w-24 h-24 text-brand-gold/5 -rotate-12 group-hover:scale-110 transition-transform" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
