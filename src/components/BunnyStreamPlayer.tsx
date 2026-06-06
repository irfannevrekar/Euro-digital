import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getBunnyStreamEmbedUrl,
  getBunnyStreamMp4Url,
  getBunnyStreamThumbnailUrl,
  buildBunnyEmbedSrc,
} from "../utils/bunnyStream";

interface BunnyStreamPlayerProps {
  sourceUrl: string;
  title?: string;
  className?: string;
  aspectClassName?: string;
  isActive?: boolean;
  onActivate?: () => void;
  onDeactivate?: () => void;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";

  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);

  return `${m}:${s.toString().padStart(2, "0")}`;
}

function BunnyStreamPlayer({
  sourceUrl,
  title = "Video",
  className = "",
  aspectClassName = "aspect-video",
  isActive = true,
  onActivate,
  onDeactivate,
}: BunnyStreamPlayerProps) {
  const mp4Url = getBunnyStreamMp4Url(sourceUrl);
  const posterUrl = getBunnyStreamThumbnailUrl(sourceUrl);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideControlsTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    if (isActive) return;

    const video = videoRef.current;

    if (video && !video.paused) {
      video.pause();
    }

    setIsPlaying(false);
    setIsBuffering(false);
    setShowControls(false);
  }, [isActive]);

  const hideControlsAfterDelay = useCallback(() => {
    if (hideControlsTimer.current) {
      clearTimeout(hideControlsTimer.current);
    }

    hideControlsTimer.current = setTimeout(() => {
      setShowControls(false);
    }, 3200);
  }, []);

  const revealControls = useCallback(() => {
    setShowControls(true);
    hideControlsAfterDelay();
  }, [hideControlsAfterDelay]);

  useEffect(() => {
    return () => {
      if (hideControlsTimer.current) {
        clearTimeout(hideControlsTimer.current);
      }
    };
  }, []);

  if (!mp4Url) {
    const embedBase = getBunnyStreamEmbedUrl(sourceUrl);

    if (!embedBase) return null;

    const embedSrc = buildBunnyEmbedSrc(embedBase, {
      autoplay: false,
      preload: false,
    });

    return (
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_30px_rgba(0,0,0,0.22)] ${className}`}
      >
        <div className={`relative w-full ${aspectClassName}`}>
          <iframe
            src={embedSrc}
            title={title}
            className="absolute inset-0 h-full w-full border-0"
            style={{ border: "none" }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    );
  }

  const handleResume = () => {
    const video = videoRef.current;

    if (!video) return;

    onActivate?.();
    setIsBuffering(true);
    revealControls();

    video.muted = false;
    setIsMuted(false);

    video
      .play()
      .then(() => {
        setIsPlaying(true);
        setIsBuffering(false);
      })
      .catch((error) => {
        console.error("Video playback failed:", error);
        setIsBuffering(false);
      });
  };

  const handlePause = () => {
    videoRef.current?.pause();

    setIsPlaying(false);
    setIsBuffering(false);
    setShowControls(true);
    onDeactivate?.();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handleResume();
    }
  };

  const handleVideoTap = () => {
    if (isPlaying) {
      revealControls();
      return;
    }

    handleResume();
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();

    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    revealControls();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    const video = videoRef.current;
    const bar = progressRef.current;

    if (!video || !bar || !video.duration) return;

    const rect = bar.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));

    video.currentTime = ratio * video.duration;
    revealControls();
  };

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl bg-black shadow-[0_8px_30px_rgba(0,0,0,0.22)] ${className}`}
      onMouseMove={isPlaying ? revealControls : undefined}
      onMouseLeave={() => {
        if (isPlaying) setShowControls(false);
      }}
      onTouchStart={isPlaying ? revealControls : undefined}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <video
          ref={videoRef}
          src={mp4Url}
          poster={posterUrl ?? undefined}
          title={title}
          muted
          playsInline
          preload="metadata"
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          className="relative z-10 h-full w-full object-cover"
          onClick={handleVideoTap}
          onLoadedMetadata={() => {
            if (videoRef.current) {
              setDuration(videoRef.current.duration);
            }
          }}
          onTimeUpdate={() => {
            const video = videoRef.current;

            if (!video || !video.duration) return;

            setCurrentTime(video.currentTime);
            setProgress((video.currentTime / video.duration) * 100);
          }}
          onCanPlay={() => {
            if (isBuffering) setIsBuffering(false);
          }}
          onPlaying={() => {
            setIsPlaying(true);
            setIsBuffering(false);
            revealControls();
          }}
          onWaiting={() => setIsBuffering(true)}
          onStalled={() => setIsBuffering(true)}
          onPause={() => {
            setIsPlaying(false);
            setIsBuffering(false);
            setShowControls(true);
          }}
          onEnded={() => {
            setIsPlaying(false);
            setIsBuffering(false);
            setProgress(0);
            setCurrentTime(0);
            setShowControls(true);
            onDeactivate?.();
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

        <AnimatePresence mode="wait">
          {!isPlaying && !isBuffering && (
            <motion.button
              key="play-overlay"
              type="button"
              onClick={handleResume}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-30 flex cursor-pointer items-center justify-center bg-black/10"
              aria-label={`Play ${title}`}
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white shadow-[0_10px_35px_rgba(0,0,0,0.25)] backdrop-blur-md md:h-20 md:w-20"
              >
                <Play className="ml-1 h-7 w-7 fill-white text-white md:h-9 md:w-9" />
              </motion.span>
            </motion.button>
          )}

          {isBuffering && (
            <motion.div
              key="buffering"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-black/15"
            >
              <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-white/20 border-t-white" />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isPlaying && showControls && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-x-0 bottom-0 z-40 flex items-center gap-2 px-3 pb-3 pt-8 md:gap-3 md:px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={togglePlayPause}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform hover:scale-105"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4 fill-white text-white" />
                ) : (
                  <Play className="h-4 w-4 fill-white text-white" />
                )}
              </button>

              <span className="hidden shrink-0 text-xs font-medium tabular-nums text-white/85 sm:inline">
                {formatTime(currentTime)}
              </span>

              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="group/bar relative flex h-6 flex-1 cursor-pointer items-center"
                aria-label="Video progress"
              >
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/25">
                  <div
                    className="h-full rounded-full bg-white transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <span className="hidden shrink-0 text-xs font-medium tabular-nums text-white/85 sm:inline">
                {formatTime(duration)}
              </span>

              <button
                type="button"
                onClick={toggleMute}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-transform hover:scale-105"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" />
                ) : (
                  <Volume2 className="h-4 w-4" />
                )}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {isPlaying && !showControls && (
          <div className="absolute inset-x-0 bottom-0 z-30 h-[3px] bg-white/10">
            <div
              className="h-full bg-white/70 transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BunnyStreamPlayer;