import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BOOKING_URL } from "../constants/booking";

type Slide = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

const SLIDE_DURATION_MS = 6000;

const slides: Slide[] = [
  {
    title: "Unlock the Power of AI to Transform Your Business",
    description:
      "We help brands unlock growth with tailored strategies, innovative design, and data-driven insights that deliver real results.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=75&fm=webp",
  },
  {
    title: "AI Business Automation",
    description:
      "EuroDigital’s AI Business Automation solutions are built to eliminate repetitive tasks and optimize your internal workflows. We analyze your business processes and design automation systems that save time, reduce errors, and allow your team to focus on high-value work.",
    image: "/servicesImages/Ai-business-automation1.png",
    link: "/services/ai-business-automation",
  },
  {
    title: "AI Business Promotion",
    description:
      "Our AI Business Promotion solutions help you reach the right audience at the right time with personalized, data-driven strategies. By leveraging AI, we improve engagement, increase conversions, and make your marketing efforts more efficient.",
    image: "/servicesImages/Ai-business-promotion.png",
    link: "/services/ai-business-promotion",
  },
  {
    title: "AI Agent Talk Time",
    description:
      "Our AI-powered chatbots are designed to handle customer interactions accurately and professionally, around the clock. These chatbots are trained using your business data, ensuring responses remain relevant, reliable, and aligned with your brand voice.",
    image: "/backgroundImages/aitalk-time.png",
    link: "/services/ai-agent-talk-time",
  },
  {
    title: "AI Automated Chatbot",
    description:
      "EuroDigital’s AI Voice Agents manage real conversations with customers using natural, human-like speech. These agents can handle calls efficiently while maintaining a professional tone and consistency.",
    image: "/backgroundImages/ai-automation.png",
    link: "/services/ai-automated-chatbot",
  },
  {
    title: "AI Add-on Services",
    description:
      "Our AI Add-on Services allow businesses to enhance their existing tools and platforms with advanced AI features. These add-ons are flexible, scalable, and designed to evolve with your business.",
    image: "/servicesImages/ai_addon.png",
    link: "/services/ai-addon-services",
  },
  {
    title: "Industry Specific AI Use Cases",
    description:
      "We understand that every industry has unique challenges. That’s why EuroDigital delivers AI solutions specifically designed for different business domains, ensuring practical and measurable impact.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=75&fm=webp",
    link: "/services/industry-specific",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden text-white">
      {/* All backgrounds mounted + preloaded — slide changes stay instant */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.img
            key={slide.image}
            src={slide.image}
            alt=""
            aria-hidden={index !== currentSlide}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-full w-full object-cover pointer-events-none"
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
            sizes="100vw"
          />
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b1538]/45 blur-3xl" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1233]/90 via-transparent to-[#0b1233]/30" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all z-20 shadow-[0_10px_40px_rgba(0,0,0,0.35)] cursor-pointer touch-manipulation"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M14 18l-6-6 6-6"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 active:bg-white/40 transition-all z-20 shadow-[0_10px_40px_rgba(0,0,0,0.35)] cursor-pointer touch-manipulation"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M10 6l6 6-6 6"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-28 md:pb-32 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.35)] mt-20">
              {slides[currentSlide].title.includes(
                "Transform Your Business"
              ) ? (
                <>
                  Unlock the Power of AI to
                  <br className="hidden md:block" />
                  Transform Your Business
                </>
              ) : (
                slides[currentSlide].title
              )}
            </h1>

            <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed capitalize">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            <button
              className="rounded-2xl font-semibold px-9 py-4 shadow-[0_14px_40px_rgba(0,0,0,0.25)] transition-colors text-lg cursor-pointer"
              style={{
                backgroundColor: "var(--primary-green)",
                color: "var(--primary-navy)",
                borderColor: "var(--primary-green-dark)",
                borderWidth: "1px",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "var(--primary-green-dark)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "var(--primary-green)")
              }
            >
              Book A Demo
            </button>
          </a>

          {slides[currentSlide].link && (
            <Link to={slides[currentSlide].link}>
              <button className="rounded-2xl border border-white/60 text-white hover:bg-white/10 font-semibold px-9 py-4 transition-all text-lg flex items-center gap-2 group bg-white/0 cursor-pointer">
                Explore
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 17l10-10m0 0H9m8 0v8"
                  />
                </svg>
              </button>
            </Link>
          )}
        </div>

        {/* Slide Indicators with timer progress */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {slides.map((_, index) => {
            const isActive = index === currentSlide;

            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative h-2.5 overflow-hidden rounded-full transition-all cursor-pointer ${
                  isActive
                    ? "w-10 bg-white/30"
                    : "w-2.5 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive && (
                  <motion.span
                    key={currentSlide}
                    className="absolute inset-y-0 left-0 rounded-full bg-white"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: SLIDE_DURATION_MS / 1000,
                      ease: "linear",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Hero;