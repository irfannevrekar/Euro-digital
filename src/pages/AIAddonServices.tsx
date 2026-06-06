import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import ServiceHeroVideo from "../components/ServiceHeroVideo";

function AIAddonServices() {
  const serviceData = {
    id: "ai-addon-services",
    title: "AI add-on Services",
    description:
      "Our AI Add-on Services allow businesses to enhance their existing tools and platforms with advanced AI features. These add-ons are flexible, scalable, and designed to evolve with your business.",
    image: "/servicesImages/ai_addon.png",
    features: [
      "Custom AI integrations",
      "Speech-to-text and text-to-speech solutions",
      "Advanced analytics and reporting",
      "API-based AI enhancements",
      "Workflow and system optimisation",
    ],
    detailedDescription: "EuroDigital ensures every add-on integrates smoothly into your current ecosystem.",
    primaryButtonText: "Talk to Sales",
    video: "https://player.mediadelivery.net/play/661416/0547118b-9fd8-4aae-864f-77f5f0690710",
  };


  return (
    <>
      <ServiceHeroVideo
        videoUrl={serviceData.video}
        overlayTitle="Ready to Enhance Your Tools with AI?"
        ctaLink="https://link.quickadpro.com/widget/bookings/web-booking-euro"
      />
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
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer "
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



      {/* Stacking Cards Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Web-calling Real Time Avatar
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Beautiful analytics that update as your AI agents work
            </p>
          </div>

          <div className="space-y-8">
            {/* Card 1 - Web-calling Real Time Avatar */}
            <div
              className="md:sticky md:top-24 bg-gradient-to-br from-cyan-50 to-blue-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 10 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left Side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Web-calling Real Time Avatar
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">$500</span>
                    <div className="text-base text-slate-600 mt-2">
                      • ($29 / Month Subscription)
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Voice Customisation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Priority Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Calling Price 15 cents a Minutes</span>
                    </div>
                  </div>
                </div>

                {/* Right Side - Image */}
                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_agent.png"
                    alt="Web-calling Real Time Agent"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 2 - Advanced Real Time Avatar */}
            <div
              className="md:sticky md:top-32 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 20 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Advanced Real Time Avatar
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">$799</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Everything in Basic Plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Multi-language Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Advanced Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">API Integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Call Recording & Transcription</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_bussiness.png"
                    alt="Advanced Real Time Agent"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 3 - Professional Real Time Avatar */}
            <div
              className="md:sticky md:top-40 bg-gradient-to-br from-green-50 to-teal-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 30 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Professional Real Time Avatar
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">$1,199</span>
                    <span className="text-xl text-slate-600 ml-3">Per Month</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Everything in Advanced Plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Unlimited Calling Minutes</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">24/7 Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Voice Training</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">CRM Integration</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/ai_services.png"
                    alt="Professional Real Time Agent"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Card 4 - Enterprise Real Time Avatar */}
            <div
              className="md:sticky md:top-48 bg-gradient-to-br from-orange-50 to-amber-100 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ zIndex: 40 }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                    Enterprise Real Time Avatar
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl md:text-7xl font-bold text-slate-700">Custom</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Everything in Professional Plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Custom Infrastructure</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">On-Premise Deployment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Advanced Security Features</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">SLA Guarantee</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Priority Processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-500 text-2xl font-bold">✓</span>
                      <span className="text-slate-700 text-lg">Multi-region Support</span>
                    </div>
                  </div>
                </div>

                <div className="relative h-full min-h-[300px] md:min-h-[650px] order-1 md:order-2">
                  <img
                    src="/backgroundImages/avatar.png"
                    alt="Enterprise Real Time Avatar"
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

export default AIAddonServices;

