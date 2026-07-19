import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';

function ArrowCTA({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href}>
      <motion.div
        className="group flex flex-col gap-2 cursor-pointer w-fit"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Label + arrow row */}
        <div className="flex items-center gap-3">
          <span className="font-sans text-base md:text-lg tracking-wide text-foreground group-hover:text-primary transition-colors duration-300">
            {label}
          </span>
          {/* Arrow */}
          <motion.span
            className="text-foreground group-hover:text-primary transition-colors duration-300 text-xl leading-none"
            variants={{
              rest: { x: 0 },
              hover: { x: 6 },
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            →
          </motion.span>
        </div>

        {/* Loading-bar underline */}
        <div className="h-[1.5px] w-full bg-foreground/15 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-primary"
            variants={{
              rest: { width: '0%' },
              hover: { width: '100%' },
            }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  const { lang } = useLanguage();

  const headline =
    lang === 'ES'
      ? 'Arquitectura,\nSeguridad y\nAutomatización.'
      : 'Architecture,\nSecurity &\nAutomation.';

  const body =
    lang === 'ES'
      ? 'Combino tácticas de ciberseguridad ofensiva con desarrollo full-stack para construir sistemas que no solo funcionan, sino que resisten. Mi enfoque está en automatizar flujos de trabajo críticos de negocio integrando IA, CRMs y bases de datos legacy sin comprometer la seguridad.\n\nEntiendo el lenguaje de los hackers y el de las juntas directivas. Mientras otros ensamblan componentes, yo diseño infraestructuras resilientes pensadas para escalar.'
      : 'I combine offensive cybersecurity tactics with full-stack development to build systems that don\'t just work — they endure. My focus is on automating critical business workflows by integrating AI, CRMs, and legacy databases without compromising security.\n\nI speak the language of hackers and boardrooms alike. While others assemble components, I design resilient infrastructures built to scale.';

  const seeProjects = lang === 'ES' ? 'Ver mis proyectos' : 'See my projects';
  const aboutMe = lang === 'ES' ? 'Más sobre mí' : 'More about me';

  return (
    <PageTransition>
      <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-3xl">
          {/* Headline */}
          <motion.h1
            className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[1] mb-10 text-foreground whitespace-pre-line"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {headline}
          </motion.h1>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {body.split('\n\n').map((para, i) => (
              <p
                key={i}
                className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-2xl"
              >
                {para}
              </p>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 mt-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <ArrowCTA href="/work" label={seeProjects} />
            <ArrowCTA href="/about" label={aboutMe} />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
