import ServiceHeroBunny from "./ServiceHeroBunny";
import ServiceHeroNativeVideo from "./ServiceHeroNativeVideo";
import { isBunnyStreamUrl } from "../utils/bunnyStream";

interface ServiceHeroVideoProps {
  videoUrl: string;
  overlayTitle: string;
  ctaLink: string;
}

const ServiceHeroVideo = ({ videoUrl, overlayTitle, ctaLink }: ServiceHeroVideoProps) => {
  if (isBunnyStreamUrl(videoUrl)) {
    return (
      <ServiceHeroBunny videoUrl={videoUrl} overlayTitle={overlayTitle} />
    );
  }

  return (
    <ServiceHeroNativeVideo
      videoUrl={videoUrl}
      overlayTitle={overlayTitle}
      ctaLink={ctaLink}
    />
  );
};

export default ServiceHeroVideo;
