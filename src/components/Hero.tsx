import { motion } from "framer-motion";
import { Maximize2, Minimize2, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getBunnyStreamMp4Url,
  getBunnyStreamThumbnailUrl,
} from "../utils/bunnyStream";

type Slide = {
  video: string;
};

const slides: Slide[] = [
  {
    video:
      "https://player.mediadelivery.net/play/661416/3d3e0dce-0a6b-4467-8c00-fd903dbb9610",
  },
];

function Hero() {
  const currentSlide = 0;
  const [isVideoMuted, setIsVideoMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const volumeFadeRef = useRef<number | null>(null);

  const fadeVideoVolume = useCallback((video: HTMLVideoElement, targetVolume: number) => {
    if (volumeFadeRef.current !== null) window.clearInterval(volumeFadeRef.current);
    const startVolume = video.volume;
    const startedAt = performance.now();
    volumeFadeRef.current = window.setInterval(() => {
      const progress = Math.min((performance.now() - startedAt) / 1800, 1);
      video.volume = startVolume + (targetVolume - startVolume) * progress;
      if (progress >= 1 && volumeFadeRef.current !== null) {
        window.clearInterval(volumeFadeRef.current);
        volumeFadeRef.current = null;
      }
    }, 40);
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current;

    if (!video) return;

    video.pause();
    video.currentTime = 0;
    video.muted = false;
    video.volume = 0;
  }, [currentSlide]);

  useEffect(() => {
    const section = heroSectionRef.current;
    const video = heroVideoRef.current;

    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          video.volume = 0;
          video.muted = false;
          video.play().then(() => {
            setIsVideoMuted(false);
            fadeVideoVolume(video, 0.75);
          }).catch(() => {
            // Browsers commonly block autoplay with sound. Keep the video playing
            // silently and let the visitor enable sound with the voice control.
            video.muted = true;
            video.volume = 0;
            setIsVideoMuted(true);
            video.play().catch(() => undefined);
          });
        } else {
          video.pause();
          if (volumeFadeRef.current !== null) {
            window.clearInterval(volumeFadeRef.current);
            volumeFadeRef.current = null;
          }
        }
      },
      { threshold: [0, 0.1] },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [fadeVideoVolume]);

  useEffect(() => () => {
    if (volumeFadeRef.current !== null) window.clearInterval(volumeFadeRef.current);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === heroSectionRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = async () => {
    if (!heroSectionRef.current) return;

    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await heroSectionRef.current.requestFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen mode failed:", error);
    }
  };

  return (
    <section
      ref={heroSectionRef}
      className={`relative flex items-center justify-center overflow-hidden text-white ${
        isFullscreen
          ? "min-h-screen bg-black"
          : "mt-[60px] min-h-[90vh] bg-black md:mt-[88px] md:min-h-[calc(100svh-2rem)]"
      }`}
    >
      {/* All backgrounds mounted + preloaded — slide changes stay instant */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <motion.div
            key={slide.video}
            initial={false}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
            aria-hidden={index !== currentSlide}
          >
            <video
              ref={heroVideoRef}
              src={getBunnyStreamMp4Url(slide.video) ?? undefined}
              poster={getBunnyStreamThumbnailUrl(slide.video) ?? undefined}
              muted
              playsInline
              loop
              preload="auto"
              className="pointer-events-none h-full w-full object-cover"
              aria-label="EuroDigital hero video"
            />
          </motion.div>
        ))}

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0b1538]/45 blur-3xl" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0b1233]/90 via-transparent to-[#0b1233]/30" />
      </div>

      <div className="absolute inset-x-0 bottom-8 z-20 flex justify-center gap-3">
        {slides[currentSlide].video && (
          <>
            <button
              type="button"
              onClick={() => {
                const video = heroVideoRef.current;

                if (!video) return;

                if (video.muted) {
                  video.muted = false;
                  video.volume = 0;
                  setIsVideoMuted(false);
                  fadeVideoVolume(video, 0.75);
                } else {
                  video.muted = true;
                  setIsVideoMuted(true);
                }
              }}
              className="touch-target touch-feedback mt-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/40"
              aria-label={isVideoMuted ? "Turn video voice on" : "Mute video voice"}
              aria-pressed={!isVideoMuted}
            >
              {isVideoMuted ? (
                <VolumeX className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Volume2 className="h-4 w-4" aria-hidden="true" />
              )}
              {isVideoMuted ? "Turn voice on" : "Mute voice"}
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              className="touch-target touch-feedback mt-6 inline-flex items-center gap-2 rounded-full border border-white/35 bg-black/25 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-black/40"
              aria-label={isFullscreen ? "Exit fullscreen" : "View video fullscreen"}
              aria-pressed={isFullscreen}
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              )}
              {isFullscreen ? "Exit fullscreen" : "Maximize video"}
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default Hero;
