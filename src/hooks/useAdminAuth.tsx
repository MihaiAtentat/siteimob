import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(
  undefined,
);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error("useAdminAuth must be used within an AdminAuthProvider");
  }
  return context;
};

interface AdminAuthProviderProps {
  children: ReactNode;
}

export const AdminAuthProvider = ({ children }: AdminAuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check if admin is already logged in on mount
  useEffect(() => {
    try {
      const adminAuth = localStorage.getItem("adminAuth");
      console.log("Checking admin auth:", adminAuth);
      if (adminAuth === "true") {
        setIsAuthenticated(true);
        console.log("Admin authenticated from localStorage");
      }
    } catch (error) {
      console.error("Error reading localStorage:", error);
    }
    setIsLoading(false);
  }, []);

  const login = (password: string): boolean => {
    console.log("Attempting login with password:", password);
    // Simple password check - in production, this would be handled server-side
    if (password === "admin123") {
      console.log("Login successful");
      setIsAuthenticated(true);
      try {
        localStorage.setItem("adminAuth", "true");
        console.log("localStorage set successfully");
      } catch (error) {
        console.error("Error setting localStorage:", error);
      }
      return true;
    }
    console.log("Login failed - incorrect password");
    return false;
  };

  const logout = () => {
    console.log("Logging out admin");
    setIsAuthenticated(false);
    try {
      localStorage.removeItem("adminAuth");
      console.log("localStorage cleared successfully");
    } catch (error) {
      console.error("Error clearing localStorage:", error);
    }
  };

  return (
    <AdminAuthContext.Provider
      value={{ isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};
