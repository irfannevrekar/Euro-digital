import Footer from "../components/Footer";
import Header from "../components/Header";

function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mt-[88px] min-h-[calc(100vh-88px)]">
        <section className="mx-auto max-w-5xl px-6 py-24 text-slate-700">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Euro Digital Technologies LLC
          </p>
          <h1 className="mb-8 text-4xl font-bold text-slate-900 md:text-6xl">
            About EuroDigital
          </h1>
          <div className="space-y-6 text-lg leading-8">
            <p>
              EuroDigital, operated by Euro Digital Technologies LLC, is a digital
              marketing and AI automation company based in Abu Dhabi, UAE.
            </p>
            <p>
              We help businesses with digital marketing, lead generation,
              marketing automation, CRM systems, conversion-focused websites,
              AI customer engagement, chatbots, voice agents, and business
              process automation.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
