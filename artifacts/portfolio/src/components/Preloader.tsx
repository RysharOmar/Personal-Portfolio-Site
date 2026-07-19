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
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const text = "Portfolio";

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
        >
          <div className="flex overflow-hidden relative pb-4">
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: [0.33, 1, 0.68, 1],
                  delay: i * 0.05
                }}
                className="font-display text-5xl md:text-7xl text-foreground"
              >
                {char}
              </motion.span>
            ))}
            
            {/* Growing horizontal line */}
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 h-[1px] bg-foreground/30"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
