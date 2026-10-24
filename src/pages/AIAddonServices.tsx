import { motion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import ServiceHeroVideo from "../components/ServiceHeroVideo";
import { ArrowRight, Check } from "lucide-react";

function AIAddonServices() {
  const serviceData = {
    id: "ai-addon-services",
    title: "AI Add-on Services",
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
    detailedDescription:
      "EuroDigital ensures every add-on integrates smoothly into your current ecosystem.",
    primaryButtonText: "Talk to Sales",
    video:
      "https://player.mediadelivery.net/play/661416/0547118b-9fd8-4aae-864f-77f5f0690710",
  };

  return (
    <>
      <ServiceHeroVideo
        videoUrl={serviceData.video}
        overlayTitle="Ready to Enhance Your Tools with AI?"
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
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer "
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

      {/* Pricing comparison */}
      <section className="pricing-section py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="pricing-heading">
            <div>
              <p className="pricing-eyebrow">Flexible plans for every team</p>
              <h2>Choose the right avatar for your business</h2>
              <p className="pricing-subtitle">
                Start with the essentials and scale into a fully managed AI
                calling experience.
              </p>
            </div>
            <a
              className="pricing-heading-link"
              href="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
            >
              Talk to an expert <ArrowRight size={17} />
            </a>
          </div>

          <div className="pricing-table-wrap">
            <div
              className="pricing-table"
              role="table"
              aria-label="Real time avatar plans"
            >
              <div className="pricing-row pricing-row-header" role="row">
                <div className="pricing-feature-cell" role="columnheader">
                  Plan features
                </div>
                {[
                  [
                    "Web-calling",
                    "$500",
                    "Setup + $29/mo",
                    "Starter",
                    "https://buy.stripe.com/bJe00daHPg0X8d08c6cEw02",
                  ],
                  [
                    "Advanced",
                    "$799",
                    "Per month",
                    "Popular",
                    "https://buy.stripe.com/4gMeV7cPXdCL51C4ZUcEw03",
                  ],
                  [
                    "Professional",
                    "$1,199",
                    "Per month",
                    "Best value",
                    "https://buy.stripe.com/bJe5kx6rz56falW1NIcEw04",
                  ],
                  ["Enterprise", "Custom", "Tailored pricing", "Scale", ""],
                ].map(([name, price, detail, label, checkoutUrl], index) => (
                  <div
                    className={`pricing-plan-cell ${index === 1 ? "is-popular" : ""}`}
                    role="columnheader"
                    key={name}
                  >
                    <span className="pricing-plan-label">{label}</span>
                    <h3>
                      {name} <span>Avatar</span>
                    </h3>
                    <strong>{price}</strong>
                    <small>{detail}</small>
                    <div className="pricing-actions">
                      <a
                        className="pricing-buy"
                        href={
                          checkoutUrl ||
                          "https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
                        }
                      >
                        Buy now
                      </a>
                      <a
                        className="pricing-demo"
                        href="https://crm.eurodigital.ae/widget/bookings/web-booking-euro"
                      >
                        Get demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              {[
                ["Voice customisation", true, true, true, true],
                ["Custom integration", true, true, true, true],
                ["Priority support", true, true, true, true],
                ["Calling at 15¢ per minute", true, true, true, false],
                ["Multi-language support", false, true, true, true],
                ["Advanced analytics", false, true, true, true],
                ["API integration", false, true, true, true],
                ["Call recording & transcription", false, true, true, true],
                ["Unlimited calling minutes", false, false, true, true],
                ["24/7 support + account manager", false, false, true, true],
                [
                  "Custom infrastructure & deployment",
                  false,
                  false,
                  false,
                  true,
                ],
                [
                  "Security, SLA & multi-region support",
                  false,
                  false,
                  false,
                  true,
                ],
              ].map(([feature, ...plans]) => (
                <div className="pricing-row" role="row" key={feature as string}>
                  <div className="pricing-feature-cell" role="cell">
                    {feature}
                  </div>
                  {plans.map((included, index) => (
                    <div
                      className="pricing-check-cell"
                      role="cell"
                      key={`${feature}-${index}`}
                    >
                      {included ? (
                        <Check
                          size={18}
                          strokeWidth={2.5}
                          aria-label="Included"
                        />
                      ) : (
                        <span aria-label="Not included">—</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
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
