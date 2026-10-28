import BunnyStreamPlayer from "./BunnyStreamPlayer";

interface ServiceHeroBunnyProps {
  videoUrl: string;
  overlayTitle: string;
}

function ServiceHeroBunny({ videoUrl, overlayTitle }: ServiceHeroBunnyProps) {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-3 sm:px-5 md:px-8">
      <div className="rounded-[26px] bg-gradient-to-br from-cyan-300/70 via-sky-200/40 to-emerald-200/60 p-px shadow-[0_28px_80px_rgba(15,31,56,0.18)] sm:rounded-[30px]">
        <div className="overflow-hidden rounded-[25px] bg-slate-950 ring-1 ring-white/50 sm:rounded-[29px]">
          <BunnyStreamPlayer
            sourceUrl={videoUrl}
            title={overlayTitle}
            className="rounded-[25px] shadow-none sm:rounded-[29px]"
            aspectClassName="aspect-video"
            heroPreview
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceHeroBunny;
