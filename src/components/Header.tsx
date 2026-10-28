import { Bot, Building2, ChevronDown, ContactRound, HeartHandshake, LogIn, Megaphone, MessageCircle, PanelsTopLeft, PhoneCall, Puzzle, Workflow, Menu, X, type LucideIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BOOKING_MODAL_EVENT, CONSULTATION_BOOKING_URL } from "../constants/booking";
import { solutionGroups, type SolutionService } from "../data/solutions";
import BookingModal from "./BookingModal";

const serviceDescriptions: Record<string, string> = Object.fromEntries(
  solutionGroups.flatMap((group) => group.services.map(({ title, description }) => [title, description])),
);
serviceDescriptions["Industry Specific AI Use Cases"] = serviceDescriptions["Industry-Specific AI"];

const serviceLinks: SolutionService[] = [
  { title: "AI Business Automation", path: "/services/ai-business-automation", description: serviceDescriptions["AI Business Automation"] },
  { title: "AI Business Promotion", path: "/services/ai-business-promotion", description: serviceDescriptions["AI Business Promotion"] },
  { title: "AI Agent Talk Time", path: "/services/ai-agent-talk-time", description: serviceDescriptions["AI Agent Talk Time"] },
  { title: "AI Automated Chatbot", path: "/services/ai-automated-chatbot", description: serviceDescriptions["AI Automated Chatbot"] },
  { title: "AI Add-on Services", path: "/services/ai-addon-services", description: serviceDescriptions["AI Add-on Services"] },
  { title: "Industry Specific AI Use Cases", path: "/services/industry-specific", description: serviceDescriptions["Industry Specific AI Use Cases"] },
];

const aiToolLinks: SolutionService[] = [
  { title: "AI Website Builder", path: "/products/website-builder", description: serviceDescriptions["AI Website Builder"] },
  { title: "ED-CRM", path: "/products/edcrm", description: serviceDescriptions["ED-CRM"] },
  { title: "Emotion AI", path: "/products/emotionai", description: serviceDescriptions["Emotion AI"] },
];

const navigationIcons: Record<string, LucideIcon> = {
  "AI Business Automation": Workflow,
  "AI Business Promotion": Megaphone,
  "AI Agent Talk Time": PhoneCall,
  "AI Automated Chatbot": Bot,
  "AI Add-on Services": Puzzle,
  "Industry Specific AI Use Cases": Building2,
  "AI Website Builder": PanelsTopLeft,
  "ED-CRM": ContactRound,
  "Emotion AI": HeartHandshake,
};

const solutionIcons: Record<string, LucideIcon> = {
  "digital-marketing-and-promotions": Megaphone,
  "ai-customer-engagement": MessageCircle,
  "ai-business-automation": Workflow,
};

