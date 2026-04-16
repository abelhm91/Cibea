import { motion } from 'motion/react';

export const InteractiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-brand-gold/5 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-brand-dark/5 blur-[150px]"
      />
    </div>
  );
};



