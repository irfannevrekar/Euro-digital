import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BunnyStreamPlayer from "./BunnyStreamPlayer";
import { isBunnyStreamUrl } from "../utils/bunnyStream";
import { SERVICE_BOOKING_URLS } from "../constants/booking";
import { solutionGroups } from "../data/solutions";

interface Card {
  title: string;
  desc: string;
  category: "growth" | "engagement" | "automation";
  video?: string;
  image?: string;
  link: string;
  bookingUrl?: string;
}

const serviceDescriptions = new Map(
  solutionGroups.flatMap((group) =>
    group.services.map((service) => [service.title, service.description]),
  ),
);

const getServiceDescription = (title: string) => serviceDescriptions.get(title) ?? "";

const cards: Card[] = [
  {
    title: "AI Business Automation",
    category: "automation",
    desc: getServiceDescription("AI Business Automation"),
    video:
      "https://player.mediadelivery.net/play/661416/aba8e1cb-c5df-4c8e-8d47-a8bf6d066411",
    link: "/services/ai-business-automation",
    bookingUrl: SERVICE_BOOKING_URLS.aiBusinessAutomation,
  },
  {
    title: "AI Business Promotion",
    category: "growth",
    desc: getServiceDescription("AI Business Promotion"),
    video:
      "https://player.mediadelivery.net/play/661416/02126d15-3c9d-4d94-a8ac-1d8bbc37332e",
    link: "/services/ai-business-promotion",
    bookingUrl: SERVICE_BOOKING_URLS.aiBusinessPromotion,
  },
  {
    title: "AI Agent Talk Time",
    category: "engagement",
    desc: getServiceDescription("AI Agent Talk Time"),
    image: "/backgroundImages/ai_automation.png",
    link: "/services/ai-agent-talk-time",
  },
  {
    title: "AI Automated Chatbot",
    category: "engagement",
    desc: getServiceDescription("AI Automated Chatbot"),
    video:
      "https://player.mediadelivery.net/play/661416/c564b724-82f9-4426-b62e-079b3a1b8fb4",
    link: "/services/ai-automated-chatbot",
    bookingUrl: SERVICE_BOOKING_URLS.aiAutomatedChatbot,
  },
  {
    title: "AI Add-on Services",
    category: "automation",
    desc: getServiceDescription("AI Add-on Services"),
    video:
      "https://player.mediadelivery.net/play/661416/0547118b-9fd8-4aae-864f-77f5f0690710",
    link: "/services/ai-addon-services",
    bookingUrl: SERVICE_BOOKING_URLS.aiAddon,
  },
  {
    title: "Industry-Specific AI",
    category: "automation",
    desc: getServiceDescription("Industry-Specific AI"),
    video:
      "https://player.mediadelivery.net/play/661416/78158008-7515-443f-a183-a54a8d3b3a3f",
    link: "/services/industry-specific",
  },
  {
    title: "AI Website Builder",
    category: "growth",
    desc: getServiceDescription("AI Website Builder"),
    video:
      "https://player.mediadelivery.net/play/661416/2fbe2f5c-3f7c-4ebd-8121-5312b7173497",
    link: "/products/website-builder",
    bookingUrl: SERVICE_BOOKING_URLS.aiWebsiteBuilder,
  },
  {
    title: "ED-CRM",
    category: "growth",
    desc: getServiceDescription("ED-CRM"),
    video:
      "https://player.mediadelivery.net/play/667434/9498cecf-b56b-403f-a713-3551b8f7cf8c",
    link: "/products/edcrm",
    bookingUrl: SERVICE_BOOKING_URLS.edCrm,
  },
  {
    title: "Emotion AI",
    category: "engagement",
    desc: getServiceDescription("Emotion AI"),
    video:
      "https://player.mediadelivery.net/play/661416/63fe6a94-5414-484c-b852-3c38c580a74f",
    link: "/products/emotionai",
    bookingUrl: SERVICE_BOOKING_URLS.emotionAi,
  },
  {
    title: "WhatsApp Business API",
    category: "growth",
    desc: getServiceDescription("WhatsApp Business API"),
    video:
      "https://player.mediadelivery.net/play/661416/6a61d538-971f-4b67-898e-708a8dfa12ab",
    link: "https://www.eurodigital.marketing/",
    bookingUrl: SERVICE_BOOKING_URLS.whatsappApi,
  },
];

