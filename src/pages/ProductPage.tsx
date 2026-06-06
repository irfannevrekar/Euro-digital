import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useMemo, useState } from "react";
import { Check, ChevronRight, DollarSign, Eye, Funnel, MessageCircle, RotateCcw, Trophy, X } from "lucide-react";
import FAQ from "../components/FAQ";
import ServiceHeroVideo from "../components/ServiceHeroVideo";
import { getFAQsByServiceId } from "../data/faqData";
import { BOOKING_URL as bookingUrl } from "../constants/booking";

type ProductPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  subprice?: string;
  image?: string;
};

type ProductPageProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
  features: string[];
  detailedDescription: string;
  overlayTitle: string;
  plans: ProductPlan[];
  showFAQs?: boolean;
  showWebsiteShowcase?: boolean;
  pricingVariant?: "grid" | "stacked" | "spotlight" | "ghl";
  pricingTitle?: string;
  pricingSubtitle?: string;
};

const stackedCardThemes = [
  "from-cyan-50 to-blue-100",
  "from-purple-50 to-pink-100",
  "from-green-50 to-teal-100",
  "from-orange-50 to-amber-100",
];
const stackedTopOffsets = ["md:top-24", "md:top-32", "md:top-40", "md:top-48"];
const ghlRows = [
  { feature: "CRM & PIPELINE MANAGEMENT", replaces: ["HS", ">"], otherTools: "$99/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "UNLIMITED SALES FUNNELS", replaces: ["CF", "CL"], otherTools: "$297/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "WEBSITE BUILDER", replaces: ["WP", "WIX", "SS"], otherTools: "$29/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "SURVEYS & FORMS", replaces: ["SG", "T", "WF", "TF"], otherTools: "$49/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "EMAIL MARKETING", replaces: [">", "MC", "HS", "CC"], otherTools: "$99/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "2-WAY SMS MARKETING", replaces: ["AC", "TW", "SM"], otherTools: "$99/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "BOOKING & APPOINTMENTS", replaces: ["CA", "GC", "A"], otherTools: "$29/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "WORKFLOW AUTOMATIONS", replaces: [">", "HS", "K"], otherTools: "$169/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "COURSES/PRODUCTS", replaces: ["KA", "T"], otherTools: "$99/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "CALL TRACKING", replaces: ["CT", "WC"], otherTools: "$49/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "REPUTATION MANAGEMENT", replaces: ["BI", "SM", "BR"], otherTools: "$159/MONTHLY", edcrmPrice: "$29", edcrmTier: "Growth Essentials" },
  { feature: "TRACKING & ANALYTICS", replaces: ["GA"], otherTools: "$299/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "COMMUNITIES", replaces: ["SK", "M", "C"], otherTools: "$89/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "DOCUMENT SIGNING", replaces: ["ED", "DS"], otherTools: "$47/MONTHLY", edcrmPrice: "$49", edcrmTier: "AI Business Suite" },
  { feature: "GRAY-LABELED MOBILE APP", replaces: [], otherTools: "UNIQUE TO HIGHLEVEL", edcrmPrice: "Included", edcrmTier: "All plans" },
];
const ghlIconColors = [
  "bg-orange-500",
  "bg-blue-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-sky-500",
  "bg-zinc-900",
  "bg-purple-500",
  "bg-amber-500",
  "bg-red-500",
  "bg-stone-700",
  "bg-emerald-500",
  "bg-pink-500",
  "bg-teal-600",
  "bg-slate-700",
  "bg-lime-500",
  "bg-blue-700",
];
const growthTabs = [
  {
    name: "Capture",
    color: "yellow",
    icon: "funnel",
    title: "Get more leads in the door",
    description: "Attract the right people, turn interest into leads and keep your pipeline full.",
    tools: [
      "CRM",
      "Voice AI",
      "Forms, Surveys & Quizzes",
      "Websites, Funnels & Landing Pages",
      "Webinar Funnels",
      "Chat Widget / Conversation AI",
      "Call Tracking",
      "Inbound SMS & Social DMs",
      "Social Planner",
      "Missed Call Text-Back",
      "AI Biz Card Scanner",
      "QR Codes",
      "Prospecting Tool",
      "Ad Manager (Google/FB/Insta Ads)",
    ],
  },
  {
    name: "Nurture",
    color: "blue",
    icon: "message",
    title: "Build relationships that convert",
    description: "The tools you need to follow up, stay relevant and build trust.",
    tools: [
      "Conversation AI",
      "Consolidated conversation stream (SMS, Messenger, Instagram DM, Whatsapp, Livechat)",
      "Sales Pipelines",
      "Workflows & Automations",
      "CalendarsText Snippets",
      "Appointment Reminders",
      "Ringless Voicemail",
      "Mobile App (with video messages)",
      "Automated Outbound Call Connect",
    ],
  },
  {
    name: "Close",
    color: "green",
    icon: "dollar",
    title: "Close deals with less back-and-forth",
    description: "Remove friction and turn conversations into paying customers.",
    tools: [
      "Lead Scoring",
      "Estimate & Proposals",
      "Invoicing",
      "Payment Integrations",
      "Paid Calendars",
      "Order Forms / Upsells / Downsells",
      "Membership Offers / Courses (paid content access)",
      "One-click Upsell Funnels",
      "Text-2-Pay",
      "Tap-2-Pay",
      "Gift Cards",
      "Loyalty programs",
    ],
  },
  {
    name: "Evangelize",
    color: "cyan",
    icon: "trophy",
    title: "Create fans, not just customers",
    description: "Everything you need to turn happy customers into reviews, referrals and buzz.",
    tools: [
      "Reputation Management",
      "Automated Review Requests",
      "Affiliate Manager (for referral tracking)",
      "Website Review Widgets",
      "Video Review Capture",
      "Video Review Widgets",
      "Workflow Automations for Recommendation Requests",
      "AI Review Reply",
      "Social Planner Auto-Review Posts",
      "Communities",
      "Loyalty Programs",
    ],
  },
  {
    name: "Reactivate",
    color: "yellow",
    icon: "reactivate",
    title: "Get back on their radar",
    description: "Re-engage past leads and customers with timely messages that drive repeat sales.",
    tools: [
      "Broadcast Campaigns - Email/SMS/Whatsapp/Messenger",
      "Smart Lists / Segmentation",
      "Automated Birthday Campaigns",
      "Automated Seasonal Campaigns",
      "Database Reactivation Templates",
      "Newsletter Automation",
      "Content AI",
      "Loyalty Programs",
    ],
  },
];

