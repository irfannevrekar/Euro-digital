import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIAgentTalkTime() {
  const serviceData = {
    id: "ai-agent-talk-time",
    title: "AI Agent Talk Time",
    description:
      "Our AI-powered chatbots are designed to handle customer interactions accurately and professionally, around the clock. These chatbots are trained using your business data, ensuring responses remain relevant, reliable, and aligned with your brand voice.",
    image: "/backgroundImages/aitalk-time.png",
    features: [
      "Website, WhatsApp, and platform-based chatbots",
      "Customer support automation",
      "Lead qualification and nurturing",
      "Appointment scheduling and follow-ups",
      "FAQ and knowledge base handling"
    ],
    detailedDescription: "This ensures faster response times, improved customer satisfaction, and reduced support workload.",
    primaryButtonText: "Try For Free",
  };

  return (
    <>
      {/* Service Content */}
      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
                {serviceData.title}
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {serviceData.description}
              </p>

              {serviceData.features && (
                <div className="space-y-3 ml-4">
                  <ul className="space-y-2">
                    {serviceData.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>●</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {serviceData.detailedDescription && (
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                  {serviceData.detailedDescription}
                </p>
              )}

              <div className="flex gap-4 pt-4">
                <button
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg  cursor-pointer"
                  style={{ backgroundColor: 'var(--primary-blue)' }}
                >
                  {serviceData.primaryButtonText}
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

      {/* Full Width Image Section */}
      {/* <section className="w-full max-w-[1425px] mx-auto rounded-3xl overflow-hidden mt-10">
        <img
          src="/servicesImages/Ai-business-automation1.png"
          alt="AI Agent Talk Time"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '600px' }}
        />
      </section> */}

      {/* Stacking Cards Section with Scroll Effect */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              AI Products & Market Tech
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Card 1 - AI Startup Talk time */}
            <div
              className="md:sticky md:top-24 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 10 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    AI Startup Talk time
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">$99</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">1,000 AI Calling Minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Basic Voice Customisation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Standard Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Analytics Dashboard</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_agent.png"
                    alt="AI Startup Talk time"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - AI Business Talk time */}
            <div
              className="md:sticky md:top-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 20 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    AI Business Talk time
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">$299</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">5,000 AI Calling Minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Advanced Voice Customisation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Advanced Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">API Integration</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_bussiness.png"
                    alt="AI Business Talk time"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - AI Professional Talk time */}
            <div
              className="md:sticky md:top-40 bg-gradient-to-br from-green-50 to-teal-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 30 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    AI Professional Talk time
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">$599</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">15,000 AI Calling Minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Premium Voice Customisation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Real-time Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Full API Access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Integrations</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_services.png"
                    alt="AI Professional Talk time"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 - AI Enterprise Talk time */}
            <div
              className="md:sticky md:top-48 bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 40 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    AI Enterprise Talk time
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">Custom</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Unlimited AI Calling Minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Enterprise Voice Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Analytics Dashboard</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">White-label Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">SLA Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">On-premise Deployment</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_users.png"
                    alt="AI Enterprise Talk time"
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

export default AIAgentTalkTime;

