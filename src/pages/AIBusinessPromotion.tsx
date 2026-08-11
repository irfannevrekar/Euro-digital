import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import ServiceHeroVideo from "../components/ServiceHeroVideo";

function AIBusinessPromotion() {
  const serviceData = {
    id: "ai-business-promotion",
    title: "AI Digital Marketing & Business Promotion",
    description:
      "EuroDigital helps businesses generate and convert leads through digital marketing systems supported by campaign automation, audience targeting, personalized communication, CRM-connected follow-up, and performance analytics.",
    image: "/servicesImages/Ai-business-promotion.png",
    features: [
      "Automated marketing workflows",
      "Personalised customer communication",
      "Intelligent campaign optimisation",
      "AI-driven content distribution",
      "Performance tracking and insights",
      "Automated lead follow-up and CRM connection",
    ],
    detailedDescription:
      "AI supports the marketing process by helping teams respond faster, maintain consistent follow-up, and use campaign insights to improve conversion.",
    primaryButtonText: "Talk to Sales",
  };

  const videoUrl =
    "https://player.mediadelivery.net/play/661416/02126d15-3c9d-4d94-a8ac-1d8bbc37332e";

  return (
    <>
      <ServiceHeroVideo
        videoUrl={videoUrl}
        overlayTitle="Ready to Strengthen Your Digital Marketing?"
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
                <a
                  href="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full  font-medium px-6 py-2 shadow-lg  text-black cursor-pointer"
                  style={{ backgroundColor: "var(--primary-blue)" }}
                >
                  {serviceData.primaryButtonText}
                </a>
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

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Connected digital growth
            </p>
            <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-5xl">
              From audience targeting to lead follow-up
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              Effective digital marketing does not stop when a campaign generates
              interest. EuroDigital connects promotion, lead capture, personalized
              communication, CRM workflows, and automated follow-up so businesses
              can move more opportunities toward conversion.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Campaign automation",
                description:
                  "Coordinate repeatable marketing workflows and content distribution while maintaining consistent communication.",
              },
              {
                title: "Audience targeting & personalization",
                description:
                  "Use customer and campaign data to deliver more relevant messages to defined audiences.",
              },
              {
                title: "Lead generation & CRM follow-up",
                description:
                  "Capture interest, organize leads in CRM workflows, and automate timely sales follow-up.",
              },
              {
                title: "Performance & conversion insights",
                description:
                  "Track campaign performance and use measurable insights to improve engagement and conversion support.",
              },
            ].map((capability) => (
              <article
                key={capability.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {capability.title}
                </h3>
                <p className="leading-7 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>
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
                  For startups and growing businesses looking to automate basic
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
                  For rapidly scaling businesses needing advanced
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
