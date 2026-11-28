import ImageBand from "../components/ImageBand";
import LocationCard from "../components/LocationCard";
import { locationContainerClass, locationGridClass } from "../components/locationStyles";
import PageBanner from "../components/PageBanner";
import {
  getRegion,
  PRESENCE_PATH,
  regionalServiceGroups,
  regionalServicePath,
  regionalServices,
} from "../data/regions";

const SITE_URL = "https://www.eurodigi.ai";

type RegionalServicesPageProps = {
  slug: string;
};

function RegionalServicesPage({ slug }: RegionalServicesPageProps) {
  const region = getRegion(slug);

  if (!region) return null;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}${region.path}#service`,
    name: region.heading,
    serviceType: "AI Automation",
    description: region.seo.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Place", name: region.name },
    url: `${SITE_URL}${region.path}`,
  };

  return (
    <div className="flex min-h-[calc(100vh-88px)] flex-col bg-white text-slate-900">
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

      <PageBanner
        title={region.heading}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Our Presence", to: PRESENCE_PATH },
          { label: region.name },
        ]}
      />

      <section className="flex-1 pb-22.5 pt-15">
        <div className={locationContainerClass}>
          {regionalServiceGroups.map((group, index) => (
            <div key={group.title} className={index > 0 ? "mt-13.75" : undefined}>
              <h2
                className="text-2xl font-semibold leading-8"
                style={{ color: "var(--primary-navy)" }}
              >
                {group.title}
              </h2>
              <span className="mt-4.5 block h-0.75 w-10 bg-cyan-500" aria-hidden="true" />

              <ul className={`mt-7.25 ${locationGridClass}`}>
                {group.serviceSlugs.map((serviceSlug) => {
                  const service = regionalServices.find((item) => item.slug === serviceSlug);
                  if (!service) return null;
                  return (
                    <li key={service.slug}>
                      <LocationCard to={regionalServicePath(service.slug, region.slug)}>
                        {`${service.title} ${region.name}`}
                      </LocationCard>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ImageBand />
    </div>
  );
}

export default RegionalServicesPage;
