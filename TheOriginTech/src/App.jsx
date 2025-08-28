import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";
import OurWork from "./pages/OurWork/OurWork";
import ContactUs from "./pages/ContactUs/ContactUs";
import Pricing from "./pages/Pricing/Pricing";
import NoPage from "./pages/NoPage/NoPage";
import FormPupup from "./components/Form/FormPopup/FormPopup";
import WebAppServiceListDetail from "./components/ServiceListDetail/WebAppServiceListDetail/WebAppServiceListDetail";
import DigitalMarketingServiceListDetail from "./components/ServiceListDetail/DigitalMarketingServiceListDetail/DigitalMarketingServiceListDetail";
import ContentMarketingServiceListDetail from "./components/ServiceListDetail/ContentMarketingServiceListDetail/ContentMarketingServiceListDetail";
import EcommerceServiceListDetail from "./components/ServiceListDetail/EcommerceServiceListDetail/EcommerceServiceListDetail";
import PPCServiceListDetail from "./components/ServiceListDetail/PPCServiceListDetail/PPCServiceListDetail";
import SEOServiceListDetail from "./components/ServiceListDetail/SEOServiceListDetail/SEOServiceListDetail";
import SocialMediaServiceListDetail from "./components/ServiceListDetail/SocialMediaServiceListDetail/SocialMediaServiceListDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/formfilling" element={<FormPupup />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/*" element={<NoPage />} />
          <Route
            path="/services/WebAppServiceListDetail"
            element={<WebAppServiceListDetail />}
          />
          <Route
            path="/services/DigitalMarketingServiceListDetail"
            element={<DigitalMarketingServiceListDetail />}
          />
          <Route
            path="/services/SEOServiceListDetail"
            element={<SEOServiceListDetail />}
          />
          <Route
            path="/services/PPCServiceListDetail"
            element={<PPCServiceListDetail />}
          />
          <Route
            path="/services/ContentMarketingServiceListDetail"
            element={<ContentMarketingServiceListDetail />}
          />
          <Route
            path="/services/SocialMediaServiceListDetail"
            element={<SocialMediaServiceListDetail />}
          />
          <Route
            path="/services/EcommerceServiceListDetail"
            element={<EcommerceServiceListDetail />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
