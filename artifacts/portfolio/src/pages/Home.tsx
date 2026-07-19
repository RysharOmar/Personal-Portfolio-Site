import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { Marquee } from '@/components/Marquee';

export default function Home() {
  const { t, lang } = useLanguage();

  const marquee1 = lang === 'ES' 
    ? ["Ciberseguridad", "Automatización IA", "Integraciones CRM", "Desarrollo Web", "APIs & Bases de Datos", "Python · Node.js · React"]
    : ["Cybersecurity", "AI Automation", "CRM Integrations", "Web Development", "APIs & Databases", "Python · Node.js · React"];
    
  const marquee2 = ["Salesforce", "GPT-4", "SAP B1", "PostgreSQL", "OpenAI", "WhatsApp API", "Splunk", "Node.js"];

  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        
        {/* Section 1: Hero */}
        <section className="relative min-h-[100dvh] w-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
          
          {/* Top-left label */}
          <div className="absolute top-24 left-8 md:left-16 lg:left-24 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">
              {lang === 'ES' ? 'Disponible para proyectos' : 'Available for projects'}
            </span>
          </div>

          {/* Top-right sticky note (desktop only) */}
          <div className="absolute top-32 right-8 md:right-16 lg:right-24 hidden lg:block rotate-3">
            <div className="bg-accent text-accent-foreground px-4 py-3 shadow-lg flex items-center gap-2">
              <span className="font-sans text-sm font-medium">
                {lang === 'ES' ? 'Solo 3 slots / mes' : 'Only 3 slots / month'}
              </span>
              <span className="text-xs">✦</span>
            </div>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <p className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-8">
                {lang === 'ES' ? 'Ingeniería · Seguridad · Automatización' : 'Engineering · Security · Automation'}
              </p>
              <h1 className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] mb-8 text-foreground">
                {lang === 'ES' ? (
                  <>Construyo sistemas que no solo funcionan, sino que resisten.</>
                ) : (
                  <>I build systems that don't just work — they endure.</>
                )}
              </h1>
              <p className="font-sans text-xl text-muted-foreground max-w-lg mb-12">
                {lang === 'ES' 
                  ? 'Ing. en Ciberseguridad & Desarrollador Web especializado en automatización con IA.'
                  : 'Cybersecurity Engineer & Web Developer specialized in AI automation.'}
              </p>
              
              <Link href="/contact" className="inline-block border-b border-foreground pb-1 text-lg font-medium hover:border-primary hover:text-primary transition-colors">
                {lang === 'ES' ? 'Solicitar Consultoría →' : 'Book a Consultation →'}
              </Link>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-[1px] h-10 bg-foreground/30 overflow-hidden">
              <motion.div
                className="w-full h-full bg-foreground"
                animate={{ y: ['-100%', '100%'] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
          </div>
        </section>

        <Marquee items={marquee1} speed={30} direction="left" />

        {/* Section 2: Stats */}
        <section className="w-full py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border-y border-foreground/10 divide-y md:divide-y-0 md:divide-x divide-foreground/10">
            {[
              { num: "50+", label: lang === 'ES' ? 'proyectos completados' : 'projects completed' },
              { num: "8", label: lang === 'ES' ? 'años de experiencia' : 'years of experience' },
              { num: "2M+", label: lang === 'ES' ? 'registros procesados' : 'records processed' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex-1 w-full flex flex-col items-center justify-center py-16 px-4"
              >
                <h3 className="font-display text-7xl text-primary mb-4">{stat.num}</h3>
                <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground text-center">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 3: Selected Work */}
        <section className="w-full py-24 px-8 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-16">
              {lang === 'ES' ? 'Trabajo Seleccionado' : 'Selected Work'}
            </h2>
            
            <div className="flex flex-col border-t border-foreground/10">
              {[
                { id: "01", title: lang === 'ES' ? 'Pipeline de Leads con IA' : 'AI Lead Pipeline', tag: 'CRM' },
                { id: "02", title: lang === 'ES' ? 'Sincronización ERP ↔ eCommerce' : 'ERP ↔ eCommerce Sync', tag: 'ERP' },
                { id: "03", title: lang === 'ES' ? 'ETL Inteligente para BBDD Legada' : 'Smart ETL for Legacy DB', tag: 'BBDD' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link href="/work" className="group flex flex-col md:flex-row md:items-center py-8 md:py-12 border-b border-foreground/10 hover:bg-accent/10 transition-colors px-4 -mx-4 md:px-8 md:-mx-8">
                    <span className="font-sans text-xs text-muted-foreground w-12 mb-4 md:mb-0">{item.id}</span>
                    <h3 className="font-display text-3xl md:text-5xl flex-1 group-hover:translate-x-2 transition-transform duration-300">
                      {item.title}
                    </h3>
                    <span className="font-sans text-sm tracking-wider text-muted-foreground mt-4 md:mt-0">
                      {item.tag}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <Link href="/work" className="border-b border-foreground pb-1 text-lg font-medium hover:border-primary hover:text-primary transition-colors">
                {lang === 'ES' ? 'Ver todos los proyectos →' : 'View all projects →'}
              </Link>
            </div>
          </div>
        </section>

        <Marquee items={marquee2} speed={35} direction="right" />
        
      </div>
    </PageTransition>
  );
}
