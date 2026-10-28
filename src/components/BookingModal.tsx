import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface BookingModalProps {
  url: string | null;
  onClose: () => void;
  title?: string;
}

function BookingModal({ url, onClose, title = "Book a Demo" }: BookingModalProps) {
  useEffect(() => {
    if (!url) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [url, onClose]);

  if (!url) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm"
        aria-label="Close booking modal"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative z-10 flex h-[90vh] max-h-[850px] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <h2 id="booking-modal-title" className="text-xl font-semibold text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="touch-target touch-feedback flex items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Close booking modal"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <iframe
          src={url}
          title={`${title} appointment`}
          width="100%"
          height="100%"
          scrolling="yes"
          className="min-h-0 w-full flex-1 bg-white"
          style={{ border: 0 }}
        />
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target flex shrink-0 items-center justify-center border-t border-slate-200 px-5 py-3 text-center text-sm font-medium text-blue-700 hover:text-blue-900"
        >
          Having trouble viewing the calendar? Open it in a new tab.
        </a>
      </div>
    </div>
    ,
    document.body,
  );
}

export default BookingModal;
