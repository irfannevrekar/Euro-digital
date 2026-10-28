import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PrivacyPolicy() {
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
                    <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                    Privacy & data protection
                  </div>
                <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Privacy Policy
                </h1>
                <p className="inline-flex rounded-full border border-white/15 bg-slate-950/20 px-3 py-1.5 text-sm text-slate-200">
                  Last Updated: 23 December 2025
                </p>
                </div>
              </div>

              {/* Content */}
              <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                <nav aria-label="Privacy policy sections" className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
                  <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-500">On this page</h2>
                  <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
                    {[
                      ["information-we-collect", "Information we collect"],
                      ["how-we-use-information", "How we use information"],
                      ["data-protection", "Data protection"],
                      ["third-party-services", "Third-party services"],
                      ["your-rights", "Your rights"],
                      ["policy-updates", "Policy updates"],
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
                    At EuroDigital, your privacy matters to us. This Privacy Policy explains how we collect, use, protect, and handle your information when you visit our website or contact us through our services.
                  </p>
                </motion.div>

                {/* Information We Collect */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  id="information-we-collect"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Information We Collect
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    When you interact with EuroDigital, we may collect:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Your name, email address, phone number, and business details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Information you submit through contact forms or inquiries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Basic technical data such as browser type, device, and IP address (for security and analytics)</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We only collect information that is necessary to provide our services and improve your experience.
                  </p>
                </motion.div>

                {/* How We Use Your Information */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  id="how-we-use-information"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    How We Use Your Information
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We use your information to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Respond to inquiries and provide requested services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Communicate updates, offers, or important information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Improve our website, services, and customer experience</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Maintain security and prevent misuse</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed font-medium" style={{ color: 'var(--text-secondary)' }}>
                    We do not sell, rent, or trade your personal data to third parties.
                  </p>
                </motion.div>

                {/* Data Protection */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  id="data-protection"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Data Protection
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We take appropriate technical and organizational measures to protect your information against unauthorized access, loss, or misuse. While no system is 100% secure, we continuously work to safeguard your data.
                  </p>
                </motion.div>

                {/* Third-Party Services */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  id="third-party-services"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Third-Party Services
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We may use trusted third-party tools (such as analytics or communication platforms) to operate our services efficiently. These services only access data necessary to perform their function and are required to protect your information.
                  </p>
                </motion.div>

                {/* Your Rights */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  id="your-rights"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Your Rights
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    You have the right to:
                  </p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Request access to your personal data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Ask for correction or deletion of your data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xs mt-1" style={{ color: 'var(--primary-cyan)' }}>●</span>
                      <span style={{ color: 'var(--text-secondary)' }}>Withdraw consent for communication at any time</span>
                    </li>
                  </ul>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    To exercise these rights, please contact us directly.
                  </p>
                </motion.div>

                {/* Updates to This Policy */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  id="policy-updates"
                  className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-7"
                >
                  <h2 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                    Updates to This Policy
                  </h2>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    We may update this Privacy Policy from time to time. Any changes will be reflected on this page.
                  </p>
                </motion.div>

                {/* Contact Us */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  id="contact-us"
                  className="rounded-2xl border border-cyan-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-7 shadow-sm md:p-8"
                >
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-navy)' }}>
                    Contact Us
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    If you have any questions about this Privacy Policy, please reach out via our contact page.
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

export default PrivacyPolicy;

