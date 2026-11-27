import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import FAQ from "../components/FAQ";
import { openBookingModal } from "../constants/booking";
import { getRegion } from "../data/regions";

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
    <div className="bg-white text-slate-900">
      <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>

      <section className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-cyan-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-base font-extrabold uppercase tracking-[0.2em] text-blue-700 shadow-sm">
            <MapPin aria-hidden="true" className="h-4 w-4 text-cyan-600" />
            {region.name}
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            {region.heading}
          </h1>
          <p className="mt-6 max-w-4xl text-xl leading-8 text-slate-600 md:text-2xl md:leading-9">
            {region.intro}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={openBookingModal}
              className="touch-target inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2"
            >
              Book a consultation
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <a
              href="#regional-services"
              className="touch-target inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-cyan-400 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2"
            >
              View services
            </a>
          </div>
        </div>
      </section>

      <section id="regional-services" className="scroll-mt-28 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-base font-bold uppercase tracking-[0.18em] text-blue-700">
              Services
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              {region.servicesHeading}
            </h2>
            <p className="mt-4 text-xl leading-9 text-slate-600">
              Start with one service or connect several into a single system your team can manage.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {region.services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-blue-700">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-lg leading-8 text-slate-600">{service.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700">
                  View service
                  <ArrowRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <h2 className="mb-10 max-w-3xl text-3xl font-semibold text-slate-900 md:text-4xl">
            {region.highlightsHeading}
          </h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {region.highlights.map((highlight) => (
              <li key={highlight.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <CheckCircle2 aria-hidden="true" className="mb-4 h-6 w-6 text-cyan-600" />
                <h3 className="text-xl font-semibold text-slate-900">{highlight.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{highlight.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#0b1538] py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold md:text-4xl">Industries we support in {region.name}</h2>
              <p className="mt-4 text-xl leading-9 text-slate-300">
                Every industry works differently, so each solution is shaped around how your business runs.
              </p>
            </div>
            <Link
              to="/services/industry-specific"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b1538]"
            >
              Industry-specific AI
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {region.industries.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2 text-base text-white/90"
              >
                {industry}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ
        faqs={region.faqs}
        title={`AI automation in ${region.name}`}
        subtitle={`Common questions from businesses in ${region.name} about working with EuroDigital.`}
      />
    </div>
  );
}

export default RegionalServicesPage;
