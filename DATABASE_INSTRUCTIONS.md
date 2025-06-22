# Instrucțiuni pentru Integrarea cu Baza de Date

## 📋 Locații unde trebuie să înlocuiești datele hardcodate cu datele din baza de date:

### 🏠 **1. PROPRIETĂȚI**

#### 📍 **Fișiere de modificat:**

- `src/components/PropertyCarousel.tsx` - Linia 8-65 (mockProperties)
- `src/pages/Properties.tsx` - Linia 9-88 (mockProperties)
- `src/pages/admin/AdminProperties.tsx` - Toate proprietățile
- `src/components/RelatedProperties.tsx` - Proprietățile recomandate

#### 🔧 **Ce să faci:**

```typescript
// ÎNLOCUIEȘTE aceasta:
const mockProperties = [
  {
    id: "1",
    title: "Garsonieră dublă ultracentral...",
    price: 240000,
    // ... restul datelor hardcodate
  },
];

// CU aceasta:
const {
  data: properties,
  isLoading,
  error,
} = useQuery({
  queryKey: ["properties"],
  queryFn: () => fetchPropertiesFromDatabase(),
});
```

### 👥 **2. ECHIPA**

#### 📍 **Fișiere de modificat:**

- `src/pages/Team.tsx` - Linia 12-45 (mockTeamMembers)
- `src/pages/admin/AdminTeam.tsx` - Toți membrii echipei

#### 🔧 **Ce să faci:**

```typescript
// ÎNLOCUIEȘTE aceasta:
const mockTeamMembers = [
  {
    id: "1",
    name: "Andreea Laptuca",
    role: "Agent imobiliar senior",
    // ... restul datelor hardcodate
  },
];

// CU aceasta:
const {
  data: teamMembers,
  isLoading,
  error,
} = useQuery({
  queryKey: ["team"],
  queryFn: () => fetchTeamMembersFromDatabase(),
});
```

### 🎥 **3. VIDEO-URI EMBED**

#### 📍 **Fișiere de modificat:**

- `src/pages/admin/AdminProperties.tsx` - Form pentru adăugare proprietăți
- `src/components/PropertyForm.tsx` - Câmpul pentru video

#### 🔧 **Ce să faci:**

```typescript
// Adaugă câmp pentru video embed în formular:
videoEmbedUrl: z.string().url("URL embed invalid").optional(),

// Folosește embed-uri YouTube/Vimeo în loc de URL-uri directe
// Exemple de embed-uri valide:
// YouTube: https://www.youtube.com/embed/VIDEO_ID
// Vimeo: https://player.vimeo.com/video/VIDEO_ID
```

## 🔗 **API Endpoints necesare:**

### **Properties API:**

```
GET    /api/properties          - Lista toate proprietățile
POST   /api/properties          - Adaugă proprietate nouă
PUT    /api/properties/:id      - Actualizează proprietate
DELETE /api/properties/:id      - Șterge proprietate
GET    /api/properties/featured - Proprietăți recomandate pentru homepage
```

### **Team API:**

```
GET    /api/team                - Lista membrii echipei
POST   /api/team                - Adaugă membru nou
PUT    /api/team/:id            - Actualizează membru
DELETE /api/team/:id            - Șterge membru
```

### **Settings API:**

```
GET    /api/settings            - Setările site-ului (logo, etc.)
PUT    /api/settings            - Actualizează setările
POST   /api/upload              - Upload imagini/video-uri
```

## 📝 **Structura datelor în baza de date:**

### **Properties Table:**

```sql
CREATE TABLE properties (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'EUR',
  location VARCHAR(255),
  area INTEGER,
  rooms INTEGER,
  type VARCHAR(100),
  video_url TEXT,           -- URL către video embed
  thumbnail_url TEXT,       -- URL către thumbnail
  images JSON,              -- Array cu URL-uri imagini
  badges JSON,              -- Array cu badge-uri
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Team Table:**

```sql
CREATE TABLE team_members (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255),
  specialization VARCHAR(255),
  phone VARCHAR(50),
  email VARCHAR(255),
  image_url TEXT,
  bio TEXT,
  experience_years INTEGER,
  languages JSON,           -- Array cu limbi vorbite
  social_links JSON,        -- Obiect cu link-uri sociale
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### **Settings Table:**

```sql
CREATE TABLE site_settings (
  id UUID PRIMARY KEY,
  company_name VARCHAR(255),
  tagline VARCHAR(255),
  logo_text VARCHAR(10),
  logo_image_url TEXT,
  contact_phone VARCHAR(50),
  contact_email VARCHAR(255),
  address JSON,             -- Obiect cu adresa completă
  banner_config JSON,       -- Configurare banner
  design_config JSON,       -- Culori și design
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🚀 **Pași pentru implementare:**

1. **Creează API endpoints** pentru properties, team, settings
2. **Configurează baza de date** cu tabelele de mai sus
3. **Înlocuiește mock data** cu React Query calls
4. **Testează** că datele se încarcă corect
5. **Adaugă loading states** și error handling
6. **Implementează upload** pentru imagini și video-uri

## 📱 **Exemple de integrare:**

### **React Query Setup:**

```typescript
// src/hooks/useProperties.ts
export const useProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: async () => {
      const response = await fetch("/api/properties");
      if (!response.ok) throw new Error("Failed to fetch properties");
      return response.json();
    },
  });
};
```

### **Component Update:**

```typescript
// În PropertyCarousel.tsx
const PropertyCarousel = () => {
  const { data: properties = [], isLoading, error } = useProperties();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading properties</div>;

  return (
    // ... restul componentului folosind {properties} în loc de mockProperties
  );
};
```
