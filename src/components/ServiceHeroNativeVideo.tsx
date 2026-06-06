import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { RotateCcw, Play, Pause } from "lucide-react";

interface ServiceHeroNativeVideoProps {
  videoUrl: string;
  overlayTitle: string;
  ctaLink: string;
}

function ServiceHeroNativeVideo({
  videoUrl,
  overlayTitle,
  ctaLink,
}: ServiceHeroNativeVideoProps) {
  const [hasEnded, setHasEnded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      setHasEnded(false);
      setIsBuffering(true);
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Playback failed:", err);
        setIsBuffering(false);
      });
    }
  };

  const handlePauseVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsBuffering(false);
    }
  };

  const handleWatchAgain = () => {
    setHasEnded(false);
    setIsBuffering(true);
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Playback failed:", err);
        setIsBuffering(false);
      });
    }
  };

  return (
    <section className="group relative mx-auto mt-10 w-full max-w-[1425px] cursor-pointer overflow-hidden rounded-3xl shadow-xl">
      <video
        ref={videoRef}
        src={videoUrl}
        className="relative z-10 h-auto w-full object-cover"
        style={{ maxHeight: "800px", width: "100%" }}
        controls={isPlaying}
        playsInline
        preload={isPlaying || isBuffering ? "auto" : "metadata"}
        onEnded={() => {
          setHasEnded(true);
          setIsPlaying(false);
          setIsBuffering(false);
        }}
        onPlay={() => setIsPlaying(true)}
        onPlaying={() => {
          setIsPlaying(true);
          setIsBuffering(false);
        }}
        onCanPlay={() => setIsBuffering(false)}
        onWaiting={() => setIsBuffering(true)}
        onStalled={() => setIsBuffering(true)}
        onPause={() => {
          setIsPlaying(false);
          setIsBuffering(false);
        }}
        onClick={(e) => {
          if (isPlaying) {
            handlePauseVideo(e);
          } else {
            handlePlayVideo();
          }
        }}
        onError={(e) => {
          console.error("Video failed to load:", e);
          setVideoError(true);
          setIsBuffering(false);
        }}
      />

      <AnimatePresence>
        {isBuffering && !hasEnded && !videoError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center bg-black/20 backdrop-blur-[2px]"
          >
            <motion.div className="h-12 w-12 animate-spin rounded-full border-4 border-white/35 border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isPlaying && !hasEnded && !videoError && !isBuffering && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/10 transition-colors"
            onClick={handlePlayVideo}
          >
            <motion.button
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white backdrop-blur-sm md:h-28 md:w-28"
            >
              <Play className="ml-1 h-8 w-8 fill-white md:h-12 md:w-12" />
            </motion.button>

            <div className="absolute left-8 top-8">
              <div className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                <p className="text-sm font-semibold uppercase tracking-wider text-white">
                  Service Overview
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPlaying && !hasEnded && !videoError && (
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black/20 opacity-0 transition-opacity"
            onClick={handlePauseVideo}
          >
            <motion.button
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-white/20 text-white shadow-2xl backdrop-blur-md hover:bg-white/30 md:h-28 md:w-28"
            >
              <Pause className="h-8 w-8 fill-white md:h-12 md:w-12" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {videoError && (
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl border-2 border-red-500/50 bg-red-100/10 backdrop-blur-sm">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-md">
            <p className="mb-2 text-xl font-bold text-red-500">Video Failed to Load</p>
            <p className="text-sm text-white/70">Please refresh the page or try again later.</p>
          </div>
        </div>
      )}

      <AnimatePresence>
        {hasEnded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 backdrop-blur-[4px]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 15 }}
              className="mx-auto max-w-lg rounded-3xl border border-white/20 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-xl md:p-12"
            >
              <h3 className="mb-8 text-2xl font-bold text-white md:text-3xl">{overlayTitle}</h3>

              <div className="flex flex-col items-center gap-6">
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#18b6e3] px-10 py-4 text-xl font-bold text-white shadow-[0_0_20px_rgba(24,182,227,0.4)] transition-all hover:scale-105 hover:bg-[#159fca] hover:shadow-[0_0_30px_rgba(24,182,227,0.6)]"
                >
                  Book Demo
                </a>

                <button
                  type="button"
                  onClick={handleWatchAgain}
                  className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-white/80 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  <span className="text-sm font-semibold tracking-wide">Watch Again</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default ServiceHeroNativeVideo;
