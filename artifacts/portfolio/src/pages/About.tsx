import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, ShieldAlert, Code2, Cpu, Webhook, Quote } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

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
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-5xl">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="font-mono text-sm text-primary uppercase tracking-widest glow-text">
              Whoami
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter mb-8"
          >
            {t('about.title')}
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-muted-foreground"
          >
            <p className="leading-relaxed">{t('about.bio.1')}</p>
            <p className="leading-relaxed">{t('about.bio.2')}</p>
          </motion.div>
        </div>

        {/* Big Metric Social Proof */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="my-16 p-8 border border-primary/20 bg-primary/5 rounded-lg text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
          <p className="text-2xl md:text-3xl font-bold text-foreground max-w-3xl mx-auto">
            {t('about.proof')}
          </p>
        </motion.div>

        {/* Timeline & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Timeline */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-primary font-mono">{'>'}</span> {t('about.timeline.title')}
            </h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[15px] before:w-[2px] before:bg-border md:before:ml-[15px]">
              {[1, 2, 3, 4].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center z-10 glow-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="font-mono text-primary mb-1">{t(`about.timeline.${item}.year`)}</h3>
                  <p className="text-foreground">{t(`about.timeline.${item}.desc`)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="text-primary font-mono">{'>'}</span> {t('about.skills.title')}
            </h2>
            <div className="space-y-6">
              {skills.map((skillGroup, i) => {
                const Icon = skillGroup.icon;
                return (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 border border-border/50 bg-card/30 backdrop-blur-sm rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <h3 className="font-bold">{skillGroup.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, j) => (
                        <Badge key={j} variant="outline" className="font-mono text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Section: Testimonial & CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-border bg-card/50 rounded-lg relative"
          >
            <Quote className="absolute top-4 left-4 w-12 h-12 text-muted/20" />
            <p className="text-xl font-medium mb-4 relative z-10 italic text-foreground">
              {t('about.testimonial')}
            </p>
            <p className="font-mono text-sm text-primary uppercase">
              — {t('about.testimonial.author')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <Button size="lg" className="font-mono gap-2 px-8">
              <Download className="w-4 h-4" />
              {t('about.cv')}
            </Button>
          </motion.div>
        </div>

      </div>
    </PageTransition>
  );
}