/*
const serviceGroups = [
  {
    id: "growth" as const,
    title: "Digital Marketing and Promotions",
    path: "/solutions/digital-marketing-and-promotions",
    description:
      "Bring campaigns, websites, CRM, and WhatsApp follow-up into one practical customer acquisition system.",
  },
  {
    id: "engagement" as const,
    title: "AI Customer Engagement",
    path: "/solutions/ai-customer-engagement",
    description:
      "Give customers faster, more consistent help across phone, chat, and messaging channels.",
  },
  {
    id: "automation" as const,
    title: "AI Business Automation",
    path: "/solutions/ai-business-automation",
    description:
      "Reduce repetitive work and connect the processes your team relies on every day.",
  },
];
*/

// execSteps removed — it was unused and caused a TypeScript compile error

const industries = [
  {
    title: "Real Estate",
    description: "Explore AI solutions designed for real estate teams.",
    image:
      "https://2c3wn7zfav.ucarecd.net/11ba89c6-4554-4254-a8e6-6193565067df/photo1505693416388ac5ce068fe85.avif",
  },
  {
    title: "Healthcare",
    description: "Explore how AI can support healthcare teams and patient journeys.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Consultancy",
    description: "Explore AI solutions built for consultancy firms.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "SaaS Company",
    description: "Explore AI that helps SaaS teams acquire, support, and retain customers.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Insurance Company",
    description: "Explore AI for insurance sales, claims, and customer support.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Banking System",
    description: "Explore AI for secure, responsive banking operations and service.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Solar Companies",
    description: "Explore AI that improves solar lead generation and conversion.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
  },
];

const testimonials = [
  {
    name: "James Patterson",
    role: "CEO & Founder",
    company: "Velocity Enterprises",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Before working with EuroDigital, our business felt busy but not productive. We were putting in long hours, handling leads manually, following up late, and constantly switching between tools that never really worked together. On paper things looked fine, but behind the scenes it felt chaotic and exhausting.\n\nEuroDigital helped us step back and rebuild the foundation properly. They streamlined our workflows, automated the parts that slowed us down, and gave us clarity over our entire operation. For the first time, our systems actually supported our growth instead of holding it back. We now spend more time making decisions and less time fixing problems.",
  },
  {
    name: "Rachel Thompson",
    role: "Director of Sales",
    company: "Horizon Real Estate Group",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    text: "We had no shortage of interest in our business, but we were losing opportunities simply because we couldn't respond fast enough. Messages were missed, follow-ups were delayed, and potential customers quietly moved on.\n\nOnce EuroDigital came in, everything shifted. Leads were handled instantly, conversations were tracked properly, and nothing slipped through the cracks. It didn’t feel automated — it felt intelligent, personal, and reliable.",
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    company: "Peak Performance Logistics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "Running the business used to feel like we were always reacting. Every day brought new fires to put out: repetitive tasks, manual processes, and inconsistent customer experiences.\n\nEuroDigital changed that dynamic completely. The business now feels calm, controlled, and scalable.",
  },
  {
    name: "Jennifer Martinez",
    role: "Chief Technology Officer",
    company: "NextGen Solutions",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    text: "As our company grew, the cracks in our digital systems became impossible to ignore. What worked when we were small simply didn't scale.\n\nEuroDigital helped us grow smarter, not heavier.",
  },
  {
    name: "Michael Andrews",
    role: "Managing Director",
    company: "Summit Financial Partners",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    text: "We were already doing okay before EuroDigital, but deep down we knew we were operating below our potential.\n\nEuroDigital brought everything together into one clean, efficient system.",
  },
  {
    name: "Sofia Laurent",
    role: "Founder & Managing Partner",
    company: "Aurora Consulting Group",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
    text: "We reached a point where growth started creating friction instead of momentum.\n\nEuroDigital aligned our systems, simplified our workflows, and gave us full clarity and control over our next phase of growth.",
  },
];

