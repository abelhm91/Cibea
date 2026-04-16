import { motion } from 'motion/react';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Tecnología', href: '#tecnologia' },
    { name: 'Precios', href: '#precios' },
    { name: 'Testimonios', href: '#testimonios' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-8 py-3 card-shadow">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <Sparkles className="text-brand-gold w-6 h-6" />
          <span className="font-serif text-2xl font-bold tracking-tighter text-brand-dark">CIBEA</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-brand-dark/70 hover:text-brand-gold transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-dark text-brand-light px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-gold transition-colors"
          >
            Reservar Cita
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand-dark" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-6 right-6 glass rounded-3xl p-6 flex flex-col gap-4 card-shadow"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-brand-dark/80 hover:text-brand-gold"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={() => {
              setIsOpen(false);
              document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-brand-dark text-brand-light px-6 py-3 rounded-full font-bold"
          >
            Reservar Cita
          </button>
        </motion.div>
      )}
    </nav>
  );
};


