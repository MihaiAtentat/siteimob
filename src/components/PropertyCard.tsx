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
    <div className="bg-white rounded-lg shadow-sm property-card-hover luxury-shadow group overflow-hidden w-full h-[500px] flex flex-col property-card border border-gray-200">
      {/* Video Player - Top Section */}
      <div className="relative rounded-t-lg overflow-hidden">
        <VideoPlayer
          videoUrl={videoUrl}
          thumbnailUrl={thumbnailUrl}
          className="w-full h-[380px] cursor-pointer"
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

      {/* Property Information - Clean White Design */}
      <div className="px-3 pt-2 pb-2 bg-white flex flex-col h-[120px] justify-between text-center border-t border-gray-200">
        {/* Price - Elegant dark font */}
        <div className="text-lg font-bold text-gray-900 mb-2 font-heading">
          {currency}
          {price.toLocaleString()}
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
          {title}
        </h3>

        {/* Premium Details Button - Compact Design */}
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-primary tracking-wide uppercase border border-red-500/20 min-w-[80px]"
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
          >
            Vezi Detalii
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
