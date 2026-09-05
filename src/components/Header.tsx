import { ChevronDown, LogIn, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "../constants/booking";
import { solutionGroups, type SolutionService } from "../data/solutions";
import BookingModal from "./BookingModal";

const serviceLinks: SolutionService[] = [
  { title: "AI Business Automation", path: "/services/ai-business-automation", description: "" },
  { title: "AI Business Promotion", path: "/services/ai-business-promotion", description: "" },
  { title: "AI Agent Talk Time", path: "/services/ai-agent-talk-time", description: "" },
  { title: "AI Automated Chatbot", path: "/services/ai-automated-chatbot", description: "" },
  { title: "AI Add-on Services", path: "/services/ai-addon-services", description: "" },
  { title: "Industry Specific AI Use Cases", path: "/services/industry-specific", description: "" },
];

const aiToolLinks: SolutionService[] = [
  { title: "AI Website Builder", path: "/products/website-builder", description: "" },
  { title: "ED-CRM", path: "/products/edcrm", description: "" },
  { title: "Emotion AI", path: "/products/emotionai", description: "" },
];

function ServiceLink({
  service,
  onClick,
  className,
}: {
  service: SolutionService;
  onClick: () => void;
  className: string;
}) {
  return service.external ? (
    <a href={service.path} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
      {service.title}
    </a>
  ) : (
    <Link to={service.path} onClick={onClick} className={className}>
      {service.title}
    </Link>
  );
}

function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAiToolsOpen, setIsAiToolsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileAiToolsOpen, setIsMobileAiToolsOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const servicesCloseTimerRef = useRef<number | null>(null);
  const aiToolsCloseTimerRef = useRef<number | null>(null);
  const solutionsCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
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

  const openSolutions = () => {
    if (solutionsCloseTimerRef.current) window.clearTimeout(solutionsCloseTimerRef.current);
    setIsSolutionsOpen(true);
  };

  const scheduleSolutionsClose = () => {
    solutionsCloseTimerRef.current = window.setTimeout(() => setIsSolutionsOpen(false), 150);
  };

  const openServices = () => {
    if (servicesCloseTimerRef.current) window.clearTimeout(servicesCloseTimerRef.current);
    setIsServicesOpen(true);
  };

  const scheduleServicesClose = () => {
    servicesCloseTimerRef.current = window.setTimeout(() => setIsServicesOpen(false), 150);
  };

  const openAiTools = () => {
    if (aiToolsCloseTimerRef.current) window.clearTimeout(aiToolsCloseTimerRef.current);
    setIsAiToolsOpen(true);
  };

  const scheduleAiToolsClose = () => {
    aiToolsCloseTimerRef.current = window.setTimeout(() => setIsAiToolsOpen(false), 150);
  };

  const closeDesktopServices = () => setIsServicesOpen(false);
  const closeDesktopAiTools = () => setIsAiToolsOpen(false);
  const closeDesktopSolutions = () => setIsSolutionsOpen(false);
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

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          <Link className="font-medium tracking-wide text-slate-800 hover:text-blue-700" to="/">
            Home
          </Link>
          <div
            className="group relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleServicesClose}
            onFocus={openServices}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopServices();
            }}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 font-medium tracking-wide text-slate-800 hover:text-blue-700"
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              onClick={() => setIsServicesOpen((open) => !open)}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute left-0 w-72 pt-3 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${isServicesOpen ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-2 opacity-0"}`}
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                {serviceLinks.map((service) => (
                  <ServiceLink
                    key={service.path}
                    service={service}
                    onClick={closeDesktopServices}
                    className="block rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                  />
                ))}
              </div>
            </div>
          </div>
          <div
            className="group relative"
            onMouseEnter={openAiTools}
            onMouseLeave={scheduleAiToolsClose}
            onFocus={openAiTools}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopAiTools();
            }}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 font-medium tracking-wide text-slate-800 hover:text-blue-700"
              aria-haspopup="true"
              aria-expanded={isAiToolsOpen}
              onClick={() => setIsAiToolsOpen((open) => !open)}
            >
              AI Tools
              <ChevronDown className={`h-4 w-4 transition-transform ${isAiToolsOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute left-0 w-64 pt-3 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${isAiToolsOpen ? "pointer-events-auto visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-2 opacity-0"}`}
            >
              <div className="rounded-2xl border border-gray-100 bg-white p-2 shadow-2xl">
                {aiToolLinks.map((tool) => (
                  <ServiceLink
                    key={tool.path}
                    service={tool}
                    onClick={closeDesktopAiTools}
                    className="block rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                  />
                ))}
              </div>
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={scheduleSolutionsClose}
            onFocus={openSolutions}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) closeDesktopSolutions();
            }}
          >
            <button
              type="button"
              className="flex items-center gap-1 py-2 font-medium tracking-wide text-slate-800"
              aria-expanded={isSolutionsOpen}
              aria-haspopup="true"
              onClick={() => setIsSolutionsOpen((open) => !open)}
            >
              Solutions
              <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute -left-72 w-[680px] pt-3 transition-all duration-200 ${isSolutionsOpen ? "visible translate-y-0 opacity-100" : "pointer-events-none invisible translate-y-2 opacity-0"}`}
            >
              <div className="grid grid-cols-3 gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
                {solutionGroups.map((group) => (
                  <Link
                    key={group.slug}
                    to={`/solutions/${group.slug}`}
                    onClick={closeDesktopSolutions}
                    className="rounded-xl p-4 transition-colors hover:bg-slate-50"
                  >
                    <span className="text-sm font-bold text-blue-700">{group.title}</span>
                    <span className="mt-2 block text-xs leading-5 text-slate-600">
                      {group.shortDescription}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link className="font-medium tracking-wide text-slate-800 hover:text-blue-700" to="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
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
          className="z-50 p-2 text-slate-700 lg:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="h-full overflow-y-auto px-6 pt-24 pb-10">
          <nav className="flex flex-col gap-5 text-lg font-medium" aria-label="Mobile navigation">
            <Link to="/" onClick={closeMobileMenu} className="border-b border-gray-100 py-2 text-slate-800">
              Home
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

              <div className={`${isMobileServicesOpen ? "block" : "hidden"} space-y-2 py-4 pl-3`}>
                <Link
                  to="/services"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                >
                  All Services
                </Link>
                {serviceLinks.map((service) => (
                  <ServiceLink
                    key={service.path}
                    service={service}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  />
                ))}
              </div>
            </div>
            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-gray-100 py-2 text-slate-800"
                onClick={() => setIsMobileAiToolsOpen((open) => !open)}
                aria-expanded={isMobileAiToolsOpen}
              >
                AI Tools
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileAiToolsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`${isMobileAiToolsOpen ? "block" : "hidden"} space-y-2 py-4 pl-3`}>
                <Link
                  to="/ai-tools"
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                >
                  All AI Tools
                </Link>
                {aiToolLinks.map((tool) => (
                  <ServiceLink
                    key={tool.path}
                    service={tool}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  />
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                className="flex w-full items-center justify-between border-b border-gray-100 py-2 text-slate-800"
                onClick={() => setIsMobileSolutionsOpen((open) => !open)}
                aria-expanded={isMobileSolutionsOpen}
              >
                Solutions
                <ChevronDown className={`h-5 w-5 transition-transform ${isMobileSolutionsOpen ? "rotate-180" : ""}`} />
              </button>

              <div className={`${isMobileSolutionsOpen ? "block" : "hidden"} space-y-2 py-4 pl-3`}>
                {solutionGroups.map((group) => (
                  <Link
                    key={group.slug}
                    to={`/solutions/${group.slug}`}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  >
                    {group.title}
                  </Link>
                ))}
              </div>
            </div>

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
