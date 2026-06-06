import ProductPage from "./ProductPage";

function EDCRM() {
  return (
    <ProductPage
      id="edcrm"
      title="ED-CRM"
      description="One platform to attract leads, automate follow-up, and grow revenue. ED-CRM brings funnels, workflows, AI agents, and real-time reporting together—so your team can sell smarter around the clock."
      image="/servicesImages/ed-Crm.png"
      video="https://player.mediadelivery.net/play/667434/9498cecf-b56b-403f-a713-3551b8f7cf8c"
      overlayTitle="Ready to Organize Your Sales Pipeline?"
      showFAQs
      features={[
        "Build high-converting landing pages and funnels that capture leads and guide them through nurturing—without the manual grind",
        "Automate end-to-end workflows across social channels with instant replies, scheduled follow-ups, reminders, and ongoing lead nurturing on autopilot",
        "Integrate AI agents—including voice assistants—for real-time customer conversations that qualify leads, resolve support issues, and deliver a consistently excellent experience",
        "Run your business from unified dashboards and pipelines with live insights—manage deals, appointments, and Google and Facebook ad performance in one place, 24/7",
      ]}
      detailedDescription="ED-CRM is built for teams that want fewer missed opportunities and more closed deals—from first click to final conversion, everything stays connected, visible, and working while you sleep."
      pricingVariant="ghl"
      pricingTitle="GHL Pricing"
      pricingSubtitle="Choose the CRM package that fits your team size, automation needs, and reporting depth."
      plans={[
        {
          name: "Growth Essentials",
          price: "$29",
          description: "Core marketing and communication tools for growing your customer pipeline.",
          subprice: "per month",
          features: [
            "Email + SMS Marketing",
            "Inbound & outbound calling",
            "Unified Conversations",
            "Social Media Management",
            "Workflow Automation",
            "Forms, Surveys & Quizzes",
            "Booking Calendars",
            "Ad Manager",
            "Online Reputation Management",
          ],
        },
        {
          name: "AI Business Suite",
          price: "$49",
          description: "AI-powered CRM, funnel, reporting, and website tools for scaling teams.",
          highlighted: true,
          subprice: "per month",
          features: [
            "Conversation AI",
            "Voice AI",
            "Content AI",
            "Funnel AI",
            "Reviews AI*",
            "Website & Funnel Builder",
            "Domain Management",
            "CRM & Pipelines",
            "Custom Dashboards & Reporting",
          ],
        },
        {
          name: "Custom",
          price: "Custom",
          description: "For businesses that need custom features, integrations, and development support.",
          features: [
            "Custom feature development",
            "Workflow and CRM customization",
            "Third-party integrations",
            "Advanced automation setup",
            "Custom dashboards and reporting",
            "Dedicated development support",
          ],
        },
      ]}
    />
  );
}

export default EDCRM;
