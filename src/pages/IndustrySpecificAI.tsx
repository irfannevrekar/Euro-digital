import { useState } from "react";
import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import Modal from "../components/ui/Modal";
import ServiceHeroVideo from "../components/ServiceHeroVideo";

interface IndustryContent {
  title: string;
  description: string;
  details: React.ReactNode;
}

const industryDetails: Record<string, IndustryContent> = {
  "Real Estate": {
    title: "Real Estate AI Solutions",
    description: "Transforming property management and sales with intelligent automation.",
    details: (
      <div className="space-y-4">
        <p>Our AI solutions for Real Estate include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Cold calling bot + follow up automations</strong></li>
          <li><strong>Lead generation package</strong></li>
          <li><strong>Social media chat bots + website chatbot + AI CALLING</strong></li>
        </ul>
      </div>
    ),
  },
  "Healthcare": {
    title: "Healthcare AI Efficiency",
    description: "Improving patient care and administrative workflows with AI.",
    details: (
      <div className="space-y-4">
        <p>Our Healthcare AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>AI receptionist calling bot + appointment confirmation automations</strong></li>
          <li><strong>Support calling bot + call transfer automations</strong></li>
        </ul>
      </div>
    ),
  },
  "Consultancy": {
    title: "AI for Consultancy Firms",
    description: "Scaling expertise and client relationships through automation.",
    details: (
      <div className="space-y-4">
        <p>Our Consultancy AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Call diversions bot + follow up automations</strong></li>
          <li><strong>Support calling bot + call transfer automations</strong></li>
        </ul>
      </div>
    ),
  },
  "SAAS Company": {
    title: "SaaS Growth Acceleration",
    description: "Driving user acquisition and retention with intelligent bots.",
    details: (
      <div className="space-y-4">
        <p>Our SaaS AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Sales AI calling bot + follow up automations</strong></li>
          <li><strong>Lead generation package</strong></li>
          <li><strong>Social media chat bots + website chatbot + AI CALLING</strong></li>
          <li><strong>Support calling bot + call transfer automations</strong></li>
        </ul>
      </div>
    ),
  },
  "Insurance Company": {
    title: "Intelligent Insurance Services",
    description: "Automating claims, sales, and customer support for insurance providers.",
    details: (
      <div className="space-y-4">
        <p>Our Insurance AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Sale Pitch AI calling bot + follow-up automations</strong></li>
          <li><strong>AI receptionist for the company to handle customer inquiries</strong></li>
        </ul>
      </div>
    ),
  },
  "Banking System": {
    title: "Modern Banking with AI",
    description: "Securing and enhancing financial operations with intelligent automation.",
    details: (
      <div className="space-y-4">
        <p>Our Banking AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>WhatsApp Chatbot</strong> - For day-to-day conversation with customers</li>
          <li className="capitalize"><strong>SMS and Email Blast automation</strong> - send greeting offers to all customers</li>
          <li><strong>AI CALLING for promoting credit cards and offers</strong></li>
          <li className="capitalize"><strong>Recovery agents</strong> - Debt collections</li>
        </ul>
      </div>
    ),
  },
  "Solar Companies": {
    title: "Solar Industry AI Power",
    description: "Optimizing lead gen and customer conversion for renewable energy.",
    details: (
      <div className="space-y-4">
        <p>Our Solar AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="capitalize"><strong>Lead generation package</strong></li>
          <li><strong>Social media chat bots + Website Chatbot + AI CALLING</strong></li>
          <li className="capitalize"><strong>Cold calling bot + follow-up automations</strong></li>
        </ul>
      </div>
    ),
  },
};

const industryImages: Record<string, string> = {
  "Real Estate":
    "https://2c3wn7zfav.ucarecd.net/11ba89c6-4554-4254-a8e6-6193565067df/photo1505693416388ac5ce068fe85.avif",
  Healthcare:
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  Consultancy:
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  "SAAS Company":
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "Insurance Company":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  "Banking System":
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  "Solar Companies":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
};

function IndustrySpecificAI() {
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);

  const openModal = (industry: string) => {
    setSelectedIndustry(industry);
  };

  const closeModal = () => {
    setSelectedIndustry(null);
  };

  return (
    <>
      <ServiceHeroVideo
        videoUrl="https://player.mediadelivery.net/play/661416/78158008-7515-443f-a183-a54a8d3b3a3f"
        overlayTitle="Ready to Explore Industry Specific AI?"
        ctaLink="https://link.quickadpro.com/widget/bookings/web-booking-euro"
      />

      {/* Industry Use Cases Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Everything Your Personal Secretary Should Do
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto ">
              EuroDigital Delivers The Infrastructure, Tooling, And Expertise Needed To Bring Great AI Products To Market - Fast.
            </p>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Real Estate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages["Real Estate"]} alt="Real Estate" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Real Estate</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know about real estate click on learn more.
              </p>
              <button
                onClick={() => openModal("Real Estate")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Healthcare */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages.Healthcare} alt="Healthcare" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Healthcare</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Healthcare, click on leanr more.
              </p>
              <button
                onClick={() => openModal("Healthcare")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Consultancy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages.Consultancy} alt="Consultancy" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Consultancy</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Consultancy, click on learn more.
              </p>
              <button
                onClick={() => openModal("Consultancy")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* SAAS Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages["SAAS Company"]} alt="SAAS Company" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">SAAS Company</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in SAAS Company, click on learn more.
              </p>
              <button
                onClick={() => openModal("SAAS Company")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Insurance Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages["Insurance Company"]} alt="Insurance Company" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Insurance Company</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Insurance Company, click on learn more.
              </p>
              <button
                onClick={() => openModal("Insurance Company")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Banking System */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages["Banking System"]} alt="Banking System" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Banking System</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Banking System, click on learn more.
              </p>
              <button
                onClick={() => openModal("Banking System")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Solar Companies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white hover:bg-cyan-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img src={industryImages["Solar Companies"]} alt="Solar Companies" className="w-full h-64 md:h-72 object-cover rounded-xl mb-6" loading="lazy" />
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Solar Companies</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Solar Companies, click on learn more.
              </p>
              <button
                onClick={() => openModal("Solar Companies")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {getFAQsByServiceId("industry-specific") && (
        <FAQ
          faqs={getFAQsByServiceId("industry-specific")!.faqs}
          subtitle={getFAQsByServiceId("industry-specific")!.subtitle}
        />
      )}

      {/* Learn More Modal */}
      <Modal
        isOpen={!!selectedIndustry}
        onClose={closeModal}
        title={selectedIndustry ? industryDetails[selectedIndustry].title : ""}
        ctaUrl="https://link.quickadpro.com/widget/bookings/web-booking-euro"
        ctaText="Contact Sale"
      >
        {selectedIndustry && (
          <div className="space-y-6">
            <p className="text-xl font-medium text-slate-800">
              {industryDetails[selectedIndustry].description}
            </p>
            <div className="prose prose-slate max-w-none">
              {industryDetails[selectedIndustry].details}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default IndustrySpecificAI;
