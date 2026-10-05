import { motion } from "framer-motion";
import { Monitor, PhoneCall } from "lucide-react";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";

function AIAgentTalkTime() {
  const serviceData = {
    id: "ai-agent-talk-time",
    title: "AI Agent Talk Time",
    description:
      "AI voice calling capacity for automated sales, support, appointment booking, qualification, and customer follow-up.",
    image: "/backgroundImages/aitalk-time.png",
    features: [
      "Inbound and outbound AI calling",
      "Automated sales and customer support",
      "Lead qualification and follow-up",
      "Appointment booking and reminders",
      "Natural, brand-aligned voice conversations",
    ],
    detailedDescription:
      "Scale customer conversations while reducing call handling costs and ensuring inquiries receive a timely response.",
    primaryButtonText: "Try For Free",
  };

  return (
    <>
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
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg  cursor-pointer"
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

      {/* Full Width Image Section */}
      {/* <section className="w-full max-w-[1425px] mx-auto rounded-3xl overflow-hidden mt-10">
        <img
          src="/servicesImages/Ai-business-automation1.png"
          alt="AI Agent Talk Time"
          className="w-full h-auto object-cover"
          style={{ maxHeight: '600px' }}
        />
      </section> */}

      {/* AI Calling and Voice Widget Plans */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                <PhoneCall size={22} aria-hidden="true" />
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                AI Calling Plans
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Monthly plans with included AI calling minutes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 - AI Startup Talk time */}
            <div
              className="rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-slate-900 mb-5">
                    AI Startup Talk time
                  </h3>

                  <div className="mb-7 border-b border-slate-100 pb-6">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">
                      $150
                    </span>
                    <span className="text-sm text-slate-500 ml-2">
                      Per Month
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        1,000 AI Calling Minutes
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Basic Voice Customisation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Standard Support
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Analytics Dashboard
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 2 - AI Business Talk time */}
            <div
              className="rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-slate-900 mb-5">
                    AI Business Talk time
                  </h3>

                  <div className="mb-7 border-b border-slate-100 pb-6">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">
                      $750
                    </span>
                    <span className="text-sm text-slate-500 ml-2">
                      Per Month
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        5,000 AI Calling Minutes
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Advanced Voice Customisation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Priority Support
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Advanced Analytics
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        API Integration
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Card 3 - AI Professional Talk time */}
            <div
              className="rounded-xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <div className="h-full">
                <div className="p-7 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-slate-900 mb-5">
                    AI Professional Talk time
                  </h3>

                  <div className="mb-7 border-b border-slate-100 pb-6">
                    <span className="text-4xl font-bold tracking-tight text-slate-900">
                      $2,250
                    </span>
                    <span className="text-sm text-slate-500 ml-2">
                      Per Month
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        15,000 AI Calling Minutes
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Premium Voice Customisation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        24/7 Support
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Real-time Analytics
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Full API Access
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-blue-600 text-base font-semibold">
                        ✓
                      </span>
                      <span className="text-sm leading-6 text-slate-600">
                        Custom Integrations
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          <div className="text-center mt-20 mb-12">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
                <Monitor size={22} aria-hidden="true" />
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                AI Voice Widget Plans
              </h2>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Monthly plans with the same included minutes for website voice widgets.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "AI Widget Starter", price: "$100", features: ["1,000 Voice Widget Minutes", "Basic Voice Customisation", "Standard Support", "Analytics Dashboard"] },
              { name: "AI Widget Business", price: "$250", features: ["2,500 Voice Widget Minutes", "Advanced Voice Customisation", "Priority Support", "Advanced Analytics", "API Integration"] },
              { name: "AI Widget Professional", price: "$550", features: ["5,500 Voice Widget Minutes", "Premium Voice Customisation", "24/7 Support", "Real-time Analytics", "Full API Access", "Custom Integrations"] },
            ].map((plan) => (
              <div key={plan.name} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-5">{plan.name}</h3>
                <div className="mb-7 border-b border-slate-100 pb-6">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">{plan.price}</span>
                  <span className="text-sm text-slate-500 ml-2">Per Month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                      <span className="text-blue-600 font-semibold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
