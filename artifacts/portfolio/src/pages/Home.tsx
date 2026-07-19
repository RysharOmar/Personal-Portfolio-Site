import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { NetworkBackground } from '@/components/NetworkBackground';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ArrowDown, Terminal } from 'lucide-react';

export default function Home() {
  const { t, lang } = useLanguage();
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  const subtitles = [
    t('home.subtitle.1'),
    t('home.subtitle.2'),
    t('home.subtitle.3'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [lang]); // Re-run if lang changes so translations update

  return (
    <PageTransition>
      <NetworkBackground />
      
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-4">
        
        {/* Terminal Window Effect for Main Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="w-full max-w-4xl border border-border/50 bg-card/40 backdrop-blur-md rounded-lg overflow-hidden shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="h-8 border-b border-border/50 bg-muted/50 flex items-center px-4 gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="flex-1 flex justify-center items-center gap-2 text-muted-foreground opacity-50">
              <Terminal className="w-3 h-3" />
              <span className="text-[10px] font-mono tracking-widest uppercase">sys.op_terminal</span>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-8 md:p-16 flex flex-col items-center text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-primary/30 bg-primary/5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-mono text-xs text-primary uppercase tracking-widest glow-text">
                {t('home.scarcity')}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-4"
            >
              {lang === 'ES' ? (
                <>Ing. en Ciberseguridad <br/>& <span className="text-primary glow-text">Desarrollador Web</span></>
              ) : (
                <>Cybersecurity Engineer <br/>& <span className="text-primary glow-text">Web Developer</span></>
              )}
            </motion.h1>

            <div className="h-8 mb-10 overflow-hidden relative w-full flex justify-center items-center">
              <span className="text-muted-foreground font-mono text-lg md:text-xl mr-2">{'>'}</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={subtitleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-lg md:text-xl text-foreground"
                >
                  {subtitles[subtitleIndex]}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
                  />
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button asChild size="lg" className="font-mono text-lg px-8 h-14 rounded-none border-b-2 border-r-2 border-primary-foreground/20">
                <Link href="/contact">
                  {t('home.cta')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-border/50 pt-8"
        >
          {[
            { value: "50+", label: t('home.stat.1') },
            { value: "8", label: t('home.stat.2') },
            { value: "99%", label: t('home.stat.3') }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start px-4">
              <span className="text-3xl font-bold font-mono text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted-foreground/50"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
