import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Projects from "./pages/Projects.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import ChangesPage from "./pages/ChangesPage.tsx";
import EncryptionPrivacy from "./pages/EncryptionPrivacy.tsx";
import DataSovereignty from "./pages/DataSovereignty.tsx";
import RuralAccess from "./pages/RuralAccess.tsx";
import MembershipPage from "./pages/MembershipPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Projects />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/changes" element={<ChangesPage />} />
          <Route path="/encryption-privacy" element={<EncryptionPrivacy />} />
          <Route path="/data-sovereignty" element={<DataSovereignty />} />
          <Route path="/rural-access" element={<RuralAccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
