import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { Button } from '@/components/ui/button';
import { ExternalLink, CheckCircle2, PhoneCall, FileCode2, Zap, HeadphonesIcon } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    setIsSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      // Hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const perks = [
    { icon: PhoneCall, label: t('contact.perk.1') },
    { icon: FileCode2, label: t('contact.perk.2') },
    { icon: Zap, label: t('contact.perk.3') },
    { icon: HeadphonesIcon, label: t('contact.perk.4') },
  ];

  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Copy & Info */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-[2px] w-12 bg-primary"></div>
              <span className="font-mono text-sm text-primary uppercase tracking-widest glow-text">
                Secure Connection
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6"
            >
              {t('contact.title')}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded border border-destructive/30 bg-destructive/10 text-destructive-foreground mb-8 w-fit"
            >
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
              <span className="text-sm font-medium">{t('contact.scarcity')}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 mb-12"
            >
              {perks.map((perk, i) => {
                const Icon = perk.icon;
                return (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Icon className="w-5 h-5 text-primary" />
                    <span>{perk.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-foreground font-mono hover:text-primary transition-colors group"
              >
                {'>'} LinkedIn
                <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card/30 backdrop-blur-md border border-border/50 rounded-lg p-6 md:p-8 relative overflow-hidden"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                  animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
                  exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                  className="absolute inset-0 z-10 bg-background/80 flex flex-col items-center justify-center p-8 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <p className="font-mono text-primary glow-text text-lg">
                    {t('contact.form.success')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                    {t('contact.form.name')} *
                  </label>
                  <input 
                    {...register('name', { required: true })}
                    className="w-full bg-background/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                    {t('contact.form.email')} *
                  </label>
                  <input 
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-background/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  {t('contact.form.company')}
                </label>
                <input 
                  {...register('company')}
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-mono text-muted-foreground uppercase tracking-wider">
                  {t('contact.form.message')} *
                </label>
                <textarea 
                  {...register('message', { required: true })}
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all font-mono resize-none"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-12 font-mono text-base tracking-widest rounded-sm"
              >
                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border/50 text-center">
              <p className="text-sm text-muted-foreground mb-4">{t('contact.or')}</p>
              <a 
                href="https://calendly.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-primary/20 bg-primary/5 px-6 font-mono text-sm font-medium text-primary transition-colors hover:bg-primary/10 hover:border-primary/50"
              >
                Calendly
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
