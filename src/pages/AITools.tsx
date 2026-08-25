import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  {
    title: "AI Website Builder",
    description:
      "Build landing pages and supporting website pages quickly, then connect enquiries to the rest of your sales process.",
    path: "/products/website-builder",
  },
  {
    title: "ED-CRM",
    description:
      "Manage leads, conversations, follow-up, pipelines, and reporting without stitching together separate systems.",
    path: "/products/edcrm",
  },
  {
    title: "Emotion AI",
    description:
      "Use tone and intent signals to help teams respond to customers with better timing and context.",
    path: "/products/emotionai",
  },
];

function AITools() {
  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-100 bg-gradient-to-br from-slate-50 via-white to-cyan-50/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              AI Tools
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
              Practical tools for marketing, sales, and customer teams
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              These products help teams publish faster, keep track of every lead, and respond with better context. Use one on its own or connect them as part of a wider solution.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.title}
                to={tool.path}
                className="group flex min-h-72 flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-all hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-lg"
              >
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                  EuroDigital tool
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900 group-hover:text-blue-700">
                  {tool.title}
                </h2>
                <p className="mt-4 flex-1 leading-7 text-slate-600">{tool.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-700">
                  Explore {tool.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 md:flex-row md:items-center md:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-slate-900">Need help choosing?</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              We can review your current setup and recommend the smallest useful place to start.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Talk to our team
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default AITools;
