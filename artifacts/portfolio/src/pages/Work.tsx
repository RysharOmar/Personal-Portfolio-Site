import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { PageTransition } from '@/components/PageTransition';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ArrowRight, Database, LayoutTemplate, Workflow, Cpu } from 'lucide-react';

export default function Work() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filters = [
    { id: 'All', label: t('work.filter.all') },
    { id: 'CRM', label: t('work.filter.crm') },
    { id: 'ERP', label: t('work.filter.erp') },
    { id: 'APIs', label: t('work.filter.api') },
    { id: 'BBDD', label: t('work.filter.db') },
  ];

  const projects = [
    {
      id: 1,
      title: t('work.p1.title'),
      desc: t('work.p1.desc'),
      full: t('work.p1.full'),
      metric: t('work.p1.metric'),
      tags: ['Salesforce', 'GPT-4', 'Python'],
      category: 'CRM',
      icon: LayoutTemplate
    },
    {
      id: 2,
      title: t('work.p2.title'),
      desc: t('work.p2.desc'),
      full: t('work.p2.full'),
      metric: t('work.p2.metric'),
      tags: ['SAP B1', 'WooCommerce', 'REST API'],
      category: 'ERP',
      icon: Workflow
    },
    {
      id: 3,
      title: t('work.p3.title'),
      desc: t('work.p3.desc'),
      full: t('work.p3.full'),
      metric: t('work.p3.metric'),
      tags: ['Splunk', 'Webhook', 'Slack'],
      category: 'APIs',
      icon: Cpu
    },
    {
      id: 4,
      title: t('work.p4.title'),
      desc: t('work.p4.desc'),
      full: t('work.p4.full'),
      metric: t('work.p4.metric'),
      tags: ['PostgreSQL', 'Python', 'LLM'],
      category: 'BBDD',
      icon: Database
    },
    {
      id: 5,
      title: t('work.p5.title'),
      desc: t('work.p5.desc'),
      full: t('work.p5.full'),
      metric: t('work.p5.metric'),
      tags: ['OpenAI', 'WhatsApp API', 'CRM'],
      category: 'APIs',
      icon: Cpu
    },
    {
      id: 6,
      title: t('work.p6.title'),
      desc: t('work.p6.desc'),
      full: t('work.p6.full'),
      metric: t('work.p6.metric'),
      tags: ['Node.js', 'PostgreSQL', 'WebSocket', 'React'],
      category: 'BBDD',
      icon: Database
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const activeProjectData = projects.find(p => p.id === selectedProject);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 md:px-8 py-12 max-w-6xl">
        
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-primary"></div>
            <span className="font-mono text-sm text-primary uppercase tracking-widest glow-text">
              Deployments
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold tracking-tighter"
          >
            {t('work.title')}
          </motion.h1>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all border ${
                activeFilter === filter.id 
                  ? 'border-primary bg-primary/20 text-primary glow-border' 
                  : 'border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative flex flex-col justify-between p-6 rounded-lg border border-border/50 bg-card/20 backdrop-blur-md hover:bg-card/40 hover:border-primary/50 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 rounded-md bg-background border border-border/50 text-muted-foreground group-hover:text-primary transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <Badge variant="outline" className="font-mono font-normal">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between font-mono text-sm border border-transparent group-hover:border-border/50"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      {t('work.card.btn')}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Detail Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[600px] border-primary/20 bg-card/95 backdrop-blur-xl">
          {activeProjectData && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="font-mono">{activeProjectData.category}</Badge>
                </div>
                <DialogTitle className="text-2xl">{activeProjectData.title}</DialogTitle>
                <DialogDescription className="text-base text-foreground/80 mt-4 leading-relaxed">
                  {activeProjectData.full}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-6 space-y-6">
                <div className="p-4 rounded-md bg-primary/10 border border-primary/20">
                  <p className="font-mono text-sm text-primary uppercase tracking-wider mb-1">Impacto / Impact</p>
                  <p className="text-lg font-bold glow-text">{activeProjectData.metric}</p>
                </div>
                
                <div>
                  <h4 className="font-mono text-sm text-muted-foreground mb-3 uppercase tracking-wider">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectData.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-border/50 bg-background/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </PageTransition>
  );
}
