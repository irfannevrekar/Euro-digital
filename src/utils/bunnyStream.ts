/** Map of Bunny library IDs → their pull-zone CDN hostnames */
const BUNNY_CDN_HOSTS: Record<string, string> = {
  "661416": import.meta.env.VITE_BUNNY_STREAM_CDN_HOST ?? "vz-70709547-6b5.b-cdn.net",
  "667434": import.meta.env.VITE_BUNNY_STREAM_CDN_HOST_667434 ?? "vz-a8afae03-850.b-cdn.net",
};

export interface BunnyStreamIds {
  libraryId: string;
  videoId: string;
}

/** Extract library + video IDs from Bunny Stream play/embed URLs */
export function getBunnyStreamIds(url: string): BunnyStreamIds | null {
  if (!url.includes("mediadelivery.net")) return null;

  const playMatch = url.match(/mediadelivery\.net\/play\/(\d+)\/([a-f0-9-]+)/i);
  if (playMatch) {
    return { libraryId: playMatch[1], videoId: playMatch[2] };
  }

  const embedMatch = url.match(/mediadelivery\.net\/embed\/(\d+)\/([a-f0-9-]+)/i);
  if (embedMatch) {
    return { libraryId: embedMatch[1], videoId: embedMatch[2] };
  }

  return null;
}

/** Bunny Stream play/embed URLs → iframe embed base URL */
export function getBunnyStreamEmbedUrl(url: string): string | null {
  const ids = getBunnyStreamIds(url);
  if (!ids) return null;
  return `https://iframe.mediadelivery.net/embed/${ids.libraryId}/${ids.videoId}`;
}

export function isBunnyStreamUrl(url: string): boolean {
  return getBunnyStreamIds(url) !== null;
}

export function getBunnyStreamMp4Url(
  url: string,
  resolution: "360p" | "480p" | "720p" | "1080p" = "720p"
): string | null {
  const ids = getBunnyStreamIds(url);
  if (!ids) return null;
  const cdnHost = BUNNY_CDN_HOSTS[ids.libraryId];
  if (!cdnHost) return null;
  return `https://${cdnHost}/${ids.videoId}/play_${resolution}.mp4`;
}

export function getBunnyStreamThumbnailUrl(url: string): string | null {
  const ids = getBunnyStreamIds(url);
  if (!ids) return null;
  const cdnHost = BUNNY_CDN_HOSTS[ids.libraryId];
  if (!cdnHost) return null;
  return `https://${cdnHost}/${ids.videoId}/thumbnail.jpg`;
}

export function buildBunnyEmbedSrc(
  embedBase: string,
  options?: { autoplay?: boolean; preload?: boolean }
): string {
  const params = new URLSearchParams();
  if (options?.autoplay === true) params.set("autoplay", "true");
  else if (options?.autoplay === false) params.set("autoplay", "false");
  if (options?.preload === false) params.set("preload", "false");
  else params.set("preload", "true");
  const query = params.toString();
  return query ? `${embedBase}?${query}` : embedBase;
}
