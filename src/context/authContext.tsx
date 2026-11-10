import { api, refreshAccessToken, setAccessToken } from "../utils/api";
import { createContext, useEffect, useState, useContext } from "react";
import type { ReactNode } from "react";
import axios from "axios";

interface AuthContextType {
  isAuthenticated: boolean;
  initializing: boolean;
  loading: boolean,
  error: string,
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) => Promise<void>;
  job: any,
  fetchJob: (jobId: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] =  useState('');

  const controller = new AbortController();

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


  const fetchJob = async(jobId: string) => {
    setJob(null);
    setLoading(true);
    setError('');
    try {
      const response = await api.get(`/api/v1/jobs/job/${jobId}`,{
        signal: controller.signal
    });

    setJob(response.data.job);

    } catch (error) {
      if (axios.isCancel(error)) return; // ignore aborted requests
        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setError("Job not found.");
        } else {
          setError("Failed to load job. Please try again.");
        }
    } finally {
      setLoading(false)
    }
  }
  
  return <AuthContext value={{ login, logout, isAuthenticated, initializing, signUp, job, fetchJob, error, loading }}>{children}</AuthContext>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthProvider;
