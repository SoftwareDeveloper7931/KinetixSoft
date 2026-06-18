import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PodioSolutions from "@/pages/PodioSolutions";
import FlutterFlowDev from "@/pages/FlutterFlowDev";
import RetoolDev from "@/pages/RetoolDev";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import Careers from "@/pages/Careers";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import CustomApiIntegration from "@/pages/CustomApiIntegration";
import LovableDev from "@/pages/LovableDev";
import ReplitDev from "@/pages/ReplitDev";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/podio" component={PodioSolutions} />
      <Route path="/services/flutterflow" component={FlutterFlowDev} />
      <Route path="/services/retool" component={RetoolDev} />
      <Route path="/services/lovable" component={LovableDev} />
      <Route path="/services/replit" component={ReplitDev} />
      <Route path="/services/custom-api" component={CustomApiIntegration} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={TermsOfService} />
      <Route path="/careers" component={Careers} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
