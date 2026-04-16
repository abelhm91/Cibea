import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { cn } from '../lib/utils';

const pricingData: {
  mujeres: { title: string; price: number; zones: string[]; featured?: boolean }[];
  hombres: { title: string; price: number; zones: string[]; featured?: boolean }[];
} = {
  mujeres: [
    { title: "PACK 1", price: 6, zones: ["Labio superior"] },
    { title: "PACK 2", price: 15, zones: ["Facial"] },
    { title: "PACK 3", price: 15, zones: ["Axilas"] },
    { title: "PACK 4", price: 25, zones: ["Ingles, pubis y perianal"] },
    { title: "PACK 5", price: 29, zones: ["Ingles, pubis, perianal y axilas"] },
    { title: "PACK 6", price: 30, zones: ["Brazos enteros"] },
    { title: "PACK 7", price: 45, zones: ["Glúteos, ingles, pubis, perianal y axilas"] },
    { title: "PACK 8", price: 55, zones: ["Medias piernas, ingles, pubis, perianal y axilas"] },
    { title: "PACK 9", price: 65, zones: ["Piernas enteras, ingles, pubis, perianal y axilas"] },
    { title: "PACK 10", price: 75, zones: ["Piernas enteras, glúteos, ingles, pubis, perianal y axilas"] },
    { title: "PACK 11", price: 85, zones: ["Cuerpo Entero"], featured: true },
  ],
  hombres: [
    { title: "PACK 1", price: 15, zones: ["Perfilado Barba"] },
    { title: "PACK 2", price: 15, zones: ["Axilas"] },
    { title: "PACK 3", price: 29, zones: ["Pecho, hombros y nuca"] },
    { title: "PACK 4", price: 39, zones: ["Genitales"] },
    { title: "PACK 5", price: 40, zones: ["Espalda, hombros y nuca"] },
    { title: "PACK 6", price: 45, zones: ["Piernas enteras"] },
    { title: "PACK 7", price: 65, zones: ["Pecho, hombros, espalda, abdomen y nuca"] },
    { title: "PACK 8", price: 85, zones: ["Pecho, hombros, espalda, abdomen, nuca, axilas, glúteos y brazos"] },
    { title: "PACK 9", price: 89, zones: ["Piernas enteras, pies, axilas, pecho, hombros, abdomen y brazos"] },
    { title: "PACK 10", price: 109, zones: ["Cuerpo Entero"], featured: true },
    { title: "PACK 11", price: 139, zones: ["Cuerpo entero con genitales"] },
  ]
};

