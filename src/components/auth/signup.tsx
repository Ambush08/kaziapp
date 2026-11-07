import axios from "axios";
import { Mail, Lock, ArrowRight, ArrowLeft, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useState, type FormEvent, useEffect } from "react";

const SignupForm = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [firstName, ...lastNameParts] = name.trim().split(/\s+/);

  const lastName = lastNameParts.join(" ");

  const handleGoogleLogin = () => {
    window.location.href = `https://job-app-peach-iota.vercel.app/user/auth/google`;
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signUp(firstName, lastName, email, password);

      navigate('/signin', { replace: true })
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message || "Login failed. Please try again.",
        );
      } else {
        setError("Something went wrong. Please try again.");
      }

      setName("");
      setEmail("");
      setPassword("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!error) return;

    const timer = setTimeout(() => setError(""), 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="flex flex-col items-start lg:items-center lg:min-h-screen justify-center gap-6 mx-12 py-20">
      <div className="flex flex-col gap-3 items-start w-full lg:max-w-md">
        <h3 className="font-bold text-2xl tracking-wide">
          Create your free account
        </h3>
        <p className="text-xs text-muted tracking-wide">
          Job seeking stays free — set up your profile in under a minute.
        </p>
      </div>
      <form
        action=""
        onSubmit={handleSignUp}
        className="flex flex-col gap-2 items-start w-full lg:max-w-md"
      >
        <div className="flex flex-col gap-3 w-full text-xs">
          <label htmlFor="">Full name</label>
          <div className="flex items-center gap-6 border border-brand p-2 rounded-md">
            <User size={14} className="text-muted" />
            <input
              id="name"
              type="text"
              onChange={(event) => setName(event.target.value)}
              value={name}
              placeholder="Your name"
              className="outline-0 w-full text-xs"
              name="name"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full text-xs">
          <label htmlFor="">Email address</label>
          <div className="flex items-center gap-6 border border-brand p-2 rounded-md">
            <Mail size={14} className="text-muted" />
            <input
              id="email"
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              placeholder="you@example.com"
              className="outline-0 w-full text-xs"
              name="email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full text-xs">
          <label htmlFor="">Password</label>
          <div className="flex items-center gap-6 border border-brand p-2 rounded-md">
            <Lock size={14} className="text-muted" />
            <input
              id="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
              placeholder="Your saved password"
              className="outline-0 w-full text-xs"
              name="password"
              required
            />
          </div>
        </div>
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <div className="flex items-center justify-between text-xs my-4 w-full">
          <label>
            <input type="checkbox" name="terms" className="accent-brand" />{" "}
            Remember me
          </label>
          <Link to={"/forgot-password"} className="text-brand hover:underline">
            Forgot password?
          </Link>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center bg-green-800 w-full p-2 text-light hover:bg-green-700 transition-colors rounded-md gap-2 cursor-pointer disabled:opacity-50"
        >
          Sign Up
          <ArrowRight size={16} />
        </button>
      </form>

      <div className="text-muted text-xs text-center w-full grid grid-cols-3 items-center lg:max-w-md">
        <div className="border-b border-b-gray-300"></div>
        <p>Or continue with</p>
        <div className="border-b border-b-gray-300"></div>
      </div>

      <div className="flex w-full items-center gap-4 lg:max-w-md">
        <button
          className="py-2 border border-gray-300 px-4 rounded-md cursor-pointer text-xs shadow-2xl hover:bg-green-100 w-[50%]"
          onClick={handleGoogleLogin}
        >
          Google
        </button>
        <button className="py-2 border border-gray-300 px-4 rounded-md cursor-pointer text-xs shadow-2xl hover:bg-green-100 w-[50%]">
          Apple
        </button>
      </div>
      <div className="w-full text-xs">
        <p className="flex justify-center gap-1">
          <span className="text-muted">Already have an account? </span>
          <Link
            to={"/signin"}
            className="font-semibold text-brand hover:underline"
          >
            Sign in instead
          </Link>
        </p>
      </div>
      <div className="flex gap-1 text-xs items-center text-muted w-full lg:max-w-md">
        <ArrowLeft size={14} />
        <Link to={"/"}>Back Home</Link>
      </div>
    </div>
  );
};

export default SignupForm;
