import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { getSolutionGroup } from "../data/solutions";

type SolutionCategoryPageProps = {
  slug: string;
};

function SolutionCategoryPage({ slug }: SolutionCategoryPageProps) {
  const solution = getSolutionGroup(slug);

  if (!solution) return null;

  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-cyan-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Solutions
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              {solution.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              {solution.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#included-services"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
              >
                See what is included
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition-colors hover:border-blue-300 hover:text-blue-700"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:px-12">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              What this helps with
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              A clearer path from problem to result
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            {solution.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-base leading-7 text-slate-700"
              >
                <CheckCircle2 className="mb-4 h-6 w-6 text-cyan-600" />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="included-services" className="scroll-mt-28 bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Services in this solution
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Choose one service or connect them together
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We can solve a specific gap or build a joined-up system around the tools and processes you already have.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {solution.services.map((service) => {
              const className =
                "group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg";
              const content = (
                <>
                  <h3 className="text-2xl font-semibold text-slate-900 group-hover:text-blue-700">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 text-base leading-7 text-slate-600">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700">
                    View service
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </>
              );

              return service.external ? (
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
        </div>
      </section>

      <section className="bg-[#0b1538] py-16 text-white md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Not sure which service fits?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-300">
              Tell us what is slowing the team down. We will help you identify a sensible first step.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
          >
            Discuss your requirements
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SolutionCategoryPage;
