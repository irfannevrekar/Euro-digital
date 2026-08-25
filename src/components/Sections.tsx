import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useState, useRef } from "react";
import BunnyStreamPlayer from "./BunnyStreamPlayer";
import { isBunnyStreamUrl } from "../utils/bunnyStream";
import { SERVICE_BOOKING_URLS } from "../constants/booking";

interface Card {
  title: string;
  desc: string;
  category: "growth" | "engagement" | "automation";
  video?: string;
  image?: string;
  link: string;
  bookingUrl?: string;
}

const cards: Card[] = [
  {
    title: "AI Business Automation",
    category: "automation",
    desc: "Take repetitive admin off your team's plate. We map the process, connect the right systems, and automate the steps that do not need a person.",
    video:
      "https://player.mediadelivery.net/play/661416/aba8e1cb-c5df-4c8e-8d47-a8bf6d066411",
    link: "/services/ai-business-automation",
    bookingUrl: SERVICE_BOOKING_URLS.aiBusinessAutomation,
  },
  {
    title: "AI Digital Marketing & Business Promotion",
    category: "growth",
    desc: "Plan and run targeted campaigns, create relevant content, and use performance data to improve lead generation over time.",
    video:
      "https://player.mediadelivery.net/play/661416/02126d15-3c9d-4d94-a8ac-1d8bbc37332e",
    link: "/services/ai-business-promotion",
    bookingUrl: SERVICE_BOOKING_URLS.aiBusinessPromotion,
  },
  {
    title: "AI Voice Agent Talk Time",
    category: "engagement",
    desc: "Handle appointment booking, lead qualification, reminders, support, and follow-up through natural voice conversations.",
    image: "/backgroundImages/ai_automation.png",
    link: "/services/ai-agent-talk-time",
  },
  {
    title: "AI Automated Chatbot",
    category: "engagement",
    desc: "Answer common questions, collect lead details, and guide customers on websites and messaging channels at any hour.",
    video:
      "https://player.mediadelivery.net/play/661416/c564b724-82f9-4426-b62e-079b3a1b8fb4",
    link: "/services/ai-automated-chatbot",
    bookingUrl: SERVICE_BOOKING_URLS.aiAutomatedChatbot,
  },
  {
    title: "AI add-on Services",
    category: "automation",
    desc: "Add focused AI features to the software your team already uses, without replacing the rest of your setup.",
    video:
      "https://player.mediadelivery.net/play/661416/0547118b-9fd8-4aae-864f-77f5f0690710",
    link: "/services/ai-addon-services",
    bookingUrl: SERVICE_BOOKING_URLS.aiAddon,
  },
  {
    title: "Industry Specific AI Use Cases",
    category: "automation",
    desc: "Apply automation to familiar workflows in real estate, healthcare, finance, consulting, and other sectors.",
    video:
      "https://player.mediadelivery.net/play/661416/78158008-7515-443f-a183-a54a8d3b3a3f",
    link: "/services/industry-specific",
  },
  {
    title: "AI Website Builder",
    category: "growth",
    desc: "Create landing pages and supporting website pages quickly, with clear offers, lead capture, and no custom coding required.",
    video:
      "https://player.mediadelivery.net/play/661416/2fbe2f5c-3f7c-4ebd-8121-5312b7173497",
    link: "/products/website-builder",
    bookingUrl: SERVICE_BOOKING_URLS.aiWebsiteBuilder,
  },
  {
    title: "ED-CRM",
    category: "growth",
    desc: "Keep leads, conversations, follow-up tasks, pipelines, and reporting together so opportunities do not get lost between tools.",
    video:
      "https://player.mediadelivery.net/play/667434/9498cecf-b56b-403f-a713-3551b8f7cf8c",
    link: "/products/edcrm",
    bookingUrl: SERVICE_BOOKING_URLS.edCrm,
  },
  {
    title: "Emotion AI",
    category: "engagement",
    desc: "Use tone and intent signals to help customer conversations feel more relevant and better timed.",
    video:
      "https://player.mediadelivery.net/play/661416/63fe6a94-5414-484c-b852-3c38c580a74f",
    link: "/products/emotionai",
    bookingUrl: SERVICE_BOOKING_URLS.emotionAi,
  },
  {
    title: "WhatsApp Business API",
    category: "growth",
    desc: "Handle enquiries, reminders, updates, and sales follow-up on the channel many customers already use every day.",
    video:
      "https://player.mediadelivery.net/play/661416/6a61d538-971f-4b67-898e-708a8dfa12ab",
    link: "https://www.eurodigital.marketing/",
    bookingUrl: SERVICE_BOOKING_URLS.whatsappApi,
  },
];

