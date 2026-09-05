export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceFAQ {
  serviceId: string;
  faqs: FAQItem[];
  subtitle?: string;
}

export const serviceFAQs: ServiceFAQ[] = [
  {
    serviceId: "ai-business-automation",
    subtitle: "Common questions about removing repetitive work and connecting day-to-day business processes.",
    faqs: [
      {
        question: "What is AI Business Automation?",
        answer: "AI Business Automation uses artificial intelligence to automate routine tasks, optimize workflows, and improve decision-making across different business functions. It reduces manual work and helps companies operate faster and more efficiently."
      },
      {
        question: "How does AI automation help my business save time and money?",
        answer: "AI automation eliminates repetitive tasks, reduces human errors, and speeds up processes. This means your team can focus on high-value activities while the system handles routine operations, leading to significant time and cost savings across your organization."
      },
      {
        question: "Which business processes can be automated using AI?",
        answer: "AI can automate various business processes including lead capture and routing, customer support inquiries, data entry and processing, email responses, CRM updates, report generation, appointment scheduling, invoice processing, and inventory management. We analyze your specific workflows to identify the best automation opportunities."
      },
      {
        question: "Do I need technical expertise to use AI Business Automation?",
        answer: "No. We handle the technical setup, connect the system to your existing tools, and show your team how to use and manage the new workflow."
      },
      {
        question: "Is AI Business Automation secure and reliable?",
        answer: "Yes, our AI automation solutions are built with enterprise-grade security standards. We implement encryption, access controls, and regular security audits to protect your data. Our systems are reliable, scalable, and backed by continuous monitoring and support to ensure optimal performance."
      }
    ]
  },
  {
    serviceId: "ai-business-promotion",
    subtitle: "How we use automation and campaign data to support practical marketing work.",
    faqs: [
      {
        question: "What is AI Business Promotion?",
        answer: "AI Business Promotion uses artificial intelligence to create, optimize, and manage marketing campaigns across multiple channels. It analyzes customer behavior, predicts trends, and personalizes content to maximize engagement and conversions."
      },
      {
        question: "How can AI improve my marketing ROI?",
        answer: "AI can compare campaign, audience, timing, and content data more quickly than a manual review. Your team can use those findings to move budget toward what is working and test changes where performance is weak."
      },
      {
        question: "Can AI help with content creation?",
        answer: "Yes, our AI tools can generate social media posts, email content, ad copy, and marketing materials tailored to your brand voice and audience preferences. It saves time while maintaining quality and consistency across all your marketing channels."
      },
      {
        question: "How does AI personalize marketing campaigns?",
        answer: "AI analyzes customer data including browsing behavior, purchase history, and engagement patterns to create highly personalized marketing messages. It segments audiences intelligently and delivers the right message to the right person at the right time."
      },
      {
        question: "Will AI replace my marketing team?",
        answer: "No, AI enhances your marketing team's capabilities rather than replacing them. It handles data analysis, routine tasks, and optimization, freeing your team to focus on strategy, creativity, and building customer relationships. The best results come from combining human expertise with AI capabilities."
      }
    ]
  },
  {
    serviceId: "ai-automated-chatbot",
    subtitle: "How chatbots handle routine enquiries, collect lead details, and hand conversations to your team.",
    faqs: [
      {
        question: "What is an AI Automated Chatbot?",
        answer: "An AI Automated Chatbot answers common questions, collects information, and guides customers through routine tasks. It can work around the clock and pass complex or sensitive conversations to a person."
      },
      {
        question: "How natural do the AI conversations feel?",
        answer: "Our AI agents use advanced NLP technology to understand context, sentiment, and intent, making conversations feel natural and human-like. They can maintain context throughout long conversations and respond appropriately to various customer emotions and needs."
      },
      {
        question: "Can AI chatbots handle complex customer queries?",
        answer: "Yes. We configure the chatbot around your business information and the questions customers commonly ask. Complex or sensitive cases can be passed to a team member along with the conversation history."
      },
      {
        question: "What languages do your AI agents support?",
        answer: "Our AI agents support multiple languages including English, Spanish, French, German, Chinese, Japanese, and many more. This allows you to provide consistent customer support to a global audience without the need for multilingual staff."
      },
      {
        question: "How do AI agents improve over time?",
        answer: "Our AI agents use machine learning to continuously improve from every conversation. They learn from customer interactions, feedback, and outcomes to provide increasingly accurate and helpful responses. We also regularly update the models with new data and capabilities."
      }
    ]
  },
  {
    serviceId: "ai-agent-talk-time",
    subtitle: "What AI voice agents can handle, how calls are transferred, and where human oversight fits.",
    faqs: [
      {
        question: "What is an AI Voice Agent?",
        answer: "AI Voice Agents are intelligent systems that can conduct phone conversations using natural, human-like speech. They can handle incoming and outgoing calls, understand spoken language, and respond appropriately while maintaining a professional tone."
      },
      {
        question: "How realistic do AI voice agents sound?",
        answer: "Voice quality depends on the language, accent, script, and call conditions. We tune pace, pronunciation, and tone for the use case, and recommend being clear with callers that they are speaking with an automated agent."
      },
      {
        question: "What types of calls can AI voice agents handle?",
        answer: "AI voice agents can handle appointment scheduling, order tracking, customer inquiries, lead qualification, survey calls, payment reminders, and basic support issues. They can also escalate calls to human agents when needed for complex situations."
      },
      {
        question: "Can I customize the voice and personality?",
        answer: "Yes, you can customize the voice characteristics, accent, tone, and personality to match your brand identity. We work with you to create a voice agent that represents your company professionally and consistently."
      },
      {
        question: "What happens if the AI can't understand the caller?",
        answer: "The agent can ask the caller to repeat or clarify an answer. If it still cannot understand the request, or the issue falls outside its scope, it can route the call to a team member."
      }
    ]
  },
  {
    serviceId: "ai-addon-services",
    subtitle: "Ways to add a focused AI feature without replacing the systems your team already uses.",
    faqs: [
      {
        question: "What are AI add-on Services?",
        answer: "AI add-on Services are focused features that connect to tools your business already uses. They can add automation, analysis, or customer-facing functions without requiring a complete system replacement."
      },
      {
        question: "How easy is it to integrate AI add-ons?",
        answer: "Our add-ons are designed for easy integration using standard APIs and connectors. Most integrations can be completed within days, not months. We provide technical support throughout the integration process to ensure smooth implementation."
      },
      {
        question: "Can AI add-ons scale with my business?",
        answer: "Yes, our add-on services are built on cloud infrastructure that scales automatically with your business needs. Whether you're processing hundreds or millions of transactions, the system adjusts resources to maintain optimal performance."
      },
      {
        question: "What systems can AI add-ons integrate with?",
        answer: "Our add-ons can integrate with most popular business systems including CRM platforms (Salesforce, HubSpot), communication tools (Slack, Teams), e-commerce platforms (Shopify, WooCommerce), and custom applications through our flexible API framework."
      },
      {
        question: "How do you ensure data security with add-ons?",
        answer: "We implement industry-standard security measures including end-to-end encryption, secure API authentication, regular security audits, and compliance with data protection regulations like GDPR and CCPA. Your data remains secure throughout the integration."
      }
    ]
  },
  {
    serviceId: "industry-specific",
    subtitle: "How automation can be adapted to the workflows, customer needs, and rules of a specific sector.",
    faqs: [
      {
        question: "Why do I need industry-specific AI solutions?",
        answer: "Every industry has unique workflows, regulations, and challenges. Industry-specific AI solutions are designed with deep domain knowledge, ensuring they address your particular pain points effectively and comply with industry standards and regulations."
      },
      {
        question: "Which industries do you serve?",
        answer: "We serve multiple industries including Healthcare (patient management, diagnostics), Retail (inventory, personalization), Finance (fraud detection, risk assessment), Manufacturing (predictive maintenance), Education (personalized learning), and Hospitality (guest experience management)."
      },
      {
        question: "How do you ensure compliance with industry regulations?",
        answer: "We work closely with industry experts and legal advisors to ensure our solutions comply with relevant regulations such as HIPAA for healthcare, PCI-DSS for finance, and FERPA for education. Our systems are built with compliance in mind from the ground up."
      },
      {
        question: "Can you customize solutions for my specific industry needs?",
        answer: "Absolutely. While we have pre-built solutions for common use cases, we customize them to match your specific requirements, workflows, and business objectives. Our team works closely with you to understand your unique challenges and tailor the solution accordingly."
      },
      {
        question: "How quickly can industry-specific solutions be deployed?",
        answer: "Deployment time varies based on complexity, but most industry-specific solutions can be implemented within 4-12 weeks. This includes assessment, customization, integration, testing, training, and go-live support. We work efficiently while ensuring quality and thorough testing."
      }
    ]
  },
  {
    serviceId: "edcrm",
    subtitle: "How ED-CRM keeps lead capture, follow-up, pipelines, and reporting in one place.",
    faqs: [
      {
        question: "What is ED-CRM?",
        answer: "ED-CRM is EuroDigital's all-in-one CRM for building landing pages and funnels, automating workflows, deploying AI agents, and managing your pipeline—with live visibility into performance."
      },
      {
        question: "Can ED-CRM build landing pages and funnels?",
        answer: "Yes. You can create high-converting pages and funnel paths that capture leads and nurture them through follow-up—without stitching together separate tools."
      },
      {
        question: "Does ED-CRM automate social media and follow-ups?",
        answer: "Yes. Smart automation handles instant replies, scheduled follow-ups, reminders, and lead nurturing across your social channels—reducing manual work for your team."
      },
      {
        question: "Does ED-CRM include AI voice agents?",
        answer: "Yes. Advanced AI agents—including voice assistants—can manage real-time conversations, nurture leads, support customers technically, and maintain a high-quality experience at scale."
      },
      {
        question: "Can I track deals, bookings, and ad campaigns in one place?",
        answer: "Yes. Dashboards and pipelines give you real-time insights—manage deals, appointment calendars, and Google and Facebook ad performance from a single hub, so opportunities are never missed."
      }
    ]
  },
  {
    serviceId: "website-builder",
    subtitle: "How teams can create and update connected website pages without handling routine code changes.",
    faqs: [
      {
        question: "What is AI Website Builder?",
        answer: "AI Website Builder is EuroDigital's platform for generating landing pages, supporting site pages, and conversion-focused layouts from prompts—so teams can launch faster without custom development."
      },
      {
        question: "Can I build websites without coding?",
        answer: "Yes. You can generate complete pages, choose from proven templates, or create custom designs—all through prompts and visual editing, with no developer required for everyday changes."
      },
      {
        question: "Can I create multiple pages at once?",
        answer: "Yes. From a single prompt you can generate connected pages such as pricing, privacy policy, and terms & conditions, all with consistent branding across your site."
      },
      {
        question: "Can I edit content without breaking the design?",
        answer: "Yes. Update headlines, sections, and copy with simple prompts while your layout, styling, and structure stay intact."
      },
      {
        question: "Does AI Website Builder work with my CRM?",
        answer: "Yes. Pages are built CRM-integration-ready, so leads and form submissions can flow into your marketing and sales systems without extra setup."
      }
    ]
  },
  {
    serviceId: "emotionai",
    subtitle: "How tone and intent signals can give customer conversations better context.",
    faqs: [
      {
        question: "What is Emotion AI?",
        answer: "Emotion AI is EuroDigital's conversational platform that reads tone and context in real time, so your business can respond with empathy, clarity, and trust—not generic, one-size-fits-all replies."
      },
      {
        question: "Does Emotion AI support regional languages and accents?",
        answer: "Yes. You can add a voice widget to your website for natural, human-like interactions in Gujarati, Hindi, Marathi, and English—with authentic regional accents that help customers feel understood."
      },
      {
        question: "Can Emotion AI handle phone calls automatically?",
        answer: "Yes. Intelligent AI-powered calling manages live conversations dynamically—adapting to what the caller says instead of relying on rigid, scripted responses."
      },
      {
        question: "How does Emotion AI improve customer experience?",
        answer: "By adjusting to how customers feel in the moment, Emotion AI creates warmer, more relevant interactions that boost engagement, strengthen trust, and support higher conversion rates."
      },
      {
        question: "Can Emotion AI work on my website?",
        answer: "Yes. The AI voice widget embeds on your site so visitors can speak or chat naturally, while conversations can also connect to your CRM and follow-up workflows where needed."
      }
    ]
  }
];

// Helper function to get FAQs by service ID
export const getFAQsByServiceId = (serviceId: string): ServiceFAQ | undefined => {
  return serviceFAQs.find(faq => faq.serviceId === serviceId);
};
