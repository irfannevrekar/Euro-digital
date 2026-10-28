import { ArrowRight } from "lucide-react";
import { openBookingModal } from "../constants/booking";

function FooterCallToAction() {
  return (
    <section aria-labelledby="footer-cta-title" className="relative isolate overflow-hidden bg-slate-100 px-6 py-8 md:px-12 md:py-12">
      <div className="pointer-events-none absolute -right-20 -top-28 -z-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-36 left-1/4 -z-0 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl border border-slate-200 bg-white px-6 py-7 shadow-[0_18px_50px_rgba(15,31,56,0.08)] sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:py-8">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">
            Let&apos;s build what&apos;s next
          </p>
          <h2 id="footer-cta-title" className="text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
            Ready to make your next move?
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
            Talk with our team about the right services and next steps for your business.
          </p>
        </div>
        <button
          type="button"
          onClick={openBookingModal}
          className="touch-target touch-feedback inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-700 focus-visible:ring-offset-2"
        >
          Book a consultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default FooterCallToAction;
