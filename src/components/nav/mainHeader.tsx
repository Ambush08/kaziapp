import { Briefcase, Menu, Wallet, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

interface NAVITEMS {
  label: string;
  to: string;
}

const navLinks: NAVITEMS[] = [
  { label: "Home", to: "/" },
  { label: "Jobs", to: "/jobs" },
  { label: "Blog", to: "/blogs" },
  { label: "Saved Jobs", to: "/saved-jobs" },
  { label: "Pricing", to: "/pricing" },
];

const MainHeader = () => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors hover:text-green-700 ${
      isActive ? "text-green-700" : "text-gray-900"
    }`;

  const [menuOpen, setMenuOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    } else {
      setMenuVisible(true);
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const hanleResize = () => {
    if (window.innerWidth >= 640) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", hanleResize);

    return () => {
      window.removeEventListener("resize", hanleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white relative">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-6 sm:px-6 md:h-20">
        {/* Logo */}
        <Link to={"/"} className="flex items-center gap-1">
          <span className="flex h-9 items-center justify-center rounded-lg bg-green-700 text-white md:h-10 md:w-10">
            <Briefcase className="h-5 w-8" />
          </span>
          <span className="text-2xl font-bold tracking-tight text-gray-950 md:text-3xl">
            kazi<span className="text-green-700">fiti.</span>
          </span>
        </Link>

        {/* Nav links */}
        <ul className="hidden text-muted text-xs items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} className={linkClass} onClick={closeMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/signin"
            className="hidden rounded-lg bg-surface px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-200 md:inline-block"
          >
            Sign in
          </Link>
          <Link to={'/pricing'}
            className="flex items-center gap-2 rounded-lg bg-green-700 px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 sm:px-4 sm:py-2.5"
          >
            <Wallet className="h-4 w-4" aria-hidden="true" />
            <span className="hidden min-[400px]:inline">Upgrade account</span>
            <span className="min-[400px]:hidden">Upgrade</span>
          </Link>

          {/* Menu button */}
          <button
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-green-700 md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6 font-semibold" />
            ) : (
              <Menu className="h-6 w-6 font-semibold" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuVisible && (
        <div
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget && !menuOpen) {
              setMenuVisible(false);
            }
          }}

          className={`absolute left-0 top-full z-50 w-full bg-surface flex flex-col py-6 ${
            menuOpen ? "animate-menu-in" : "animate-menu-out"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              return (
                <li key={item.to} className="px-6 mt-2">
                  <NavLink to={item.to} className={linkClass} onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/*Sign in button */}
          <div className="px-6 mt-5">
            <Link
              to="/signin"
              onClick={() => {
                setMenuOpen(false);
              }}
              className="rounded-lg py-2.5 text-sm font-semibold text-light transition-colors bg-green-700 px-6 hover:text-green-700 hover:bg-light"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
