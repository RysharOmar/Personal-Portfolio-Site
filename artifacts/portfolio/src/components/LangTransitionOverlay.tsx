import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Language = 'ES' | 'EN';

export function LangTransitionOverlay({
  active,
  incoming,
}: {
  active: boolean;
  incoming: Language | null;
}) {
  const label = incoming === 'EN' ? 'English' : 'Español';

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="lang-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background pointer-events-none"
        >
          <div className="flex overflow-hidden relative pb-4">
            {label.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.33, 1, 0.68, 1],
                  delay: i * 0.045,
                }}
                className="font-display text-5xl md:text-7xl text-foreground"
              >
                {char}
              </motion.span>
            ))}

            {/* Growing line */}
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.3, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 h-[1px] bg-foreground/30"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="font-sans text-xs uppercase tracking-widest text-muted-foreground mt-6"
          >
            {incoming === 'EN' ? 'Switching to English' : 'Cambiando a Español'}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
