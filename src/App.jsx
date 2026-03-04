import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import WhyTestHivePage from "./pages/WhyTestHive";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import PricingPage from "./pages/PricingPage";
import PartnerProgram from "./pages/PartnerProgram";
import Accelerator from "./pages/Accelerator";
import POCDetails from "./pages/POCDetails";
import Platform from "./pages/Platform";
import NotFound from "./pages/NotFound";

import AutomationService from "./pages/services/Automation";
import FunctionalTestingService from "./pages/services/FunctionalTesting";
import PenTestingService from "./pages/services/PenTesting";
import QAOutsourcingService from "./pages/services/QAOutsourcing";
import ConsultingService from "./pages/services/Consulting";
import Mentoring from "./pages/services/Mentoring";

import ToAutomateOrNotToAutomate from "./pages/blog/ToAutomateOrNotToAutomate";

function App() {
  return (
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
        <Route path="services/qa-outsourcing" element={<QAOutsourcingService />} />
        <Route path="services/consulting" element={<ConsultingService />} />
        <Route path="services/mentoring" element={<Mentoring />} />

        <Route path="/blog/to-automate-or-not-to-automate" element={<ToAutomateOrNotToAutomate />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
