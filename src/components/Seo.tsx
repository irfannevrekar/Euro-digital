import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.eurodigi.ai";

type PageSeo = {
  title: string;
  description: string;
};

const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "Digital Marketing & AI Automation Company UAE | EuroDigital",
    description:
      "EuroDigital is a digital marketing and AI automation company in Abu Dhabi, UAE, providing lead generation, marketing automation, CRM, AI chatbots, website development, and business automation services.",
  },
  "/about": {
    title: "About EuroDigital | Digital Marketing & AI Automation Company UAE",
    description:
      "Learn about Euro Digital Technologies LLC, a digital marketing and AI automation company based in Abu Dhabi, UAE.",
  },
  "/contact": {
    title: "Contact EuroDigital | Digital Marketing & AI Automation UAE",
    description:
      "Contact EuroDigital in Abu Dhabi for digital marketing, lead generation, CRM, websites, AI agents, chatbots, and business automation services.",
  },
  "/services": {
    title: "Digital Marketing, Engagement & Automation Services | EuroDigital",
    description:
      "Explore EuroDigital services for digital marketing, lead generation, CRM, customer engagement, websites, and business automation in the UAE.",
  },
  "/ai-tools": {
    title: "AI Tools for Marketing, Sales & Customer Teams | EuroDigital",
    description:
      "Explore EuroDigital's AI Website Builder, ED-CRM, and Emotion AI tools for marketing, sales, and customer engagement teams.",
  },
  "/solutions/digital-marketing-and-promotions": {
    title: "Digital Marketing and Promotions Solutions | EuroDigital UAE",
    description:
      "Connect campaigns, websites, CRM, and WhatsApp follow-up with EuroDigital's digital marketing and promotions solutions.",
  },
  "/solutions/ai-customer-engagement": {
    title: "AI Customer Engagement Solutions | EuroDigital UAE",
    description:
      "Respond faster across phone, chat, and messaging with EuroDigital's AI customer engagement solutions.",
  },
  "/solutions/ai-business-automation": {
    title: "AI Business Automation Solutions | EuroDigital UAE",
    description:
      "Reduce repetitive work and connect day-to-day processes with EuroDigital's AI business automation solutions.",
  },
  "/services/ai-business-automation": {
    title: "AI Business Automation Services UAE | EuroDigital",
    description:
      "Automate repetitive business processes, customer workflows and operations with EuroDigital's AI business automation services in the UAE.",
  },
  "/services/ai-business-promotion": {
    title: "AI Business Promotion | EuroDigital UAE",
    description:
      "EuroDigital provides AI-powered digital marketing and business promotion services including marketing automation, personalized campaigns, content distribution, campaign optimization, and performance analytics.",
  },
  "/services/ai-agent-talk-time": {
    title: "AI Voice Agent Talk Time UAE | EuroDigital",
    description:
      "Add AI voice calling capacity for automated sales, support, appointment booking, qualification, and customer follow-up with EuroDigital.",
  },
  "/services/ai-automated-chatbot": {
    title: "AI Automated Chatbot Services UAE | EuroDigital",
    description:
      "Deploy AI chatbots for websites and messaging channels with 24/7 support, lead qualification, FAQs, and automated customer engagement.",
  },
  "/services/ai-addon-services": {
    title: "AI add-on Services UAE | EuroDigital",
    description:
      "Enhance your existing business tools and platforms with flexible, scalable AI features and integrations from EuroDigital in the UAE.",
  },
  "/services/industry-specific": {
    title: "Industry Specific AI Use Cases UAE | EuroDigital",
    description:
      "Explore practical, industry-specific AI solutions from EuroDigital for healthcare, real estate, retail, finance, hospitality, and other sectors.",
  },
  "/products/website-builder": {
    title: "AI Website Builder UAE | EuroDigital",
    description:
      "Build conversion-focused websites and sales funnels with EuroDigital's AI website builder for businesses in the UAE.",
  },
  "/products/edcrm": {
    title: "ED-CRM Sales & Marketing Platform | EuroDigital UAE",
    description:
      "Manage leads, pipelines, customer communication, marketing automation, and sales workflows with EuroDigital's ED-CRM platform.",
  },
  "/products/emotionai": {
    title: "Emotion AI Customer Intelligence | EuroDigital UAE",
    description:
      "Use Emotion AI from EuroDigital to understand customer sentiment and create more responsive, personalized engagement experiences.",
  },
  "/privacy": {
    title: "Privacy Policy | EuroDigital",
    description:
      "Read the EuroDigital privacy policy and learn how Euro Digital Technologies LLC handles personal information.",
  },
  "/terms": {
    title: "Terms and Conditions | EuroDigital",
    description:
      "Read the terms and conditions governing the use of EuroDigital services and website.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Euro Digital Technologies LLC",
  alternateName: "EuroDigital",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo/euro-digital-black-white.png`,
  description:
    "EuroDigital is a digital marketing and AI automation company based in Abu Dhabi, UAE. The company provides digital marketing, lead generation, marketing automation, CRM, website development, AI agents, chatbots, and business automation services.",
  telephone: "+971561874676",
  email: "support@eurodigital.site",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building No. C-201, Office No. M-03, Mussafah Shabiya MBZ-12",
    addressLocality: "Abu Dhabi",
    addressCountry: "AE",
  },
  sameAs: [
    "https://www.linkedin.com/company/euro-digital-technologies-llc/",
    "https://www.facebook.com/EuroDigitalUAE/",
    "https://x.com/eurodigitaluae",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@id": `${SITE_URL}/services/ai-business-promotion#service`,
    },
  },
};

const marketingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/services/ai-business-promotion#service`,
  name: "AI Business Promotion",
  serviceType: "Digital Marketing and Marketing Automation",
  description:
    "Digital marketing services for lead generation and conversion, supported by AI-powered campaign automation, audience targeting, personalized communication, marketing automation, CRM-connected follow-up, campaign optimization, and performance analytics.",
  provider: { "@id": `${SITE_URL}/#organization` },
  url: `${SITE_URL}/services/ai-business-promotion`,
};

function Seo() {
  const { pathname } = useLocation();
  const seo = pageSeo[pathname] ?? pageSeo["/"];
  const canonical = pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`;
  const isLogin = pathname === "/login";

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta
        name="robots"
        content={isLogin ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1"}
      />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE_URL}/logo/euro-digital-black-white.png`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {pathname === "/services/ai-business-promotion" && (
        <script type="application/ld+json">{JSON.stringify(marketingServiceSchema)}</script>
      )}
    </>
  );
}

export default Seo;
