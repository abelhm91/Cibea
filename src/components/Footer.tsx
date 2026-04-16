import { motion } from 'motion/react';
import { Sparkles, Instagram, Facebook, Twitter, MapPin, Phone, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-dark/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Col */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="text-brand-gold w-6 h-6" />
              <span className="font-serif text-3xl font-bold tracking-tighter text-brand-dark">CIBEA</span>
            </div>
            <p className="text-brand-dark/60 text-sm leading-relaxed mb-8 max-w-xs">
              Redefiniendo el estándar de la depilación láser con tecnología de vanguardia y un enfoque centrado en tu cuidado.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, color: '#C5A059' }}
                  className="w-10 h-10 rounded-full border border-brand-dark/5 flex items-center justify-center text-brand-dark/40 hover:border-brand-gold transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Col 1 */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-sm uppercase tracking-widest text-brand-dark mb-6">Navegación</h4>
            <ul className="space-y-4">
              {['Inicio', 'Tecnología', 'Precios', 'Testimonios'].map((link) => (
                <li key={link}>
                  <a 
                    href={link === 'Inicio' ? '#' : `#${link.toLowerCase().replace('í', 'i')}`} 
                    className="text-sm text-brand-dark/60 hover:text-brand-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Col 2 */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-brand-dark mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-dark/60">
                <MapPin size={18} className="text-brand-gold shrink-0" />
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-dark/60">
                <Phone size={18} className="text-brand-gold shrink-0" />
                {CONTACT_INFO.phoneFormatted}
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-dark/60">
                <MessageCircle size={18} className="text-brand-gold shrink-0" />
                <a href={CONTACT_INFO.whatsappUrl("Hola CIBEA, me gustaría solicitar información.")} target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">WhatsApp Directo</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-brand-dark/60">
                <Mail size={18} className="text-brand-gold shrink-0" />
                {CONTACT_INFO.email}
              </li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-sm uppercase tracking-widest text-brand-dark mb-6">Suscripción</h4>
            <p className="text-sm text-brand-dark/60 mb-4">Recibe ofertas exclusivas y consejos de cuidado.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Tu email" 
                className="w-full bg-brand-muted rounded-full py-3 px-6 text-sm focus:outline-none focus:ring-1 focus:ring-brand-gold border-none"
              />
              <button className="absolute right-1 top-1 w-10 h-10 bg-brand-dark text-brand-light rounded-full flex items-center justify-center hover:bg-brand-gold transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-dark/5 flex flex-col md:row items-center justify-between gap-6">
          <p className="text-xs text-brand-dark/40">
            &copy; {new Date().getFullYear()} CIBEA Salón de Depilación. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-dark/40 hover:text-brand-gold font-bold">Privacidad</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-dark/40 hover:text-brand-gold font-bold">Cookies</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-brand-dark/40 hover:text-brand-gold font-bold">Aviso Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
