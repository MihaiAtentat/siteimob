import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Logo and Company Info - Left */}
          <div className="space-y-4">
            {/* Logo Placeholder */}
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4">
              <span className="text-white font-bold text-xl">CV</span>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Agenția Casa Vis
              </h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-green-500" />
                  <span>0742 801 123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-400" />
                  <span>casavis@yahoo.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <span>Bulevardul Republicii 17, Onești</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - Middle */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigare</h4>
            <div className="space-y-2">
              <a
                href="/proprietati"
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Proprietăți
              </a>
              <a
                href="/echipa"
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Echipa
              </a>
              <a
                href="/contact"
                className="block text-gray-300 hover:text-red-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Map - Right */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Locația noastră
            </h4>
            <div className="bg-gray-700 rounded-lg overflow-hidden h-48">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.123456789!2d26.76668325467285!3d46.248578525004824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDE0JzU0LjkiTiAyNsKwNDYnMDAuMSJF!5e0!3m2!1sen!2sro!4v1234567890123`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            <a
              href={`https://www.google.com/maps?q=46.248578525004824,26.76668325467285`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-red-400 hover:text-red-300 transition-colors text-sm"
            >
              Deschide în Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Agenția Casa Vis. Toate drepturile
            rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
