
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GreenVita from "./pages/GreenVita";
import SoilXpert from "./pages/SoilXpert";
import AgriVerse from "./pages/AgriVerse";
import YieldMart from "./pages/YieldMart";
import AgriGear from "./pages/AgriGear";
import SkyCast from "./pages/SkyCast";
import NotFound from "./pages/NotFound";
import React from "react";

// Create a client
const queryClient = new QueryClient();

// Define App as a proper function component
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/greenvita" element={<GreenVita />} />
            <Route path="/soilxpert" element={<SoilXpert />} />
            <Route path="/agriverse" element={<AgriVerse />} />
            <Route path="/yieldmart" element={<YieldMart />} />
            <Route path="/agrigear" element={<AgriGear />} />
            <Route path="/skycast" element={<SkyCast />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
