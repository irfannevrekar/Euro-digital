import type { Config } from "@react-router/dev/config";
import { regionalPaths } from "./src/data/regions";

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
    // Our Presence, region pages and /services/<service>/<region> pages.
    ...regionalPaths,
  ],
} satisfies Config;
