import { api, refreshAccessToken, setAccessToken } from "../utils/api";
import { createContext, useEffect, useState, useContext } from "react";
import type { ReactNode } from "react";
import axios from "axios";

export interface Category {
  _id: string;
  name: string;
  slug: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  logo: string;
  category: Category;
  desciption: string;
  responsibilities: string[];
  skills: string[];
  experienceLevel: string;
  jobType: string;
  workplace: string;
  location: string;
  salaryMin: number;
  salaryMax: number;
  status: string;
  postedBy: string;
  createdAt: string;
}

export interface JobResponse {
  job: Job;
}

interface AuthContextType {
  isAuthenticated: boolean;
  initializing: boolean;
  loading: boolean;
  error: string;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => Promise<void>;
  job: Job | null;
  fetchJob: (jobId: string) => Promise<void>;
  similarJobs: JobResponse[];
  similarLoading: boolean;
  similarError: string;
}

const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [initializing, setInitializing] = useState(true);
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [similarJobs, setSimilarJobs] = useState<JobResponse[]>([]);
  const [similarLoading, setSimilarLoading] = useState(false);
  const [similarError, setSimilarError] = useState("");

  const categoryId = job?.category?._id;
  const currentJobId = job?.id;

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

  const signUp = async (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
  ) => {
    const res = await api.post("/user/auth/register", {
      firstName,
      lastName,
      email,
      password,
    });

    console.log(res.data.user);
  };

  const logout = async () => {
    try {
      await api.post("/user/auth/logout");
    } finally {
      setAccessToken(null);
      setIsAuthenticated(false);
    }
  };

  const fetchJob = async (jobId: string) => {
    setJob(null);
    setLoading(true);
    setError("");
    try {
      const response = await api.get(`/api/v1/jobs/job/${jobId}`, {
        signal: controller.signal,
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
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!categoryId) {
      setSimilarJobs([]);
      setSimilarError("");
      setSimilarLoading(false);
      return;
    }

    const controller = new AbortController();

    const getSimilarJobs = async () => {
      setSimilarLoading(true);
      setSimilarError("");
      try {
        const res = await api.get("/api/v1/jobs", {
          params: { category: categoryId }, // must match the query param name your backend reads
          signal: controller.signal,
        });

        const jobs: JobResponse[] = res.data.jobs;
        setSimilarJobs(jobs.filter((item) => item.job.id !== currentJobId));
      } catch (error) {
        if (axios.isCancel(error)) return;
        setSimilarError("Failed to fetch similar jobs.");
      } finally {
        if (!controller.signal.aborted) setSimilarLoading(false);
      }
    };

    getSimilarJobs();

    return () => controller.abort();
  }, [categoryId, currentJobId]);

  return (
    <AuthContext
      value={{
        login,
        logout,
        isAuthenticated,
        initializing,
        signUp,
        job,
        fetchJob,
        error,
        loading,
        similarJobs,
        similarError,
        similarLoading,
      }}
    >
      {children}
    </AuthContext>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export default AuthProvider;