function ServiceLink({
  service,
  onClick,
  className,
}: {
  service: SolutionService;
  onClick: () => void;
  className: string;
}) {
  const Icon = navigationIcons[service.title];
  const tooltipId = `nav-tip-${service.path.replace(/[^a-z0-9]+/gi, "-")}`;
  const tooltip = (
    <span
      id={tooltipId}
      role="tooltip"
      className="pointer-events-none absolute right-full top-0 z-[70] mr-3 max-h-[calc(100vh-7rem)] w-60 -translate-x-1 overflow-x-hidden overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-left text-xs font-normal leading-relaxed text-slate-600 opacity-0 shadow-[0_14px_36px_rgba(15,31,56,0.16)] transition duration-150 group-hover/navtip:translate-x-0 group-hover/navtip:opacity-100 group-focus-visible/navtip:translate-x-0 group-focus-visible/navtip:opacity-100 max-lg:hidden before:absolute before:-right-2 before:top-0 before:h-full before:w-3 before:content-['']"
    >
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">{service.title}</span>
      {service.description}
    </span>
  );
  return service.external ? (
    <a href={service.path} aria-describedby={tooltipId} target="_blank" rel="noreferrer" onClick={onClick} className={`group/navtip relative ${className}`}>
      {Icon && <Icon className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />}
      {service.title}
      {tooltip}
    </a>
  ) : (
    <Link to={service.path} aria-describedby={tooltipId} onClick={onClick} className={`group/navtip relative ${className}`}>
      {Icon && <Icon className="h-4 w-4 shrink-0 text-blue-600" aria-hidden="true" />}
      {service.title}
      {tooltip}
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
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
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
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY <= 24 || scrollDelta < 0) {
        setIsHeaderVisible(true);
      } else if (scrollDelta > 4 && !isMobileMenuOpen) {
        setIsHeaderVisible(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const openBookingFromCta = () => setIsBookingOpen(true);
    window.addEventListener(BOOKING_MODAL_EVENT, openBookingFromCta);
    return () => window.removeEventListener(BOOKING_MODAL_EVENT, openBookingFromCta);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
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
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-white/90 px-4 py-2.5 shadow-[0_8px_30px_rgba(15,31,56,0.06)] transition-transform duration-300 supports-[backdrop-filter]:backdrop-blur-xl md:px-10 md:py-3.5 ${
        isHeaderVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" onClick={closeMobileMenu} className="z-50">
          <img
            src="/logo/euro-digital-navbar.png"
            alt="EuroDigital"
            className="h-10 w-auto transition-all md:h-14"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          <Link className="touch-target inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700" to="/">
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
              className="touch-target flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
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
                    className="flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
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
              className="touch-target flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
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
                    className="flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
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
              className="touch-target flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
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
                  (() => {
                    const Icon = solutionIcons[group.slug];
                    return (
                      <Link
                        key={group.slug}
                        to={`/solutions/${group.slug}`}
                        onClick={closeDesktopSolutions}
                        aria-describedby={`solution-tip-${group.slug}`}
                        className="group/solution relative rounded-xl p-4 transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      >
                        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover/solution:bg-blue-100">
                          <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <span className="text-sm font-bold text-blue-700">{group.title}</span>
                        <span className="mt-2 block text-xs leading-5 text-slate-600">
                          {group.shortDescription}
                        </span>
                        <span id={`solution-tip-${group.slug}`} role="tooltip" className="pointer-events-none absolute left-1/2 top-full z-[70] mt-2 w-64 -translate-x-1/2 -translate-y-1 rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-left text-xs font-normal leading-relaxed text-slate-600 opacity-0 shadow-[0_14px_36px_rgba(15,31,56,0.16)] transition duration-150 group-hover/solution:translate-y-0 group-hover/solution:opacity-100 group-focus-visible/solution:translate-y-0 group-focus-visible/solution:opacity-100 max-lg:hidden">
                          <span className="mb-1 block text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-700">{group.title}</span>
                          {group.shortDescription}
                        </span>
                      </Link>
                    );
                  })()
                ))}
              </div>
            </div>
          </div>

          <Link className="touch-target inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold tracking-wide text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700" to="/contact">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="touch-target touch-feedback inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-bold text-slate-800 transition-all hover:-translate-y-0.5 hover:bg-slate-50"
            style={{ borderColor: "var(--primary-blue)" }}
          >
            <LogIn className="h-4 w-4" />
            Login
          </Link>
          <button
            type="button"
            onClick={() => setIsBookingOpen(true)}
            className="touch-target touch-feedback rounded-xl px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(24,182,227,0.28)] transition-all hover:-translate-y-0.5 hover:brightness-110"
            style={{ backgroundColor: "var(--primary-blue)" }}
          >
            Book Consultation
          </button>
        </div>

        <button
          type="button"
          className="touch-target touch-feedback z-50 flex items-center justify-center rounded-xl p-2 text-slate-700 lg:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation-panel"
        >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      <div
        id="mobile-navigation-panel"
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
      >
        <div className="h-full overflow-y-auto bg-slate-50/80 px-5 pb-10 pt-24">
          <nav className="mx-auto flex max-w-md flex-col gap-2 text-lg font-medium" aria-label="Mobile navigation">
            <Link to="/" onClick={closeMobileMenu} className="touch-target flex items-center rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
              Home
            </Link>
            <div>
              <button
                type="button"
                className="touch-target touch-feedback flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70"
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
                  className="touch-target flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                >
                  All Services
                </Link>
                {serviceLinks.map((service) => (
                  <ServiceLink
                    key={service.path}
                    service={service}
                    onClick={closeMobileMenu}
                    className="touch-target flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  />
                ))}
              </div>
            </div>
            <div>
              <button
                type="button"
                className="touch-target touch-feedback flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70"
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
                  className="touch-target flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-blue-700"
                >
                  All AI Tools
                </Link>
                {aiToolLinks.map((tool) => (
                  <ServiceLink
                    key={tool.path}
                    service={tool}
                    onClick={closeMobileMenu}
                    className="touch-target flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  />
                ))}
              </div>
            </div>

            <div>
              <button
                type="button"
                className="touch-target touch-feedback flex w-full items-center justify-between rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70"
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
                    className="touch-target flex items-center rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-700"
                  >
                    {group.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/contact" onClick={closeMobileMenu} className="touch-target flex items-center rounded-xl bg-white px-4 py-3 text-slate-800 shadow-sm ring-1 ring-slate-200/70">
              Contact
            </Link>
            <Link
              to="/login"
              onClick={closeMobileMenu}
              className="touch-target touch-feedback mt-3 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-white shadow-lg"
              style={{ backgroundColor: "var(--primary-blue)" }}
            >
              <LogIn className="h-5 w-5" />
              Login
            </Link>
          </nav>
        </div>
      </div>
      <BookingModal
        url={isBookingOpen ? CONSULTATION_BOOKING_URL : null}
        onClose={closeBookingModal}
        title="Book a Consultation"
      />
    </header>
  );
}

export default Header;
