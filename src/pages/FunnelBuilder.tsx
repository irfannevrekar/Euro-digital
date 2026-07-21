import ProductPage from "./ProductPage";

function FunnelBuilder() {
  return (
    <ProductPage
      id="website-builder"
      title="AI Website Builder"
      description="Launch polished, high-converting websites in minutes—not weeks. Describe what you need, and AI Website Builder assembles landing pages, supporting pages, and offer flows without touching a line of code."
      image="/servicesImages/ai-funnel.png"
      video="https://player.mediadelivery.net/play/661416/2fbe2f5c-3f7c-4ebd-8121-5312b7173497"
      overlayTitle="Ready to Build Your Website?"
      showFAQs
      showWebsiteShowcase
      features={[
        "Generate full landing pages with compelling offers in seconds—no developers required",
        "Start from 10+ proven, conversion-focused templates or build a completely custom layout",
        "Create an entire site in one go—pricing, privacy policy, terms, and more—with consistent branding across every page",
        "Refine headlines, sections, and copy with simple prompts while your design and structure stay intact",
        "Go live with CRM-ready pages that connect straight to your marketing and sales tools—no extra wiring",
      ]}
      detailedDescription="Whether you are launching a new offer or refreshing an existing site, AI Website Builder keeps speed, design quality, and lead capture in one place—so your team can publish faster and convert more visitors into customers."
      pricingTitle="Website Build Pricing"
      pricingSubtitle="Choose the build that fits your goals—from a fast launch to a fully custom site."
      plans={[
        {
          name: "Basic Build",
          price: "$300",
          subprice: "one-time project fee",
          description: "Perfect for startups and solo founders who need a polished site live fast.",
          features: [
            "Single-page AI-built landing site",
            "Mobile-responsive layout",
            "Lead capture form",
            "Basic SEO setup",
            "Privacy & terms page included",
            "1 round of revisions",
            "Delivery in 5–7 business days",
          ],
        },
        {
          name: "Premium Build",
          price: "$500",
          subprice: "one-time project fee",
          description: "Best for growing brands that need more pages, polish, and conversions.",
          highlighted: true,
          features: [
            "Everything in Basic Build",
            "Up to 5 custom pages",
            "Blog or resources section",
            "CRM & form integrations",
            "Custom branding & color system",
            "Advanced SEO & speed optimization",
            "2 rounds of revisions",
            "Priority support",
          ],
        },
        {
          name: "Custom Build",
          price: "Custom",
          subprice: "tailored scope & quote",
          description: "For businesses that need unique layouts, integrations, and ongoing flexibility.",
          features: [
            "Fully custom site architecture",
            "Unlimited pages & sections",
            "E-commerce or membership flows",
            "Custom API & tool integrations",
            "Dedicated project manager",
            "Multi-language support",
            "Unlimited revision rounds (scoped)",
            "Ongoing optimization & support options",
          ],
        },
      ]}
    />
  );
}

export default FunnelBuilder;
