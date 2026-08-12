import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "../constants/booking";
import BookingModal from "./BookingModal";

type NavigationItem = {
  title: string;
  path: string;
  external?: boolean;
};

const navigationGroups: Array<{
  title: string;
  items: NavigationItem[];
}> = [
  {
    title: "Digital Marketing & Growth",
    items: [
      {
        title: "AI Digital Marketing",
        path: "/services/ai-business-promotion",
      },
      {
        title: "Website & Funnel Builder",
        path: "/products/website-builder",
      },
      { title: "ED-CRM & Lead Management", path: "/products/edcrm" },
      {
        title: "WhatsApp Customer Engagement",
        path: "https://www.eurodigital.marketing/",
        external: true,
      },
    ],
  },
  {
    title: "AI Customer Engagement",
    items: [
      {
        title: "AI Voice Agents",
        path: "/services/ai-agent-talk-time",
      },
      {
        title: "AI Automated Chatbots",
        path: "/services/ai-automated-chatbot",
      },
      { title: "Emotion AI", path: "/products/emotionai" },
    ],
  },
  {
    title: "Business Automation",
    items: [
      {
        title: "AI Business Automation",
        path: "/services/ai-business-automation",
      },
      {
        title: "AI Add-on Services",
        path: "/services/ai-addon-services",
      },
      {
        title: "Industry-Specific AI",
        path: "/services/industry-specific",
      },
    ],
  },
];

function NavigationLink({
  item,
  onClick,
  className,
}: {
  item: NavigationItem;
  onClick: () => void;
  className: string;
}) {
  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {item.title}
      </a>
    );
  }

  return (
    <Link to={item.path} onClick={onClick} className={className}>
      {item.title}
    </Link>
  );
}

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const openServices = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    setIsServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    closeTimerRef.current = window.setTimeout(() => setIsServicesOpen(false), 150);
  };

  const closeDesktopServices = () => setIsServicesOpen(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const closeBookingModal = useCallback(() => setIsBookingOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white px-4 py-3 shadow-sm md:px-10 md:py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" onClick={closeMobileMenu} className="z-50">
          <img
            src="/logo/logo.svg"
            alt="EuroDigital"
            className="h-12 transition-all md:h-18"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <Link className="font-medium tracking-wide text-slate-800 hover:text-blue-700" to="/">
            Home
          </Link>
          <Link
            className="font-semibold tracking-wide text-blue-700"
            to="/services/ai-business-promotion"
          >
            Digital Marketing
          </Link>

          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleServicesClose}
            onFocus={openServices}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopServices();
            }}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 font-medium tracking-wide text-slate-800"
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute -left-60 w-[760px] pt-3 transition-all duration-200 ${isServicesOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0 pointer-events-none"}`}
            >
              <div className="grid grid-cols-3 gap-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-2xl">
                {navigationGroups.map((group) => (
                  <section key={group.title}>
                    <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-blue-700">
                      {group.title}
                    </h2>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <NavigationLink
                          key={item.title}
                          item={item}
                          onClick={closeDesktopServices}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                        />
                      ))}
                    </div>
                  </section>
                ))}
                <Link
                  to="/services"
                  onClick={closeDesktopServices}
                  className="col-span-3 border-t border-slate-100 pt-4 text-sm font-semibold text-blue-700"
                >
                  View all digital marketing and growth services
                </Link>
              </div>
            </div>
          </div>

          <Link className="font-medium tracking-wide text-slate-800 hover:text-blue-700" to="/about">
            About
          </Link>
          <Link className="font-medium tracking-wide text-slate-800 hover:text-blue-700" to="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-md border px-5 py-2.5 font-semibold text-slate-800 transition-all hover:bg-slate-50"
            style={{ borderColor: "var(--primary-blue)" }}
          >
            <LogIn className="h-4 w-4" />
            Login
          </Link>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="rounded-md px-6 py-2.5 font-semibold text-white shadow-lg transition-all hover:brightness-110"
            style={{ backgroundColor: "var(--primary-blue)" }}
          >
            Book Consultation
          </button>
        </div>

        <button
          type="button"
          className="z-50 p-2 text-slate-700 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full overflow-y-auto px-6 pt-24 pb-10">
          <nav className="flex flex-col gap-5 text-lg font-medium" aria-label="Mobile navigation">
            <Link to="/" onClick={closeMobileMenu} className="border-b border-gray-100 py-2 text-slate-800">
              Home
            </Link>
            <Link
              to="/services/ai-business-promotion"
              onClick={closeMobileMenu}
              className="border-b border-gray-100 py-2 font-semibold text-blue-700"
            >
              Digital Marketing
            </Link>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-gray-100 py-2 text-slate-800"
                onClick={() => setIsMobileServicesOpen((open) => !open)}
                aria-expanded={isMobileServicesOpen}
              >
                Services
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`${isMobileServicesOpen ? "block" : "hidden"} space-y-6 py-5 pl-3`}>
                {navigationGroups.map((group) => (
                  <section key={group.title}>
                    <h2 className="mb-2 text-xs font-bold uppercase tracking-wider text-blue-700">
                      {group.title}
                    </h2>
                    <div className="flex flex-col gap-2">
                      {group.items.map((item) => (
                        <NavigationLink
                          key={item.title}
                          item={item}
                          onClick={closeMobileMenu}
                          className="py-1 text-sm font-medium text-slate-600 hover:text-blue-700"
                        />
                      ))}
                    </div>
                  </section>
                ))}
                <Link to="/services" onClick={closeMobileMenu} className="block text-sm font-semibold text-blue-700">
                  View all services
                </Link>
              </div>
            </div>

            <Link to="/about" onClick={closeMobileMenu} className="border-b border-gray-100 py-2 text-slate-800">
              About
            </Link>
            <Link to="/contact" onClick={closeMobileMenu} className="border-b border-gray-100 py-2 text-slate-800">
              Contact
            </Link>
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-white shadow-lg"
              style={{ backgroundColor: "var(--primary-blue)" }}
            >
              <LogIn className="h-5 w-5" />
              Login
            </Link>
          </nav>
        </div>
      </div>
      <BookingModal
        url={isBookingOpen ? BOOKING_URL : null}
        onClose={closeBookingModal}
        title="Book a Consultation"
      />
    </header>
  );
}

export default Header;
