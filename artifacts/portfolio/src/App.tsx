import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { lazy, Suspense } from 'react';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Preloader } from '@/components/Preloader';
import { NeonCursor } from '@/components/NeonCursor';
import { Header } from '@/components/Header';
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Work = lazy(() => import('@/pages/Work'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const Contact = lazy(() => import('@/pages/Contact'));
const NotFound = lazy(() => import('@/pages/not-found'));

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Loading
          </span>
        </div>
      }
    >
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work/:projectId" component={ProjectDetail} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Preloader />
            <NeonCursor />
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <div className="relative flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">
                  <Router />
                </main>

              </div>
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
