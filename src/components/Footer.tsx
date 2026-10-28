import { Linkedin, Facebook, Youtube, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterCallToAction from "./FooterCallToAction";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "AI Tools", path: "/ai-tools" },
  { name: "Digital Marketing and Promotions", path: "/solutions/digital-marketing-and-promotions" },
  { name: "AI Customer Engagement", path: "/solutions/ai-customer-engagement" },
  { name: "AI Business Automation", path: "/solutions/ai-business-automation" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/euro-digital-technologies-llc/", label: "EuroDigital on LinkedIn" },
  { Icon: Facebook, href: "https://www.facebook.com/EuroDigitalUAE/", label: "EuroDigital on Facebook" },
  { Icon: Youtube, href: "https://www.youtube.com/watch?v=oXOzAl0Cbkc", label: "EuroDigital on YouTube" },
  { Icon: Twitter, href: "https://x.com/eurodigitaluae", label: "EuroDigital on X" },
];

function Footer() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedCert) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCert(null);
    };
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedCert]);

  return (
    <>
      {/* Certificate Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Certification document"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certification document"
              className="touch-target touch-feedback absolute right-3 top-3 z-10 rounded-full bg-white/95 p-2 text-slate-700 shadow transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedCert}
              alt="Certificate"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      <FooterCallToAction />

      <footer
        className="relative isolate w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
        style={{
          backgroundImage: "url('/backgroundImages/Footerbg.png')",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-slate-950/80" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-12 md:py-10">
          {/* MAIN GRID - 4 Column Layout */}
          <div className="grid grid-cols-1 gap-8 border-t border-white/20 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {/* COLUMN 1 — BRAND (Logo size increased significantly) */}
            <div className="flex flex-col items-start space-y-3">
              <Link to="/">
                <img
                  src="/logo/euro-digital-white.png"
                  alt="Euro Digital Technologies"
                    className="h-16 w-auto object-contain md:h-20"

                />
              </Link>

              <p className="text-[15px] leading-relaxed text-white/80">
                EuroDigital is a digital marketing and AI automation company
                based in Abu Dhabi, UAE. We help businesses grow through
                marketing, lead generation, CRM, websites, and practical
                automation.
              </p>



              <div className="flex items-center gap-2">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="touch-target touch-feedback flex items-center justify-center rounded-lg text-white/70 transition-all hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2 — CERTIFICATIONS (Now centered and larger) */}
            <div className="flex flex-col items-center space-y-5 lg:items-center">
              <h3 className="text-lg font-semibold text-white">
                Certifications
              </h3>

              <div className="flex flex-col items-center gap-4">
                <button
                  onClick={() => setSelectedCert("/logo/icv-certificate.png")}
                    className="touch-target touch-feedback group flex justify-center cursor-pointer"
                >
                  <img
                    src="/logo/iclogo.png"
                    alt="ICV Certification"
                    className="h-14 md:h-16 opacity-90 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
                  />
                </button>

                <button
                  onClick={() => setSelectedCert("/logo/iso-certificate.png")}
                    className="touch-target touch-feedback group flex justify-center cursor-pointer"
                >
                  <img
                    src="/logo/iso-1.png"
                    alt="ISO Certification"
                    className="h-14 md:h-16 opacity-90 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
                  />
                </button>
              </div>
            </div>

            {/* COLUMN 3 — QUICK LINKS */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white lg:text-left">
                Quick Links
              </h3>
              <ul className="space-y-2 text-left lg:space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                  className="touch-target group inline-flex items-center text-[15px] lg:min-h-0 lg:min-w-0 text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                    >
                      {link.name}
                      <span className="block h-px bg-white w-0 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COLUMN 4 — CONTACT US */}
            <div className="text-left">
              <h3 className="text-lg font-semibold mb-4 text-white">
                Contact Us
              </h3>
              <div className="space-y-4 text-[15px] text-white/70">
                <p className="leading-relaxed">
                  Euro Digital Technologies LLC <br />
                  Mussafah Shabiya MBZ-12, <br />
                  Building No. C-201, Office No. M-03, <br />
                  Abu Dhabi, UAE
                </p>
                <div className="space-y-2">
                  <a className="touch-target inline-flex items-center hover:text-white transition-colors" href="mailto:support@eurodigital.site">
                    support@eurodigital.site
                  </a>
                  <a className="touch-target inline-flex items-center hover:text-white transition-colors" href="tel:+971561874676">
                    +971 56 187 4676
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-white/20 pt-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Euro Digital Technologies LLC. All rights reserved.</p>
            <nav aria-label="Legal links" className="flex gap-5">
              <Link className="touch-target inline-flex items-center transition-colors hover:text-white" to="/privacy">Privacy</Link>
              <Link className="touch-target inline-flex items-center transition-colors hover:text-white" to="/terms">Terms</Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
