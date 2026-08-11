import { Link } from "react-router-dom";

const serviceGroups = [
  {
    title: "Digital Marketing & Growth",
    description:
      "Build a connected customer-acquisition system spanning campaigns, lead capture, websites, CRM, follow-up, and conversion.",
    services: [
      {
        title: "AI Digital Marketing & Business Promotion",
        description:
          "Generate leads and improve campaigns through audience targeting, personalized communication, campaign automation, and performance analytics.",
        path: "/services/ai-business-promotion",
      },
      {
        title: "Conversion-focused Website Builder",
        description:
          "Create websites, landing pages, and offer flows designed to capture interest and support conversion.",
        path: "/products/website-builder",
      },
      {
        title: "ED-CRM & Lead Management",
        description:
          "Connect lead capture, pipelines, customer communication, automated follow-up, and sales reporting in one platform.",
        path: "/products/edcrm",
      },
      {
        title: "WhatsApp Customer Engagement",
        description:
          "Capture, nurture, and support leads through automated and personalized WhatsApp customer journeys.",
        path: "https://www.eurodigital.marketing/",
      },
    ],
  },
  {
    title: "AI-powered Customer Engagement",
    description:
      "Use AI to respond faster, maintain consistent conversations, qualify leads, and support customers across voice and messaging channels.",
    services: [
      {
        title: "AI Voice Agent Talk Time",
        description:
          "Automate sales, support, appointment booking, qualification, and customer follow-up through natural voice conversations.",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "AI Automated Chatbots",
        description:
          "Provide 24/7 support, answer common questions, qualify leads, and automate engagement on websites and messaging channels.",
        path: "/services/ai-automated-chatbot",
      },
      {
        title: "Emotion AI",
        description:
          "Use customer tone and intent to support more responsive, personalized engagement and follow-up.",
        path: "/products/emotionai",
      },
    ],
  },
  {
    title: "Business Automation",
    description:
      "Strengthen marketing and customer workflows by reducing repetitive work and connecting existing business systems.",
    services: [
      {
        title: "AI Business Automation",
        description:
          "Automate repetitive processes and connected workflows so teams can focus on customer acquisition and growth.",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI Add-on Services",
        description:
          "Add modular AI capabilities to the tools and platforms already used by your business.",
        path: "/services/ai-addon-services",
      },
      {
        title: "Industry-specific AI",
        description:
          "Apply practical automation and customer-engagement systems to the needs of specific industries.",
        path: "/services/industry-specific",
      },
    ],
  },
];

function Services() {
  return (
    <section className="bg-gradient-to-b from-white to-cyan-50/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Customer acquisition, engagement, and conversion
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-800 md:text-5xl lg:text-6xl">
            Digital Marketing Services Powered by AI
          </h1>
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            EuroDigital connects digital marketing, lead generation, customer
            acquisition, automated follow-up, conversion-focused websites, CRM,
            and business automation into one coherent growth system. AI supports
            that system by helping teams respond faster and engage leads more
            consistently.
          </p>
        </header>

        <div className="mt-20 space-y-20">
          {serviceGroups.map((group) => (
            <section key={group.title} aria-labelledby={group.title.replaceAll(" ", "-").toLowerCase()}>
              <div className="mb-8 max-w-3xl">
                <h2
                  id={group.title.replaceAll(" ", "-").toLowerCase()}
                  className="mb-3 text-3xl font-bold text-slate-800 md:text-4xl"
                >
                  {group.title}
                </h2>
                <p className="text-lg leading-7 text-slate-600">{group.description}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => {
                  const isExternal = service.path.startsWith("http");
                  const className =
                    "group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-transform hover:-translate-y-1";
                  const content = (
                    <>
                      <h3 className="mb-4 text-2xl font-semibold text-slate-800 group-hover:text-blue-700">
                        {service.title}
                      </h3>
                      <p className="mb-6 leading-7 text-slate-600">{service.description}</p>
                      <span className="font-semibold text-blue-700">
                        Learn more about {service.title}
                      </span>
                    </>
                  );

                  return isExternal ? (
                    <a
                      key={service.title}
                      href={service.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link key={service.title} to={service.path} className={className}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