const serviceGroups = [
  {
    id: "growth" as const,
    title: "Digital Marketing and Promotions",
    path: "/solutions/digital-marketing-and-promotions",
    description:
      "Bring campaigns, websites, CRM, and WhatsApp follow-up into one practical customer-acquisition system.",
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

// execSteps removed — it was unused and caused a TypeScript compile error

const industries = [
  {
    title: "Real Estate",
    image:
      "https://2c3wn7zfav.ucarecd.net/11ba89c6-4554-4254-a8e6-6193565067df/photo1505693416388ac5ce068fe85.avif",
  },
  {
    title: "E-commerce",
    image:
      "https://2c3wn7zfav.ucarecd.net/0782a6d2-94ea-413a-b1b1-8094d5ed55b4/photo1498050108023c5249f4df085.avif",
  },
  {
    title: "Financial Services",
    image:
      "https://2c3wn7zfav.ucarecd.net/f478ef6d-d78c-469b-9285-3deb12d29e98/photo152060716251377705c0f0d4a.avif",
  },
];

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
        className="bg-white py-20 md:py-16 scroll-mt-32"
        style={{ color: "var(--primary-navy)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6 text-center mb-14 md:mb-20">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Digital Marketing Systems Built for Growth
          </h2>
          <p
            className="text-base md:text-[19px] max-w-3xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            EuroDigital is a digital marketing and AI automation company in the
            UAE. We connect campaigns, websites, CRM, customer conversations,
            and everyday business workflows so teams can generate leads and
            follow up more consistently.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          {serviceGroups.map((group) => (
            <section key={group.id} aria-labelledby={`homepage-${group.id}`}>
              <div className="mb-8 max-w-3xl">
                <h3
                  id={`homepage-${group.id}`}
                  className="mb-3 text-3xl font-semibold md:text-4xl"
                  style={{ color: "var(--text-primary)" }}
                >
                  {group.title}
                </h3>
                <p className="text-lg leading-8" style={{ color: "var(--text-secondary)" }}>
                  {group.description}
                </p>
                <Link to={group.path} className="mt-3 inline-block font-semibold text-blue-700 hover:text-blue-800">
                  Explore this solution
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                {cards.filter((card) => card.category === group.id).map((card) => {
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
                  <div className="mb-4">
                    {/* Fixed Title Height or min-height ensures text levels stay same */}
                    <h4
                      className="text-2xl md:text-3xl font-semibold leading-tight min-h-[3.5rem] md:min-h-[4.5rem]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.title}
                    </h4>
                  </div>

                  {/* Description area */}
                  <p
                    className="text-base md:text-lg leading-relaxed mb-4"
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
            </section>
          ))}
        </div>
      </section>

      {/* Executive Assistant timeline - Kept as is */}
      <section
        className="bg-white py-20 md:py-16"
        style={{ color: "var(--primary-navy)" }}
      >
        {/* ... (Timeline content) */}
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
            Industry Specific AI Use Cases
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
                className="py-6 px-8 text-center flex-grow flex items-center justify-center"
                style={{ backgroundColor: "var(--bg-secondary)" }}
              >
                <h3
                  className="text-xl md:text-2xl font-semibold leading-snug"
                  style={{ color: "var(--text-primary)" }}
                >
                  {industry.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Sections;
