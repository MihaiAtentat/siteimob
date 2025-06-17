import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DESIGN_CONFIG, COMPANY_CONFIG } from "@/config/app";
import Navigation from "../components/Navigation";
import PropertySearch from "../components/PropertySearch";
import PropertyCard from "../components/PropertyCard";
import WhatsAppButton from "../components/WhatsAppButton";
import Banner from "../components/Banner";
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-32 mb-28">
            <div className="max-w-4xl">
              {/* Main Heading - Left Aligned */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight pl-12">
                Casa Vis
              </h1>

              <p className="text-xl sm:text-2xl text-white mb-8 max-w-2xl leading-relaxed">
                {COMPANY_CONFIG.tagline}. Găsiți proprietatea perfectă sau
                vindețo la cel mai bun preț.
              </p>

              {/* Property Search Component */}
              <PropertySearch />
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* WhatsApp Button */}
      <WhatsAppButton />

      {/* Banner Section - Only on Homepage */}
      <Banner />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
