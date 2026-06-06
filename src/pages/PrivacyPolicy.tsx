import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

function PrivacyPolicy() {
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
                  Privacy Policy
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
                    At EuroDigital, your privacy matters to us. This Privacy Policy explains how we collect, use, protect, and handle your information when you visit our website or contact us through our services.
                  </p>
                </motion.div>

                {/* Information We Collect */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-semibold" style={{ color: 'var(--primary-navy)' }}>
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
                  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 mt-12"
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
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default PrivacyPolicy;

