export type SolutionService = {
  title: string;
  description: string;
  path: string;
  external?: boolean;
};

export type SolutionGroup = {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  outcomes: string[];
  services: SolutionService[];
};

export const solutionGroups: SolutionGroup[] = [
  {
    slug: "digital-marketing-and-promotions",
    title: "Digital Marketing and Promotions",
    shortDescription:
      "Bring campaigns, websites, CRM, and WhatsApp follow-up into one practical customer-acquisition system.",
    intro:
      "Good marketing should make it easier for people to find you, understand your offer, and take the next step. We connect the tools and day-to-day work behind that journey, from the first campaign click to sales follow-up.",
    outcomes: [
      "Generate and capture better-qualified leads",
      "Follow up consistently without adding more admin",
      "See which campaigns and conversations lead to sales",
    ],
    services: [
      {
        title: "AI Business Promotion",
        description:
          "No big team, no big budget. No models, no voiceover artists, no production crew. Just professional-quality ads, made fast, made affordable, made to promote your business.",
        path: "/services/ai-business-promotion",
      },
      {
        title: "AI Website Builder",
        description:
          "Whether you need a digital presence from scratch or tools to strengthen the one you have, we build professional-quality corporate websites and apps that let your customers connect with your business easily and build your credibility while they do.",
        path: "/products/website-builder",
      },
      {
        title: "ED-CRM",
        description:
          "Leads flow in from every channel into one system. Our bots pre-qualify and nurture them, so your sales team's only job is to close the deal. Nothing missed, nothing waiting, 24/7.",
        path: "/products/edcrm",
      },
      {
        title: "WhatsApp Business API",
        description:
          "Turn WhatsApp into a full business workflow: a storefront, a payment channel, and a follow-up system, all running on intelligent automation.",
        path: "https://www.eurodigital.marketing/",
        external: true,
      },
    ],
  },
  {
    slug: "ai-customer-engagement",
    title: "AI Customer Engagement",
    shortDescription:
      "Give customers faster, more consistent help across phone, chat, and messaging channels.",
    intro:
      "Customers should not have to wait for a simple answer or repeat the same information across channels. These tools handle routine conversations, qualify enquiries, and pass the right cases to your team with useful context.",
    outcomes: [
      "Respond outside normal business hours",
      "Give routine enquiries a quick, consistent answer",
      "Let your team focus on conversations that need a person",
    ],
    services: [
      {
        title: "AI Agent Talk Time",
        description:
          "Uninterrupted voice agents for every part of your business, handling inquiries, lead generation, and after-sales calls, so your talk time is always covered.",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "AI Automated Chatbot",
        description:
          "A team of agents live on your website and social channels, around the clock, not just for capturing leads, but for after-sales service and every customer conversation in between.",
        path: "/services/ai-automated-chatbot",
      },
      {
        title: "Emotion AI",
        description:
          "Every conversation adjusts to your customer's tone and sentiment, whether personal, professional, or human, every time.",
        path: "/products/emotionai",
      },
    ],
  },
  {
    slug: "ai-business-automation",
    title: "AI Business Automation",
    shortDescription:
      "Reduce repetitive work and connect the processes your team relies on every day.",
    intro:
      "Automation is most useful when it removes a real bottleneck. We start with the work your team repeats, then connect the right systems so information moves reliably and people can spend more time on decisions and customers.",
    outcomes: [
      "Cut down on copying, checking, and repetitive data entry",
      "Keep hand-offs between teams clear and traceable",
      "Add automation to existing systems without replacing everything",
    ],
    services: [
      {
        title: "AI Business Automation",
        description:
          "We build AI agents specific to your industry for lead follow-up, lead generation, after-sales service, or any business process you want automated. It's not just automation, it's an intelligence upgrade to the ERP and systems you already run, adding AI capability on top of what you have, so repetitive work gets done without you having to think about it.",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI Add-on Services",
        description:
          "Tailor-made add-ons built on top of your existing systems, bringing intelligence, not just automation, into your operations. Decisions get made, follow-ups get handled, and business runs even while you sleep.",
        path: "/services/ai-addon-services",
      },
      {
        title: "Industry-Specific AI",
        description:
          "We don't give every business the same solution. Every industry works differently, so every solution is tailor-made to fit.",
        path: "/services/industry-specific",
      },
    ],
  },
];

export function getSolutionGroup(slug: string) {
  return solutionGroups.find((group) => group.slug === slug);
}
