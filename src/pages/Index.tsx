import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DESIGN_CONFIG, COMPANY_CONFIG } from "@/config/app";
import Navigation from "../components/Navigation";
import PropertySearch from "../components/PropertySearch";
import PropertyCard from "../components/PropertyCard";
import WhatsAppButton from "../components/WhatsAppButton";
import Footer from "../components/Footer";

// Mock data - same as Properties page
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

// Function to get random 3 properties for featured section
const getFeaturedProperties = () => {
  const shuffled = [...mockProperties].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/18788673/pexels-photo-18788673.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1')`,
          }}
        />

        {/* Red Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-red-800/70" />

        {/* Content */}
        <div className="relative z-10 flex items-center min-h-screen pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32">
            <div className="max-w-4xl">
              {/* Main Heading - Left Aligned */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Bine ați venit la
                <span
                  className="block mt-2"
                  style={{ color: DESIGN_CONFIG.colors.primary }}
                >
                  {COMPANY_CONFIG.name}
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl leading-relaxed">
                {COMPANY_CONFIG.tagline}. Găsiți proprietatea perfectă sau vindețo la cel mai bun preț.
              </p>
                Sună-ne, iar noi te ajutăm să iei cea mai bună decizie pentru
                îndeplinirea obiectivelor TALE.
              </p>

              {/* Property Search Component */}
              <PropertySearch />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Featured Properties Section */}
      <section className="pt-8 pb-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
            {getFeaturedProperties().map((property) => (
              <div
                key={`featured-${property.id}`}
                className="w-full max-w-sm mx-auto"
              >
                <PropertyCard
                  {...property}
                  index={0}
                  onClick={() => navigate(`/proprietate/${property.id}`)}
                />
              </div>
            ))}
          </div>

          {/* Action Buttons - Large */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-6">
              Oferte imobiliare {COMPANY_CONFIG.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Descoperă cele mai bune proprietăți din portofoliul nostru
            </p>
            <div
              className="w-24 h-1 mx-auto mt-6"
              style={{ backgroundColor: DESIGN_CONFIG.colors.primary }}
            ></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;