import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main className="pt-20">
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-6xl px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-[#102d4d] to-[#07516c] px-7 py-10 text-left shadow-xl shadow-slate-900/10 sm:px-10 md:mb-14 md:px-14 md:py-14">
                <div aria-hidden="true" className="absolute -right-16 -top-24 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
                <div aria-hidden="true" className="absolute -bottom-32 right-1/3 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl" />
                <div className="relative max-w-3xl">
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                    <FileText aria-hidden="true" className="h-4 w-4" />
                    Legal information
                  </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Terms & Conditions
                </h1>
                <p className="inline-flex rounded-full border border-white/15 bg-slate-950/20 px-3 py-1.5 text-sm text-slate-200">
                  Last Updated: 23 December 2025
                </p>
                </div>
              </div>

              {/* Content */}
              <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <nav aria-label="Terms sections" className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
                  <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">On this page</h2>
                  <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                    {[
                      ["use-of-services", "Use of services"],
                      ["service-information", "Service information"],
                      ["intellectual-property", "Intellectual property"],
                      ["limitation-of-liability", "Limitation of liability"],
                      ["third-party-links", "Third-party links"],
                      ["termination", "Termination"],
                      ["governing-law", "Governing law"],
                      ["changes-to-terms", "Changes to terms"],
                      ["contact-us", "Contact us"],
                    ].map(([id, label]) => (
                      <li key={id}>
                        <a href={`#${id}`} className="block rounded-lg px-2.5 py-2 text-sm text-slate-600 transition-colors hover:bg-cyan-50 hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="space-y-4">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Welcome to EuroDigital. By accessing or using our website and services, you agree to the following Terms & Conditions. Please read them carefully.
                  </p>
                </motion.div>

                {/* Use of Our Services */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  id="use-of-services"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Use of Our Services
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    You agree to use EuroDigital's services only for lawful purposes and in a way that does not harm, disrupt, or misuse our platform, systems, or reputation.
                  </p>
                </motion.div>

                {/* Service Information */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  id="service-information"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Service Information
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    EuroDigital provides digital solutions, automation, and related services. While we strive for accuracy, all information on our website is provided for general purposes and may change without notice.
                  </p>
                </motion.div>

                {/* Intellectual Property */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  id="intellectual-property"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Intellectual Property
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    All content on this website — including text, visuals, branding, and designs — is the property of EuroDigital unless otherwise stated. You may not copy, reproduce, or distribute any content without written permission.
                  </p>
                </motion.div>

                {/* Limitation of Liability */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  id="limitation-of-liability"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Limitation of Liability
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    EuroDigital is not liable for:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Any indirect or consequential loss arising from use of our services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Temporary service interruptions or technical issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Decisions made based on information provided on the website</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Our services are provided "as is" without guarantees of specific outcomes.
                  </p>
                </motion.div>

                {/* Third-Party Links */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  id="third-party-links"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Third-Party Links
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Our website may include links to third-party websites. EuroDigital is not responsible for the content, policies, or practices of external sites.
                  </p>
                </motion.div>

                {/* Termination */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  id="termination"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Termination
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We reserve the right to suspend or terminate access to our services if these Terms are violated or if misuse is detected.
                  </p>
                </motion.div>

                {/* Governing Law */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  id="governing-law"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Governing Law
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    These Terms & Conditions are governed by applicable local laws, and any disputes shall be handled under the appropriate legal jurisdiction.
                  </p>
                </motion.div>

                {/* Changes to Terms */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  id="changes-to-terms"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Changes to Terms
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We may update these Terms & Conditions at any time. Continued use of our website means you accept any updated terms.
                  </p>
                </motion.div>

                {/* Contact Us */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  id="contact-us"
                  className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-7 shadow-sm md:p-8"
                >
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-navy)' }}>
                    Contact Us
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    For questions regarding these Terms, please contact us through our website.
                  </p>
                  <a 
                    href="/contact"
                    className="inline-block px-6 py-3 rounded-full text-white font-medium transition-all hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: 'var(--primary-cyan)' }}
                  >
                    Contact Us
                  </a>
                </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TermsAndConditions;

