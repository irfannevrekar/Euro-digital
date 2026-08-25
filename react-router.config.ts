import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: [
    "/",
    "/about",
    "/contact",
    "/services",
    "/ai-tools",
    "/solutions/digital-marketing-and-promotions",
    "/solutions/ai-customer-engagement",
    "/solutions/ai-business-automation",
    "/services/ai-business-automation",
    "/services/ai-business-promotion",
    "/services/ai-agent-talk-time",
    "/services/ai-automated-chatbot",
    "/services/ai-addon-services",
    "/services/industry-specific",
    "/products/website-builder",
    "/products/edcrm",
    "/products/emotionai",
    "/privacy",
    "/terms",
  ],
} satisfies Config;
