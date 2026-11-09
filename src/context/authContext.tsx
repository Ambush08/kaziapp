import { api, refreshAccessToken, setAccessToken } from "../utils/api";
import { createContext, useEffect, useState, useContext } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  initializing: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<void>;
  fetchJob: (jobId: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);

  // Restore the session on page load using the refresh cookie
  useEffect(() => {
    refreshAccessToken()
      .then(() => setIsAuthenticated(true))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setInitializing(false));
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post("/user/auth/login", { email, password });
    setAccessToken(res.data.accessToken);
    setIsAuthenticated(true);
  };

  const signUp = async (firstName: string, lastName: string, email: string, password: string) => {
    const res = await api.post('/user/auth/register', {firstName, lastName, email, password});

    console.log(res.data.user)
  }

  const logout = async () => {
    try {
      await api.post("/user/auth/logout");

    } finally {
      setAccessToken(null);
      setIsAuthenticated(false);
    }
  };


  const fetchJob = async (jobId: string) => {
    try {
      const response = await api.get(`/api/v1/jobs/job/${jobId}`);

      const data = response.data.job;

      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  
  return <AuthContext value={{ login, logout, isAuthenticated, initializing, signUp, fetchJob}}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthProvider;
