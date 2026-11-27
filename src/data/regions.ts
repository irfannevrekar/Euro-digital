export type RegionService = {
  title: string;
  description: string;
  path: string;
};

export type RegionHighlight = {
  title: string;
  description: string;
};

export type RegionFAQ = {
  question: string;
  answer: string;
};

export type Region = {
  slug: string;
  path: string;
  name: string;
  heading: string;
  intro: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  servicesHeading: string;
  services: RegionService[];
  highlightsHeading: string;
  highlights: RegionHighlight[];
  industries: string[];
  faqs: RegionFAQ[];
};

export const regions: Region[] = [
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
    servicesHeading: "AI automation services in Dubai",
    services: [
      {
        title: "AI Business Automation",
        description:
          "As an AI business automation company in Dubai, we build AI agents that handle lead follow-up, data entry, approvals and after-sales tasks on top of your existing CRM or ERP.",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI Chatbot Development",
        description:
          "AI chatbots for your website, WhatsApp and social channels that answer enquiries, qualify leads and book appointments for Dubai customers around the clock.",
        path: "/services/ai-automated-chatbot",
      },
      {
        title: "AI Voice Agents",
        description:
          "AI voice agents that answer, qualify and follow up calls for Dubai sales and support teams, with talk time that scales with your call volume.",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "AI Business Promotion",
        description:
          "AI-produced ads and campaigns that help Dubai brands promote offers quickly, without a large team, big budget or production crew.",
        path: "/services/ai-business-promotion",
      },
      {
        title: "Custom AI Add-ons",
        description:
          "Custom AI development for the tools you already run, adding intelligent follow-ups, reporting and decision support to your existing workflows.",
        path: "/services/ai-addon-services",
      },
      {
        title: "Industry-Specific AI",
        description:
          "Solutions shaped for the way your sector works, from real estate and healthcare to retail, hospitality and professional services.",
        path: "/services/industry-specific",
      },
    ],
    highlightsHeading: "Why Dubai businesses choose EuroDigital",
    highlights: [
      {
        title: "A UAE-based team",
        description:
          "We are based in Abu Dhabi and work with businesses across Dubai and the wider UAE, so planning, rollout and support stay close to you.",
      },
      {
        title: "Built on your existing systems",
        description:
          "We add AI to the CRM, ERP and messaging tools you already rely on instead of asking you to replace them.",
      },
      {
        title: "One partner, end to end",
        description:
          "Marketing, customer conversations and internal processes can be automated together, with one team responsible for the whole journey.",
      },
      {
        title: "ISO 9001 and ICV certified",
        description:
          "Our quality management and in-country value certifications give Dubai organisations confidence in how we deliver.",
      },
    ],
    industries: [
      "Real estate",
      "Healthcare",
      "Retail and e-commerce",
      "Hospitality and restaurants",
      "Travel agencies",
      "Logistics",
      "Education",
      "Professional services",
    ],
    faqs: [
      {
        question: "What does an AI automation company in Dubai do?",
        answer:
          "We find repetitive work in your sales, support and operations, then build AI agents, chatbots and voice agents to handle it. Typical examples are answering enquiries, qualifying leads, booking appointments and following up with customers.",
      },
      {
        question: "Can you work with the software we already use?",
        answer:
          "Yes. Our AI business automation is designed to sit on top of your existing CRM, ERP, website and messaging channels, so you keep the systems your team knows.",
      },
      {
        question: "Do you offer AI chatbot and AI voice agent development in Dubai?",
        answer:
          "Yes. We build AI chatbots for websites, WhatsApp and social channels, and AI voice agents for inbound and outbound calls, both configured around your business.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a consultation. We will review the processes you want to improve, suggest a sensible first step and explain how the solution would be built and supported.",
      },
    ],
  },
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
    servicesHeading: "AI automation services in Abu Dhabi",
    services: [
      {
        title: "AI Business Automation",
        description:
          "Business automation services for Abu Dhabi companies: AI agents that take care of lead follow-up, data entry, approvals and after-sales work on top of your existing systems.",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI Automated Chatbot",
        description:
          "AI chatbots on your website, WhatsApp and social channels that answer questions, capture leads and book appointments at any hour.",
        path: "/services/ai-automated-chatbot",
      },
      {
        title: "AI Agent Talk Time",
        description:
          "AI voice agents for inbound and outbound calls, so enquiries, qualification and follow-ups are covered even when your team is busy.",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "AI Business Promotion",
        description:
          "Professional-quality AI ads and campaigns that help Abu Dhabi businesses promote their services quickly and affordably.",
        path: "/services/ai-business-promotion",
      },
      {
        title: "AI Add-on Services",
        description:
          "Tailor-made AI add-ons for the tools you already run, bringing smarter follow-ups and decision support into daily operations.",
        path: "/services/ai-addon-services",
      },
      {
        title: "Industry-Specific AI",
        description:
          "AI solutions designed around your industry, whether you run a clinic, an agency, a restaurant or a logistics operation.",
        path: "/services/industry-specific",
      },
    ],
    highlightsHeading: "Why Abu Dhabi businesses choose EuroDigital",
    highlights: [
      {
        title: "Headquartered in Abu Dhabi",
        description:
          "Our office is in Mussafah, Abu Dhabi, so we can meet your team, understand your processes and support you locally.",
      },
      {
        title: "Built on your existing systems",
        description:
          "We connect AI to the CRM, ERP and communication tools you already use, without a disruptive replacement project.",
      },
      {
        title: "One partner, end to end",
        description:
          "From marketing and customer engagement to internal operations, one team plans, builds and supports your automation.",
      },
      {
        title: "ISO 9001 and ICV certified",
        description:
          "Our certifications reflect a consistent, quality-focused approach to delivering projects in the UAE.",
      },
    ],
    industries: [
      "Real estate",
      "Healthcare",
      "Law firms",
      "Retail and e-commerce",
      "Restaurants",
      "Logistics",
      "Education",
      "Travel agencies",
    ],
    faqs: [
      {
        question: "Where is EuroDigital based?",
        answer:
          "Euro Digital Technologies LLC is based at Building No. C-201, Office No. M-03, Mussafah Shabiya MBZ-12, Abu Dhabi, UAE.",
      },
      {
        question: "What business automation services do you provide in Abu Dhabi?",
        answer:
          "We provide AI business automation, AI chatbots, AI voice agents, AI add-ons for existing systems and industry-specific AI solutions, along with AI-powered business promotion.",
      },
      {
        question: "Do we need to replace our current software?",
        answer:
          "No. We build automation on top of the tools you already use, so your team can keep working in familiar systems while repetitive tasks are handled automatically.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a consultation. We will look at the work your team repeats most often and recommend a practical first automation.",
      },
    ],
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
    servicesHeading: "AI automation solutions in India",
    services: [
      {
        title: "Business Process Automation",
        description:
          "AI workflow automation for enterprises and growing businesses in India, covering lead follow-up, data entry, approvals and after-sales processes.",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI Voice Agents and AI Receptionist",
        description:
          "AI voice agent development for phone answering, appointment booking, lead qualification and outbound calling, so every call gets a response.",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "WhatsApp AI Chatbot Development",
        description:
          "AI chatbots for WhatsApp, websites and social channels that handle customer support, capture leads and answer questions 24/7.",
        path: "/services/ai-automated-chatbot",
      },
      {
        title: "AI Integration Services",
        description:
          "Custom AI automation development that connects with your existing CRM, ERP and business tools instead of replacing them.",
        path: "/services/ai-addon-services",
      },
      {
        title: "AI Business Promotion",
        description:
          "AI-produced ads and campaigns that help Indian businesses promote their products and services quickly and affordably.",
        path: "/services/ai-business-promotion",
      },
      {
        title: "Industry-Specific AI",
        description:
          "AI solutions for real estate, healthcare, law firms, e-commerce, restaurants, logistics, education and travel businesses.",
        path: "/services/industry-specific",
      },
    ],
    highlightsHeading: "Why businesses in India choose EuroDigital",
    highlights: [
      {
        title: "Consulting through to implementation",
        description:
          "As an AI consulting and implementation partner, we help you choose the right first project, build it and support it after launch.",
      },
      {
        title: "Built on your existing systems",
        description:
          "We integrate AI with the tools your teams already use, so adoption is faster and nothing important gets lost.",
      },
      {
        title: "Regional language voice support",
        description:
          "Our Emotion AI voice widget supports natural conversations in Hindi, Gujarati, Marathi and English.",
      },
      {
        title: "ISO 9001 and ICV certified",
        description:
          "Our certifications reflect a consistent, quality-focused approach to every automation project we deliver.",
      },
    ],
    industries: [
      "Real estate",
      "Healthcare",
      "Law firms",
      "E-commerce",
      "Restaurants",
      "Logistics",
      "Education",
      "Travel agencies",
    ],
    faqs: [
      {
        question: "Do you provide AI automation services in India?",
        answer:
          "Yes. We work with businesses in India on business process automation, AI workflow automation, AI voice agents, WhatsApp AI chatbots and AI integration projects.",
      },
      {
        question: "Can you build an AI receptionist or phone answering service?",
        answer:
          "Yes. Our AI voice agents can answer calls, book appointments, qualify leads and handle customer support calls, with talk time that scales with your call volume.",
      },
      {
        question: "Do your AI agents support Indian languages?",
        answer:
          "Our Emotion AI voice widget supports Hindi, Gujarati, Marathi and English with natural regional accents.",
      },
      {
        question: "How do we get started?",
        answer:
          "Book a consultation. We will review your processes, recommend where AI can help first and outline how the solution would be implemented.",
      },
    ],
  },
];

export function getRegion(slug: string) {
  return regions.find((region) => region.slug === slug);
}
