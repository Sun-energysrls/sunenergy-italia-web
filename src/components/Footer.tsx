import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/sunenergy-logo.png";
import { reportConversion } from "@/utils/analytics";

const Footer = () => {
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
                { label: "Home", href: "/" },
                { label: "Fotovoltaico", href: "/fotovoltaico" },
                { label: "Illuminazione", href: "/illuminazione" },
                { label: "Contatti", href: "/contatti" },
              ].map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-primary-foreground/60 hover:text-orange text-sm text-left transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Servizi</h4>
            <div className="flex flex-col gap-2 text-primary-foreground/60 text-sm">
              <span>Impianti Utility-Scale</span>
              <span>Import/Export PV</span>
              <span>Illuminazione LED</span>
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
            <a href="mailto:s.energysrls@gmail.com" onClick={(e) => reportConversion(e, 'AW-11053599486/uOUbCKHDhqkcEP6V4pYp', 'mailto:s.energysrls@gmail.com')} className="text-primary-foreground/60 text-sm hover:text-orange transition-colors">
              s.energysrls@gmail.com
            </a>
            <br />
            <a href="tel:+393338590639" onClick={(e) => reportConversion(e, 'AW-11053599486/YyHGCJ7DhqkcEP6V4pYp', 'tel:+393338590639')} className="text-primary-foreground/60 text-sm hover:text-orange transition-colors">
              +39 333 859 0639
            </a>
          </div>
        </div>

        {/* Legal Block */}
        <div className="border-t border-navy-light/30 pt-6 mb-6">
          <div className="text-primary-foreground/40 text-xs leading-relaxed space-y-1 text-center">
            <p className="font-medium text-primary-foreground/50">SUN-ENERGY SOCIETÀ A RESPONSABILITÀ LIMITATA SEMPLIFICATA</p>
            <p>Sede Legale: Via Cecconi 71 – 67051 Avezzano (AQ)</p>
            <p>
              P.IVA: 02136450661 &nbsp;|&nbsp; EORI: IT02136450661
            </p>
            <p>
              Email: <a href="mailto:s.energysrls@gmail.com" onClick={(e) => reportConversion(e, 'AW-11053599486/uOUbCKHDhqkcEP6V4pYp', 'mailto:s.energysrls@gmail.com')} className="hover:text-primary-foreground/70 transition-colors">s.energysrls@gmail.com</a>
              &nbsp;|&nbsp;
              PEC: <a href="mailto:sun-energysrls@pec.it" onClick={(e) => reportConversion(e, 'AW-11053599486/uOUbCKHDhqkcEP6V4pYp', 'mailto:sun-energysrls@pec.it')} className="hover:text-primary-foreground/70 transition-colors">sun-energysrls@pec.it</a>
              &nbsp;|&nbsp;
              Tel: <a href="tel:+393338590639" onClick={(e) => reportConversion(e, 'AW-11053599486/YyHGCJ7DhqkcEP6V4pYp', 'tel:+393338590639')} className="hover:text-primary-foreground/70 transition-colors">+39 333 859 0639</a>
            </p>
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
