// src/App.tsx
import { Helmet } from "react-helmet";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Cookies from "./pages/Cookies";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* Global fallback SEO – overskrives af side-specifik <Helmet> */}
        <Helmet>
          <title>Syncore AI</title>
          <meta name="description" content="AI og automatisering gjort nemt." />
          <meta name="keywords" content="AI, automatisering, Syncore AI, forretningsoptimering" />
          <meta name="author" content="Syncore AI" />
          <meta property="og:title" content="Syncore AI – Automatisering gjort simpelt" />
          <meta property="og:description" content="Vi hjælper virksomheder med at spare tid og skalere med AI." />
          <meta property="og:image" content="https://www.syncoreai.dk/og-image.png" />
          <meta property="og:url" content="https://www.syncoreai.dk" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Syncore AI – Automatisering gjort simpelt" />
          <meta name="twitter:description" content="Vi hjælper virksomheder med at spare tid og skalere med AI." />
          <meta name="twitter:image" content="https://www.syncoreai.dk/og-image.png" />
        </Helmet>

        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;
