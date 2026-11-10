import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

interface GlobalContextType {
  jobs: any[];
  heroJobs: any[];
  loading: boolean;
  error: string;
  blogs: any[];
  categories: any[];
  getJobs: () => void;
}

export interface JobFilters {
  categoryId?: string;
  salary?: number;
  limit?: number;
  experience?: string;
  workArrangement?: string;
}

export const GlobalContext = createContext<GlobalContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

export const GlobalState = ({ children }: GlobalStateProps) => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [heroJobs, setHeroJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);

  const getHeroJobs = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://job-app-peach-iota.vercel.app/api/v1/jobs",
      );

      const data = response.data.jobs;

      setHeroJobs(data);
    } catch (error) {
      console.error(error);
      setError("Failed to fecth jobs. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const getJobs = async (filters: JobFilters = {}) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://job-app-peach-iota.vercel.app/api/v1/jobs",
        {
          params: {
            category: filters.categoryId,
            salary: filters.salary,
            limit: filters.limit,
            experience: filters.experience,
            workArrangement: filters.workArrangement,
          },
        },
      );

      const data = response.data.jobs;

      setJobs(data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getBlogs = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://job-app-peach-iota.vercel.app/api/v1/blogs",
      );

      const data = response.data.blogs;

      setBlogs(data);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
      setError("Failed to fetch blogs. Try again");
    } finally {
      setLoading(false);
    }
  };

  const getCategories = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        "https://job-app-peach-iota.vercel.app/api/v1/categories",
      );

      const data = response.data.categories;

      setCategories(data);
    } catch (error) {
      console.log("Failed to fetch categories", error);
      setError("Failed to fetch blogs. Try again");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
    getHeroJobs();
    getBlogs();
    getCategories();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ jobs, loading, error, blogs, categories, heroJobs, getJobs }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
