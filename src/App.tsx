
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Additional routes will be added as pages are developed */}
          <Route path="/produk" element={<NotFound />} />
          <Route path="/pelacakan" element={<NotFound />} />
          <Route path="/cerita" element={<NotFound />} />
          <Route path="/tentang" element={<NotFound />} />
          <Route path="/keranjang" element={<NotFound />} />
          <Route path="/masuk" element={<NotFound />} />
          <Route path="/daftar" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
