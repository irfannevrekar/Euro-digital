import { Linkedin, Facebook, Youtube, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  return (
    <>
      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="cursor-pointer absolute top-4 right-4 p-2 hover:bg-black rounded-lg z-10"
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

      <footer
        className="w-full py-16 md:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgroundImages/Footerbg.png')",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* MAIN GRID - 4 Column Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-12 pb-16 border-t border-white/20">
            {/* COLUMN 1 — BRAND (Logo size increased significantly) */}
            <div className="space-y-4 flex flex-col items-start">
              <Link to="/">
                <img
                  src="/logo/euro-digital-white.png"
                  alt="Euro Digital Technologies"
                  className="h-20 md:h-36 w-auto object-contain" // Even larger logo

                />
              </Link>

              <p className="text-[15px] leading-relaxed text-white/80">
                EuroDigital is a digital marketing and AI automation company
                based in Abu Dhabi, UAE. We help businesses grow through
                marketing, lead generation, CRM, websites, and practical
                automation.
              </p>



              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 2 — CERTIFICATIONS (Now centered and larger) */}
            <div className="flex flex-col items-center lg:items-center space-y-8">
              <h3 className="text-lg font-semibold text-white">
                Certifications
              </h3>

              <div className="flex flex-col items-center gap-6">
                <button
                  onClick={() => setSelectedCert("/logo/icv-certificate.png")}
                  className="group flex justify-center cursor-pointer"
                >
                  <img
                    src="/logo/iclogo.png"
                    alt="ICV Certification"
                    className="h-16 md:h-20 opacity-90 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
                  />
                </button>

                <button
                  onClick={() => setSelectedCert("/logo/iso-certificate.png")}
                  className="group flex justify-center cursor-pointer"
                >
                  <img
                    src="/logo/iso-1.png"
                    alt="ISO Certification"
                    className="h-16 md:h-20 opacity-90 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition duration-300"
                  />
                </button>
              </div>
            </div>

            {/* COLUMN 3 — QUICK LINKS */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white lg:text-left">
                Quick Links
              </h3>
              <ul className="space-y-4 text-left">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group inline-block text-[15px] text-white/70 hover:text-white"
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
              <h3 className="text-lg font-semibold mb-6 text-white">
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
                  <a className="block hover:text-white transition-colors" href="mailto:support@eurodigital.site">
                    support@eurodigital.site
                  </a>
                  <a className="block hover:text-white transition-colors" href="tel:+971561874676">
                    +971 56 187 4676
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ... (Bottom bar remains the same) */}
        </div>
      </footer>
    </>
  );
}

export default Footer;
