export type SeoEntry = {
  title: string;
  description: string;
  keywords?: string;
};

export type Region = {
  slug: string;
  path: string;
  name: string;
  heading: string;
  intro: string;
  seo: SeoEntry;
};

export type RegionalService = {
  slug: string;
  title: string;
  seo: (regionName: string) => SeoEntry;
};

export const PRESENCE_PATH = "/our-presence";

export const presenceSeo: SeoEntry = {
  title: "Our Presence | AI Automation in Abu Dhabi, Dubai & India - Euro Digi",
  description:
    "Euro Digi provides AI automation services for businesses in Abu Dhabi, Dubai and India. Choose your region to explore our AI business automation, chatbot, voice agent and promotion services.",
  keywords:
    "ai automation company in abu dhabi, ai automation company in dubai, AI Automation Agency in India, ai automation services in uae",
};

export const regions: Region[] = [
  {
    slug: "abu-dhabi",
    path: "/ai-automation-company-abu-dhabi",
    name: "Abu Dhabi",
    heading: "AI Automation Company in Abu Dhabi",
    intro:
      "EuroDigital is an AI automation company headquartered in Abu Dhabi. We help local businesses automate customer conversations, lead follow-up and internal processes with AI agents, chatbots and voice agents that fit the way their teams already work.",
    seo: {
      title: "AI Automation Company in Abu Dhabi | Business Automation Services Abu Dhabi - Euro Digi",
      description:
        "Euro Digi is an AI automation company in Abu Dhabi providing AI business automation, AI chatbots, AI voice agents and business automation services for Abu Dhabi businesses.",
      keywords:
        "ai automation company in abu dhabi, Business Automation Services Abu Dhabi, ai automation services in abu dhabi, ai business automation company in abu dhabi",
    },
  },
  {
    slug: "dubai",
    path: "/ai-automation-company-dubai",
    name: "Dubai",
    heading: "AI Automation Company in Dubai",
    intro:
      "EuroDigital is an AI automation agency helping Dubai businesses automate customer conversations, lead follow-up and day-to-day operations. We build AI agents, chatbots and voice agents around the systems you already use, then support them as your business grows.",
    seo: {
      title: "AI Automation Company in Dubai | AI Automation Agency Dubai - Euro Digi",
      description:
        "Euro Digi is an AI automation company in Dubai offering AI business automation, AI chatbot development, AI voice agents and custom AI development services for Dubai businesses.",
      keywords:
        "ai automation company in dubai, AI Automation Agency Dubai, AI Development Company Dubai, ai automation services in dubai, ai business automation company in dubai, AI Chatbot Development Dubai, AI Voice Agent Company Dubai",
    },
  },
  {
    slug: "india",
    path: "/ai-automation-company-india",
    name: "India",
    heading: "AI Automation Agency in India",
    intro:
      "EuroDigital helps businesses in India automate business processes, customer conversations and workflows with AI. From AI voice agents and WhatsApp chatbots to custom AI integrations, we plan, build and support automation around the systems you already use.",
    seo: {
      title: "AI Automation Agency in India | AI Automation Solutions Provider India - Euro Digi",
      description:
        "Euro Digi is an AI automation agency serving India with business process automation, AI workflow automation, AI voice agents, WhatsApp AI chatbots and AI integration services.",
      keywords:
        "AI Automation Agency in India, AI Automation Solutions Provider India, Business Process Automation India, AI Workflow Automation India, Custom AI Automation Development India, AI Integration Services India, Enterprise AI Automation India, AI Implementation Company India, AI Voice Agent Development India, WhatsApp AI Chatbot Development India, AI Consulting Company India",
    },
  },
];

