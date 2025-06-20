import { Phone, Mail, MapPin, Map } from "lucide-react";
import { COMPANY_CONFIG, DESIGN_CONFIG } from "@/config/app";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openInMaps = () => {
    const coords = COMPANY_CONFIG.address.coordinates;
    const url = `https://www.google.com/maps/search/?api=1&query=${coords}`;
    window.open(url, "_blank");
  };

  return (
    <footer className="bg-red-50 text-red-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Company Info & Contact */}
          <div className="space-y-6">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                {COMPANY_CONFIG.logoImage ? (
                  <img
                    src={COMPANY_CONFIG.logoImage}
                    alt={`${COMPANY_CONFIG.name} Logo`}
                    className="rounded-lg object-contain"
                    style={{
                      width: COMPANY_CONFIG.logoSize.width,
                      height: COMPANY_CONFIG.logoSize.height,
                    }}
                  />
                ) : (
                  <div
                    className="flex items-center justify-center text-white text-lg font-medium rounded-lg"
                    style={{
                      backgroundColor: DESIGN_CONFIG.colors.primary,
                      width: COMPANY_CONFIG.logoSize.width,
                      height: COMPANY_CONFIG.logoSize.height,
                    }}
                  >
                    {COMPANY_CONFIG.logoText}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold text-red-900">
                    {COMPANY_CONFIG.name}
                  </h3>
                  <p className="text-sm text-red-600">
                    {COMPANY_CONFIG.tagline}
                  </p>
                </div>
              </div>
              <p className="text-red-600 text-sm leading-relaxed">
                Experți în domeniul imobiliar cu experiență vastă în vânzarea
                proprietăților. Vă oferim consultanță profesională și servicii
                de calitate.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-900">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <a
                    href={`tel:${COMPANY_CONFIG.contact.phone}`}
                    className="text-red-700 hover:text-red-900 transition-colors text-sm"
                  >
                    {COMPANY_CONFIG.contact.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                  <a
                    href={`mailto:${COMPANY_CONFIG.contact.email}`}
                    className="text-red-700 hover:text-red-900 transition-colors text-sm"
                  >
                    {COMPANY_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Location & Map */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-900">
              Locația Noastră
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-red-700 text-sm">
                  <div>{COMPANY_CONFIG.address.street}</div>
                  <div>
                    {COMPANY_CONFIG.address.city}{" "}
                    {COMPANY_CONFIG.address.postalCode}
                  </div>
                  <div>{COMPANY_CONFIG.address.country}</div>
                </div>
              </div>

              {/* Maps Button */}
              <button
                onClick={openInMaps}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                <Map className="h-4 w-4" />
                <span>Vezi pe Google Maps</span>
              </button>

              {/* Coordinates for reference */}
              <div className="text-xs text-red-500 font-mono">
                {COMPANY_CONFIG.address.coordinates}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-red-900">
              Navigare Rapidă
            </h4>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-red-700 hover:text-red-900 transition-colors text-sm"
              >
                Acasă
              </a>
              <a
                href="/proprietati"
                className="block text-red-700 hover:text-red-900 transition-colors text-sm"
              >
                Proprietăți
              </a>
              <a
                href="/echipa"
                className="block text-red-700 hover:text-red-900 transition-colors text-sm"
              >
                Echipa Noastră
              </a>
              <a
                href="/contact"
                className="block text-red-700 hover:text-red-900 transition-colors text-sm"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-red-600 text-sm">
              © {currentYear} {COMPANY_CONFIG.name}. Toate drepturile
              rezervate.
            </div>
            <div className="flex space-x-6 text-sm text-red-600">
              <a href="#" className="hover:text-red-900 transition-colors">
                Politica de Confidențialitate
              </a>
              <a href="#" className="hover:text-red-900 transition-colors">
                Termeni și Condiții
              </a>
              <a href="#" className="hover:text-red-900 transition-colors">
                GDPR
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
