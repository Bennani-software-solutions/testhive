import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const WhyTestHivePage = lazy(() => import("./pages/WhyTestHive"));
const Blog = lazy(() => import("./pages/Blog"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const PartnerProgram = lazy(() => import("./pages/PartnerProgram"));
const Accelerator = lazy(() => import("./pages/Accelerator"));
const POCDetails = lazy(() => import("./pages/POCDetails"));
const Platform = lazy(() => import("./pages/Platform"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AutomationService = lazy(() => import("./pages/services/Automation"));
const FunctionalTestingService = lazy(() => import("./pages/services/FunctionalTesting"));
const PenTestingService = lazy(() => import("./pages/services/PenTesting"));
// QAOutsourcing verwijderd — geconsolideerd in Consulting
const ConsultingService = lazy(() => import("./pages/services/Consulting"));
const Mentoring = lazy(() => import("./pages/services/Mentoring"));
// QAAudit verwijderd — consultancy + nearshoring staat nu in Consulting.jsx

const ToAutomateOrNotToAutomate = lazy(() => import("./pages/blog/ToAutomateOrNotToAutomate"));

const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Integrations = lazy(() => import("./pages/Integrations"));
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"));
const DocsArticle = lazy(() => import("./pages/DocsArticle"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Meeting = lazy(() => import("./pages/Meeting"));
const Careers = lazy(() => import("./pages/Careers"));

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="whytesthive" element={<WhyTestHivePage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="partnerprogram" element={<PartnerProgram />} />
          <Route path="accelerator" element={<Accelerator />} />
          <Route path="pocdetails" element={<POCDetails />} />
          <Route path="platform" element={<Platform />} />

          <Route path="services/automation" element={<AutomationService />} />
          <Route
            path="services/functional-testing"
            element={<FunctionalTestingService />}
          />
          <Route path="services/pen-testing" element={<PenTestingService />} />
          {/* qa-outsourcing verwijderd — geconsolideerd in /services/consulting */}
          <Route path="services/consulting" element={<ConsultingService />} />
          <Route path="services/mentoring" element={<Mentoring />} />
          {/* qa-audit route verwijderd — consultancy is nu /services/consulting */}

          <Route path="/blog/to-automate-or-not-to-automate" element={<ToAutomateOrNotToAutomate />} />

          {/* Dev-only: dummy data, hidden from prospects */}

          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />

          <Route path="careers" element={<Careers />} />
          <Route path="meeting/:room" element={<Meeting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
