import axios from "axios";
import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface GlobalContextType {
  jobs: any[];
  loading: boolean;
  error: string;
  blogs: any[]
}

export const GlobalContext =
  createContext<GlobalContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

export const GlobalState = ({ children }: GlobalStateProps) => {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [blogs, setBlogs] = useState([]);

  const getJobs = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await axios.get(
        "https://job-app-peach-iota.vercel.app/api/v1/jobs"
      );

      setJobs(result.data.jobs);
      console.log(result.data)
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
      setError("Failed to load jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);


  const getBlogs = async( ) => {
    setLoading(true);
    setError('')
    try {
      const response = await axios.get('https://job-app-peach-iota.vercel.app/api/v1/blogs');

      const data = response.data;

      setBlogs(data.blogs);
      console.log(data)
    } catch (error) {
      console.error('Failed to fetch blogs', error);
      setError('Failed to fetch blogs. Try again')
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <GlobalContext.Provider
      value={{ jobs, loading, error, blogs }}
    >
      {children}
    </GlobalContext.Provider>
  );
};