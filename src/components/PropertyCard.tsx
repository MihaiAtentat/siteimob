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
    <div className="bg-slate-900 rounded-lg shadow-sm property-card-hover luxury-shadow group overflow-hidden w-full h-[600px] flex flex-col property-card">
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

      {/* Property Information - Improved Typography */}
      <div className="px-4 pt-[17px] pb-4 text-gray-300 flex flex-col h-[200px] justify-between text-center">
        {/* Price - Large at top with elegant metallic font */}
        <div className="text-2xl font-bold text-gray-200 mb-4 font-heading">
          {currency}
          {price.toLocaleString()}
        </div>

        {/* Title/Description - Better font and spacing */}
        <h3
          className="text-sm text-gray-400 overflow-hidden flex-shrink-0 leading-relaxed mb-4 font-primary"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            maxHeight: "2.5rem",
            fontWeight: "500",
          }}
        >
          {title}
        </h3>

        {/* Premium Details Button - Expensive Design */}
        <div className="flex justify-center">
          <button
            className="inline-flex items-center justify-center px-10 py-4 text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-primary tracking-wide uppercase border border-red-500/20 min-w-[140px]"
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
