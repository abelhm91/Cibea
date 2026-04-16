import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

export const WhatsAppButton = () => {
  const message = "Hola CIBEA, me gustaría solicitar información sobre vuestros servicios.";
  const whatsappUrl = CONTACT_INFO.whatsappUrl(message);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] transition-colors hover:bg-[#20ba5a]"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} fill="white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-gold rounded-full border-2 border-white animate-pulse" />
    </motion.a>
  );
};
