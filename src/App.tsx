import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import ServicesLayout from './layouts/ServicesLayout'
import ProductsLayout from './layouts/ProductsLayout'
import AIAddonServices from './pages/AIAddonServices'
import AIAgentTalkTime from './pages/AIAgentTalkTime'
import AIBusinessAutomation from './pages/AIBusinessAutomation'
import AIBusinessPromotion from './pages/AIBusinessPromotion'
import AIAutomatedChatbot from './pages/AIAutomatedChatbot'
import IndustrySpecificAI from './pages/IndustrySpecificAI'
import FunnelBuilder from './pages/FunnelBuilder'
import EDCRM from './pages/EDCRM'
import AIBuilder from './pages/AIBuilder'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import ScrollToTop from './components/ScrollToTop'
import LoginRedirect from './pages/LoginRedirect'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-choose-us" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginRedirect />} />

        {/* Services with Nested Routes */}
        <Route path="/services" element={<ServicesLayout />}>
          <Route index element={<Services />} />
          <Route path="ai-business-automation" element={<AIBusinessAutomation />} />
          <Route path="ai-business-promotion" element={<AIBusinessPromotion />} />
          <Route path="ai-agent-talk-time" element={<AIAgentTalkTime />} />
          <Route path="ai-automated-chatbot" element={<AIAutomatedChatbot />} />
          <Route path="ai-addon-services" element={<AIAddonServices />} />
          <Route path="industry-specific" element={<IndustrySpecificAI />} />
        </Route>

        {/* Products with Nested Routes */}
        <Route path="/products" element={<ProductsLayout />}>
          <Route path="website-builder" element={<FunnelBuilder />} />
          <Route path="edcrm" element={<EDCRM />} />
          <Route path="emotionai" element={<AIBuilder />} />
        </Route>

        {/* Legal Pages */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </>
  )
}

export default App
