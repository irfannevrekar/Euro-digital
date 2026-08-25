import { Link } from "react-router-dom";
import { solutionGroups } from "../data/solutions";

function Services() {
  return (
    <section className="bg-gradient-to-b from-white to-cyan-50/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <header className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Services
          </p>
          <h1 className="mb-6 text-4xl font-bold text-slate-800 md:text-5xl lg:text-6xl">
            Marketing, engagement, and automation services
          </h1>
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            Start with the problem you need to solve. We can help with a single
            service or connect marketing, customer conversations, and internal
            processes into a system your team can manage day to day.
          </p>
        </header>

        <div className="mt-20 space-y-20">
          {solutionGroups.map((group) => (
            <section key={group.title} aria-labelledby={group.title.replaceAll(" ", "-").toLowerCase()}>
              <div className="mb-8 flex max-w-5xl flex-col justify-between gap-4 md:flex-row md:items-end">
                <div className="max-w-3xl">
                  <h2
                    id={group.title.replaceAll(" ", "-").toLowerCase()}
                    className="mb-3 text-3xl font-bold text-slate-800 md:text-4xl"
                  >
                    {group.title}
                  </h2>
                  <p className="text-lg leading-7 text-slate-600">{group.shortDescription}</p>
                </div>
                <Link
                  to={`/solutions/${group.slug}`}
                  className="shrink-0 font-semibold text-blue-700 hover:text-blue-800"
                >
                  View this solution
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {group.services.map((service) => {
                  const isExternal = service.external;
                  const className =
                    "group rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-transform hover:-translate-y-1";
                  const content = (
                    <>
                      <h3 className="mb-4 text-2xl font-semibold text-slate-800 group-hover:text-blue-700">
                        {service.title}
                      </h3>
                      <p className="mb-6 leading-7 text-slate-600">{service.description}</p>
                      <span className="font-semibold text-blue-700">
                        Learn more about {service.title}
                      </span>
                    </>
                  );

                  return isExternal ? (
                    <a
                      key={service.title}
                      href={service.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  ) : (
                    <Link key={service.title} to={service.path} className={className}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
