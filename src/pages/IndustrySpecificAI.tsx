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
    description:
      "Transforming property management and sales with intelligent automation.",
    details: (
      <div className="space-y-4">
        <p>Our AI solutions for Real Estate include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Cold calling bot + follow up automations</strong>
          </li>
          <li>
            <strong>Lead generation package</strong>
          </li>
          <li>
            <strong>
              Social media chat bots + website chatbot + AI CALLING
            </strong>
          </li>
        </ul>
      </div>
    ),
  },
  Healthcare: {
    title: "Healthcare AI Efficiency",
    description: "Improving patient care and administrative workflows with AI.",
    details: (
      <div className="space-y-4">
        <p>Our Healthcare AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>
              AI receptionist calling bot + appointment confirmation automations
            </strong>
          </li>
          <li>
            <strong>Support calling bot + call transfer automations</strong>
          </li>
        </ul>
      </div>
    ),
  },
  Consultancy: {
    title: "AI for Consultancy Firms",
    description:
      "Scaling expertise and client relationships through automation.",
    details: (
      <div className="space-y-4">
        <p>Our Consultancy AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Call diversions bot + follow up automations</strong>
          </li>
          <li>
            <strong>Support calling bot + call transfer automations</strong>
          </li>
        </ul>
      </div>
    ),
  },
  "SAAS Company": {
    title: "SaaS Growth Acceleration",
    description:
      "Driving user acquisition and retention with intelligent bots.",
    details: (
      <div className="space-y-4">
        <p>Our SaaS AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Sales AI calling bot + follow up automations</strong>
          </li>
          <li>
            <strong>Lead generation package</strong>
          </li>
          <li>
            <strong>
              Social media chat bots + website chatbot + AI CALLING
            </strong>
          </li>
          <li>
            <strong>Support calling bot + call transfer automations</strong>
          </li>
        </ul>
      </div>
    ),
  },
  "Insurance Company": {
    title: "Intelligent Insurance Services",
    description:
      "Automating claims, sales, and customer support for insurance providers.",
    details: (
      <div className="space-y-4">
        <p>Our Insurance AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Sale Pitch AI calling bot + follow-up automations</strong>
          </li>
          <li>
            <strong>
              AI receptionist for the company to handle customer inquiries
            </strong>
          </li>
        </ul>
      </div>
    ),
  },
  "Banking System": {
    title: "Modern Banking with AI",
    description:
      "Securing and enhancing financial operations with intelligent automation.",
    details: (
      <div className="space-y-4">
        <p>Our Banking AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>WhatsApp Chatbot</strong> - For day-to-day conversation with
            customers
          </li>
          <li className="capitalize">
            <strong>SMS and Email Blast automation</strong> - send greeting
            offers to all customers
          </li>
          <li>
            <strong>AI CALLING for promoting credit cards and offers</strong>
          </li>
          <li className="capitalize">
            <strong>Recovery agents</strong> - Debt collections
          </li>
        </ul>
      </div>
    ),
  },
  "Solar Companies": {
    title: "Solar Industry AI Power",
    description:
      "Optimizing lead gen and customer conversion for renewable energy.",
    details: (
      <div className="space-y-4">
        <p>Our Solar AI solutions include:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="capitalize">
            <strong>Lead generation package</strong>
          </li>
          <li>
            <strong>
              Social media chat bots + Website Chatbot + AI CALLING
            </strong>
          </li>
          <li className="capitalize">
            <strong>Cold calling bot + follow-up automations</strong>
          </li>
        </ul>
      </div>
    ),
  },
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
        ctaLink="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
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
              Baseten Delivers The Infrastructure, Tooling, And Expertise Needed
              To Bring Great AI Products To Market - Fast.
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Real Estate
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know about real estate click on learn more.
              </p>
              <button
                onClick={() => openModal("Real Estate")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Healthcare
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Healthcare, click on leanr more.
              </p>
              <button
                onClick={() => openModal("Healthcare")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Consultancy
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Consultancy, click on learn more.
              </p>
              <button
                onClick={() => openModal("Consultancy")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                SAAS Company
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in SAAS Company, click on learn more.
              </p>
              <button
                onClick={() => openModal("SAAS Company")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.040A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Insurance Company
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Insurance Company, click on learn more.
              </p>
              <button
                onClick={() => openModal("Insurance Company")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Banking System
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Banking System, click on learn more.
              </p>
              <button
                onClick={() => openModal("Banking System")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
              <div className="inline-flex items-center justify-center w-14 h-14 bg-green-500 rounded-lg mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Solar Companies
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                To know more about AI in Solar Companies, click on learn more.
              </p>
              <button
                onClick={() => openModal("Solar Companies")}
                className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 focus:outline-none cursor-pointer hover:underline"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
        ctaUrl="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
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
