import axios from "axios";
import { createContext, useEffect, useState, type ReactNode, useRef } from "react";

interface GlobalContextType {
  jobs: any[];
  heroJobs: any[];
  loading: boolean;
  error: string;
  blogs: any[];
  categories: any[];
  getJobs: (filters?: JobFilters) => Promise<void>;
  filters: JobFilters | undefined;
  clearFilters: () => void;
  totalJobs: number;
  totalPages: number;
}

export interface JobFilters {
  categoryId?: string;
  salary?: string;
  //limit?: number;
  page?: number;
  experience?: string;
  workplace?: string;
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
  const [filters, setFilters] = useState<JobFilters | undefined>({});
  const [totalPages, setTotalPages] = useState<number>(1);
  const [totalJobs, setTotalJobs] = useState<number>(0);


  const abortRef = useRef<AbortController | null>(null);

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

  const fetchJobs = async (activeFilters: JobFilters) => {
  abortRef.current?.abort();
  const controller = new AbortController();
  abortRef.current = controller;

  setLoading(true);
  setError("");
  try {
    const response = await axios.get(
      "https://job-app-peach-iota.vercel.app/api/v1/jobs",
      {
        signal: controller.signal,
        params: {
          category: activeFilters.categoryId,
          salary: activeFilters.salary,
          experience: activeFilters.experience,
          workplace: activeFilters.workplace,
          page: activeFilters.page
        },
      },
    );
    setJobs(response.data.jobs);
    setTotalPages(response.data.paginate.totalPages);
    setTotalJobs(response.data.paginate.total)

    console.log('Pages:', response.data.paginate.totalPages);
    console.log('Jobs:', response.data.paginate.total)
  } catch (error) {
    if (axios.isCancel(error)) return;
    console.error(error);
    setError("Failed to fetch jobs. Please try again.");
  } finally {
    if (abortRef.current === controller) setLoading(false);
  }
};

const getJobs = async (newFilters?: JobFilters) => {
  const updatedFilters = { ...filters, ...newFilters };
  setFilters(updatedFilters);
  await fetchJobs(updatedFilters);
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

      console.log(data);
    } catch (error) {
      console.log("Failed to fetch categories", error);
      setError("Failed to fetch categories. Try again");
    } finally {
      setLoading(false);
    }
  };


  const clearFilters = () => {
    setFilters({});
    fetchJobs({})
  }

  useEffect(() => {
    getJobs();
    getHeroJobs();
    getBlogs();
    getCategories();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        jobs,
        loading,
        error,
        blogs,
        categories,
        heroJobs,
        getJobs,
        filters,
        clearFilters,
        totalJobs,
        totalPages
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
