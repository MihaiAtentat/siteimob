import { useNavigate } from "react-router-dom";
import PropertyCard from "./PropertyCard";

const RelatedProperties = () => {
  const navigate = useNavigate();

  // Mock related properties
  const relatedProperties = [
    {
      id: "2",
      title: "Apartament 2 camere ultracentral - Piața Română",
      price: 75000,
      location: "Apartament cu 2 camere de vânzare P-ța Română, București",
      area: 45,
      rooms: 2,
      type: "Apartament cu 2 camere de vânzare",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      badges: [],
    },
    {
      id: "3",
      title: "Garsonieră modernă - Calea Victoriei",
      price: 58000,
      location: "Apartament cu 1 camera de vânzare Calea Victoriei, București",
      area: 38,
      rooms: 1,
      type: "Apartament cu 1 camera de vânzare",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      badges: [],
    },
    {
      id: "4",
      title: "Studio elegant - Centrul Vechi",
      price: 62000,
      location: "Apartament cu 1 camera de vânzare Centrul Vechi, București",
      area: 40,
      rooms: 1,
      type: "Apartament cu 1 camera de vânzare",
      videoUrl:
        "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      thumbnailUrl:
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
      badges: [],
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Te-ar putea interesa și
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProperties.map((property, index) => (
          <PropertyCard
            key={property.id}
            {...property}
            index={index}
            onClick={() => navigate(`/proprietate/${property.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProperties;
