import { motion, useReducedMotion } from "framer-motion";
import FAQ from "../components/FAQ";
import { getFAQsByServiceId } from "../data/faqData";
import ServiceHeroVideo from "../components/ServiceHeroVideo";
import { openBookingModal } from "../constants/booking";
import {
  ArrowRight,
  Building2,
  Check,
  CircleHelp,
  Instagram,
  MessageCircle,
  Plus,
  Send,
  Sparkles,
} from "lucide-react";

function getFirstYearEstimate(setupPrice: string, monthlyPrice: string) {
  const setupAmount = Number(setupPrice.replace(/[$,]/g, ""));
  const monthlyAmount = Number(monthlyPrice.replace(/[$,]/g, ""));

  if (!Number.isFinite(setupAmount) || !Number.isFinite(monthlyAmount)) {
    return "Custom quote";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(setupAmount + monthlyAmount * 12);
}

const CHATBOT_SETUP_CHECKOUT_URL =
  "https://buy.stripe.com/3cIfZb8zH8ir79KakecEw0h";
const AI_ENHANCED_CHECKOUT_URL =
  "https://buy.stripe.com/dRm3cpeY5buDfGg63YcEw01";

function AIAutomatedChatbot() {
  const prefersReducedMotion = useReducedMotion();
  const serviceData = {
    id: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    description:
      "AI chatbots for websites and messaging channels that provide 24/7 customer support, lead qualification, FAQs, and automated customer engagement.",
    image: "/backgroundImages/ai-automation.png",
    features: [
      "Website, WhatsApp, and messaging chatbots",
      "Instant customer support and FAQs",
      "Lead qualification and nurturing",
      "Appointment scheduling and follow-ups",
    ],
    detailedDescription:
      "Our AI chatbots improve response times and customer satisfaction while reducing repetitive support work.",
    primaryButtonText: "Talk to us",
  };

  const chatbotPlans = [
    {
      name: "WhatsApp AI Automated Chatbot",
      category: "Messaging channel",
      icon: MessageCircle,
      description: "Automate customer conversations on WhatsApp.",
      setupPrice: "$600",
      setupLabel: "one-time integration",
      price: "$97",
      priceDetail: "per month",
      setupCheckoutUrl: CHATBOT_SETUP_CHECKOUT_URL,
      features: [
        "WhatsApp Business API automation",
        "Priority support",
        "Monthly maintenance",
        "Custom WhatsApp templates",
      ],
    },
    {
      name: "Instagram AI Chatbot",
      category: "Messaging channel",
      icon: Instagram,
      description:
        "Turn Instagram messages and comments into timely conversations.",
      setupPrice: "$600",
      setupLabel: "one-time integration",
      price: "$97",
      priceDetail: "per month",
      setupCheckoutUrl: CHATBOT_SETUP_CHECKOUT_URL,
      features: [
        "Instagram DM and comment automation",
        "Story mention auto-replies",
        "Profile engagement",
        "Custom chat flows",
        "Creator dashboard",
      ],
    },
    {
      name: "Facebook Messenger AI Chatbot",
      category: "Messaging channel",
      icon: Send,
      description: "Respond to customers and capture leads through Messenger.",
      setupPrice: "$600",
      setupLabel: "one-time integration",
      price: "$97",
      priceDetail: "per month",
      setupCheckoutUrl: CHATBOT_SETUP_CHECKOUT_URL,
      features: [
        "Facebook Page DM and comment automation",
        "Instant replies",
        "Lead generation",
        "Ticketing integration",
        "Personalized journeys",
        "Analytics dashboard",
      ],
    },
    {
      name: "Enterprise chatbot solution",
      category: "Custom deployment",
      icon: Building2,
      description:
        "A tailored chatbot deployment built around your requirements.",
      badge: "Custom plan",
      setupPrice: "Custom",
      setupLabel: "integration scope",
      price: "Custom",
      priceDetail: "tailored scope & quote",
      buttonLabel: "Contact Sales",
      features: [
        "Custom infrastructure",
        "Private deployment",
        "Enterprise security",
        "Dedicated support",
        "AI model training",
        "White-label/API access",
      ],
    },
    {
      name: "AI-Enhanced Chatbot Plan",
      category: "AI add-on",
      icon: Sparkles,
      description:
        "Add AI powered conversations and lead qualification to your platform.",
      badge: "AI powered",
      setupPrice: "$600",
      setupLabel: "one-time integration",
      price: "$99",
      priceDetail: "per month",
      setupCheckoutUrl: AI_ENHANCED_CHECKOUT_URL,
      features: [
        "Everything in the selected platform plan",
        "AI-powered conversations",
        "Lead qualification",
        "Smart automated replies",
        "Personalized journeys",
        "AI performance insights",
      ],
    },
  ];

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
                  onClick={openBookingModal}
                  className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer"
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

      {/* Stacking Cards Section */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-sky-700">
              Clear pricing, built around your channels
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              AI chatbot plans
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
              Compare platform plans and see the setup and recurring costs up
              front.
            </p>
          </div>

          <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-6 xl:gap-6">
            {chatbotPlans.map((plan, index) => (
              <motion.article
                key={plan.name}
                initial={{
                  opacity: 0,
                  y: prefersReducedMotion ? 0 : 18,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.45,
                  delay: prefersReducedMotion
                    ? 0
                    : Math.min(index * 0.06, 0.24),
                  ease: "easeOut",
                }}
                className={`group relative flex h-full min-h-[600px] flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl md:col-span-1 xl:col-span-2 ${
                  plan.badge
                    ? "border-sky-300 ring-1 ring-sky-100"
                    : "border-slate-200 hover:border-sky-300"
                } ${
                  index === 3
                    ? "xl:col-start-2"
                    : index === 4
                      ? "md:col-start-2 xl:col-start-4"
                      : ""
                }`}
              >
                <div className="h-1 w-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-100" />
                {plan.badge && (
                  <div className="bg-sky-600 px-6 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-white">
                    {plan.badge}
                  </div>
                )}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                      <plan.icon
                        className="h-5 w-5"
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.14em] text-sky-700">
                        {plan.category}
                      </p>
                      <h3 className="min-h-14 text-xl font-bold leading-7 text-slate-900">
                        {plan.name}
                      </h3>
                      <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">
                        {plan.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative mt-6 grid grid-cols-[minmax(0,1fr)_2rem_minmax(0,1fr)] items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-3 sm:gap-3 sm:p-4">
                    {plan.price === "Custom" ? (
                      <div className="col-span-3 rounded-xl border border-slate-200/80 bg-white px-4 py-4">
                        <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 sm:text-[11px]">
                          Custom pricing
                        </div>
                        <div className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                          Tailored quote
                        </div>
                        <div className="mt-1 text-xs leading-5 text-slate-500">
                          Integration and ongoing fees set to your requirements
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="min-w-0 rounded-xl border border-slate-200/80 bg-white px-3 py-3 sm:px-4">
                          <div className="mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500 sm:text-[11px]">
                            One-time setup
                          </div>
                          <div className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                            {plan.setupPrice}
                          </div>
                          <div className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                            Integration
                          </div>
                        </div>
                        <span className="z-10 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-sky-700 shadow-sm">
                          <Plus
                            className="h-4 w-4"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        </span>
                        <div className="min-w-0 rounded-xl border border-slate-200/80 bg-white px-3 py-3 sm:px-4">
                          <div className="mb-1.5 text-[10px] font-bold uppercase leading-4 tracking-[0.12em] text-slate-500 sm:text-[11px]">
                            Recurring fee
                          </div>
                          <div className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                            {plan.price}
                          </div>
                          <div className="mt-1 text-[11px] leading-4 text-slate-500 sm:text-xs">
                            {plan.priceDetail}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <p className="mt-3 text-xs leading-5 text-slate-500">
                    {plan.price === "Custom"
                      ? "We’ll confirm the integration and ongoing costs with you."
                      : "Setup is charged once. The recurring fee is billed monthly."}
                  </p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-4 text-sm">
                    <span className="text-slate-500">
                      {plan.price === "Custom"
                        ? "Estimated pricing"
                        : "First 12 months"}
                      {plan.price !== "Custom" && (
                        <span className="text-xs"> (at listed rates)</span>
                      )}
                    </span>
                    <span className="shrink-0 font-bold text-slate-900">
                      {getFirstYearEstimate(plan.setupPrice, plan.price)}
                    </span>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {plan.setupCheckoutUrl ? (
                      <>
                        <a
                          href={plan.setupCheckoutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open payment link for ${plan.name}`}
                          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-sky-600 px-3 py-3 text-center text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        >
                          Buy now
                        </a>
                        <button
                          type="button"
                          onClick={openBookingModal}
                          aria-label={`Book a consultation for ${plan.name}`}
                          className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-slate-300 px-3 py-3 text-center text-sm font-bold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                        >
                          Book a consultation
                        </button>
                      </>
                    ) : (
                      <button
                        type="button"
                        onClick={openBookingModal}
                        aria-label={`${plan.buttonLabel || "Buy Now"}: ${plan.name}`}
                        className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-sky-600 px-3 py-3 text-center text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
                      >
                        {plan.buttonLabel || "Book a Consultation"}
                      </button>
                    )}
                    <a
                      href={`#${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-features`}
                      aria-label={`View included features for ${plan.name}`}
                      className={`group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-3 py-3 text-center text-sm font-bold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 ${plan.setupCheckoutUrl ? "sm:col-span-2" : ""}`}
                    >
                      See included features
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1 border-t border-slate-200 bg-slate-50/70 px-6 py-6 sm:px-7">
                  <div
                    id={`${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-features`}
                    className="mb-4 flex scroll-mt-28 items-center justify-between gap-3"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      What&apos;s included
                    </p>
                    <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-slate-500 ring-1 ring-slate-200">
                      {plan.features.length} features
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                          <Check
                            className="h-3.5 w-3.5"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>

          <aside className="mt-10 flex flex-col gap-5 rounded-2xl border border-sky-100 bg-gradient-to-r from-sky-50 via-white to-cyan-50 p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-sky-700 shadow-sm ring-1 ring-sky-100">
                <CircleHelp className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                  Not sure which plan fits?
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Tell us about your channels and goals. We’ll help you choose
                  the right setup.
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={openBookingModal}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-sky-500 hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Get plan guidance
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </aside>

          <div className="hidden">
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

                    <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                      <div>
                        <span className="text-5xl md:text-7xl font-bold text-slate-700">
                          $600
                        </span>
                        <span className="text-xl text-slate-600 ml-3">
                          One Time
                        </span>
                      </div>
                      <div>
                        <span className="text-4xl md:text-5xl font-bold text-slate-700">
                          $97
                        </span>
                        <span className="text-xl text-slate-600 ml-3">
                          Per Month
                        </span>
                      </div>
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

                    <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                      <div>
                        <span className="text-5xl md:text-7xl font-bold text-slate-700">
                          $600
                        </span>
                        <span className="text-xl text-slate-600 ml-3">
                          One Time
                        </span>
                      </div>
                      <div>
                        <span className="text-4xl md:text-5xl font-bold text-slate-700">
                          $97
                        </span>
                        <span className="text-xl text-slate-600 ml-3">
                          Per Month
                        </span>
                      </div>
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

                    <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
                      <div>
                        <span className="text-5xl md:text-7xl font-bold text-slate-700">
                          $600
                        </span>
                        <span className="text-xl text-slate-600 ml-3">
                          One Time
                        </span>
                      </div>
                      <div>
                        <span className="text-4xl md:text-5xl font-bold text-slate-700">
                          $97
                        </span>
                        <span className="text-xl text-slate-600 ml-3">
                          Per Month
                        </span>
                      </div>
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
