import { useNavigate } from "react-router-dom";
import { COMPANY_CONFIG } from "@/config/app";
import { Button } from "./ui/button";
import { Phone, ArrowRight } from "lucide-react";

const Banner = () => {
  const navigate = useNavigate();

  // Don't render if banner is disabled
  if (!COMPANY_CONFIG.banner.enabled) {
    return null;
  }

  const handleButtonClick = () => {
    if (COMPANY_CONFIG.banner.buttonLink.startsWith("/")) {
      navigate(COMPANY_CONFIG.banner.buttonLink);
    } else {
      window.open(COMPANY_CONFIG.banner.buttonLink, "_blank");
    }
  };

  return (
    <section
      className="relative py-16 overflow-hidden"
      style={{
        backgroundColor: COMPANY_CONFIG.banner.backgroundColor,
        backgroundImage: COMPANY_CONFIG.banner.backgroundImage
          ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${COMPANY_CONFIG.banner.backgroundImage}")`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-700/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {COMPANY_CONFIG.banner.title}
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {COMPANY_CONFIG.banner.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleButtonClick}
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              {COMPANY_CONFIG.banner.buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <a
              href={`tel:${COMPANY_CONFIG.contact.phone}`}
              className="flex items-center gap-2 text-white hover:text-white/80 transition-colors text-lg font-medium"
            >
              <Phone className="h-5 w-5" />
              {COMPANY_CONFIG.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-50" />
    </section>
  );
};

export default Banner;
