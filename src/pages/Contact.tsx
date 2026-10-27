import Header from "../components/Header";
import Footer from "../components/Footer";
import { CONSULTATION_BOOKING_URL } from "../constants/booking";

function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="pt-20">
        <section id="booking" className="px-4 py-8 sm:px-6 md:px-10 md:py-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-6 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-700">
                Book a consultation
              </p>
              <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
                Choose a time that works for you
              </h1>
            </div>

            <div className="h-[calc(100vh-11rem)] min-h-[680px] overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
              <iframe
                src={CONSULTATION_BOOKING_URL}
                title="Book a consultation"
                width="100%"
                height="100%"
                scrolling="yes"
                className="h-full w-full"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
