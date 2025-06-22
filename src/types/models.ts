// 🏗️ MODELE PENTRU BAZA DE DATE
// ===============================
// Aceste tipuri definesc structura exactă pentru backend și baza de date

// 🏠 MODEL PROPRIETATE
export interface Property {
  id: string; // UUID sau număr autoincrement
  title: string; // Titlul anunțului
  description?: string; // Descriere detaliată
  price: number; // Prețul în EUR
  currency: string; // "EUR", "RON", etc.
  location: string; // Adresa completă
  city: string; // Orașul
  county: string; // Județul
  area: number; // Suprafața în mp
  rooms?: number; // Numărul de camere (pentru apartamente)
  bathrooms?: number; // Numărul de băi
  type: PropertyType; // Tipul proprietății
  category: PropertyCategory; // Categorie (vânzare/închiriere)
  status: PropertyStatus; // Statusul anunțului
  featured: boolean; // Proprietate featured pe homepage
  videoUrl?: string; // URL video tur virtual
  thumbnailUrl?: string; // Imagine principală
  images: PropertyImage[]; // Array de imagini
  amenities: string[]; // Facilități (parcare, balcon, etc.)
  energyClass?: string; // Clasa energetică (A, B, C, etc.)
  yearBuilt?: number; // Anul construcției
  floor?: number; // Etajul (pentru apartamente)
  totalFloors?: number; // Total etaje (pentru apartamente)
  parking?: boolean; // Loc de parcare
  agentId: string; // ID-ul agentului responsabil
  viewsCount: number; // Numărul de vizualizări
  contactCount: number; // Numărul de contacte generate
  createdAt: Date; // Data creării
  updatedAt: Date; // Data ultimei modificări
  publishedAt?: Date; // Data publicării
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

// 🏠 TIPURI PROPRIETĂȚI
export enum PropertyType {
  APARTMENT_1_ROOM = "Apartament cu 1 camera",
  APARTMENT_2_ROOMS = "Apartament cu 2 camere",
  APARTMENT_3_ROOMS = "Apartament cu 3 camere",
  APARTMENT_4_PLUS_ROOMS = "Apartament cu 4+ camere",
  HOUSE = "Casa",
  VILLA = "Vila",
  LAND = "Teren",
  COMMERCIAL = "Spațiu comercial",
  OFFICE = "Birou",
  WAREHOUSE = "Depozit",
  GARAGE = "Garaj",
}

// 🏠 CATEGORII PROPRIETĂȚI
export enum PropertyCategory {
  SALE = "vanzare",
  RENT = "inchiriere",
}

// 🏠 STATUS PROPRIETĂȚI
export enum PropertyStatus {
  DRAFT = "draft", // Ciornă
  PUBLISHED = "published", // Publicat
  SOLD = "sold", // Vândut
  RENTED = "rented", // Închiriat
  RESERVED = "reserved", // Rezervat
  ARCHIVED = "archived", // Arhivat
}

// 🖼️ MODEL IMAGINE PROPRIETATE
export interface PropertyImage {
  id: string;
  propertyId: string;
  url: string;
  alt: string;
  order: number; // Ordinea de afișare
  isPrimary: boolean; // Imagine principală
  createdAt: Date;
}

// 👥 MODEL MEMBRU ECHIPĂ
export interface TeamMember {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  role: TeamMemberRole;
  bio?: string; // Descriere scurtă
  image?: string; // URL imagine profil
  specializations: string[]; // Specializări (residential, commercial, etc.)
  languages: string[]; // Limbi vorbite
  experience: number; // Ani de experiență
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  isActive: boolean; // Membru activ
  propertiesCount: number; // Numărul de proprietăți gestionate
  salesCount: number; // Numărul de vânzări realizate
  createdAt: Date;
  updatedAt: Date;
}

// 👥 ROLURI ECHIPĂ
export enum TeamMemberRole {
  MANAGER = "manager",
  SENIOR_AGENT = "senior_agent",
  AGENT = "agent",
  CONSULTANT = "consultant",
  SALES_DIRECTOR = "sales_director",
  MARKETING_COORDINATOR = "marketing_coordinator",
}

// 📞 MODEL CONTACT/LEAD
export interface Contact {
  id: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message: string;
  source: ContactSource; // De unde a venit contactul
  propertyId?: string; // Proprietatea de interes
  agentId?: string; // Agentul asignat
  status: ContactStatus;
  priority: ContactPriority;
  notes?: string; // Note interne
  followUpDate?: Date; // Data pentru follow-up
  createdAt: Date;
  updatedAt: Date;
}

// 📞 SURSE CONTACT
export enum ContactSource {
  WEBSITE_FORM = "website_form",
  WHATSAPP = "whatsapp",
  PHONE_CALL = "phone_call",
  EMAIL = "email",
  FACEBOOK = "facebook",
  INSTAGRAM = "instagram",
  REFERRAL = "referral",
  WALK_IN = "walk_in",
}

// 📞 STATUS CONTACT
export enum ContactStatus {
  NEW = "new",
  IN_PROGRESS = "in_progress",
  QUALIFIED = "qualified",
  VIEWING_SCHEDULED = "viewing_scheduled",
  OFFER_MADE = "offer_made",
  CLOSED_WON = "closed_won",
  CLOSED_LOST = "closed_lost",
}

// 📞 PRIORITATE CONTACT
export enum ContactPriority {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  URGENT = "urgent",
}

// 📊 MODEL ANALYTICS VIZITATOR
export interface VisitorSession {
  id: string;
  sessionId: string; // ID unic sesiune
  ipAddress: string;
  userAgent: string;
  device: DeviceType;
  browser: string;
  os: string;
  location?: {
    country: string;
    city: string;
    region: string;
  };
  referrer?: string; // De unde a venit
  landingPage: string; // Prima pagină vizitată
  exitPage?: string; // Ultima pagină vizitată
  pagesViewed: number; // Numărul de pagini vizitate
  sessionDuration: number; // Durata în secunde
  isReturning: boolean; // Vizitator care se întoarce
  conversions: number; // Numărul de conversii (contacte)
  createdAt: Date;
  updatedAt: Date;
}

// 📊 TIPURI DEVICE
export enum DeviceType {
  DESKTOP = "desktop",
  MOBILE = "mobile",
  TABLET = "tablet",
}

// 📊 MODEL PAGE VIEW
export interface PageView {
  id: string;
  sessionId: string;
  page: string;
  title: string;
  duration: number; // Timpul petrecut pe pagină în secunde
  scrollDepth: number; // Procent din pagină văzut
  timestamp: Date;
}

// ⚙️ MODEL SETĂRI SITE
export interface SiteSettings {
  id: string;
  // Company Info
  companyName: string;
  tagline: string;
  logoText?: string;
  logoImage?: string;
  // Contact
  phone: string;
  email: string;
  whatsapp: string;
  // Address
  street: string;
  city: string;
  county: string;
  country: string;
  postalCode: string;
  coordinates: string;
  // Social Media
  socialMedia: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  // Banner
  banner: {
    enabled: boolean;
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: string;
    backgroundImage?: string;
    backgroundColor: string;
  };
  // Design
  primaryColor: string;
  primaryDarkColor: string;
  // SEO
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  // Analytics
  googleAnalyticsId?: string;
  facebookPixelId?: string;
  // Features
  features: {
    enableWhatsApp: boolean;
    enableContactForm: boolean;
    enablePropertyFilters: boolean;
    enableAnalytics: boolean;
  };
  updatedAt: Date;
  updatedBy: string; // ID-ul adminului care a făcut modificarea
}

// 👤 MODEL ADMIN USER
export interface AdminUser {
  id: string;
  email: string;
  password: string; // Hash-uit
  firstName: string;
  lastName: string;
  role: AdminRole;
  permissions: AdminPermission[];
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

// 👤 ROLURI ADMIN
export enum AdminRole {
  SUPER_ADMIN = "super_admin",
  ADMIN = "admin",
  EDITOR = "editor",
  VIEWER = "viewer",
}

// 👤 PERMISIUNI ADMIN
export enum AdminPermission {
  MANAGE_PROPERTIES = "manage_properties",
  MANAGE_TEAM = "manage_team",
  MANAGE_CONTACTS = "manage_contacts",
  MANAGE_SETTINGS = "manage_settings",
  VIEW_ANALYTICS = "view_analytics",
  MANAGE_USERS = "manage_users",
}

// 📋 FORM DATA TYPES pentru frontend
export interface PropertyFormData {
  title: string;
  description?: string;
  price: number;
  location: string;
  city: string;
  county: string;
  area: number;
  rooms?: number;
  bathrooms?: number;
  type: PropertyType;
  category: PropertyCategory;
  videoUrl?: string;
  thumbnailUrl?: string;
  images?: File[]; // Pentru upload
  amenities: string[];
  energyClass?: string;
  yearBuilt?: number;
  floor?: number;
  totalFloors?: number;
  parking?: boolean;
  agentId: string;
}

export interface TeamMemberFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  role: TeamMemberRole;
  bio?: string;
  image?: File; // Pentru upload
  specializations: string[];
  languages: string[];
  experience: number;
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

export interface ContactFormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message: string;
  propertyId?: string;
  source: ContactSource;
}

// 🔍 FILTRU ȘI CĂUTARE TYPES
export interface PropertyFilters {
  category?: PropertyCategory;
  type?: PropertyType;
  minPrice?: number;
  maxPrice?: number;
  minArea?: number;
  maxArea?: number;
  rooms?: number[];
  city?: string;
  county?: string;
  agentId?: string;
  status?: PropertyStatus;
  featured?: boolean;
}

export interface SearchParams {
  query?: string;
  filters?: PropertyFilters;
  sortBy?: PropertySortBy;
  sortOrder?: SortOrder;
  page?: number;
  limit?: number;
}

export enum PropertySortBy {
  PRICE = "price",
  AREA = "area",
  CREATED_AT = "createdAt",
  VIEWS = "viewsCount",
  TITLE = "title",
}

export enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}

// 📊 RESPONSE TYPES pentru API
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  errors?: string[];
}

// 📈 STATISTICI ȘI DASHBOARD
export interface DashboardStats {
  properties: {
    total: number;
    published: number;
    draft: number;
    sold: number;
    featured: number;
    thisMonth: number;
  };
  team: {
    total: number;
    active: number;
    topPerformer: {
      id: string;
      name: string;
      salesCount: number;
    };
  };
  contacts: {
    total: number;
    thisMonth: number;
    thisWeek: number;
    conversionRate: number;
  };
  analytics: {
    visitors: {
      total: number;
      unique: number;
      returning: number;
      thisMonth: number;
    };
    pageViews: number;
    avgSessionDuration: number;
    bounceRate: number;
    topPages: Array<{
      page: string;
      views: number;
    }>;
  };
}

// Export all for easy import
export type {
  Property,
  PropertyImage,
  TeamMember,
  Contact,
  VisitorSession,
  PageView,
  SiteSettings,
  AdminUser,
  PropertyFormData,
  TeamMemberFormData,
  ContactFormData,
  PropertyFilters,
  SearchParams,
  PaginatedResponse,
  ApiResponse,
  DashboardStats,
};
