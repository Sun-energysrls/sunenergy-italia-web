import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/sunenergy-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Fotovoltaico", href: "/fotovoltaico" },
  { label: "Illuminazione", href: "/illuminazione" },
  { label: "Contatti", href: "/contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="SunEnergy SRLS" className="h-14 md:h-16 drop-shadow-lg" style={{ mixBlendMode: 'screen' }} />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === item.href
                  ? "text-orange"
                  : "text-primary-foreground/80 hover:text-orange"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+393338590639"
            className="flex items-center gap-2 bg-orange text-orange-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:brightness-110 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Chiamaci
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-primary-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-dark/95 backdrop-blur-md border-t border-navy-light/20"
          >
            <div className="container mx-auto py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-left py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? "text-orange"
                      : "text-primary-foreground/80 hover:text-orange"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="tel:+393338590639"
                className="flex items-center gap-2 bg-orange text-orange-foreground px-5 py-2.5 rounded-lg text-sm font-semibold w-fit"
              >
                <Phone className="w-4 h-4" />
                Chiamaci
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
