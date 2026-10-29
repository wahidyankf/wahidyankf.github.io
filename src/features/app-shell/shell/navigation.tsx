import { Link, useLocation } from "@tanstack/react-router";
import { File, Folder } from "lucide-react";
import type React from "react";

export const Navigation: React.FC = () => {
  const pathname = useLocation({ select: (location) => location.pathname });

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/cv", label: "CV" },
    { to: "/personal-projects", label: "Independent Projects" },
  ];

  return (
    <>
      {/* Mobile Navigation */}
      <nav
        data-testid="mobile-nav"
        className="fixed right-0 bottom-0 left-0 z-50 flex justify-around border-t border-green-400 bg-gray-900 p-4 lg:hidden"
      >
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} isActive={pathname === item.to} label={item.label} />
        ))}
      </nav>

      {/* Desktop Navigation */}
      <nav
        data-testid="desktop-nav"
        className="fixed top-0 bottom-0 left-0 z-50 hidden w-80 overflow-y-auto border-r border-green-400 bg-gray-900 p-4 lg:block"
      >
        <Link
          to="/"
          className="light-theme:text-light-primary light-theme:hover:text-light-accent mb-4 block p-4 transition-colors duration-200 hover:text-yellow-400"
        >
          <Folder className="mr-2 inline-block" />
          <span className="font-bold">WahidyanKF</span>
        </Link>
        <hr className="light-theme:border-light-primary mx-4 mb-4 border-t border-green-400" />
        <ul className="pl-4">
          {navItems.map((item) => (
            <NavItem key={item.to} to={item.to} isActive={pathname === item.to} label={item.label} />
          ))}
        </ul>
      </nav>
    </>
  );
};

// Helper components
const NavLink: React.FC<{
  to: string;
  isActive: boolean;
  label: string;
}> = ({ to, isActive, label }) => (
  <Link
    to={to}
    className={`flex flex-col items-center ${
      isActive ? "light-theme:text-light-accent text-yellow-400" : "light-theme:text-light-primary text-green-400"
    } transition-colors duration-200 hover:text-yellow-400`}
  >
    <File className="h-6 w-6" />
    <span className="text-xs">{label}</span>
  </Link>
);

const NavItem: React.FC<{
  to: string;
  isActive: boolean;
  label: string;
}> = ({ to, isActive, label }) => (
  <li className="mb-2">
    <Link
      to={to}
      className={`flex items-center ${
        isActive
          ? "light-theme:text-light-accent active-nav-item text-yellow-400"
          : "light-theme:text-light-primary text-green-400"
      } transition-colors duration-200 hover:text-yellow-400`}
    >
      <File className="mr-2 inline-block" />
      {label}
    </Link>
  </li>
);
