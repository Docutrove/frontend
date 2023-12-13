import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/modules/public/home";
import Services from "./components/modules/public/services";
import Customise from "./components/modules/public/customise";
import Consultation from "./components/modules/public/consultation";
import FAQ from "./components/modules/public/faq";
import Business from "./components/modules/public/business";
import Subscription from "./components/modules/public/subscription";
import Pricing from "./components/modules/public/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customise" element={<Customise />} />
        <Route path="/business" element={<Business />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
