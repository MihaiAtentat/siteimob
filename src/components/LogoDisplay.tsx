import { COMPANY_CONFIG, DESIGN_CONFIG } from "@/config/app";

interface LogoDisplayProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const LogoDisplay = ({ className = "", size = "md" }: LogoDisplayProps) => {
  // Configurare dimensiuni bazată pe size
  const sizeConfig = {
    sm: { width: 32, height: 32 },
    md: { width: 40, height: 40 },
    lg: { width: 60, height: 60 },
  };

  const { width, height } = sizeConfig[size];

  // Prioritate: logo imagine din localStorage/database > logo imagine din config > logo text
  const logoFromStorage = localStorage.getItem("company_logo");
  const logoImage = logoFromStorage || COMPANY_CONFIG.logoImage;

  if (logoImage) {
    return (
      <img
        src={logoImage}
        alt={`${COMPANY_CONFIG.name} Logo`}
        className={`rounded-lg object-contain ${className}`}
        style={{ width, height }}
        onError={(e) => {
          // Fallback la logo text dacă imaginea nu se încarcă
          console.error("Logo image failed to load:", logoImage);
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    );
  }

  // Fallback la logo text
  return (
    <div
      className={`flex items-center justify-center text-white font-medium rounded-lg ${className}`}
      style={{
        backgroundColor: DESIGN_CONFIG.colors.primary,
        width,
        height,
        fontSize: size === "lg" ? "24px" : size === "md" ? "18px" : "14px",
      }}
    >
      {COMPANY_CONFIG.logoText}
    </div>
  );
};

export default LogoDisplay;
