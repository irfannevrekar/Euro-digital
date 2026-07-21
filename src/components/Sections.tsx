import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { useState, useRef } from "react";
import BunnyStreamPlayer from "./BunnyStreamPlayer";
import { isBunnyStreamUrl } from "../utils/bunnyStream";
import { SERVICE_BOOKING_URLS } from "../constants/booking";

interface Card {
  title: string;
  desc: string;
  video?: string;
  image?: string;
  link: string;
  bookingUrl?: string;
}

const cards: Card[] = [
  {
    title: "AI Business Automation",
    desc: "Streamline Operations. Reduce Manual Work. Scale Faster. Automate repetitive tasks and optimize workflows to drive efficiency across your entire organization.",
    video:
      "https://player.mediadelivery.net/play/661416/aba8e1cb-c5df-4c8e-8d47-a8bf6d066411",
    link: "/services/ai-business-automation",
    bookingUrl: SERVICE_BOOKING_URLS.aiBusinessAutomation,
  },
  {
    title: "AI Business Promotion",
    desc: "Smarter Marketing Powered by AI. Leverage data-driven insights to create personalized campaigns that convert and engage your audience effectively.",
    video:
      "https://player.mediadelivery.net/play/661416/02126d15-3c9d-4d94-a8ac-1d8bbc37332e",
    link: "/services/ai-business-promotion",
    bookingUrl: SERVICE_BOOKING_URLS.aiBusinessPromotion,
  },
  {
    title: "AI Agent Talk Time",
    desc: "Boost agent productivity with smart co-pilots. Empower your team with real-time assistance and automated tools to handle complex queries with ease.",
    image: "/backgroundImages/ai_automation.png",
    link: "/services/ai-agent-talk-time",
  },
  {
    title: "AI Automated Chatbot",
    desc: "Always-on support with human-like responses. Deliver instant, 24/7 customer service with intelligent chatbots that understand context and intent.",
    video:
      "https://player.mediadelivery.net/play/661416/c564b724-82f9-4426-b62e-079b3a1b8fb4",
    link: "/services/ai-automated-chatbot",
    bookingUrl: SERVICE_BOOKING_URLS.aiAutomatedChatbot,
  },
  {
    title: "AI add-on Services",
    desc: "Extend capabilities with modular AI services. Integrate powerful AI tools into your existing systems to enhance functionality and performance.",
    video:
      "https://player.mediadelivery.net/play/661416/0547118b-9fd8-4aae-864f-77f5f0690710",
    link: "/services/ai-addon-services",
    bookingUrl: SERVICE_BOOKING_URLS.aiAddon,
  },
  {
    title: "Industry Specific AI Use Cases",
    desc: "Tailored accelerators for your vertical. Industry-specific solutions designed to address unique challenges and accelerate growth in your sector.",
    video:
      "https://player.mediadelivery.net/play/661416/78158008-7515-443f-a183-a54a8d3b3a3f",
    link: "/services/industry-specific",
  },
  {
    title: "AI Website Builder",
    desc: "Launch polished, high-converting websites in minutes—not weeks. Generate landing pages, supporting pages, and offer flows from simple prompts without writing code.",
    video:
      "https://player.mediadelivery.net/play/661416/2fbe2f5c-3f7c-4ebd-8121-5312b7173497",
    link: "/products/website-builder",
    bookingUrl: SERVICE_BOOKING_URLS.aiWebsiteBuilder,
  },
  {
    title: "ED-CRM",
    desc: "One platform to attract leads, automate follow-up, and grow revenue. Bring funnels, workflows, AI agents, and real-time reporting together in a single CRM.",
    video:
      "https://player.mediadelivery.net/play/667434/9498cecf-b56b-403f-a713-3551b8f7cf8c",
    link: "/products/edcrm",
    bookingUrl: SERVICE_BOOKING_URLS.edCrm,
  },
  {
    title: "Emotion AI",
    desc: "Connect with customers in a personal, empathetic way. Emotion AI senses tone and intent in real time so every reply feels timely, human, and built to convert.",
    video:
      "https://player.mediadelivery.net/play/661416/63fe6a94-5414-484c-b852-3c38c580a74f",
    link: "/products/emotionai",
    bookingUrl: SERVICE_BOOKING_URLS.emotionAi,
  },
  {
    title: "WhatsApp Business API",
    desc: "Engage customers at scale with automated, personalized WhatsApp video journeys. Capture leads, respond instantly, nurture sales conversations, and support customers from one unified AI-powered platform.",
    video:
      "https://player.mediadelivery.net/play/661416/6a61d538-971f-4b67-898e-708a8dfa12ab",
    link: "https://www.eurodigital.marketing/",
    bookingUrl: SERVICE_BOOKING_URLS.whatsappApi,
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

      {/* Personal Secretary grid - UPDATED FOR CONSISTENCY */}
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
            Everything Your Personal Secretary Should Do
          </h2>
          <p
            className="text-base md:text-[19px] max-w-3xl mx-auto leading-relaxed capitalize"
            style={{ color: "var(--text-secondary)" }}
          >
            EuroDigital helps businesses automate operations, improve customer
            engagement, and launch practical AI systems that create measurable
            growth.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 md:gap-10">
          {cards.map((card, index) => {
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
                    <h3
                      className="text-2xl md:text-3xl font-semibold leading-tight min-h-[3.5rem] md:min-h-[4.5rem]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Description area */}
                  <p
                    className="text-base md:text-lg leading-relaxed mb-4 capitalize"
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
