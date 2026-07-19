import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Preloader } from '@/components/Preloader';
import { NeonCursor } from '@/components/NeonCursor';
import { Header } from '@/components/Header';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Work from '@/pages/Work';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
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