function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1);
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleCards);

  useEffect(() => {
    setIndex((currentIndex) => Math.min(currentIndex, totalPages - 1));
  }, [totalPages]);

  return (
    <section
      id="testimonials"
      className="scroll-mt-32 overflow-hidden bg-[#0b1538] py-20 md:py-24"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 120%, rgba(6, 182, 212, 0.22), transparent 32%)",
      }}
    >
      <div className="mx-auto max-w-6xl px-10 md:px-16">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-4xl font-bold text-slate-300 md:text-5xl">Testimonials</h2>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIndex((currentIndex) => Math.max(currentIndex - 1, 0))}
            disabled={index === 0}
            className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-[175%] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white text-2xl text-slate-800 shadow-lg transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-60 lg:flex"
            aria-label="Previous testimonials"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => setIndex((currentIndex) => Math.min(currentIndex + 1, totalPages - 1))}
            disabled={index === totalPages - 1}
            className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 translate-x-[175%] -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white text-2xl text-slate-800 shadow-lg transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:bg-slate-400 disabled:opacity-60 lg:flex"
            aria-label="Next testimonials"
          >
            ›
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <article key={testimonial.name} className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
                  <div className="flex h-full min-h-[31rem] flex-col rounded-2xl border border-slate-100 bg-white p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.16)] md:p-10">
                    <span className="font-serif text-5xl leading-none text-blue-300">“</span>
                    <p className="mt-7 max-h-[13rem] flex-1 overflow-hidden whitespace-pre-line text-sm italic leading-6 text-slate-600 md:text-base md:leading-7">
                      {testimonial.text}
                    </p>
                    <div className="mt-6 flex flex-col items-center border-t border-slate-100 pt-5">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
                        loading="lazy"
                      />
                      <div className="mt-3">
                        <h3 className="font-bold text-slate-900">{testimonial.name}</h3>
                        <p className="text-xs uppercase tracking-wide text-slate-500">{testimonial.role}</p>
                        <p className="mt-1 text-sm font-semibold text-blue-700">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2" aria-label="Testimonial pages">
          {Array.from({ length: totalPages }, (_, page) => (
            <button
              type="button"
              key={page}
              onClick={() => setIndex(page)}
              aria-label={`Show testimonial page ${page + 1}`}
              aria-current={index === page ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${index === page ? "w-8 bg-blue-500" : "w-2 bg-slate-300 hover:bg-white"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface SectionsProps {
  onBookDemo: (bookingUrl?: string) => void;
}

function Sections({ onBookDemo }: SectionsProps) {
  const [currentlyPlayingIndex, setCurrentlyPlayingIndex] = useState<
    number | null
  >(null);
  const [bufferingVideoIndex, setBufferingVideoIndex] = useState<number | null>(
    null,
  );
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const warmVideo = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.preload !== "auto") {
      video.preload = "auto";
      video.load();
    }
  };

  const pauseAllVideos = () => {
    videoRefs.current.forEach((video) => {
      if (video && !video.paused) {
        video.pause();
      }
    });
  };

  const handleBunnyVideoActivate = (index: number) => {
    pauseAllVideos();
    setCurrentlyPlayingIndex(index);
    setBufferingVideoIndex(index);
  };

  const handleBunnyVideoDeactivate = (index: number) => {
    if (currentlyPlayingIndex === index) {
      setCurrentlyPlayingIndex(null);
    }
    if (bufferingVideoIndex === index) {
      setBufferingVideoIndex(null);
    }
  };

  const handleVideoPlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    // If this video is currently playing, just pause it
    if (currentlyPlayingIndex === index && !video.paused) {
      video.pause();
      setCurrentlyPlayingIndex(null);
      setBufferingVideoIndex(null);
    } else {
      // Pause all videos first, then play the selected one
      pauseAllVideos();
      warmVideo(index);
      video.muted = false;
      setBufferingVideoIndex(index);
      video
        .play()
        .then(() => {
          setCurrentlyPlayingIndex(index);
        })
        .catch((error) => {
          console.error("Video playback failed:", error);
          setBufferingVideoIndex(null);
        });
    }
  };

  return (
    <div className="bg-[#0b1538] text-white">
      {/* Overview Section - Kept as is */}
      <section className="bg-white" style={{ color: "var(--primary-navy)" }}>
        {/* ... (Overview content) */}
      </section>

      {/* Services grouped by customer outcome and business role */}
      <section
        id="services"
        className="bg-white pt-20 pb-0 md:pt-16 md:pb-0 scroll-mt-32"
        style={{ color: "var(--primary-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2
            className="text-3xl font-semibold md:whitespace-nowrap md:text-[3.25rem] lg:text-[3.5rem]"
            style={{ color: "var(--text-primary)" }}
          >
            Every business needs more than one solution
          </h2>
          <p
            className="text-lg md:text-[23px] max-w-5xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            It needs one, tailor-made to how your industry actually works.
            Euro Digital Technologies gives you that: a complete, end-to-end AI
            business automation solution, built around you.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          <div className="grid items-stretch gap-8 md:grid-cols-2 md:gap-10">
            {cards.map((card) => {
                  const index = cards.indexOf(card);
                  const isPlaying = currentlyPlayingIndex === index;
                  const isBuffering = bufferingVideoIndex === index;

                  return (
              <div
                key={card.title}
                className="group rounded-3xl flex flex-col p-5 md:p-6 border border-slate-200/80 shadow-[0_10px_35px_rgba(15,31,56,0.06)] hover:shadow-[0_22px_60px_rgba(15,31,56,0.14)] hover:-translate-y-1 transition-all duration-300 h-full"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                {/* Media Area: Supports both Images and Videos */}
                <div className="relative w-full h-72 md:h-80 rounded-xl shrink-0 overflow-hidden">
                  {card.video ? (
                    isBunnyStreamUrl(card.video) ? (
                      <BunnyStreamPlayer
                        sourceUrl={card.video}
                        title={card.title}
                        className="h-full rounded-xl"
                        aspectClassName="h-full min-h-[18rem] md:min-h-[20rem]"
                        isActive={
                          currentlyPlayingIndex === null ||
                          currentlyPlayingIndex === index
                        }
                        onActivate={() => handleBunnyVideoActivate(index)}
                        onDeactivate={() => handleBunnyVideoDeactivate(index)}
                      />
                    ) : (
                      <>
                        <video
                          ref={(el) => {
                            videoRefs.current[index] = el;
                          }}
                          src={card.video}
                          muted
                          playsInline
                          preload={
                            isPlaying || isBuffering ? "auto" : "metadata"
                          }
                          className="relative z-10 h-full w-full object-cover"
                          onMouseEnter={() => warmVideo(index)}
                          onTouchStart={() => warmVideo(index)}
                          onCanPlay={() => {
                            if (bufferingVideoIndex === index) {
                              setBufferingVideoIndex(null);
                            }
                          }}
                          onPlaying={() => {
                            setCurrentlyPlayingIndex(index);
                            setBufferingVideoIndex(null);
                          }}
                          onWaiting={() => setBufferingVideoIndex(index)}
                          onStalled={() => setBufferingVideoIndex(index)}
                          onEnded={() => {
                            setCurrentlyPlayingIndex(null);
                            setBufferingVideoIndex(null);
                          }}
                        />
                        <div
                          onClick={() => handleVideoPlay(index)}
                          className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
                        >
                          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30 transform transition-transform group-hover:scale-110">
                            {isBuffering ? (
                              <div className="h-10 w-10 rounded-full border-4 border-white/35 border-t-white animate-spin" />
                            ) : isPlaying ? (
                              <div className="flex gap-1.5">
                                <div className="w-2.5 h-10 bg-white rounded-full" />
                                <div className="w-2.5 h-10 bg-white rounded-full" />
                              </div>
                            ) : (
                              <Play className="w-10 h-10 text-white fill-white" />
                            )}
                          </div>
                        </div>
                      </>
                    )
                  ) : card.image ? (
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      sizes="(min-width: 768px) 50vw, 100vw"
                    />
                  ) : null}
                </div>

                {/* Content Area: flex-grow ensures this fills space to push buttons down */}
                <div className="pt-6 md:pt-8 flex flex-col flex-grow">
                  <h4
                    className="mb-4 text-2xl md:text-3xl font-semibold leading-tight text-balance"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {card.title}
                  </h4>

                  {/* Description area */}
                  <p
                    className="mb-6 text-base md:text-lg leading-relaxed text-justify"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {card.desc}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <Link
                      to={card.link}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium text-black transition-colors"
                      style={{ backgroundColor: "var(--primary-blue-light)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--primary-blue)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "var(--primary-blue-light)")
                      }
                    >
                      Learn More
                      <span className="sr-only"> about {card.title}</span>
                    </Link>
                    <button
                        type="button"
                        onClick={() => onBookDemo(card.bookingUrl)}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-colors"
                        style={{ backgroundColor: "var(--primary-navy)" }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--primary-blue)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            "var(--primary-navy)")
                        }
                    >
                        Book Demo
                    </button>
                  </div>
                </div>
            </div>
                );
              })}
          </div>
          <div
            className="mx-auto max-w-5xl rounded-3xl px-6 py-10 text-center shadow-[0_18px_50px_rgba(15,31,56,0.16)] md:px-12 md:py-14"
            style={{ backgroundColor: "var(--primary-navy)" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              Built to work together
            </div>
            <h3 className="mx-auto max-w-none text-3xl font-semibold leading-tight text-white md:whitespace-nowrap md:text-4xl lg:text-5xl">
              End-to-End AI Business Automation
            </h3>
            <p className="mx-auto mt-6 max-w-4xl text-lg font-medium leading-8 text-white md:text-xl md:leading-9">
              Every one of these solutions works together. Contact us today,
              and we&apos;ll design a solution tailor-made for you.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--primary-blue-light)" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Industry specific AI use cases - UPDATED FOR CONSISTENCY */}
      <section
        className="bg-white py-20 md:py-20"
        style={{ color: "var(--primary-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2
            className="text-4xl md:text-6xl lg:text-6xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Industry-Specific AI Use Cases
          </h2>
          <p
            className="text-base md:text-[19px] max-w-4xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Practical and measurable impact across different business domains.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8 md:gap-10">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-2xl overflow-hidden shadow-[0_16px_45px_rgba(0,0,0,0.12)] flex flex-col h-full hover:shadow-2xl transition-shadow duration-300"
              style={{
                borderWidth: "1px",
                borderColor: "rgba(24, 182, 227, 0.2)",
              }}
            >
              {/* Fixed Image Height: h-64 md:h-72 ensures level alignment */}
              <img
                src={industry.image}
                alt={industry.title}
                className="h-64 md:h-72 w-full object-cover shrink-0"
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <div
                className="flex flex-grow flex-col items-center justify-center px-8 py-6 text-center"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <h3
                  className="text-xl md:text-2xl font-semibold leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {industry.title}
                </h3>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {industry.description}
                </p>
                <Link
                  to="/services/industry-specific"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-cyan-600"
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />

    </div>
  );
}

export default Sections;
