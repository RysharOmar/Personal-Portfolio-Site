import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    if (hasSeenPreloader) {
      setVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('hasSeenPreloader', 'true');
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  const word1 = 'Synapse';
  const word2 = 'Sentinel';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background gap-6"
        >
          {/* Synapse Sentinel mark from the approved brand asset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <img
              src="/synapse-sentinel.ico"
              alt="Synapse Sentinel"
              className="h-20 w-20 object-contain md:h-24 md:w-24"
            />
          </motion.div>

          {/* Text block */}
          <div className="flex flex-col items-center relative pb-4">
            {/* "Synapse" line */}
            <div className="flex overflow-hidden">
              {word1.split('').map((char, i) => (
                <motion.span
                  key={`w1-${i}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.15 + i * 0.045 }}
                  className="font-display text-5xl md:text-7xl text-foreground"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* "Sentinel" line */}
            <div className="flex overflow-hidden">
              {word2.split('').map((char, i) => (
                <motion.span
                  key={`w2-${i}`}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.55 + i * 0.04 }}
                  className="font-display text-5xl md:text-7xl text-foreground"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Growing horizontal line */}
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.2 }}
              className="absolute bottom-0 left-0 h-[1px] bg-foreground/30"
            />
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="font-sans text-xs uppercase tracking-widest text-muted-foreground"
          >
            Inteligencia · Seguridad · Autonomía
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
