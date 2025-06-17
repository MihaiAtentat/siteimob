// 🎯 CONFIGURARE PRINCIPALĂ APLICAȚIE
// ===================================
// Aici poți schimba toate setările principale ale aplicației

// 🏢 INFORMAȚII COMPANIE
export const COMPANY_CONFIG = {
  // Numele companiei - apare în title, footer, etc.
  name: "TRÂMBIȚAȘU ESTATE",

  // Slogan/descriere scurtă
  tagline: "Experți în tranzacții imobiliare",

  // Logo text (dacă nu folosești imagine)
  logoText: "TE", // Se afișează în navbar

  // Logo imagine (înlocuiește logoText dacă este definit)
  // Comentează linia de mai jos pentru a folosi logoText
  // logoImage: "/logo.png", // Pune fișierul în public/logo.png

  // Dimensiuni logo
  logoSize: {
    width: 40,
    height: 40,
  },

  // Contact principal
  contact: {
    phone: "+40 768 111 564",
    email: "office@trambitas.ro",
    whatsapp: "+40 768 111 564",
  },

  // Adresa
  address: {
    street: "Str. Exemplu Nr. 123",
    city: "București",
    county: "Sector 1",
    country: "România",
    postalCode: "010123",
  },

  // Social media
  social: {
    facebook: "https://facebook.com/trambitas-estate",
    instagram: "https://instagram.com/trambitas-estate",
    linkedin: "https://linkedin.com/company/trambitas-estate",
    youtube: "https://youtube.com/@trambitas-estate",
  },
};

// 🎨 CONFIGURARE DESIGN
export const DESIGN_CONFIG = {
  // Culori principale (folosește coduri HEX)
  colors: {
    primary: "#dc2626", // Roșu principal
    primaryDark: "#b91c1c", // Roșu închis pentru hover
    secondary: "#64748b", // Gri secundar
    accent: "#f59e0b", // Culoare accent (galben)
  },

  // Font-uri (trebuie să fie disponibile în CSS)
  fonts: {
    primary: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
    mono: "JetBrains Mono, monospace",
  },

  // Imagini hero pentru diferite pagini
  heroImages: {
    homepage:
      "https://images.pexels.com/photos/18788673/pexels-photo-18788673.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    properties:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    team: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
    contact:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1",
  },
};

// 🔐 CONFIGURARE ADMIN
export const ADMIN_CONFIG = {
  // Parola admin (în producție, aceasta va veni din backend)
  defaultPassword: "admin123",

  // Durata sesiunii (în milisecunde) - 24 ore
  sessionDuration: 24 * 60 * 60 * 1000,

  // Setări JWT pentru backend
  jwt: {
    // Secret pentru semnarea token-urilor (SCHIMBĂ ACEST SECRET!)
    secret: "your-super-secret-jwt-key-change-this-in-production",

    // Durata token-ului - 24 ore
    expiresIn: "24h",

    // Issuer (cine emite token-ul)
    issuer: "trambitas-estate-admin",

    // Audience (pentru cine este token-ul)
    audience: "trambitas-estate-frontend",
  },

  // URL-uri pentru backend
  api: {
    baseUrl: process.env.VITE_API_URL || "http://localhost:3001/api",
    authEndpoint: "/auth/login",
    validateEndpoint: "/auth/validate",
  },
};

// 📊 CONFIGURARE ANALYTICS
export const ANALYTICS_CONFIG = {
  // Activează/dezactivează tracking-ul
  enabled: true,

  // Tracking avansat (IP, device info, etc.)
  advancedTracking: true,

  // Interval de refresh pentru dashboard (în milisecunde)
  dashboardRefreshInterval: 5 * 60 * 1000, // 5 minute

  // Setări Google Analytics (dacă folosești)
  googleAnalytics: {
    measurementId: "G-XXXXXXXXXX", // Înlocuiește cu ID-ul tău
    enabled: false, // Activează când ai ID-ul
  },
};

// 🌐 CONFIGURARE INTERNAȚIONALĂ
export const I18N_CONFIG = {
  // Limba implicită
  defaultLanguage: "ro",

  // Limbi disponibile
  availableLanguages: ["ro", "en"],

  // Format dată
  dateFormat: "dd.MM.yyyy",

  // Format monedă
  currency: {
    code: "EUR",
    symbol: "€",
    position: "before", // "before" sau "after"
  },
};

// 🔧 CONFIGURARE FUNCȚII
export const FEATURES_CONFIG = {
  // Activează/dezactivează funcții
  enableWhatsApp: true,
  enableContactForm: true,
  enablePropertyFilters: true,
  enableTeamProfiles: true,
  enableAnalytics: true,

  // Setări paginate
  pagination: {
    propertiesPerPage: 9,
    logsPerPage: 50,
    teamMembersPerPage: 12,
  },

  // Validări formular
  validation: {
    minPasswordLength: 8,
    maxTitleLength: 100,
    maxDescriptionLength: 1000,
    allowedImageTypes: ["image/jpeg", "image/png", "image/webp"],
    maxImageSize: 10 * 1024 * 1024, // 10MB
  },
};

// Export default pentru acces facil
export default {
  company: COMPANY_CONFIG,
  design: DESIGN_CONFIG,
  admin: ADMIN_CONFIG,
  analytics: ANALYTICS_CONFIG,
  i18n: I18N_CONFIG,
  features: FEATURES_CONFIG,
};
