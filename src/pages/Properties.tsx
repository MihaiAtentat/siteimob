import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Navigation from "../components/Navigation";
import PropertyCard from "../components/PropertyCard";
import PropertyFilters from "../components/PropertyFilters";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

// TODO: ÎNLOCUIEȘTE cu date din baza de date
// Folosește: const { data: properties = [], isLoading, error } = useProperties();
// Vezi DATABASE_INSTRUCTIONS.md pentru detalii complete
const mockProperties = [
  {
    id: "1",
    title: "Garsonieră dublă ultracentral - Bulevardul Carol Nr. 62",
    price: 61000,
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
    price: 69900,
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
    price: 150000,
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
    price: 1100000,
    location: "Teren de 8.669 mp de vânzare Militari, București",
    area: 8669,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "5",
    title: "Teren pentru construcție hala | 2700 mp | Chiaoda",
    price: 270000,
    location: "Teren de 2717 mp de vânzare Săguleț, Timisoara",
    area: 2717,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
  {
    id: "6",
    title: "Teren de vânzare Domestești - Str. Narciselor - 2032mp",
    price: 185000,
    location: "Teren de vânzare Domestești",
    area: 2032,
    type: "Teren de vânzare",
    videoUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    badges: [],
  },
];

const Properties = () => {
  const navigate = useNavigate();
  const [properties] = useState(mockProperties);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const propertiesPerPage = 9; // 3x3 grid

  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = properties.slice(
    startIndex,
    startIndex + propertiesPerPage,
  );

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/proprietate/${propertyId}`);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-20 sm:pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16 text-center pb-6 border-b border-gray-200">
            <h1 className="text-3xl lg:text-4xl font-normal text-slate-800 font-heading">
              Oferte imobiliare
            </h1>
          </div>

          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-[1.02] font-primary tracking-wide uppercase border border-red-500/20"
            >
              {showFilters ? (
                <>
                  <X className="w-5 h-5" />
                  Ascunde filtrele
                </>
              ) : (
                <>
                  <SlidersHorizontal className="w-5 h-5" />
                  Afișează filtrele
                </>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-gray-100 pt-8">
            {/* Main Content - Properties Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                {currentProperties.map((property, index) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    index={index}
                    onClick={() => handlePropertyClick(property.id)}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10 flex justify-center items-center gap-3">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="bg-slate-700 hover:bg-slate-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-w-[70px] shadow-sm hover:shadow-md"
                >
                  ‹ Anterior
                </button>
                <span className="text-slate-500 text-sm px-3 font-medium">
                  {currentPage} / {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="bg-slate-700 hover:bg-slate-800 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-w-[70px] shadow-sm hover:shadow-md"
                >
                  Următor ›
                </button>
              </div>
            </div>

            {/* Sidebar - Filters */}
            <div
              className={`lg:col-span-1 order-first lg:order-last lg:border-l lg:border-gray-200 lg:pl-8 ${
                showFilters ? "block" : "hidden lg:block"
              }`}
            >
              <PropertyFilters />
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Properties;