export const Pricing = () => {
  const [category, setCategory] = useState<'mujeres' | 'hombres'>('mujeres');
  const [selectedPacks, setSelectedPacks] = useState<string[]>([]);

  const featuredPacks = pricingData[category].filter(p => [5, 9, 10, 11].includes(parseInt(p.title.split(' ')[1])) || p.featured);
  const otherPacks = pricingData[category].filter(p => !featuredPacks.find(f => f.title === p.title));

  const togglePack = (title: string) => {
    setSelectedPacks(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title) 
        : [...prev, title]
    );
  };

  const calculateTotal = () => {
    return pricingData[category]
      .filter(p => selectedPacks.includes(p.title))
      .reduce((sum, p) => sum + p.price, 0);
  };

  const handleBooking = (item?: { title: string; zones: string[] }) => {
    const gender = category === 'mujeres' ? 'Mujer' : 'Hombre';
    
    if (item) {
      const message = `Hola CIBEA, estoy interesad${category === 'mujeres' ? 'a' : 'o'} en reservar el ${item.title} de ${gender} (${item.zones.join(', ')}). ¿Podéis darme cita?`;
      window.open(CONTACT_INFO.whatsappUrl(message), '_blank');
    } else if (selectedPacks.length > 0) {
      const selections = pricingData[category].filter(p => selectedPacks.includes(p.title));
      const total = calculateTotal();
      const zonesList = selections.map(s => s.zones.join(', ')).join(' + ');
      const message = `Hola CIBEA, me gustaría reservar un pack personalizado de ${gender} que incluye: ${zonesList}. El total estimado es de ${total}€. ¿Tenéis disponibilidad?`;
      window.open(CONTACT_INFO.whatsappUrl(message), '_blank');
    }
  };

  return (
    <section id="precios" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/20 bg-brand-gold/5 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6"
        >
          Tarifas Exclusivas
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-6xl font-bold mb-6 text-brand-dark"
        >
          Nuestros Planes
        </motion.h2>
        
        {/* Toggle */}
        <div className="inline-flex p-1 bg-brand-muted rounded-full border border-black/5 mb-16">
          {(['mujeres', 'hombres'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setSelectedPacks([]);
              }}
              className={`px-12 py-3 rounded-full text-sm font-bold capitalize transition-all relative z-10 ${
                category === cat 
                  ? 'bg-brand-dark text-brand-light shadow-lg' 
                  : 'text-brand-dark/40 hover:text-brand-dark'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Packs Grid */}
      <div className="mb-20">
        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-8 text-center md:text-left">Packs Recomendados</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPacks.slice(0, 3).map((item, i) => (
            <motion.div
              key={`featured-${category}-${item.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[40px] bg-white card-shadow relative overflow-hidden group flex flex-col border border-brand-dark/5 transition-all duration-300 ${
                item.featured ? 'ring-2 ring-brand-gold scale-105 z-10' : 'hover:border-brand-gold/30'
              }`}
            >
              {item.featured && (
                <div className="absolute top-6 right-6 bg-brand-gold text-brand-light px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Popular
                </div>
              )}
              
              <span className="text-xs font-bold text-brand-gold/60 uppercase tracking-widest mb-2">{item.title}</span>
              <h4 className="text-2xl font-bold mb-6 text-brand-dark leading-tight">{item.zones[0]}</h4>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-serif font-bold text-brand-gold">{item.price}€</span>
                <span className="text-brand-dark/30 text-xs font-bold">/ SESIÓN</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {item.zones.map((zone) => (
                  <li key={zone} className="flex items-start gap-3 text-sm text-brand-dark/70 font-medium">
                    <Check size={16} className="text-brand-gold shrink-0 mt-0.5" />
                    {zone}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => handleBooking(item)}
                className={`w-full py-4 rounded-2xl font-bold transition-all ${
                  item.featured 
                    ? 'bg-brand-dark text-brand-light hover:bg-brand-gold shadow-lg shadow-brand-dark/20' 
                    : 'bg-brand-muted text-brand-dark hover:bg-brand-dark hover:text-white'
                }`}
              >
                Reservar Pack
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Compact Price List with Multi-select */}
      <div className="bg-white rounded-[40px] p-8 md:p-12 card-shadow border border-brand-dark/5 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">Otras Tarifas</h3>
            <p className="text-sm text-brand-dark/40">Selecciona varias zonas para crear tu propio pack personalizado.</p>
          </div>
          
          <AnimatePresence>
            {selectedPacks.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center gap-6 bg-brand-dark text-brand-light px-6 py-3 rounded-2xl shadow-xl border border-white/10"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-50">Total Pack</span>
                  <span className="text-xl font-serif font-bold text-brand-gold">{calculateTotal()}€</span>
                </div>
                <button 
                  onClick={() => handleBooking()}
                  className="bg-brand-gold text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-white hover:text-brand-dark transition-colors"
                >
                  Reservar Selección
                </button>
                <button 
                  onClick={() => setSelectedPacks([])}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <span className="sr-only">Limpiar</span>
                  <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10">
                    ×
                  </div>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          {otherPacks.concat(featuredPacks.slice(3)).sort((a,b) => parseInt(a.title.split(' ')[1]) - parseInt(b.title.split(' ')[1])).map((item, i) => (
            <motion.div
              key={`list-${category}-${item.title}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              whileHover={{ x: 10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.02 }}
              onClick={() => togglePack(item.title)}
              className={cn(
                "flex items-center justify-between py-4 border-b border-brand-dark/5 px-4 rounded-xl transition-all group cursor-pointer",
                selectedPacks.includes(item.title) 
                  ? "bg-brand-gold/10 border-brand-gold/20" 
                  : "hover:bg-brand-muted/80"
              )}
            >
              <div className="flex items-center gap-4">
                <div className={cn(
                  "w-5 h-5 rounded-md border transition-all flex items-center justify-center",
                  selectedPacks.includes(item.title)
                    ? "bg-brand-gold border-brand-gold text-white"
                    : "border-brand-dark/10 group-hover:border-brand-gold"
                )}>
                  {selectedPacks.includes(item.title) && <Check size={12} strokeWidth={4} />}
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-tighter opacity-50 transition-opacity group-hover:opacity-100">{item.title}</span>
                  <span className="text-brand-dark font-medium group-hover:text-brand-gold transition-colors">{item.zones.join(', ')}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={cn(
                  "font-serif font-bold text-xl transition-colors",
                  selectedPacks.includes(item.title) ? "text-brand-gold" : "text-brand-dark group-hover:text-brand-gold"
                )}>
                  {item.price}€
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[10px] text-brand-dark/30 mt-12 uppercase tracking-widest font-bold">
          Todos los precios son por sesión individual. Consulta bonos disponibles en el salón.
        </p>
      </div>
    </section>
  );
};

