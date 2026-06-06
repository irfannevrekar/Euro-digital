import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    ctaUrl?: string;
    ctaText?: string;
}

const Modal = ({ isOpen, onClose, title, children, ctaUrl, ctaText }: ModalProps) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/50">
                            <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-500 hover:text-slate-800"
                                aria-label="Close modal"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar text-slate-600 leading-relaxed text-lg">
                            {children}
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-4 bg-slate-50/50 border-t border-slate-100 flex justify-end gap-3">
                            <button
                                onClick={onClose}
                                className="px-6 py-2 bg-slate-100 text-slate-700 font-semibold rounded-full hover:bg-slate-200 transition-colors"
                            >
                                Close
                            </button>
                            {ctaUrl && (
                                <a
                                    href={ctaUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-colors inline-block text-center"
                                >
                                    {ctaText || "Contact Sale"}
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
