import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { Marquee } from '@/components/Marquee';
import { ShieldAlert, Code2, Cpu, Webhook } from 'lucide-react';

export default function About() {
  const { t, lang } = useLanguage();

  const skills = [
    {
      category: t('about.skills.sec'),
      icon: ShieldAlert,
      items: ['Pentesting', 'OSINT', 'Threat Modeling', 'Incident Response']
    },
    {
      category: t('about.skills.dev'),
      icon: Code2,
      items: ['React', 'Node.js', 'Python', 'TypeScript', 'PostgreSQL']
    },
    {
      category: t('about.skills.ai'),
      icon: Cpu,
      items: ['LLM Pipelines', 'RAG', 'Vector DBs', 'Workflow Automation']
    },
    {
      category: t('about.skills.int'),
      icon: Webhook,
      items: ['Salesforce', 'HubSpot', 'Zapier', 'REST APIs', 'GraphQL']
    }
  ];

  return (
    <PageTransition>
      <div className="flex flex-col w-full">
        
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-8 md:px-16 lg:px-24 max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-16">
          <div className="flex-1">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-6xl md:text-8xl leading-[0.95] text-foreground"
            >
              Arquitectura,<br/>
              Seguridad y<br/>
              Automatización.
            </motion.h1>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: -5 }}
            animate={{ opacity: 1, rotate: 2 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="hidden lg:flex flex-col items-center justify-center p-4 bg-white dark:bg-card border-8 border-white dark:border-card-border shadow-xl min-w-[240px]"
          >
            <div className="bg-card w-full aspect-square flex flex-col items-center justify-center border border-border">
              <span className="font-display text-7xl text-primary">8+</span>
              <span className="font-sans text-xl uppercase tracking-widest text-muted-foreground mt-2">
                {lang === 'ES' ? 'años' : 'years'}
              </span>
            </div>
            <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground mt-4 w-full text-center">
              Est. 2016
            </p>
          </motion.div>
        </section>

        {/* Bio Section */}
        <section className="px-8 md:px-16 lg:px-24 py-16 bg-card/30">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-foreground/10" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans text-xl md:text-2xl leading-relaxed text-foreground"
            >
              {t('about.bio.1')}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-lg md:text-xl leading-relaxed text-muted-foreground"
            >
              {t('about.bio.2')}
            </motion.p>
          </div>
        </section>

        <Marquee items={['Pentesting', 'React', 'Node.js', 'LLMs', 'Python', 'Salesforce']} speed={25} />

        {/* Skills Section */}
        <section className="px-8 md:px-16 lg:px-24 py-24 max-w-5xl mx-auto w-full">
          <h2 className="font-sans text-sm uppercase tracking-widest text-muted-foreground mb-16">
            {t('about.skills.title')}
          </h2>
          <div className="flex flex-col gap-8">
            {skills.map((group, i) => {
              const Icon = group.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row md:items-center py-6 border-b border-foreground/10 group"
                >
                  <h3 className="font-sans font-medium uppercase tracking-widest w-48 mb-4 md:mb-0">
                    {group.category}
                  </h3>
                  <div className="flex-1 font-sans text-lg text-muted-foreground">
                    {group.items.join(' · ')}
                  </div>
                  <div className="hidden md:block">
                    <Icon className="w-6 h-6 text-foreground/20 group-hover:text-primary transition-colors" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Authority Timeline */}
        <section className="px-8 md:px-16 lg:px-24 py-24 bg-foreground text-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-sans text-sm uppercase tracking-widest text-background/50 mb-16">
              {t('about.timeline.title')}
            </h2>
            <div className="flex flex-col md:flex-row overflow-x-auto gap-12 md:gap-24 pb-8 snap-x">
              {[1, 2, 3, 4].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="min-w-[280px] snap-start"
                >
                  <h3 className="font-display text-5xl md:text-7xl text-primary/80 mb-6">
                    {t(`about.timeline.${item}.year`)}
                  </h3>
                  <p className="font-sans text-lg text-background/80">
                    {t(`about.timeline.${item}.desc`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial & CV */}
        <section className="px-8 md:px-16 lg:px-24 py-32 max-w-4xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <blockquote className="font-display text-3xl md:text-5xl leading-tight text-foreground mb-12">
              {t('about.testimonial')}
            </blockquote>
            <div className="w-16 h-[1px] bg-primary mx-auto mb-8" />
            <cite className="font-sans text-sm uppercase tracking-widest text-muted-foreground not-italic block mb-24">
              {t('about.testimonial.author')}
            </cite>

            <div className="flex flex-col items-center gap-8">
              <p className="font-sans text-lg text-foreground max-w-lg">
                {t('about.proof')}
              </p>
              <a href="#" className="inline-block border-b border-foreground pb-1 text-lg font-medium hover:border-primary hover:text-primary transition-colors">
                {t('about.cv')} →
              </a>
            </div>
          </motion.div>
        </section>

      </div>
    </PageTransition>
  );
}
