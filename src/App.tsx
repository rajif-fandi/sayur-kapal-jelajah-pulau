
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/Product";
import TrackingPage from "./pages/Tracking";
import StoriesPage from "./pages/Stories";
import AboutPage from "./pages/About";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import CartPage from "./pages/Cart";
import FarmerStoryDetail from "./pages/FarmerStoryDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produk" element={<ProductPage />} />
          <Route path="/pelacakan" element={<TrackingPage />} />
          <Route path="/cerita" element={<StoriesPage />} />
          <Route path="/cerita/:id" element={<FarmerStoryDetail />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/masuk" element={<LoginPage />} />
          <Route path="/daftar" element={<RegisterPage />} />
          <Route path="/keranjang" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
