# Backend Integration Guide

Acest document descrie cum să integrezi frontend-ul cu un backend API.

## 📁 Structura Fișierelor pentru Backend

```
src/
├── services/
│   └── api.ts              # API services și client
├── hooks/
│   ├── useApi.ts           # React Query hooks pentru data fetching
│   └── useAdminAuthBackend.tsx  # Auth cu JWT tokens
├── components/
│   └── ErrorBoundary.tsx   # Error handling pentru API
└── types/
    └── api.ts              # TypeScript types pentru API
```

## 🔧 Setup pentru Backend Integration

### 1. Environment Variables

Creează fișierul `.env.local`:

```bash
VITE_API_URL=http://localhost:3001/api
VITE_APP_ENV=development
VITE_ANALYTICS_ENABLED=true
```

### 2. Înlocuiește Mock Data cu API Calls

În fișierele admin, înlocuiește:

```typescript
// ÎNAINTE (mock data)
const [properties, setProperties] = useState(mockProperties);

// DUPĂ (API calls)
const { data: properties, isLoading, error } = useProperties();
```

### 3. Actualizează Auth System

În `src/App.tsx`, înlocuiește import-ul:

```typescript
// ÎNAINTE
import { AdminAuthProvider } from "@/hooks/useAdminAuth";

// DUPĂ
import { AdminAuthProvider } from "@/hooks/useAdminAuthBackend";
```

## 🔌 API Endpoints Necesare

Backend-ul trebuie să implementeze următoarele endpoints:

### Authentication

```
POST /api/auth/login
GET  /api/auth/validate
```

### Properties

```
GET    /api/properties       # Lista proprietăți (cu paginare)
GET    /api/properties/:id   # Proprietate specifică
POST   /api/properties       # Creează proprietate
PUT    /api/properties/:id   # Actualizează proprietate
DELETE /api/properties/:id   # Șterge proprietate
```

### Team

```
GET    /api/team            # Lista echipă
GET    /api/team/:id        # Membru specific
POST   /api/team            # Creează membru
PUT    /api/team/:id        # Actualizează membru
DELETE /api/team/:id        # Șterge membru
```

### Analytics

```
GET  /api/analytics/stats      # Statistici generale
GET  /api/analytics/logs       # Loguri vizitatori
GET  /api/analytics/daily      # Statistici zilnice
GET  /api/analytics/pages      # Statistici pagini
POST /api/analytics/track      # Înregistrează vizită
```

## 📊 Example API Responses

### Properties Response

```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "1",
        "title": "Garsonieră ultracentral",
        "price": 61000,
        "location": "București",
        "area": 35,
        "rooms": 1,
        "type": "Apartament cu 1 camera de vânzare",
        "videoUrl": "https://...",
        "thumbnailUrl": "https://...",
        "createdAt": "2024-01-15T10:00:00Z",
        "updatedAt": "2024-01-15T10:00:00Z"
      }
    ],
    "total": 6,
    "page": 1,
    "limit": 10,
    "totalPages": 1
  }
}
```

### Analytics Response

```json
{
  "success": true,
  "data": {
    "totalVisitors": 127,
    "uniqueVisitors": 89,
    "pageViews": 324,
    "avgSessionDuration": "2:34",
    "bounceRate": "45.2%",
    "topCountry": "România"
  }
}
```

## 🔐 Authentication Flow

1. **Login**: POST `/api/auth/login` cu parola
2. **Response**: Primești JWT token
3. **Storage**: Token salvat în localStorage
4. **Requests**: Token trimis în header `Authorization: Bearer {token}`
5. **Validation**: Token validat la fiecare refresh

## 🚀 Migration Steps

### Pas 1: Setup Environment

```bash
cp .env.example .env.local
# Editează .env.local cu URL-ul backend-ului
```

### Pas 2: Update Auth

```typescript
// În src/App.tsx
import { AdminAuthProvider } from "@/hooks/useAdminAuthBackend";
```

### Pas 3: Update Components

Pentru fiecare pagină admin, înlocuiește mock data cu hooks:

```typescript
// AdminProperties.tsx
const { data: properties, isLoading } = useProperties();
const createProperty = useCreateProperty();
const updateProperty = useUpdateProperty();
const deleteProperty = useDeleteProperty();
```

### Pas 4: Add Error Handling

```typescript
// În src/App.tsx
import ErrorBoundary from "@/components/ErrorBoundary";

// Wrap app in ErrorBoundary
<ErrorBoundary>
  <QueryClientProvider client={queryClient}>
    // ... rest of app
  </QueryClientProvider>
</ErrorBoundary>
```

## 🧪 Testing cu Mock Backend

Pentru testare rapidă, poți folosi JSON Server:

```bash
npm install -g json-server
json-server --watch db.json --port 3001
```

## 🔍 Debugging

- Console logs în `src/services/api.ts`
- Network tab în DevTools
- React Query DevTools pentru cache inspection
- Error Boundary pentru crash handling

## ⚡ Performance

- React Query cache pentru reducerea request-urilor
- Pagination pentru liste mari
- Optimistic updates pentru UX mai bun
- Background refetching pentru date fresh
