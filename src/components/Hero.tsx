import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Zap, Heart } from 'lucide-react';

export const Hero = () => {
  const words = "Piel Perfecta, Confianza Infinita".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-bold uppercase tracking-widest mb-8"
        >
          <Zap size={14} />
          Tecnología Láser de Última Generación
        </motion.div>

        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 text-brand-dark">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-4 last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl text-brand-dark/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          En CIBEA combinamos la precisión médica con el cuidado estético más exclusivo. 
          Resultados visibles desde la primera sesión.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' })}
            className="group bg-brand-dark text-brand-light px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all hover:bg-brand-gold"
          >
            Comenzar Ahora
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('tecnologia')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-bold border border-brand-dark/10 hover:bg-brand-dark/5 transition-colors text-brand-dark"
          >
            Ver Tecnología
          </motion.button>
        </motion.div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: ShieldCheck, title: "Seguridad Médica", desc: "Protocolos certificados" },
            { icon: Zap, title: "Sin Dolor", desc: "Tecnología de enfriamiento" },
            { icon: Heart, title: "Cuidado Post", desc: "Seguimiento personalizado" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <item.icon className="text-brand-gold w-6 h-6" />
              <h3 className="font-bold text-sm text-brand-dark">{item.title}</h3>
              <p className="text-xs text-brand-dark/40">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


