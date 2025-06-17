import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Calendar,
  Eye,
} from "lucide-react";
import Navigation from "../components/Navigation";
import VideoPlayer from "../components/VideoPlayer";
import AgentContact from "../components/AgentContact";
import WhatsAppButton from "../components/WhatsAppButton";
import PropertyDescription from "../components/PropertyDescription";
import RelatedProperties from "../components/RelatedProperties";
import BackToProperties from "../components/BackToProperties";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

// Mock property data - replace with API call
const mockPropertyData = {
  id: "1",
  title: "Garsonieră dublă ultracentral - Bulevardul Carol Nr. 62",
  price: 61000,
  propertyId: "CP5276903",
  location: "Apartament cu 1 camera de vânzare P-ța Universității, București",
  area: 35,
  rooms: 1,
  floor: 3,
  totalFloors: 10,
  year: 1960,
  propertyType: "Apartament",
  videos: [
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
  ],
  thumbnails: [
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  badges: [],
  specifications: {
    "Tip proprietate": "Apartament",
    Suprafața: "35 mp",
    Etaj: "3 din 10",
    Camere: "1 cameră",
    "Anul construcției": "1960",
  },
  facilities: [
    "Apă",
    "Gaz",
    "Scări acțuate",
    "Canalizare",
    "Iluminat stradal",
    "Mijloace de transport în comun",
  ],
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [property] = useState(mockPropertyData);

  const nextVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev < property.videos.length - 1 ? prev + 1 : 0,
    );
  };

  const prevVideo = () => {
    setCurrentVideoIndex((prev) =>
      prev > 0 ? prev - 1 : property.videos.length - 1,
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/proprietati")}
            className="text-slate-700 hover:bg-slate-200 mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Înapoi la proprietăți
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Video Player */}
            <div className="lg:col-span-2">
              {/* Property Header */}
              <div className="mb-6">
                {property.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {property.badges.map((badge, index) => (
                      <Badge key={index} className="bg-red-600/20 text-red-700">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}

                <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                  {property.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-4">
                  <span className="text-red-600 font-bold text-2xl">
                    €{property.price.toLocaleString()}
                  </span>
                  <span>ID {property.propertyId}</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-red-600" />
                    <span>{property.area} mp</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-red-600" />
                    <span>{property.year}</span>
                  </div>
                </div>

                <p className="text-slate-600">{property.location}</p>
              </div>

              {/* Video Player */}
              <div className="relative mb-6 max-w-md mx-auto">
                <VideoPlayer
                  videoUrl={property.videos[currentVideoIndex]}
                  thumbnailUrl={property.thumbnails[currentVideoIndex]}
                  aspectRatio="mobile"
                  className="w-full h-[500px]"
                />

                {/* Video Navigation */}
                <button
                  onClick={prevVideo}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-700 text-white p-2 rounded-full transition-all"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>

                <button
                  onClick={nextVideo}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600/80 hover:bg-red-700 text-white p-2 rounded-full transition-all"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Video Counter */}
                <div className="absolute bottom-4 left-4 bg-red-600/80 text-white px-3 py-1 rounded text-sm">
                  {currentVideoIndex + 1} / {property.videos.length}
                </div>

                {/* Video Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button
                    size="sm"
                    className="bg-red-600/80 hover:bg-red-700 text-white"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Tur virtual
                  </Button>
                  <Button
                    size="sm"
                    className="bg-red-600/80 hover:bg-red-700 text-white"
                  >
                    Hartă
                  </Button>
                </div>
              </div>

              {/* Property Description */}
              <PropertyDescription />

              {/* Property Specifications */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-red-100 mb-8">
                <h2 className="text-xl font-semibold text-slate-800 mb-6">
                  Specificații proprietate
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {Object.entries(property.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-3 border-b border-red-100"
                      >
                        <span className="text-slate-600">{key}</span>
                        <span className="text-slate-800 font-medium">
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-4">
                  Facilități
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.facilities.map((facility, index) => (
                    <div key={index} className="text-slate-600 text-sm">
                      • {facility}
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Properties */}
              <RelatedProperties />

              {/* Back to Properties */}
              <BackToProperties />
            </div>

            {/* Sidebar - Agent Contact (Sticky) */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
                <AgentContact
                  agentName="Leonard Badulescu"
                  agentTitle="Agent imobiliar"
                  agentPhone="0731764900"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default PropertyDetail;
