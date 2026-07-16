import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import ServiceHeroVideo from "../components/ServiceHeroVideo";

function AIAutomatedChatbot() {
  const serviceData = {
    id: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    description:
      "EuroDigital's AI Voice Agents manage real conversations with customers using natural, human-like speech. These agents can handle calls efficiently while maintaining a professional tone and consistency.",
    image: "/backgroundImages/ai-automation.png",
    features: [
      "Inbound customer inquiries",
      "Outbound follow-up and reminder calls",
      "Appointment confirmations",
      "Support and service-related conversations",
    ],
    detailedDescription:
      "Our AI voice agents help businesses reduce call handling costs while ensuring no customer inquiry goes unanswered.",
    primaryButtonText: "Try For Free",
    secondaryButtonText: "Talk to Sales",
  };

  const videoUrl =
    "https://player.mediadelivery.net/play/661416/c564b724-82f9-4426-b62e-079b3a1b8fb4";

  return (
    <>
      <ServiceHeroVideo
        videoUrl={videoUrl}
        overlayTitle="Ready to Automate Your Business?"
        ctaLink="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
      />
      {/* Service Content */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-3">
              <h1
                className="text-4xl md:text-5xl font-semibold"
                style={{ color: "var(--primary-navy)" }}
              >
                {serviceData.title}
              </h1>
              <p
                className="text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {serviceData.description}
              </p>

              {serviceData.features && (
                <div className="space-y-3 ml-4">
                  <ul className="space-y-2">
                    {serviceData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span
                          className="text-xs mt-1"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          ●
                        </span>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {serviceData.detailedDescription && (
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {serviceData.detailedDescription}
                </p>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer"
                  style={{ backgroundColor: "var(--primary-blue)" }}
                >
                  {serviceData.primaryButtonText}
                </button>
                <button
                  className="rounded-full font-medium px-6 py-2 transition-all hover:bg-gray-100 border-2 border-gray-300 text-gray-500 cursor-pointer"
                  style={{
                    borderWidth: "2px",
                    backgroundColor: "transparent",
                  }}
                >
                  {serviceData.secondaryButtonText}
                </button>
              </div>
            </div>

            <div className="relative ">
              <motion.img
                src={serviceData.image}
                alt={serviceData.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stacking Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-[#25D366]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754a8.117 8.117 0 01-4.077-1.102l-.294-.174-3.04.797.812-2.964-.191-.304A8.138 8.138 0 014.12 11.5c0-4.48 3.64-8.12 8.12-8.12 4.48 0 8.12 3.64 8.12 8.12 0 4.48-3.64 8.12-8.12 8.12m0-17.182C7.03 1.954 2.5 6.484 2.5 11.5c0 1.603.418 3.17 1.213 4.542L2.5 21.5l5.632-1.478c1.32.72 2.806 1.101 4.318 1.101 5.02 0 9.55-4.529 9.55-9.55 0-5.016-4.53-9.546-9.55-9.546" />
              </svg>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                AI Automated Chatbot
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Beautiful analytics that update as your AI agents work
            </p>
          </div>

          <div className="space-y-8">
            {/* Card 1 - WhatsApp AI Automated Chatbot */}
            <div
              className="md:sticky md:top-24 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 10 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    WhatsApp AI Automated Chatbot
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">
                      $600
                    </span>
                    <span className="text-xl text-slate-600 ml-3">
                      Per Month
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        All WhatsApp Business API Automation Included
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Priority Support
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Monthly Maintenance Included
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Custom WhatsApp Templates
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_bussiness.png"
                    alt="WhatsApp AI Chatbot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Instagram AI Chatbot */}
            <div
              className="md:sticky md:top-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 20 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Instagram AI Chatbot
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">
                      $600
                    </span>
                    <span className="text-xl text-slate-600 ml-3">
                      Per Month
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        All Instagram DM & Comment Automation Included
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Story Mention Auto-Replies
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        24/7 Profile Engagement
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Custom Instagram Chat Flows
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Influencer/Creator Dashboard
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_agent.png"
                    alt="Instagram AI Chatbot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Facebook Messenger AI Chatbot */}
            <div
              className="md:sticky md:top-40 bg-gradient-to-br from-green-50 to-teal-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 30 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Facebook Messenger AI Chatbot
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">
                      $600
                    </span>
                    <span className="text-xl text-slate-600 ml-3">
                      Per Month
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        All Facebook Page DM & Comment Automation Included
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Instant Automated Replies
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Lead Generation via Messenger Ads
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Customer Support Ticketing Integration
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Personalized Customer Journeys
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Performance Analytics Dashboard
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_services.png"
                    alt="Facebook Messenger AI Chatbot"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 - Enterprise WhatsApp AI */}
            <div
              className="md:sticky md:top-48 bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 40 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Enterprise level chatbot solution
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">
                      Custom
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Everything in Facebook Messenger Plan
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Custom Infrastructure & Scalability
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        On-Premise or Private Cloud Deployment
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Enterprise-grade Security & Compliance
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Dedicated 24/7 Support & SLA Guarantee
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Custom AI Model Training
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">
                        ✓
                      </span>
                      <span className="text-slate-700 text-lg">
                        Full White-label & API Access
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/agent.png"
                    alt="Enterprise level chatbot solution"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {getFAQsByServiceId(serviceData.id) && (
        <FAQ
          faqs={getFAQsByServiceId(serviceData.id)!.faqs}
          subtitle={getFAQsByServiceId(serviceData.id)!.subtitle}
        />
      )}
    </>
  );
}

export default AIAutomatedChatbot;
