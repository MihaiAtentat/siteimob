import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

// TODO: ÎNLOCUIEȘTE cu date din baza de date
// Folosește: const { data: properties = [], isLoading, error } = useProperties();
// Vezi DATABASE_INSTRUCTIONS.md pentru detalii complete
const mockProperties = [
  {
    id: "1",
    title: "Garsonieră dublă ultracentral - Bulevardul Carol Nr. 62",
    price: 240000,
    currency: "€",
    location: "Apartament cu 1 camera de vânzare P-ța Universității, București",
    area: 35,
    rooms: 1,
    type: "Apartament cu 1 camera de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "2",
    title: "Teren pentru construcție bloc | sau duplexuri | 710 mp",
    price: 700000,
    currency: "€",
    location: "Teren de 710 mp de vânzare Rudimea",
    area: 710,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "3",
    title: "Apartament 3 camere Pipera Școala Americană",
    price: 1200,
    currency: "€",
    location: "Apartament cu 3 camere de vânzare Pipera, București",
    area: 85,
    rooms: 3,
    type: "Apartament cu 3 camere de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "4",
    title:
      "Oportunitatea! Complex Rezidențial max.P+14 Str. Aerodrumului Militar",
    price: 558000,
    currency: "€",
    location: "Teren de 8.669 mp de vânzare Militari, București",
    area: 8669,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
];

const PropertyCarousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockProperties.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? mockProperties.length - 1 : prev - 1,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mockProperties.length);
  };

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/proprietate/${propertyId}`);
  };

  const handleTeamClick = () => {
    navigate("/echipa");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section className="bg-gray-100 pt-px pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop & Mobile Layout */}
        <div className="relative">
          {/* Desktop Grid - Show 4 videos */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 pt-8">
            {mockProperties.map((property) => (
              <div key={property.id}>
                <div className="bg-white rounded-lg shadow-sm property-card-hover luxury-shadow group overflow-hidden h-[500px] flex flex-col property-card border border-gray-200">
                  {/* Video Section - Portrait Format */}
                  <div className="relative rounded-t-lg overflow-hidden">
                    <VideoPlayer
                      videoUrl={property.videoUrl}
                      thumbnailUrl={property.thumbnailUrl}
                      className="w-full h-[380px] cursor-pointer"
                      aspectRatio="mobile"
                      onClick={() => handlePropertyClick(property.id)}
                    />
                  </div>

                  {/* Property Information - Clean White Design */}
                  <div className="px-3 pt-2 pb-2 bg-white flex flex-col h-[120px] justify-between text-center border-t border-gray-200">
                    {/* Price - Elegant dark font */}
                    <div className="text-lg font-bold text-gray-900 mb-2 font-heading">
                      {property.currency}
                      {property.price.toLocaleString()}
                    </div>

                    {/* Title/Description - Clean typography */}
                    <h3
                      className="text-xs text-gray-600 overflow-hidden flex-shrink-0 leading-tight mb-2 font-primary"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        maxHeight: "1.8rem",
                        fontWeight: "500",
                      }}
                    >
                      {property.title}
                    </h3>

                    {/* Premium Details Button - Compact Design */}
                    <div className="flex justify-center">
                      <button
                        onClick={() => handlePropertyClick(property.id)}
                        className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-primary tracking-wide uppercase border border-red-500/20 min-w-[80px]"
                      >
                        Vezi Detalii
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="lg:hidden relative">
            {/* Navigation Arrows - Mobile */}
            <button
              onClick={goToPrevious}
              onTouchStart={() => setIsAutoPlaying(false)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
              aria-label="Proprietatea anterioară"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={goToNext}
              onTouchStart={() => setIsAutoPlaying(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300"
              aria-label="Proprietatea următoare"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile Properties Display */}
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {mockProperties.map((property) => (
                  <div key={property.id} className="w-full flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg shadow-sm property-card-hover luxury-shadow group overflow-hidden w-full h-[500px] flex flex-col property-card border border-gray-200">
                      {/* Video Section - Portrait Format */}
                      <div className="relative rounded-t-lg overflow-hidden">
                        <VideoPlayer
                          videoUrl={property.videoUrl}
                          thumbnailUrl={property.thumbnailUrl}
                          className="w-full h-[380px] cursor-pointer"
                          aspectRatio="mobile"
                          onClick={() => handlePropertyClick(property.id)}
                        />
                      </div>

                      {/* Property Information - Clean White Design */}
                      <div className="px-3 pt-2 pb-2 bg-white flex flex-col h-[120px] justify-between text-center border-t border-gray-200">
                        {/* Price - Elegant dark font */}
                        <div className="text-lg font-bold text-gray-900 mb-2 font-heading">
                          {property.currency}
                          {property.price.toLocaleString()}
                        </div>

                        {/* Title/Description - Clean typography */}
                        <h3
                          className="text-xs text-gray-600 overflow-hidden flex-shrink-0 leading-tight mb-2 font-primary"
                          style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            maxHeight: "1.8rem",
                            fontWeight: "500",
                          }}
                        >
                          {property.title}
                        </h3>

                        {/* Premium Details Button - Compact Design */}
                        <div className="flex justify-center">
                          <button
                            onClick={() => handlePropertyClick(property.id)}
                            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-primary tracking-wide uppercase border border-red-500/20 min-w-[80px]"
                          >
                            Vezi Detalii
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Indicators */}
            <div className="flex justify-center mt-6 gap-2">
              {mockProperties.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-red-600 scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Proprietatea ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Premium Action Buttons */}
        <div className="flex justify-center gap-8 mt-16">
          <button
            onClick={handleTeamClick}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-16 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-primary tracking-wider uppercase border border-red-500/20 min-w-[160px]"
          >
            Echipa
          </button>

          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-5 px-16 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-primary tracking-wider uppercase border border-red-500/20 min-w-[160px]"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;
