import BunnyStreamPlayer from "./BunnyStreamPlayer";

interface ServiceHeroBunnyProps {
  videoUrl: string;
  overlayTitle: string;
}

function ServiceHeroBunny({ videoUrl, overlayTitle }: ServiceHeroBunnyProps) {
  return (
    <section className="relative mx-auto mt-10 w-full max-w-[1425px] overflow-hidden rounded-3xl shadow-xl">
      <BunnyStreamPlayer
        sourceUrl={videoUrl}
        title={overlayTitle}
        className="rounded-3xl"
        aspectClassName="aspect-video min-h-[280px] md:min-h-[420px]"
      />
    </section>
  );
}

export default ServiceHeroBunny;
