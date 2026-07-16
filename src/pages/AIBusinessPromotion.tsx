import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import ServiceHeroVideo from "../components/ServiceHeroVideo";

function AIBusinessPromotion() {
  const serviceData = {
    id: "ai-business-promotion",
    title: "AI Business Promotion",
    description:
      "Our AI Business Promotion solutions help you reach the right audience at the right time with personalized, data-driven strategies. By leveraging AI, we improve engagement, increase conversions, and make your marketing efforts more efficient.",
    image: "/servicesImages/Ai-business-promotion.png",
    features: [
      "Automated marketing workflows",
      "Personalised customer communication",
      "Intelligent campaign optimisation",
      "AI-driven content distribution",
      "Performance tracking and insights",
    ],
    detailedDescription:
      "EuroDigital enables businesses to scale their marketing efforts while maintaining consistency and quality across all channels.",
    primaryButtonText: "Try To Sales",
  };

  const videoUrl =
    "https://player.mediadelivery.net/play/661416/02126d15-3c9d-4d94-a8ac-1d8bbc37332e";

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
                  className="rounded-full  font-medium px-6 py-2 shadow-lg  text-black cursor-pointer"
                  style={{ backgroundColor: "var(--primary-blue)" }}
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

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Heading */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Pay only for what you use
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* AI Startup Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              <div className="p-8 pb-4 mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI Startup
                </h3>
                <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                  For startups and publishers looking to automate basic
                  marketing operations.
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    $399
                  </span>
                  <p className="text-sm text-slate-500 mt-1">
                    user/month, paid yearly
                  </p>
                </div>

                <div className="flex gap-3 mb-8">
                  <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm  transition-colors cursor-pointer">
                    Buy now
                  </button>
                  <a
                    href="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                      Request a Demo
                    </button>
                  </a>
                </div>
              </div>

              <div className="px-8 pb-10 flex-grow">
                <p className="text-sm font-bold text-slate-900 mb-4">
                  Plan highlights:
                </p>
                <ul className="space-y-3">
                  {[
                    "Basic dashboard",
                    "Limited API access",
                    "Email Support",
                    "2 Agents",
                    "Basic analytics",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-[14px] text-slate-600"
                    >
                      <span className="text-slate-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Business Card (Recommended) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all flex flex-col overflow-hidden relative"
            >
              {/* Dark Header Banner */}
              <div className="bg-[#18b6e3] text-white py-2 px-6 text-center text-[13px] font-extrabold">
                Save up to 35% when you add AI Business Automation.
              </div>

              <div className="p-8 pb-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI Business
                </h3>
                <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                  For rapidly scaling startups and publishers needing advanced
                  marketing automation.
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    $699
                  </span>
                  <p className="text-sm text-slate-500 mt-1">
                    user/month, paid yearly
                  </p>
                </div>

                <div className="flex gap-3 mb-8">
                  <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm  transition-colors cursor-pointer ">
                    Buy now
                  </button>
                  <a
                    href="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                      Request a Demo
                    </button>
                  </a>
                </div>
              </div>

              <div className="px-8 pb-10 flex-grow">
                <p className="text-sm font-bold text-slate-900 mb-4">
                  Plan highlights:
                </p>
                <ul className="space-y-3">
                  {[
                    "Advanced dashboard",
                    "Priority API access",
                    "Live chat support",
                    "5 Agents",
                    "Advanced analytics",
                    "Custom branding",
                    "Call recording",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-[14px] text-slate-600"
                    >
                      <span className="text-slate-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* AI Enterprise Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden"
            >
              <div className="p-8 pb-4 mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI Enterprise
                </h3>
                <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                  Advanced marketing solutions for large enterprises with custom
                  needs.
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-slate-900">
                    Custom
                  </span>
                  <p className="text-sm text-slate-500 mt-1">
                    per user/month, tailored quote
                  </p>
                </div>
                <div className="h-4"></div>{" "}
                {/* Spacer to match price line height */}
                <div className="flex gap-3 mb-8">
                  <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm  transition-colors cursor-pointer">
                    Contact Sales
                  </button>
                  <a
                    href="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                      Request a Demo
                    </button>
                  </a>
                </div>
              </div>

              <div className="px-8 pb-10 flex-grow">
                <p className="text-sm font-bold text-slate-900 mb-4">
                  Plan highlights:
                </p>
                <ul className="space-y-3">
                  {[
                    "Full-featured dashboard",
                    "Unlimited API calls",
                    "24/7 dedicated support",
                    "5+ Customisation agents",
                    "Advanced analytics",
                    "Custom AI models",
                    "SLA guarantee",
                    "Priority processing",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="flex gap-3 items-start text-[14px] text-slate-600"
                    >
                      <span className="text-slate-400 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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

export default AIBusinessPromotion;
