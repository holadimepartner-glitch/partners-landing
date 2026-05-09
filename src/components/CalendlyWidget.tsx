import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, ChevronDown } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/partners-agency";

export default function CalendlyWidget() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pulse, setPulse] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Floating button */}
      <AnimatePresence>
        {visible && !open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
          >
            {/* Tooltip label */}
            <AnimatePresence>
              {pulse && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="bg-foreground text-white text-xs font-semibold py-2 px-3 rounded-lg shadow-lg whitespace-nowrap"
                >
                  Agenda una llamada gratuita
                  <div className="absolute right-4 -bottom-1.5 w-3 h-3 bg-foreground rotate-45" />
                </motion.div>
              )}
            </AnimatePresence>

            <button
              data-testid="button-calendly-open"
              onClick={() => setOpen(true)}
              className="relative w-14 h-14 rounded-full bg-primary text-white shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center"
            >
              {pulse && (
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
              )}
              <Calendar className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal overlay */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 md:inset-auto md:left-1/2 md:-translate-x-1/2 md:w-[720px] md:max-w-[95vw] md:h-[580px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">Agenda tu llamada gratuita</p>
                    <p className="text-xs text-muted-foreground">Sin compromisos · 30 minutos · 100% gratis</p>
                  </div>
                </div>
                <button
                  data-testid="button-calendly-close"
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center hover:bg-border/40 transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Calendly iframe */}
              <div className="flex-1 relative">
                <iframe
                  src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=279af1`}
                  className="w-full h-full min-h-[400px] md:min-h-0"
                  frameBorder="0"
                  title="Agendar llamada con Partners"
                  allow="camera; microphone"
                />
                {/* Fallback if calendly URL not configured */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/95 pointer-events-none opacity-0 [&:has(+iframe:not([src]))]:opacity-100">
                  <ChevronDown className="w-8 h-8 text-muted-foreground mb-3" />
                  <p className="text-muted-foreground text-sm">Cargando calendario...</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
