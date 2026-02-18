import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import ArtClash from "./pages/ArtClash";
import Podcast from "./pages/Podcast";
import Kenya from "./pages/Kenya";
import JoinTheTeam from "./pages/JoinTheTeam";
import OurTeam from "./pages/OurTeam";
import BampCamp from "./pages/BampCamp";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/art-clash" element={<ArtClash />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/kenya" element={<Kenya />} />
            <Route path="/join-the-team" element={<JoinTheTeam />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/bamp-camp" element={<BampCamp />} />
          </Route>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
