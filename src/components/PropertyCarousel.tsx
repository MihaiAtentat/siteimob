import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

// Mock properties data - same structure as Properties.tsx
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
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading">
            Proprietăți Disponibile
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-primary">
            Descoperă cele mai bune oportunități imobiliare din portofoliul
            nostru
          </p>
        </div>

        {/* Desktop: 4 videos in row, Mobile: Carousel */}
        <div className="relative">
          {/* Desktop Grid - Show 4 videos */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {mockProperties.map((property) => (
              <div key={property.id}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                  {/* Video Section - Portrait Format */}
                  <div className="relative">
                    <VideoPlayer
                      videoUrl={property.videoUrl}
                      thumbnailUrl={property.thumbnailUrl}
                      className="w-full h-[400px] cursor-pointer object-cover"
                      aspectRatio="portrait"
                      onClick={() => handlePropertyClick(property.id)}
                    />

                    {/* Price at bottom of video */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/70 text-white px-3 py-2 rounded-lg backdrop-blur-sm text-center">
                        <span className="text-xl font-bold font-heading">
                          {property.currency}{property.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Property Information */}
                  <div className="p-4 text-center">
                    <h3 className="text-sm font-medium text-slate-900 mb-2 font-primary line-clamp-2 h-10">
                      {property.title}
                    </h3>

                    <button
                      onClick={() => handlePropertyClick(property.id)}
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 font-primary text-sm"
                    >
                      Vezi detalii
                    </button>
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
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                      {/* Video Section - Portrait Format */}
                      <div className="relative">
                        <VideoPlayer
                          videoUrl={property.videoUrl}
                          thumbnailUrl={property.thumbnailUrl}
                          className="w-full h-[500px] cursor-pointer object-cover"
                          aspectRatio="portrait"
                          onClick={() => handlePropertyClick(property.id)}
                        />

                        {/* Price at bottom of video */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="bg-black/70 text-white px-4 py-3 rounded-lg backdrop-blur-sm text-center">
                            <span className="text-2xl font-bold font-heading">
                              {property.currency}{property.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Property Information */}
                      <div className="p-4 text-center">
                        <h3 className="text-base font-medium text-slate-900 mb-3 font-primary line-clamp-2">
                          {property.title}
                        </h3>

                        <button
                          onClick={() => handlePropertyClick(property.id)}
                          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-8 rounded-md transition-all duration-300 transform hover:scale-105 font-primary shadow-lg hover:shadow-xl tracking-wide uppercase border border-red-500/20"
                        >
                          Vezi Detalii
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
            className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-5 px-16 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-primary tracking-wider uppercase border border-yellow-500/20 min-w-[160px]"
          >
            Echipa
          </button>

          <button
            onClick={handleContactClick}
            className="bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-700 hover:to-amber-700 text-white font-bold py-5 px-16 rounded-md text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-primary tracking-wider uppercase border border-yellow-500/20 min-w-[160px]"
          >
            Contact
          </button>
        </div>
      </div>
    </section>
  );
};

export default PropertyCarousel;