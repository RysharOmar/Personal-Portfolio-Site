import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sun, Moon, Shield, Menu, X, Home, User, Briefcase, Mail } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const navItems = [
  { href: '/', labelKey: 'nav.home', icon: Home },
  { href: '/about', labelKey: 'nav.about', icon: User },
  { href: '/work', labelKey: 'nav.work', icon: Briefcase },
  { href: '/contact', labelKey: 'nav.contact', icon: Mail },
];

export function Header() {
  const [location] = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change or Escape key
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  // The language button shows the OPPOSITE language (what you'll switch TO)
  const langLabel = lang === 'ES' ? 'EN' : 'ES';
  const handleLangToggle = () => toggleLang(lang === 'ES' ? 'EN' : 'ES');

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled || menuOpen
            ? 'bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-8 max-w-7xl">
          {/* Logo */}
          <Link href="/">
            <div className="flex cursor-pointer items-center gap-2 group">
              <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-primary/50 bg-primary/10 transition-all group-hover:border-primary/80">
                <Shield className="h-4 w-4 text-primary" />
              </div>
              <span className="font-mono text-lg font-bold tracking-tighter">
                SYS<span className="text-primary">.OP</span>
              </span>
            </div>
          </Link>

          {/* Right controls: Hamburger + Theme + Lang */}
          <div className="flex items-center gap-2">

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 bg-background/50 text-muted-foreground transition-colors hover:text-primary hover:border-primary/50"
              aria-label="Toggle Theme"
            >
              {theme === 'dark'
                ? <Sun className="h-4 w-4" />
                : <Moon className="h-4 w-4" />
              }
            </button>

            {/* Language toggle — shows the language you'll SWITCH TO */}
            <button
              onClick={handleLangToggle}
              className="flex h-9 min-w-[2.5rem] items-center justify-center rounded-md border border-border/50 bg-background/50 px-2 font-mono text-xs font-bold text-muted-foreground transition-colors hover:text-primary hover:border-primary/50"
              aria-label="Toggle Language"
            >
              {langLabel}
            </button>

            {/* Hamburger menu button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border/50 bg-background/50 text-muted-foreground transition-colors hover:text-primary hover:border-primary/50"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Nav Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl"
          >
            {/* Subtle grid decoration */}
            <div
              className="pointer-events-none absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  'linear-gradient(var(--color-primary, #00f5ff) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary, #00f5ff) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            <nav className="relative z-10 flex flex-col items-center gap-6">
              {navItems.map((item, i) => {
                const isActive = location === item.href;
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: i * 0.07, duration: 0.25 }}
                  >
                    <Link href={item.href}>
                      <div
                        className={`group flex cursor-pointer items-center gap-4 rounded-xl px-8 py-4 transition-all duration-200 ${
                          isActive
                            ? 'bg-primary/10 border border-primary/40'
                            : 'hover:bg-primary/5 border border-transparent hover:border-primary/20'
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 transition-colors ${
                            isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                          }`}
                        />
                        <span
                          className={`font-mono text-2xl font-bold tracking-widest uppercase transition-colors ${
                            isActive ? 'text-primary' : 'text-foreground group-hover:text-primary'
                          }`}
                        >
                          {t(item.labelKey)}
                        </span>
                        {isActive && (
                          <span className="ml-2 h-2 w-2 rounded-full bg-primary animate-pulse" />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 font-mono text-xs text-muted-foreground/50 tracking-widest uppercase"
            >
              {lang === 'ES' ? 'Esc para cerrar' : 'Press Esc to close'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
