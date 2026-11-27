import { useLocation } from "react-router-dom";
import { regions } from "../data/regions";

const SITE_URL = "https://www.eurodigi.ai";

type PageSeo = {
  title: string;
  description: string;
  keywords?: string;
  robots?: string;
  author?: string;
  image?: string;
  siteName?: string;
  locale?: string;
};

const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: "Best AI Automation Company in UAE for Enterprise | AI Business Solutions Company UAE",
    description:
      "Euro Digi is one of the leading AI Automation Company in UAE for Small Business & Enterprises. We provide AI Business Solutions, Automation & consulting services in UAE.",
    keywords:
      "Best AI Automation Company in UAE, AI Automation Company for Enterprises UAE, AI Business Solutions Company UAE, AI Automation Services for Small Businesses UAE, Affordable AI Automation Services UAE, AI Automation Consultants UAE, Custom AI Agent Development UAE",
    robots: "index, follow",
    author: "Euro Digi",
    image: `${SITE_URL}/logo/euro-digital-navbar.png`,
    siteName: "Euro Digi",
    locale: "en_UAE",
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
    title: "AI Business Automation Services in UAE | AI Business Automation Solutions in UAE - Euro Digi",
    description:
      "Get advanced AI business automation solutions in UAE to automate workflows, enhance efficiency and optimize operations with intelligent AI automation services.",
    keywords:
      "ai business automation services in uae, AI Business Automation solutions in uae, AI Automation services in uae",
  },
  "/services/ai-business-promotion": {
    title: "AI Business Promotion Company in UAE | AI Business Promotion Services in UAE",
    description:
      "Get expert AI business promotion services in UAE from a trusted AI business promotion company and service provider in UAE to grow your brand visibility and reach.",
    keywords:
      "ai business promotion services in uae, ai business promotion company in uae, ai business promotion service provider in uae",
  },
  "/services/ai-agent-talk-time": {
    title: "AI Agent Talk Time UAE | AI Voice Chat, Chatbot, AI Calling Talktime in UAE",
    description:
      "Get AI voice agents in UAE with flexible AI agent talk time, AI chatbot talktime and AI calling talktime solutions to automate customer conversations and business calls.",
    keywords:
      "ai agent talk time uae, ai voice agents in uae, AI Chatbot Talktime in uae, AI Calling talktime in uae, AI Calling agents in uae",
  },
  "/services/ai-automated-chatbot": {
    title: "AI Chatbot Services UAE | AI Chatbot Company in UAE - Euro Digi",
    description:
      "AI chatbot services in UAE from a trusted AI chatbot company in UAE to automate customer support, improve engagement and deliver smarter customer interactions.",
    keywords:
      "AI Chatbot uae, ai chatbot services in uae, ai chatbot company in uae",
  },
  "/services/ai-addon-services": {
    title: "AI Add-on Services UAE | EuroDigital",
    description:
      "Enhance your existing business tools and platforms with flexible, scalable AI features and integrations from EuroDigital in the UAE.",
  },
  "/services/industry-specific": {
    title: "Industry-Specific AI UAE | EuroDigital",
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
  ...Object.fromEntries(regions.map((region) => [region.path, region.seo])),
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
  const image = seo.image ?? `${SITE_URL}/logo/euro-digital-black-white.png`;

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      <meta
        name="robots"
        content={isLogin ? "noindex, nofollow" : seo.robots ?? "index, follow, max-image-preview:large, max-snippet:-1"}
      />
      {seo.author && <meta name="author" content={seo.author} />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={image} />
      {seo.siteName && <meta property="og:site_name" content={seo.siteName} />}
      {seo.locale && <meta property="og:locale" content={seo.locale} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      {pathname === "/services/ai-business-promotion" && (
        <script type="application/ld+json">{JSON.stringify(marketingServiceSchema)}</script>
      )}
    </>
  );
}

export default Seo;
