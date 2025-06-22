// API Configuration and base service
const API_BASE_URL = process.env.VITE_API_URL || "http://localhost:3001/api";

// Types for API responses
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Property Types for API
export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  area: number;
  rooms?: number;
  type: string;
  videoUrl: string;
  thumbnailUrl?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePropertyData {
  title: string;
  price: number;
  location: string;
  area: number;
  rooms?: number;
  type: string;
  videoUrl: string;
  thumbnailUrl?: string;
  description?: string;
}

// Team Member Types for API
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTeamMemberData {
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
}

// Analytics Types for API
export interface VisitorLog {
  id: number;
  ip: string;
  location: string;
  device: string;
  browser: string;
  page: string;
  timestamp: string;
  duration: string;
  referrer: string;
  userAgent: string;
}

export interface AnalyticsStats {
  totalVisitors: number;
  uniqueVisitors: number;
  pageViews: number;
  avgSessionDuration: string;
  bounceRate: string;
  topCountry: string;
}

// Auth Types
export interface LoginRequest {
  password: string;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    role: string;
  };
}

// Base API client
class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;

    // Get token from localStorage
    const token = localStorage.getItem("adminToken");

    const config: RequestInit = {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  }

  // GET request
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "GET" });
  }

  // POST request
  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // PUT request
  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: JSON.stringify(data),
    });
  }

  // DELETE request
  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, { method: "DELETE" });
  }
}

// Create API client instance
export const apiClient = new ApiClient(API_BASE_URL);

// API Services
export const authService = {
  login: (data: LoginRequest) =>
    apiClient.post<AuthResponse>("/auth/login", data),

  validateToken: () => apiClient.get<{ valid: boolean }>("/auth/validate"),
};

export const propertyService = {
  getAll: (page = 1, limit = 10) =>
    apiClient.get<PaginatedResponse<Property>>(
      `/properties?page=${page}&limit=${limit}`,
    ),

  getById: (id: string) => apiClient.get<Property>(`/properties/${id}`),

  create: (data: CreatePropertyData) =>
    apiClient.post<Property>("/properties", data),

  update: (id: string, data: Partial<CreatePropertyData>) =>
    apiClient.put<Property>(`/properties/${id}`, data),

  delete: (id: string) => apiClient.delete<void>(`/properties/${id}`),
};

export const teamService = {
  getAll: () => apiClient.get<TeamMember[]>("/team"),

  getById: (id: number) => apiClient.get<TeamMember>(`/team/${id}`),

  create: (data: CreateTeamMemberData) =>
    apiClient.post<TeamMember>("/team", data),

  update: (id: number, data: Partial<CreateTeamMemberData>) =>
    apiClient.put<TeamMember>(`/team/${id}`, data),

  delete: (id: number) => apiClient.delete<void>(`/team/${id}`),
};

export const analyticsService = {
  getStats: (period = "7d") =>
    apiClient.get<AnalyticsStats>(`/analytics/stats?period=${period}`),

  getVisitorLogs: (page = 1, limit = 50) =>
    apiClient.get<PaginatedResponse<VisitorLog>>(
      `/analytics/logs?page=${page}&limit=${limit}`,
    ),

  getDailyStats: (days = 7) =>
    apiClient.get<any[]>(`/analytics/daily?days=${days}`),

  getPageStats: () => apiClient.get<any[]>("/analytics/pages"),

  trackVisit: (data: Partial<VisitorLog>) =>
    apiClient.post<void>("/analytics/track", data),
};
