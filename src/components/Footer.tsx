import { Linkedin, Facebook, Youtube, Twitter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/#services" },
  { name: "About Us", path: "/why-choose-us" },
  { name: "Testimonials", path: "/#testimonials" },
  { name: "Pricing", path: "/services/ai-business-automation#pricing" },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://www.linkedin.com/company/euro-digital-technologies-llc/" },
  { Icon: Facebook, href: "https://www.facebook.com/EuroDigitalUAE/" },
  { Icon: Youtube, href: "https://www.youtube.com/watch?v=oXOzAl0Cbkc" },
  { Icon: Twitter, href: "https://x.com/eurodigitaluae" },
];

const testimonials = [
  {
    name: "James Patterson",
    role: "CEO & Founder",
    company: "Velocity Enterprises",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    text: "Before working with EuroDigital, our business felt busy but not productive. We were putting in long hours, handling leads manually, following up late, and constantly switching between tools that never really worked together. On paper things looked fine, but behind the scenes it felt chaotic and exhausting.\n\nEuroDigital helped us step back and rebuild the foundation properly. They streamlined our workflows, automated the parts that slowed us down, and gave us clarity over our entire operation. For the first time, our systems actually supported our growth instead of holding it back. We now spend more time making decisions and less time fixing problems.",
  },
  {
    name: "Rachel Thompson",
    role: "Director of Sales",
    company: "Horizon Real Estate Group",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    text: "We had no shortage of interest in our business, but we were losing opportunities simply because we couldn't respond fast enough. Messages were missed, follow-ups were delayed, and potential customers quietly moved on.\n\nOnce EuroDigital came in, everything shifted. Leads were handled instantly, conversations were tracked properly, and nothing slipped through the cracks. It didn’t feel automated — it felt intelligent, personal, and reliable.",
  },
  {
    name: "David Kim",
    role: "Operations Manager",
    company: "Peak Performance Logistics",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    text: "Running the business used to feel like we were always reacting. Every day brought new fires to put out repetitive tasks, manual processes, and inconsistent customer experiences.\n\nEuroDigital changed that dynamic completely. The business now feels calm, controlled, and scalable.",
  },
  {
    name: "Jennifer Martinez",
    role: "Chief Technology Officer",
    company: "NextGen Solutions",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    text: "As our company grew, the cracks in our digital systems became impossible to ignore. What worked when we were small simply didn't scale.\n\nEuroDigital helped us grow smarter, not heavier.",
  },
  {
    name: "Michael Andrews",
    role: "Managing Director",
    company: "Summit Financial Partners",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    text: 'We were already doing "okay" before EuroDigital, but deep down we knew we were operating below our potential.\n\nEuroDigital brought everything together into one clean, efficient system.',
  },
  {
    name: "Sofia Laurent",
    role: "Founder & Managing Partner",
    company: "Aurora Consulting Group",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
    text: "We reached a point where growth started creating friction instead of momentum.\n\nEuroDigital aligned our systems, simplified our workflows, and gave us full clarity and control over our next phase of growth.",
  },
];

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
};

function TestimonialsSection({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  // Update visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(1); // Mobile: 1 card
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleCards);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, totalPages - 1));

  return (
    <div id="testimonials" className="relative mt-12 md:mt-16 max-w-7xl mx-auto px-4 md:px-12 scroll-mt-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-400 text-center">Testimonials</h1>
      {/* Arrows - Fixed visibility with z-index, shadow, and text color */}
      <button
        onClick={prev}
        disabled={index === 0}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-20 disabled:cursor-not-allowed hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center text-gray-900 text-2xl md:text-3xl pb-1 touch-manipulation"
        aria-label="Previous testimonials"
      >
        ‹
      </button>

      <button
        onClick={next}
        disabled={index === totalPages - 1}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200 shadow-[0_4px_12px_rgba(0,0,0,0.15)] disabled:opacity-20 disabled:cursor-not-allowed hover:bg-gray-50 active:bg-gray-100 transition-all flex items-center justify-center text-gray-900 text-2xl md:text-3xl pb-1 touch-manipulation"
        aria-label="Next testimonials"
      >
        ›
      </button>

      {/* Carousel Container */}
      <div className="overflow-hidden py-4 mx-8 md:mx-12">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3">
              {/* Card - Added h-[500px] to fix height and flex-grow on text */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col h-[500px] text-center relative">
                <div className="mb-4 text-blue-500 text-5xl font-serif opacity-50">
                  "
                </div>

                <div className="flex-grow overflow-hidden">
                  <p className="text-sm md:text-[15px] leading-relaxed mb-6 whitespace-pre-line text-gray-600 italic line-clamp-[10]">
                    {item.text}
                  </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md mb-3"
                  />
                  <h4 className="font-bold text-gray-900">{item.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                    {item.role}
                  </p>
                  <p className="text-sm font-semibold text-blue-600">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(totalPages)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-blue-500" : "w-2 bg-gray-200"
              }`}
          />
        ))}
      </div>
    </div>
  );
}

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

      {/* Testimonials carousel inserted above the footer */}
      <TestimonialsSection testimonials={testimonials} />

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

              <p className="text-[15px] leading-relaxed text-white/80 capitalize">
                visionary entrepreneurs.
                Structure, compliance, and capital-ready business formation.
              </p>



              <div className="flex items-center gap-3">
                {socialLinks.map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
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
                  <p className="hover:text-white transition-coLoading...rs cursor-pointer">
                    support@eurodigital.site
                  </p>
                  <p className="hover:text-white transition-colors cursor-pointer">
                    +971 561874676
                  </p>
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
