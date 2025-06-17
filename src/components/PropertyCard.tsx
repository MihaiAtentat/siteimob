import { MapPin } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface PropertyCardProps {
  id: string;
  title: string;
  price: number;
  currency?: string;
  location: string;
  area: number;
  rooms?: number;
  type: string;
  videoUrl: string;
  thumbnailUrl?: string;
  badges?: string[];
  index: number;
  onClick?: () => void;
}

const PropertyCard = ({
  id,
  title,
  price,
  currency = "€",
  location,
  area,
  rooms,
  type,
  videoUrl,
  thumbnailUrl,
  badges = [],
  index,
  onClick,
}: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm property-card-hover luxury-shadow group overflow-hidden w-full h-[600px] flex flex-col property-card">
      {/* Video Player - Top Section */}
      <div className="relative rounded-t-lg overflow-hidden">
        <VideoPlayer
          videoUrl={videoUrl}
          thumbnailUrl={thumbnailUrl}
          className="w-full h-[400px] cursor-pointer"
          aspectRatio="mobile"
        />

        {/* Badges Overlay - Only show if badges exist */}
        {badges.length > 0 && (
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {badges.map((badge, badgeIndex) => (
              <Badge
                key={badgeIndex}
                variant="secondary"
                className="bg-red-600/95 text-white text-xs font-medium backdrop-blur-sm px-2 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Property Information - Simplified Section */}
      <div className="px-4 pt-[17px] pb-4 text-slate-800 flex flex-col h-[200px] justify-between text-center">
        {/* Price - Large at top */}
        <div className="text-2xl font-bold text-slate-900 mb-4">
          {currency}
          {price.toLocaleString()}
        </div>

        {/* Title/Description - Small */}
        <h3
          className="text-sm text-slate-600 overflow-hidden flex-shrink-0 leading-relaxed mb-4"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            maxHeight: "2.5rem",
          }}
        >
          {title}
        </h3>

        {/* Only Details Button - Centered */}
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            Vezi detalii
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
