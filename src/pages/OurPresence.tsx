import ImageBand from "../components/ImageBand";
import LocationCard from "../components/LocationCard";
import { locationContainerClass, locationGridClass } from "../components/locationStyles";
import PageBanner from "../components/PageBanner";
import { regions } from "../data/regions";

function OurPresence() {
  return (
    <div className="flex min-h-[calc(100vh-88px)] flex-col bg-white text-slate-900">
      <PageBanner title="Our Presence" breadcrumbs={[{ label: "Home", to: "/" }, { label: "Our Presence" }]} />

      <section className="flex-1 pb-22.5 pt-15">
        <div className={locationContainerClass}>
          <ul className={locationGridClass}>
            {regions.map((region) => (
              <li key={region.slug}>
                <LocationCard to={region.path} compact>
                  {region.name}
                </LocationCard>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ImageBand />
    </div>
  );
}

export default OurPresence;
