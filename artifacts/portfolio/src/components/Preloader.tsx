import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoaded');
    if (hasLoaded) {
      setShow(false);
      return;
    }

    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem('hasLoaded', 'true');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center">
            {/* Shield / Circuit Node Logo SVG */}
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            >
              <path
                d="M50 10L10 30V50C10 70 25 85 50 95C75 85 90 70 90 50V30L50 10Z"
                stroke="hsl(var(--primary))"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="40" r="10" stroke="hsl(var(--primary))" strokeWidth="4" />
              <line x1="50" y1="50" x2="50" y2="75" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
              <line x1="35" y1="60" x2="50" y2="75" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
              <line x1="65" y1="60" x2="50" y2="75" stroke="hsl(var(--primary))" strokeWidth="4" strokeLinecap="round" />
            </motion.svg>

            {/* Progress Bar */}
            <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-border">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-primary glow-border"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-4 font-mono text-xs text-muted-foreground uppercase tracking-widest"
            >
              Initializing System...
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
