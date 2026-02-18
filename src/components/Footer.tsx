import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/sunenergy-logo.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark text-primary-foreground">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="SunEnergy SRLS" className="h-10 mb-4" />
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              SunEnergy SRLS — Soluzioni fotovoltaiche utility-scale per un futuro energetico sostenibile.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Link Rapidi</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", href: "#home" },
                { label: "Chi Siamo", href: "#about" },
                { label: "Servizi", href: "#services" },
                { label: "Progetti", href: "#projects" },
              ].map((l) => (
                <button
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-primary-foreground/60 hover:text-orange text-sm text-left transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Servizi</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/60 text-sm">
              <span>Impianti Utility-Scale</span>
              <span>Import/Export PV</span>
              <span>Servizi EPC</span>
              <span>Consulenza Tecnica</span>
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Seguici</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center hover:bg-orange transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center hover:bg-orange transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center hover:bg-orange transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-sm">info@sunenergysrls.com</p>
          </div>
        </div>

        <div className="border-t border-navy-light/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/40">
          <p>© {new Date().getFullYear()} SunEnergy SRLS. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground/70 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