const GrowthSolutionSection = memo(function GrowthSolutionSection() {
  const [activeTab, setActiveTab] = useState(growthTabs[0]);

  const activeClass =
    activeTab.color === "blue"
      ? "border-[#26a8ff] bg-[#4ab2f2] shadow-[0_0_34px_rgba(74,178,242,0.45)]"
      : activeTab.color === "green"
        ? "border-[#1fcf5b] bg-[#35d962] shadow-[0_0_34px_rgba(53,217,98,0.42)]"
        : activeTab.color === "cyan"
          ? "border-[#46c6ff] bg-[#a7e3ff] shadow-[0_0_34px_rgba(70,198,255,0.35)]"
          : "border-yellow-400 bg-yellow-300 shadow-[0_0_34px_rgba(250,204,21,0.62)]";

  const iconClass =
    activeTab.color === "blue"
      ? "bg-[#2f9af4] text-white"
      : activeTab.color === "green"
        ? "bg-[#18d84d] text-white"
        : activeTab.color === "cyan"
          ? "bg-[#79d5ff] text-slate-950"
          : "bg-yellow-300 text-slate-950";

  const renderIcon = () => {
    if (activeTab.icon === "message") return <MessageCircle className="h-5 w-5 stroke-[2.5]" />;
    if (activeTab.icon === "dollar") return <DollarSign className="h-6 w-6 stroke-[2.5]" />;
    if (activeTab.icon === "trophy") return <Trophy className="h-5 w-5 stroke-[2.5]" />;
    if (activeTab.icon === "reactivate") return <RotateCcw className="h-5 w-5 stroke-[2.5]" />;
    return <Funnel className="h-5 w-5 stroke-[2.5]" />;
  };

  const renderVisual = () => {
    if (activeTab.name === "Nurture") {
      return (
        <div className="absolute left-[8%] top-[32%] flex w-[86%] items-start gap-3">
          <div className="rounded-lg border border-slate-200 bg-white px-5 py-4 text-sm font-black text-blue-500 shadow-sm">
            Contact Created
            <div className="text-xs text-slate-500">New Lead Added</div>
          </div>
          <div className="rounded-lg border border-dashed border-blue-200 bg-blue-50 px-7 py-5 text-sm font-black text-blue-500">
            Add New Trigger
          </div>
        </div>
      );
    }

    if (activeTab.name === "Close") {
      return (
        <div className="absolute left-[36%] top-[35%] w-48 rounded-xl bg-white text-slate-900 shadow-xl">
          <div className="grid grid-cols-2 border-b border-slate-200 px-5 py-3 text-xs font-black text-slate-400">
            <span>Amount</span>
            <span>Status</span>
          </div>
          <div className="grid grid-cols-2 items-center px-5 py-6">
            <span className="text-base font-black">$435.00</span>
            <span className="w-fit rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm font-black text-emerald-500">
              Paid
            </span>
          </div>
        </div>
      );
    }

    if (activeTab.name === "Evangelize") {
      return (
        <div className="absolute left-[42%] top-[20%] flex w-48 flex-col items-center">
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            Payment Received
          </div>
          <div className="h-9 w-px bg-slate-200" />
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            Wait <span className="ml-2 text-[10px] text-slate-400">30 mins</span>
          </div>
        </div>
      );
    }

    if (activeTab.name === "Reactivate") {
      return (
        <div className="absolute left-[34%] top-[18%] flex w-48 flex-col items-center">
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            <span className="text-blue-500">Trigger</span>
            <br />
            Contact Tag
          </div>
          <div className="h-12 w-px bg-slate-200" />
          <div className="w-full rounded-md border border-slate-200 bg-white px-4 py-3 text-xs font-black text-slate-500 shadow-sm">
            Free Whitening Offer
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
          Your all-in-one solution for
          <span className="block text-slate-700">business growth</span>
        </h2>
        <p className="mt-4 text-lg font-medium text-slate-500">
          All the tools you need in one AI-powered platform
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {growthTabs.map((tab) => (
            <button
              key={tab.name}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`min-w-[132px] rounded-md border px-8 py-3 text-sm font-black text-slate-900 transition-all ${
                activeTab.name === tab.name ? activeClass : "border-slate-200 bg-slate-50 hover:bg-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="mt-9 rounded-[24px] border border-slate-200 bg-[#f7f7f8] px-7 py-8 text-left md:px-14 md:py-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className={`mb-7 flex h-11 w-11 items-center justify-center rounded-full ${iconClass}`}>
                {renderIcon()}
              </div>
              <h3 className="max-w-xl text-3xl font-black leading-tight text-slate-900 md:text-[28px]">
                {activeTab.title}
              </h3>
              <p className="mt-6 max-w-lg text-base font-medium leading-snug text-slate-600">
                {activeTab.description}
              </p>

              <div className="mt-6 grid gap-x-10 gap-y-1 text-sm font-medium text-slate-600 sm:grid-cols-2">
                {activeTab.tools.map((tool) => (
                  <div key={tool} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                      <Check className="h-2.5 w-2.5 stroke-[4]" />
                    </span>
                    <span className="min-w-0 leading-snug">{tool}</span>
                  </div>
                ))}
              </div>

              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex">
                <button className="cursor-pointer inline-flex items-center gap-1 rounded-lg bg-[#06233d] px-10 py-4 text-sm font-black text-white transition-colors hover:bg-[#0b3154] ">
                  Start 14 Day Free Trial
                  <ChevronRight className="h-4 w-4 stroke-[3]" />
                </button>
              </a>
            </div>

            <div className="relative min-h-[315px] overflow-hidden bg-gradient-to-r from-transparent via-white/40 to-transparent">
              {activeTab.name === "Capture" ? (
                <>
              <div className="absolute left-[11%] top-[25%] flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xl shadow-sm">
                  ↑↑
                </span>
                <div className="rounded-lg bg-[#315ee8] px-4 py-3 text-sm font-bold leading-snug text-white shadow-lg">
                  Sorry we missed your call!
                  <br />
                  Want to book an appointment?
                </div>
              </div>

              <div className="absolute right-[5%] top-[47%] flex items-center gap-3">
                <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm">
                  Yes, is 2 PM next Tuesday free?
                </div>
                <img
                  src="/backgroundImages/avatar.png"
                  alt=""
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="absolute left-[11%] top-[64%] flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-xl shadow-sm">
                  ↑↑
                </span>
                <div className="rounded-lg bg-[#315ee8] px-4 py-3 text-sm font-bold leading-snug text-white shadow-lg">
                  Yes! You're all set for 2 PM
                  <br />
                  next Tuesday. Thank you!
                </div>
              </div>
                </>
              ) : (
                renderVisual()
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

function GhlPricingTable() {
  return (
    <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-b-2xl border-t-[7px] border-[#0f8bd8] bg-[#061421] px-5 pb-14 pt-8 text-white shadow-2xl md:px-14 md:pb-16">
      <h2 className="mb-8 text-center text-3xl font-black tracking-wide text-slate-100 md:text-[36px]">
        What&apos;s included with ED-CRM
      </h2>

      <div className="min-w-[920px]">
        <div className="grid grid-cols-[1.35fr_1fr_1fr_1.15fr_0.55fr] items-center px-5 pb-4 text-base font-black tracking-wide text-slate-100 md:text-lg">
          <div>Features</div>
          <div>Replaces</div>
          <div>Other tools</div>
          <div className="text-[#18b6e3]">ED-CRM</div>
          <div className="text-right text-sm font-black">
            <span className="text-yellow-300">↑</span><span className="text-cyan-300">↑</span><span className="text-green-400">↑</span>
          </div>
        </div>

        <div className="space-y-2.5">
          {ghlRows.map((row, rowIndex) => (
            <div
              key={row.feature}
              className="grid min-h-[44px] grid-cols-[1.35fr_1fr_1fr_1.15fr_0.55fr] items-center rounded-[9px] border border-white/7 bg-[#121f2b] px-5 text-[11px] font-black tracking-wide text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:text-xs"
            >
              <div className="border-r border-white/8 pr-4">{row.feature}</div>
              <div className="flex items-center gap-2 border-r border-white/8 px-4">
                {row.replaces.map((logo, logoIndex) => (
                  <span
                    key={`${row.feature}-${logo}-${logoIndex}`}
                    className={`flex h-6 w-6 items-center justify-center rounded-full border-2 border-white text-[9px] font-black leading-none text-white shadow-md ${ghlIconColors[(rowIndex + logoIndex) % ghlIconColors.length]}`}
                  >
                    {logo}
                  </span>
                ))}
              </div>
              <div className="border-r border-white/8 px-5 text-slate-300">{row.otherTools}</div>
              <div className="border-r border-white/8 px-4">
                <div className="inline-flex flex-col gap-0.5 rounded-md bg-[#0a1a28] px-3 py-1.5 ring-1 ring-[#18b6e3]/25">
                  <span className="text-sm leading-none text-[#1fc2ee] md:text-base">
                    {row.edcrmPrice}
                    {row.edcrmPrice.startsWith("$") && (
                      <span className="ml-1 text-[9px] font-bold uppercase text-slate-400">/mo</span>
                    )}
                  </span>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-slate-500">
                    {row.edcrmTier}
                  </span>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#162a34] text-[#1fc2ee] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                  <Check className="h-4 w-4 stroke-[3]" />
                </span>
              </div>
            </div>
          ))}

          <div className="grid min-h-[48px] grid-cols-[1.35fr_1fr_1fr_1.15fr_0.55fr] items-center rounded-[9px] border border-white/7 bg-[#121f2b] px-5 text-[12px] font-black tracking-wide text-slate-100">
            <div className="border-r border-white/8 pr-4" />
            <div className="border-r border-white/8 px-4 text-center text-[#1fc2ee]">OVERALL PRICE</div>
            <div className="border-r border-white/8 px-5 text-slate-300">$1,600+ PER MONTH</div>
            <div className="border-r border-white/8 px-4">
              <div className="inline-flex flex-col gap-0.5 rounded-md bg-[#0a1a28] px-3 py-1.5 ring-1 ring-[#18b6e3]/35">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">From</span>
                <span className="text-lg leading-none text-[#1fc2ee] md:text-xl">
                  $29<span className="ml-1 text-[9px] font-bold uppercase text-slate-400">/mo</span>
                </span>
              </div>
            </div>
            <div className="flex items-end justify-end gap-1 text-[#1fc2ee]">
              <span className="pb-3 text-[10px]">$</span>
              <span className="text-3xl leading-none">29</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
          <button className="inline-flex items-center gap-1 rounded-md bg-white px-8 py-4 text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100 cursor-pointer">
            Start 14 Day Free Trial
            <ChevronRight className="h-4 w-4 stroke-[3]" />
          </button>
        </a>
      </div>
    </div>
  );
}

const websiteShowcases = [
  {
    label: "Gaming Website",
    image: "/servicesImages/gaming2.png",
    description: "Esports portal with hero banner, featured games, and live tournament CTAs",
    preview: "gaming",
  },
  {
    label: "AI Marketing Agency Funnel",
    image: "/servicesImages/ai-builder.png",
    description: "Bold brand and agency website built to convert leads",
    preview: "agency",
  },
  {
    label: "Cinematic SaaS",
    image: "/servicesImages/ai-website-builder.png",
    description: "Modern SaaS product site with cinematic storytelling",
    preview: "saas",
  },
];

type WebsiteShowcase = (typeof websiteShowcases)[number];

function WebsitePreviewSite({ preview }: { preview: WebsiteShowcase }) {
  if (preview.preview === "gaming") {
    return (
      <div className="bg-[#070913] text-white">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
          <div className="text-lg font-black uppercase tracking-[0.22em] text-cyan-300">Nexus Arena</div>
          <div className="hidden items-center gap-6 text-xs font-bold uppercase tracking-[0.16em] text-white/70 md:flex">
            <span>Games</span>
            <span>Teams</span>
            <span>Tournaments</span>
            <span>Store</span>
          </div>
          <button className="rounded-md bg-cyan-300 px-4 py-2 text-xs font-black text-slate-950">Join Match</button>
        </div>

        <div className="grid min-h-[560px] items-center gap-8 px-5 py-12 md:grid-cols-[0.95fr_1.05fr] md:px-8 lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-pink-400">Live season 08</p>
            <h4 className="mt-4 text-5xl font-black leading-none md:text-7xl">Compete where legends are made.</h4>
            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/70">
              Daily ladders, creator-hosted events, team rankings, and instant tournament registration for competitive players.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-md bg-cyan-300 px-6 py-3 text-sm font-black text-slate-950">Enter Tournament</button>
              <button className="rounded-md border border-white/20 px-6 py-3 text-sm font-black text-white">Watch Live</button>
            </div>
          </div>
          <img src={preview.image} alt="" className="h-full max-h-[470px] w-full rounded-2xl object-cover object-top shadow-[0_30px_90px_rgba(34,211,238,0.24)]" />
        </div>

        <div className="grid border-y border-white/10 md:grid-cols-4">
          {["48K Players", "124 Teams", "$80K Prizes", "24/7 Streams"].map((stat) => (
            <div key={stat} className="border-white/10 px-6 py-7 md:border-r">
              <div className="text-2xl font-black text-cyan-300">{stat.split(" ")[0]}</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">{stat.split(" ").slice(1).join(" ")}</div>
            </div>
          ))}
        </div>

        <div className="px-5 py-14 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-pink-400">Tonight's Matches</p>
              <h5 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Live brackets, team rooms, and instant score sync.</h5>
              <p className="mt-4 text-base leading-7 text-white/60">
                Players join the lobby, check their bracket, verify their roster, and stream their match without leaving the arena dashboard.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                ["21:00", "Shadow Pulse", "Neon Vortex", "Semi Final"],
                ["22:15", "Cyber Kings", "Astra Unit", "Lower Bracket"],
                ["23:30", "Nova Crew", "Zero Signal", "Grand Final"],
              ].map(([time, teamA, teamB, round]) => (
                <div key={`${teamA}-${teamB}`} className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.18)] md:grid-cols-[90px_1fr_120px] md:items-center">
                  <div className="text-2xl font-black text-cyan-300">{time}</div>
                  <div>
                    <div className="flex items-center justify-between gap-3 text-lg font-black">
                      <span>{teamA}</span>
                      <span className="text-sm text-white/35">VS</span>
                      <span>{teamB}</span>
                    </div>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-white/40">{round}</p>
                  </div>
                  <button className="rounded-md border border-cyan-300/30 px-4 py-3 text-xs font-black text-cyan-200">Watch</button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white/[0.03] px-5 py-14 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-300">Leaderboard</p>
              <h5 className="mt-3 text-4xl font-black leading-tight">Season rankings update after every verified match.</h5>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                {[
                  ["01", "Astra Unit", "18W", "2940 XP"],
                  ["02", "Shadow Pulse", "16W", "2715 XP"],
                  ["03", "Neon Vortex", "15W", "2520 XP"],
                  ["04", "Cyber Kings", "14W", "2380 XP"],
                ].map(([rank, team, wins, xp]) => (
                  <div key={team} className="grid grid-cols-[60px_1fr_80px_90px] items-center border-b border-white/10 px-5 py-4 last:border-b-0">
                    <span className="text-lg font-black text-cyan-300">{rank}</span>
                    <span className="font-black">{team}</span>
                    <span className="text-sm font-bold text-white/55">{wins}</span>
                    <span className="text-sm font-bold text-white/55">{xp}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-cyan-300/20 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.22),_transparent_55%),#0b1020] p-7">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-pink-300">Season Pass</p>
              <h5 className="mt-3 text-4xl font-black leading-tight">Unlock premium scrims and creator cups.</h5>
              <p className="mt-4 text-sm leading-6 text-white/60">
                Premium players get priority queue, advanced match history, private scrim invites, and exclusive cosmetic drops.
              </p>
              <div className="mt-6 grid gap-3">
                {["Priority tournament entry", "Private team channels", "Advanced stat tracking", "Exclusive stream overlays"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/70">
                    {item}
                  </div>
                ))}
              </div>
              <button className="mt-7 w-full rounded-md bg-cyan-300 px-5 py-4 text-sm font-black text-slate-950">Upgrade Pass</button>
            </div>
          </div>
        </div>

        <div className="px-5 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-pink-400">Arena Features</p>
            <h5 className="mt-3 text-4xl font-black leading-tight">Everything a competitive community needs in one place.</h5>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["Team Hub", "Roster invites, roles, private comms, and team availability."],
              ["Match Center", "Brackets, reporting, dispute handling, and stream links."],
              ["Creator Events", "Influencer-hosted cups with featured streams and rewards."],
              ["Stats Engine", "Win rate, MVP tracking, match history, and seasonal XP."],
              ["Prize Wallet", "Transparent prize pools, payouts, and sponsor bonuses."],
              ["Community Feed", "Clips, announcements, match recaps, and player updates."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h6 className="text-xl font-black text-white">{title}</h6>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#050713] px-5 py-14 md:px-8 lg:px-12">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(236,72,153,0.14),rgba(255,255,255,0.03))] p-8 md:p-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Ready Queue</p>
              <h5 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Build your squad and enter the next bracket.</h5>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                Create a profile, invite your team, pick your game, and register for the next live tournament in minutes.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-6">
              <div className="grid gap-3">
                {["Choose Game", "Add Roster", "Verify Region", "Join Bracket"].map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">{index + 1}</span>
                    <span className="text-sm font-black text-white/80">{step}</span>
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-md bg-white px-5 py-4 text-sm font-black text-slate-950">Create Player Profile</button>
            </div>
          </div>
        </div>

        <footer className="border-t border-white/10 bg-black/25 px-5 py-10 md:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <div className="text-xl font-black uppercase tracking-[0.22em] text-cyan-300">Nexus Arena</div>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
                Competitive events, ranked ladders, and live community matches for players ready to climb.
              </p>
            </div>
            <div>
              <h6 className="text-sm font-black uppercase tracking-[0.18em] text-white">Play</h6>
              <div className="mt-4 space-y-2 text-sm font-semibold text-white/55">
                <p>Open Cups</p>
                <p>Ranked Arena</p>
                <p>Team Finder</p>
              </div>
            </div>
            <div>
              <h6 className="text-sm font-black uppercase tracking-[0.18em] text-white">Watch</h6>
              <div className="mt-4 space-y-2 text-sm font-semibold text-white/55">
                <p>Live Streams</p>
                <p>Finals</p>
                <p>Highlights</p>
              </div>
            </div>
            <div>
              <h6 className="text-sm font-black uppercase tracking-[0.18em] text-white">Social</h6>
              <div className="mt-4 flex gap-2">
                {["TW", "YT", "DC"].map((item) => (
                  <span key={item} className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-black text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-white/35 md:flex-row md:items-center md:justify-between">
            <span>© 2026 Nexus Arena</span>
            <span>Privacy · Terms · Fair Play</span>
          </div>
        </footer>
      </div>
    );
  }

  if (preview.preview === "agency") {
    return (
      <div className="bg-[#f8fafc] text-slate-950">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur md:px-8">
          <div className="text-xl font-black">ScaleForge AI</div>
          <div className="hidden items-center gap-6 text-sm font-bold text-slate-600 md:flex">
            <span>Funnels</span>
            <span>Automation</span>
            <span>Case Studies</span>
            <span>Pricing</span>
          </div>
          <button className="rounded-md bg-slate-950 px-4 py-2 text-xs font-black text-white">Book Audit</button>
        </div>

        <div className="grid gap-10 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_38%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#e0f2fe_100%)] px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20 lg:px-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-600">AI funnel builder</p>
            <h4 className="mt-4 text-5xl font-black leading-tight md:text-7xl">A modern funnel that turns traffic into booked calls.</h4>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Capture leads, qualify intent, present the right offer, and trigger automated follow-up from one clean conversion journey.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {["Audit offer", "Smart form", "Auto follow-up"].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-black text-slate-700 shadow-sm">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-md bg-sky-500 px-6 py-3 text-sm font-black text-white">Get Free Audit</button>
              <button className="rounded-md border border-slate-300 px-6 py-3 text-sm font-black text-slate-950">See Funnel</button>
            </div>
          </div>
          <img src={preview.image} alt="" className="h-full max-h-[460px] w-full rounded-2xl object-cover object-top shadow-2xl" />
        </div>

        <div className="border-y border-slate-200 bg-slate-50 px-5 py-12 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">Funnel Flow</p>
              <h5 className="mt-3 text-3xl font-black leading-tight md:text-4xl">From click to booked call without losing momentum.</h5>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Each step is built to move the visitor forward: clear offer, simple opt-in, proof, qualification, and booked appointment.
              </p>
            </div>

            <div className="space-y-3">
              {[
                ["01", "Traffic", "Ads, social posts, and outbound messages send prospects to one focused landing page."],
                ["02", "Lead Magnet", "A free growth audit captures name, email, phone, and business goal."],
                ["03", "Qualification", "Smart questions segment hot, warm, and nurture-only leads."],
                ["04", "Booking", "Qualified prospects are pushed to calendar booking and CRM pipeline."],
                ["05", "Follow-up", "Email and SMS sequences recover missed bookings automatically."],
              ].map(([step, title, text]) => (
                <div key={step} className="grid grid-cols-[64px_1fr] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-center bg-sky-500 text-lg font-black text-white">{step}</div>
                  <div className="p-4">
                    <h6 className="text-lg font-black text-slate-950">{title}</h6>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-5 py-12 md:px-8 lg:px-12">
          <div className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl lg:grid-cols-[1fr_0.85fr]">
            <div className="p-7 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">Lead Capture Page</p>
              <h5 className="mt-3 text-4xl font-black leading-tight">Claim your free AI growth audit.</h5>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Visitors get a strong reason to opt in before they ever reach the calendar. The funnel sells the next step, not everything at once.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["Personalized funnel score", "Automation gap report", "CRM handoff map", "30-minute strategy call"].map((item) => (
                  <div key={item} className="rounded-lg border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-950 p-7 text-white md:p-10">
              <h6 className="text-2xl font-black">Get the audit</h6>
              <div className="mt-6 space-y-3">
                {["Full name", "Business email", "Phone number", "Monthly ad spend"].map((field) => (
                  <div key={field} className="rounded-md border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white/55">
                    {field}
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-md bg-sky-400 px-5 py-3 text-sm font-black text-slate-950">Unlock My Funnel Plan</button>
              <p className="mt-4 text-xs font-medium leading-5 text-white/45">No spam. Just a clear funnel plan and the next best action.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-950 px-5 py-10 text-white md:px-8 lg:px-12">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Landing page", "A single offer, clean proof, and one clear opt-in action."],
              ["Nurture sequence", "Email and SMS messages that handle objections and push booking."],
              ["Sales pipeline", "Hot leads move into CRM with tasks, tags, and deal stages."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h5 className="text-xl font-black">{title}</h5>
                <p className="mt-3 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-14 md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-24">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">Why It Converts</p>
              <h5 className="mt-3 text-4xl font-black leading-tight">Built around the buyer's decision path.</h5>
              <p className="mt-4 text-base leading-7 text-slate-600">
                A long funnel page gives every visitor the next reason to continue, from quick scanners to serious buyers who need proof.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Clear promise", "The headline tells visitors exactly what outcome the funnel creates."],
                ["Offer stack", "The audit feels valuable before the visitor gives contact details."],
                ["Proof blocks", "Metrics, testimonials, and case snapshots lower risk."],
                ["Objection handling", "Common hesitations are answered before the booking step."],
                ["CRM tagging", "Every lead is segmented by budget, need, and urgency."],
                ["Recovery automations", "Missed bookings get SMS and email reminders automatically."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h6 className="text-xl font-black text-slate-950">{title}</h6>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">Automation Timeline</p>
            <h5 className="mt-3 text-4xl font-black leading-tight">The follow-up starts the second they opt in.</h5>
          </div>
          <div className="mx-auto mt-10 max-w-5xl">
            {[
              ["Minute 0", "Instant audit confirmation", "Lead gets a confirmation message and the CRM creates a new opportunity."],
              ["Minute 5", "Qualification SMS", "A short SMS asks one high-intent question to determine buying readiness."],
              ["Hour 2", "Case study email", "The lead receives a relevant proof email based on their selected goal."],
              ["Day 1", "Booking reminder", "Unbooked leads receive a direct calendar CTA with urgency and a simple reason to act."],
              ["Day 3", "Final objection email", "The sequence answers pricing, timeline, and implementation concerns."],
            ].map(([time, title, text], index) => (
              <div key={time} className="grid gap-4 border-l-2 border-sky-200 pb-8 pl-5 last:pb-0 md:grid-cols-[150px_1fr]">
                <div className="-ml-[30px] flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-500 text-sm font-black text-white">{index + 1}</span>
                  <span className="text-sm font-black uppercase tracking-[0.16em] text-sky-600">{time}</span>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h6 className="text-xl font-black text-slate-950">{title}</h6>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-14 md:px-8 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              ["Before", "Leads arrive from ads but leave without booking because the page has too many choices."],
              ["During", "The funnel captures intent, asks qualifying questions, and recommends the next action."],
              ["After", "Sales sees tagged opportunities, booked calls, missed-call recovery, and follow-up tasks."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">{title}</p>
                <p className="mt-4 text-xl font-black leading-8 text-slate-950">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-12 md:px-8 lg:px-12">
          <h5 className="text-3xl font-black">Campaign Performance</h5>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {["3.8x ROAS", "41% More Leads", "62% Faster Launch"].map((metric) => (
              <div key={metric} className="rounded-xl border border-slate-200 p-6">
                <div className="text-3xl font-black text-sky-600">{metric.split(" ")[0]}</div>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{metric.split(" ").slice(1).join(" ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-950 px-5 py-14 text-white md:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-300">Offer Stack</p>
              <h5 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Everything needed to launch the funnel.</h5>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
                Strategy, page structure, lead capture, follow-up automation, CRM handoff, and performance tracking in one connected build.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Landing page copy", "Lead magnet positioning", "Qualification form", "Calendar integration", "SMS follow-up", "Email nurture", "CRM pipeline", "Weekly reporting"].map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white/75">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-sky-300/20 bg-white p-7 text-slate-950 shadow-[0_28px_90px_rgba(14,165,233,0.18)]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-sky-600">Launch Package</p>
              <div className="mt-4 text-5xl font-black">30 days</div>
              <p className="mt-4 text-base leading-7 text-slate-600">
                From funnel plan to active lead capture and automated follow-up.
              </p>
              <button className="mt-7 w-full rounded-md bg-sky-500 px-5 py-4 text-sm font-black text-white">Book My Funnel Build</button>
            </div>
          </div>
        </div>

        <div className="bg-white px-5 py-14 md:px-8 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-600">Questions</p>
            <h5 className="mt-3 text-4xl font-black leading-tight">Common funnel objections answered.</h5>
          </div>
          <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-2">
            {[
              ["Do I need ads first?", "No. The funnel can start with organic traffic, outbound, or paid campaigns."],
              ["Can this connect to CRM?", "Yes. Leads can be tagged, scored, assigned, and moved through deal stages."],
              ["Is the form too long?", "The funnel uses progressive intent. Short first step, deeper questions after commitment."],
              ["What happens after booking?", "Confirmation, reminders, no-show recovery, and sales tasks can trigger automatically."],
            ].map(([question, answer]) => (
              <div key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h6 className="text-lg font-black text-slate-950">{question}</h6>
                <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="px-5 py-14 md:px-8 lg:px-12">
          <div className="rounded-3xl bg-[linear-gradient(135deg,#0f172a,#075985)] p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-200">Final Step</p>
                <h5 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Turn your next campaign into a complete funnel.</h5>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/65">
                  Get the offer, page, form, automation, and sales handoff working together before the next traffic push.
                </p>
              </div>
              <button className="rounded-md bg-white px-7 py-4 text-sm font-black text-slate-950">Start With A Free Audit</button>
            </div>
          </div>
        </div>

        <footer className="border-t border-slate-200 bg-slate-50 px-5 py-10 md:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
            <div>
              <div className="text-2xl font-black text-slate-950">ScaleForge AI</div>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
                Funnel strategy, AI automation, and CRM-ready campaigns built for predictable lead generation.
              </p>
              <button className="mt-5 rounded-md bg-sky-500 px-5 py-3 text-sm font-black text-white">Book Growth Audit</button>
            </div>
            <div>
              <h6 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Services</h6>
              <div className="mt-4 space-y-2 text-sm font-semibold text-slate-500">
                <p>Landing Pages</p>
                <p>Email Funnels</p>
                <p>CRM Setup</p>
              </div>
            </div>
            <div>
              <h6 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Company</h6>
              <div className="mt-4 space-y-2 text-sm font-semibold text-slate-500">
                <p>Case Studies</p>
                <p>Process</p>
                <p>Pricing</p>
              </div>
            </div>
            <div>
              <h6 className="text-sm font-black uppercase tracking-[0.16em] text-slate-950">Contact</h6>
              <div className="mt-4 space-y-2 text-sm font-semibold text-slate-500">
                <p>hello@scaleforge.ai</p>
                <p>Dubai, UAE</p>
                <p>Mon-Fri</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-400 md:flex-row md:items-center md:justify-between">
            <span>© 2026 ScaleForge AI</span>
            <span>Privacy · Terms · Cookies</span>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0f1f] text-white">
      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
        <div className="text-xl font-black">OrbitOS</div>
        <div className="hidden items-center gap-6 text-sm font-bold text-white/60 md:flex">
          <span>Platform</span>
          <span>Insights</span>
          <span>Security</span>
          <span>Docs</span>
        </div>
        <button className="rounded-md bg-white px-4 py-2 text-xs font-black text-slate-950">Try Free</button>
      </div>

      <div className="px-5 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">Cinematic product system</p>
          <h4 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Turn complex data into a product story people understand.</h4>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
            A polished SaaS website experience with sharp positioning, interactive product sections, trust cues, and conversion-ready pricing.
          </p>
        </div>
        {/* <img src={preview.image} alt="" className="mt-10 max-h-[520px] w-full rounded-2xl object-cover object-top shadow-[0_35px_100px_rgba(45,212,191,0.20)]" /> */}
      </div>

      <div className="grid border-y border-white/10 md:grid-cols-3">
        {[
          ["Realtime dashboards", "Track team performance and revenue signals in one place."],
          ["Smart workflows", "Automate repetitive tasks with human approval where it matters."],
          ["Enterprise ready", "Permissions, audit trails, and secure workspace controls."],
        ].map(([title, text]) => (
          <div key={title} className="border-white/10 px-6 py-8 md:border-r">
            <h5 className="text-xl font-black">{title}</h5>
            <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
          </div>
        ))}
      </div>

      <div className="px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">Product Modules</p>
            <h5 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Everything your product story needs after the hero.</h5>
            <p className="mt-4 text-base leading-7 text-white/60">
              OrbitOS structures the page around feature education, proof, conversion paths, and clear next steps for trial or demo traffic.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Command Center", "A unified overview of pipeline, revenue, onboarding, and product adoption."],
              ["Insight Cards", "Turn dense metrics into compact cards teams can understand quickly."],
              ["Workflow Builder", "Automate handoffs between sales, success, and operations."],
              ["Account Timeline", "See every touchpoint, task, note, and risk signal in one stream."],
              ["Experiment Lab", "Compare campaigns, onboarding variants, and offer performance."],
              ["Executive Reports", "Package traction, churn, revenue, and expansion into board-ready views."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h6 className="text-xl font-black text-white">{title}</h6>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white px-5 py-14 text-slate-950 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-white">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-300">Live Workspace</p>
                <h5 className="mt-1 text-2xl font-black">Revenue Intelligence</h5>
              </div>
              <span className="rounded-full bg-teal-400 px-3 py-1 text-xs font-black text-slate-950">Live</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {["$428K ARR", "18% Expansion", "92 Health Score"].map((metric) => (
                <div key={metric} className="rounded-xl bg-white/8 p-4 text-white">
                  <div className="text-2xl font-black text-teal-300">{metric.split(" ")[0]}</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/45">{metric.split(" ").slice(1).join(" ")}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {[
                ["Enterprise plan expansion", "78%", "bg-teal-400"],
                ["Onboarding completion", "64%", "bg-sky-400"],
                ["Churn risk reduction", "41%", "bg-violet-400"],
              ].map(([label, value, color]) => (
                <div key={label} className="rounded-xl bg-white/8 p-4">
                  <div className="flex justify-between text-sm font-bold text-white/70">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-white/10">
                    <div className={`h-2 rounded-full ${color}`} style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-600">Analytics Storytelling</p>
            <h5 className="mt-3 text-4xl font-black leading-tight">Make every metric explain what to do next.</h5>
            <p className="mt-4 text-base leading-7 text-slate-600">
              The page can show product value with live-style dashboards, progress indicators, and outcome-based messaging instead of static feature claims.
            </p>
            <div className="mt-6 grid gap-3">
              {["Explain value faster", "Reduce sales calls friction", "Create stronger trial intent"].map((item) => (
                <div key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-14 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">Integrations</p>
          <h5 className="mt-3 text-4xl font-black leading-tight">Connect the systems your team already uses.</h5>
          <p className="mt-4 text-base leading-7 text-white/60">
            Position integrations as part of the product narrative, from CRM sync to reporting and team communication.
          </p>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["Salesforce", "HubSpot", "Stripe", "Slack", "Google Analytics", "Segment", "Intercom", "Notion"].map((tool) => (
            <div key={tool} className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center text-sm font-black text-white/75">
              {tool}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#070b17] px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-teal-300">Trust Layer</p>
            <h5 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Security and governance without slowing teams down.</h5>
            <p className="mt-4 text-base leading-7 text-white/60">
              Give enterprise buyers the confidence they need with a dedicated security story, role controls, audit trails, and data protection cues.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["SSO & SAML", "Centralized login and workspace access control."],
              ["Audit Logs", "Track sensitive changes and admin actions."],
              ["Role Permissions", "Keep every team focused on the right data."],
              ["Data Controls", "Retention, exports, and secure reporting workflows."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h6 className="text-xl font-black text-white">{title}</h6>
                <p className="mt-3 text-sm leading-6 text-white/55">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-14 md:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            ["Starter", "$49", "For early teams validating product messaging.", "3 dashboards"],
            ["Growth", "$149", "For teams scaling demos, trials, and revenue reporting.", "Unlimited workflows"],
            ["Enterprise", "Custom", "For advanced security, governance, and sales-led expansion.", "Dedicated success"],
          ].map(([name, price, text, feature]) => (
            <div key={name} className="rounded-3xl border border-white/10 bg-white/5 p-7">
              <h6 className="text-2xl font-black text-white">{name}</h6>
              <div className="mt-5 text-5xl font-black text-teal-300">{price}</div>
              <p className="mt-4 min-h-[72px] text-sm leading-6 text-white/60">{text}</p>
              <div className="mt-5 rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm font-bold text-white/70">{feature}</div>
              <button className="mt-6 w-full rounded-md bg-white px-5 py-3 text-sm font-black text-slate-950">Choose Plan</button>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-12 md:px-8 lg:px-12">
        <div className="rounded-2xl bg-white p-7 text-slate-950 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-center">
            <div>
              <h5 className="text-3xl font-black">Launch a product site that feels premium from the first scroll.</h5>
              <p className="mt-4 text-base leading-7 text-slate-600">Built for demos, trials, paid plans, and sales-led conversations.</p>
            </div>
            <button className="rounded-md bg-teal-400 px-6 py-4 text-sm font-black text-slate-950">Start Trial</button>
          </div>
        </div>
      </div>

      <div className="bg-white px-5 py-14 text-slate-950 md:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-teal-600">Questions</p>
          <h5 className="mt-3 text-4xl font-black leading-tight">Built for product-led and sales-led funnels.</h5>
        </div>
        <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-2">
          {[
            ["Can this support trial signups?", "Yes. The flow can prioritize trial creation, demo booking, or both."],
            ["Can it explain complex features?", "Yes. Feature sections can use visual dashboards, comparisons, and use-case blocks."],
            ["Is it ready for enterprise buyers?", "Yes. Add security, governance, integrations, and procurement-friendly proof."],
            ["Can pricing be included?", "Yes. Pricing cards can be placed before or after final proof depending on the sales motion."],
          ].map(([question, answer]) => (
            <div key={question} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h6 className="text-lg font-black text-slate-950">{question}</h6>
              <p className="mt-3 text-sm leading-6 text-slate-600">{answer}</p>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-white/10 bg-[#070b17] px-5 py-10 md:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="text-2xl font-black text-white">OrbitOS</div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">
              Product storytelling, analytics, and workflow automation for modern SaaS teams.
            </p>
          </div>
          <div>
            <h6 className="text-sm font-black uppercase tracking-[0.16em] text-white">Product</h6>
            <div className="mt-4 space-y-2 text-sm font-semibold text-white/50">
              <p>Platform</p>
              <p>Integrations</p>
              <p>Security</p>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-black uppercase tracking-[0.16em] text-white">Resources</h6>
            <div className="mt-4 space-y-2 text-sm font-semibold text-white/50">
              <p>Docs</p>
              <p>Guides</p>
              <p>Changelog</p>
            </div>
          </div>
          <div>
            <h6 className="text-sm font-black uppercase tracking-[0.16em] text-white">Newsletter</h6>
            <div className="mt-4 flex overflow-hidden rounded-md border border-white/10 bg-white/5">
              <div className="min-w-0 flex-1 px-3 py-3 text-sm font-semibold text-white/35">Email address</div>
              <button className="bg-teal-400 px-4 text-xs font-black text-slate-950">Join</button>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs font-bold uppercase tracking-[0.16em] text-white/35 md:flex-row md:items-center md:justify-between">
          <span>© 2026 OrbitOS</span>
          <span>Status · Privacy · Terms</span>
        </div>
      </footer>
    </div>
  );
}

const WebsiteBuilderShowcase = memo(function WebsiteBuilderShowcase() {
  const [preview, setPreview] = useState<WebsiteShowcase | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreview(null);
    };
    if (preview) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [preview]);

  return (
    <section className="bg-white px-6 py-16 md:px-12 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
            Features &amp; Benefits
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            Build faster. Launch smarter. Convert more.
          </h2>
          <p className="mt-4 text-lg font-medium leading-8 text-slate-600">
            From a single prompt to a full, branded site—templates, multi-page flows, prompt-based edits, and CRM-ready handoff are built in, so you spend less time building and more time growing.
          </p>  
        </div>

        <div className="grid gap-7 lg:grid-cols-3">
          {websiteShowcases.map((site) => (
            <div
              key={site.label}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 text-[10px] font-black uppercase tracking-[0.18em] text-slate-500">
                <span>{site.label}</span>
                <span>Built by AI</span>
              </div>

              <div className="group relative bg-slate-100">
                <img
                  src={site.image}
                  alt={`${site.label} website example`}
                  className="h-[360px] w-full object-cover object-top md:h-[440px]"
                  loading="lazy"
                  decoding="async"
                />
                <button
                  type="button"
                  onClick={() => setPreview(site)}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-slate-900/70 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  aria-label={`Preview ${site.label} website`}
                >
                  <Eye className="h-5 w-5" />
                </button>
              </div>

              <div className="px-5 py-5">
                <p className="text-sm font-bold text-slate-900">{site.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPreview(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              aria-label="Close preview"
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="website-preview-title"
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 h-[92vh] w-full max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl"
            >
              <h3 id="website-preview-title" className="sr-only">
                {preview.label}
              </h3>
              <button
                type="button"
                onClick={() => setPreview(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/75 text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-slate-950"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="h-full overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <WebsitePreviewSite preview={preview} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
});
function ProductPage({
  id,
  title,
  description,
  image,
  video,
  features,
  detailedDescription,
  overlayTitle,
  plans,
  showFAQs = false,
  showWebsiteShowcase = false,
  pricingVariant = "grid",
  pricingTitle = "Pricing",
  pricingSubtitle,
}: ProductPageProps) {
  const faqs = useMemo(() => (showFAQs ? getFAQsByServiceId(id) : undefined), [showFAQs, id]);

  return (
    <>
      <ServiceHeroVideo
        videoUrl={video}
        overlayTitle={overlayTitle}
        ctaLink={bookingUrl}
      />

      <section
        className="py-16 md:py-24"
        style={{ background: "linear-gradient(to right, white 50%, rgba(224, 242, 254, 0.6) 50%)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-14 items-center"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-semibold" style={{ color: "var(--primary-navy)" }}>
                {title}
              </h1>
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {description}
              </p>

              <ul className="space-y-2 ml-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-xs mt-1" style={{ color: "var(--text-tertiary)" }}>
                      •
                    </span>
                    <span style={{ color: "var(--text-secondary)" }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-base leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                {detailedDescription}
              </p>

              <div className="flex gap-4 pt-4">
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <button
                    className="rounded-full text-black font-medium px-6 py-2 shadow-lg cursor-pointer"
                    style={{ backgroundColor: "var(--primary-blue)" }}
                  >
                    Request a Demo
                  </button>
                </a>
              </div>
            </div>

              <img
                src={image}
                alt={title}
                className="mx-auto block h-auto w-full max-h-[480px] rounded-2xl object-contain object-center shadow-2xl sm:max-h-[540px] md:max-h-[640px] lg:max-h-[720px] xl:max-h-[780px] transition-opacity duration-500 ease-out"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1280px) 55vw, (min-width: 768px) 50vw, 100vw"
              />
          </motion.div>
        </div>
      </section>

      {showWebsiteShowcase && <WebsiteBuilderShowcase />}

      {pricingVariant === "ghl" && <GrowthSolutionSection />}

      <section id="pricing" className="py-16 md:py-24 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {pricingVariant !== "ghl" && (
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                {pricingTitle}
              </h2>
              {pricingSubtitle && (
                <p className="text-lg text-slate-600 max-w-3xl mt-4">
                  {pricingSubtitle}
                </p>
              )}
            </div>
          )}

          {pricingVariant === "ghl" ? (
            <div className="space-y-12">
              <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
                <GhlPricingTable />
              </div>

              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">
                  {pricingTitle}
                </h2>
                {pricingSubtitle && (
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    {pricingSubtitle}
                  </p>
                )}
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`flex h-full flex-col rounded-2xl border bg-white p-7 shadow-sm transition-all ${
                      plan.highlighted
                        ? "border-[#18b6e3] shadow-[0_20px_70px_rgba(24,182,227,0.18)]"
                        : "border-slate-200 hover:shadow-md"
                    }`}
                  >
                    {plan.highlighted && (
                      <span className="mb-5 w-fit rounded-full bg-[#18b6e3] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                        Popular
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                    <p className="mt-3 min-h-[56px] text-[15px] leading-6 text-slate-600">
                      {plan.description}
                    </p>

                    <div className="mt-6">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      {plan.subprice ? (
                        <p className="mt-2 text-sm font-medium text-slate-500">{plan.subprice}</p>
                      ) : plan.price !== "Custom" ? (
                        <p className="mt-2 text-sm font-medium text-slate-500">per month, paid yearly</p>
                      ) : null}
                    </div>

                    <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-7">
                      <button
                        className={`w-full rounded-lg px-5 py-3 text-sm font-bold transition-colors cursor-pointer ${
                          plan.highlighted
                            ? "bg-[#18b6e3] text-white hover:bg-[#109dca]"
                            : "border border-slate-300 bg-white text-slate-950 hover:bg-slate-50"
                        }`}
                      >
                        {plan.price === "Custom" ? "Contact Sales" : "Buy now"}
                      </button>
                    </a>

                    <div className="mt-7 border-t border-slate-200 pt-6">
                      <p className="mb-4 text-sm font-bold text-slate-900">Plan highlights:</p>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                            <Check className="mt-1 h-4 w-4 shrink-0 text-[#18b6e3] stroke-[3]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : pricingVariant === "stacked" ? (
            <div className="space-y-8">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`md:sticky ${stackedTopOffsets[index] ?? "md:top-24"} bg-gradient-to-br ${stackedCardThemes[index % stackedCardThemes.length]} rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}
                  style={{ zIndex: 10 + index * 10 }}
                >
                  <div className="grid md:grid-cols-2 gap-0 items-stretch">
                    <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                      {plan.highlighted && (
                        <div className="inline-flex w-fit rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white mb-6">
                          Recommended for growing teams
                        </div>
                      )}

                      <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
                        {plan.name}
                      </h3>
                      <p className="text-lg text-slate-700 mb-8 max-w-xl">
                        {plan.description}
                      </p>

                      <div className="mb-8">
                        <span className="text-5xl md:text-7xl font-bold text-slate-800">{plan.price}</span>
                        {plan.subprice ? (
                          <div className="text-base text-slate-600 mt-2">{plan.subprice}</div>
                        ) : plan.price !== "Custom" ? (
                          <div className="text-base text-slate-600 mt-2">per month, paid yearly</div>
                        ) : null}
                      </div>

                      <div className="flex flex-wrap gap-3 mb-8">
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                          <button className="bg-[#18b6e3] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors cursor-pointer">
                            {plan.price === "Custom" ? "Contact Sales" : "Buy now"}
                          </button>
                        </a>
                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                          <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                            Request a Demo
                          </button>
                        </a>
                      </div>

                      <div className="space-y-4">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-3">
                            <span className="text-green-500 text-2xl font-bold">✓</span>
                            <span className="text-slate-700 text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="hidden md:block min-h-[420px]">
                      <img
                        src={plan.image ?? "/backgroundImages/GHL.png"}
                        alt={`${plan.name} visual`}
                        className="h-full w-full object-cover object-center"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : pricingVariant === "spotlight" ? (
            <div className="relative rounded-[44px] bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16),_transparent_58%)] px-5 pb-8 pt-12 md:px-8 md:pb-10 md:pt-14 lg:px-10">
              <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
                {plans.map((plan) => {
                  const isHighlighted = !!plan.highlighted;

                  return (
                    <div
                      key={plan.name}
                      className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border shadow-[0_24px_80px_rgba(15,23,42,0.10)] ${isHighlighted
                        ? "border-[#1d8fff] bg-[#102b47] text-white"
                        : "border-[#d8e2ef] bg-white text-slate-900"
                        }`}
                    >
                      {isHighlighted && (
                        <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full bg-[#1d8fff] px-10 py-3 text-sm font-extrabold uppercase tracking-[0.26em] text-white shadow-lg">
                          Popular
                        </div>
                      )}

                      <div className={`flex h-full flex-col px-8 pb-8 ${isHighlighted ? "pt-24 md:pt-28" : "pt-12 md:pt-14"} md:px-10 md:pb-10`}>
                        <div className="mb-8 flex justify-center">
                          <span className={`rounded-[18px] px-7 py-3 text-xl font-bold ${isHighlighted
                            ? "bg-white/10 text-white"
                            : "bg-slate-100 text-slate-800"
                            }`}>
                            {plan.name}
                          </span>
                        </div>

                        <div className="mb-5 text-center">
                          <div className="flex items-end justify-center gap-2 md:gap-3">
                            <span className={`text-6xl font-black leading-none md:text-7xl ${isHighlighted ? "text-white" : "text-slate-950"}`}>
                              {plan.price}
                            </span>
                            {plan.price !== "Custom" && (
                              <span className={`pb-1.5 text-xl font-medium md:text-2xl ${isHighlighted ? "text-white/90" : "text-slate-700"}`}>
                                /Month
                              </span>
                            )}
                          </div>
                          {plan.subprice && (
                            <p className={`mt-4 text-sm font-medium ${isHighlighted ? "text-white/70" : "text-slate-500"}`}>
                              {plan.subprice}
                            </p>
                          )}
                        </div>

                        <p className={`mx-auto mb-8 max-w-[18rem] text-center text-lg leading-8 font-medium ${isHighlighted ? "text-white/90" : "text-slate-700"}`}>
                          {plan.description}
                        </p>

                        <div className="mb-10 space-y-0">
                          {plan.features.map((feature) => (
                            <div
                              key={feature}
                              className={`border-t px-4 py-6 text-center text-[20px] leading-8 font-semibold ${isHighlighted
                                ? "border-white/10 text-white"
                                : "border-slate-200 text-slate-900"
                                }`}
                            >
                              {feature}
                            </div>
                          ))}
                        </div>

                        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                          <button
                            className={`w-full rounded-2xl px-6 py-4 text-lg font-bold transition-colors cursor-pointer ${isHighlighted
                              ? "bg-white text-[#1d8fff] hover:bg-slate-100"
                              : "bg-[#1d8fff] text-white hover:bg-[#0f7ce0]"
                              }`}
                          >
                            {plan.price === "Custom" ? "Contact Sales" : "Start Your Trial"}
                          </button>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`bg-white rounded-xl border border-gray-200 transition-all flex flex-col overflow-hidden ${plan.highlighted ? "shadow-lg hover:shadow-xl relative" : "shadow-sm hover:shadow-md"}`}
                >
                  {plan.highlighted && (
                    <div className="bg-[#18b6e3] text-white py-2 px-6 text-center text-[13px] font-extrabold">
                      Recommended for growing teams.
                    </div>
                  )}

                  <div className={`p-8 pb-4 ${plan.highlighted ? "" : "mt-11"}`}>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                    <p className="text-[15px] text-slate-600 mb-6 min-h-[40px]">
                      {plan.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                      {plan.subprice ? (
                        <p className="text-sm text-slate-500 mt-1">{plan.subprice}</p>
                      ) : plan.price !== "Custom" ? (
                        <p className="text-sm text-slate-500 mt-1">per month, paid yearly</p>
                      ) : null}
                    </div>

                    <div className="flex gap-3 mb-8">
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#18b6e3] text-white px-5 py-2 rounded font-semibold text-sm transition-colors cursor-pointer">
                          {plan.price === "Custom" ? "Contact Sales" : "Buy now"}
                        </button>
                      </a>
                      <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-white text-slate-900 border border-slate-300 px-5 py-2 rounded font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer">
                          Request a Demo
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="px-8 pb-10 flex-grow">
                    <p className="text-sm font-bold text-slate-900 mb-4">Plan highlights:</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 items-start text-[14px] text-slate-600">
                          <span className="text-slate-400 font-bold">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {faqs && <FAQ faqs={faqs.faqs} subtitle={faqs.subtitle} />}
    </>
  );
}

export default ProductPage;
