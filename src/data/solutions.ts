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
        title: "AI Digital Marketing & Business Promotion",
        description:
          "Plan and run targeted campaigns, create relevant content, and use performance data to improve what happens next.",
        path: "/services/ai-business-promotion",
      },
      {
        title: "AI Website Builder",
        description:
          "Create landing pages and websites that explain the offer clearly, capture enquiries, and connect with your sales process.",
        path: "/products/website-builder",
      },
      {
        title: "ED-CRM",
        description:
          "Keep leads, conversations, follow-up tasks, and pipeline reporting together so opportunities do not get lost between tools.",
        path: "/products/edcrm",
      },
      {
        title: "WhatsApp Business API",
        description:
          "Handle enquiries, reminders, updates, and follow-up on the channel many customers already use every day.",
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
        title: "AI Voice Agent Talk Time",
        description:
          "Use natural voice conversations for appointment booking, lead qualification, reminders, support, and outbound follow-up.",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "AI Automated Chatbot",
        description:
          "Answer common questions, collect lead details, and guide customers on your website or messaging channels at any hour.",
        path: "/services/ai-automated-chatbot",
      },
      {
        title: "Emotion AI",
        description:
          "Use signals such as tone and intent to help customer conversations feel more relevant and better timed.",
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
          "Map repetitive processes and automate the steps that slow down operations, sales, and customer service.",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI add-on Services",
        description:
          "Add focused AI features to the software your business already uses instead of starting again with a new stack.",
        path: "/services/ai-addon-services",
      },
      {
        title: "Industry Specific AI Use Cases",
        description:
          "Apply automation to the workflows and customer journeys common in sectors such as real estate, healthcare, finance, and consulting.",
        path: "/services/industry-specific",
      },
    ],
  },
];

export function getSolutionGroup(slug: string) {
  return solutionGroups.find((group) => group.slug === slug);
}