export const regionalServices: RegionalService[] = [
  {
    slug: "ai-business-automation",
    title: "AI Business Automation",
    seo: (name) => ({
      title: `AI Business Automation Services in ${name} | Euro Digi`,
      description: `Euro Digi provides AI business automation services in ${name} to automate workflows, reduce repetitive work and add AI to the systems your business already uses.`,
      keywords: `ai business automation services in ${name.toLowerCase()}, ai business automation company in ${name.toLowerCase()}, ai automation services in ${name.toLowerCase()}, business process automation ${name.toLowerCase()}`,
    }),
  },
  {
    slug: "ai-business-promotion",
    title: "AI Business Promotion",
    seo: (name) => ({
      title: `AI Business Promotion Services in ${name} | Euro Digi`,
      description: `Get AI business promotion services in ${name} from Euro Digi: professional-quality AI ads and campaigns that grow your brand visibility and reach, quickly and affordably.`,
      keywords: `ai business promotion services in ${name.toLowerCase()}, ai business promotion company in ${name.toLowerCase()}, ai digital marketing services in ${name.toLowerCase()}`,
    }),
  },
  {
    slug: "ai-agent-talk-time",
    title: "AI Agent Talk Time",
    seo: (name) => ({
      title: `AI Agent Talk Time ${name} | AI Voice Agents in ${name} - Euro Digi`,
      description: `AI voice agents in ${name} with flexible AI agent talk time for inbound calls, lead qualification, appointment booking and customer follow-up.`,
      keywords: `ai agent talk time ${name.toLowerCase()}, ai voice agents in ${name.toLowerCase()}, ai calling agents in ${name.toLowerCase()}, ai receptionist ${name.toLowerCase()}`,
    }),
  },
  {
    slug: "ai-automated-chatbot",
    title: "AI Automated Chatbot",
    seo: (name) => ({
      title: `AI Chatbot Services in ${name} | AI Chatbot Company ${name} - Euro Digi`,
      description: `AI chatbot services in ${name} for websites, WhatsApp and social channels to automate customer support, capture leads and answer enquiries 24/7.`,
      keywords: `ai chatbot services in ${name.toLowerCase()}, ai chatbot company in ${name.toLowerCase()}, whatsapp ai chatbot ${name.toLowerCase()}, ai chatbot development ${name.toLowerCase()}`,
    }),
  },
  {
    slug: "ai-addon-services",
    title: "AI Add-on Services",
    seo: (name) => ({
      title: `AI Add-on Services in ${name} | Custom AI Integration - Euro Digi`,
      description: `Custom AI add-ons and integration services in ${name} that bring intelligent follow-ups, reporting and decision support to the tools your business already runs.`,
      keywords: `ai add-on services ${name.toLowerCase()}, ai integration services ${name.toLowerCase()}, custom ai development ${name.toLowerCase()}`,
    }),
  },
  {
    slug: "industry-specific",
    title: "Industry Specific AI Use Cases",
    seo: (name) => ({
      title: `Industry-Specific AI Solutions in ${name} | Euro Digi`,
      description: `Industry-specific AI solutions in ${name} for real estate, healthcare, consultancy, retail, logistics and more, tailored to how your business works.`,
      keywords: `industry specific ai ${name.toLowerCase()}, ai solutions for real estate ${name.toLowerCase()}, ai solutions for healthcare ${name.toLowerCase()}, ai automation for business ${name.toLowerCase()}`,
    }),
  },
];

/** Region-page sections, following the site's existing solution categories. */
export const regionalServiceGroups: { title: string; serviceSlugs: string[] }[] = [
  {
    title: "AI Business Automation",
    serviceSlugs: ["ai-business-automation", "ai-addon-services", "industry-specific"],
  },
  {
    title: "AI Customer Engagement",
    serviceSlugs: ["ai-agent-talk-time", "ai-automated-chatbot"],
  },
  {
    title: "Digital Marketing and Promotions",
    serviceSlugs: ["ai-business-promotion"],
  },
];

export function regionalServicePath(serviceSlug: string, regionSlug: string) {
  return `/services/${serviceSlug}/${regionSlug}`;
}

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}

/** Every regional URL that should be prerendered and listed in the sitemap. */
export const regionalPaths: string[] = [
  PRESENCE_PATH,
  ...regions.map((region) => region.path),
  ...regions.flatMap((region) =>
    regionalServices.map((service) => regionalServicePath(service.slug, region.slug)),
  ),
];

/** SEO entries for the presence page, region pages and regional service pages, keyed by path. */
export const regionalSeo: Record<string, SeoEntry> = {
  [PRESENCE_PATH]: presenceSeo,
  ...Object.fromEntries(regions.map((region) => [region.path, region.seo])),
  ...Object.fromEntries(
    regions.flatMap((region) =>
      regionalServices.map((service) => [
        regionalServicePath(service.slug, region.slug),
        service.seo(region.name),
      ]),
    ),
  ),
};
