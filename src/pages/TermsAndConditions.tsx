import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--primary-navy)' }}>
                  Terms & Conditions
                </h1>
                <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  Last Updated: 23 December 2025
                </p>
              </div>

              {/* Content */}
              <div className="space-y-8">
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="space-y-4"
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mt-12"
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default TermsAndConditions;

