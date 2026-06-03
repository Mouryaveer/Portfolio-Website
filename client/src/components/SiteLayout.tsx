import { portfolioData } from "@/data/portfolioData";
import { Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/search", label: "Search" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDarkMode(shouldUseDark);
    document.body.classList.toggle("dark-mode", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((current) => {
      const next = !current;
      document.body.classList.toggle("dark-mode", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <div>
      <header>
        <div id="nav-container">
          <div id="top-nav-wrap">
            <a href="/" className="logo" onClick={() => setIsMenuOpen(false)}>
              {portfolioData.name}
            </a>
            <nav id="nav-menu" aria-label="Primary navigation">
              {navItems.slice(1).map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <button id="theme-btn" onClick={toggleTheme} title="Toggle theme" aria-label="Toggle theme">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>
            <button
              id="menu-btn"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((current) => !current)}
              title={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {isMenuOpen && (
            <nav id="mobile-nav-menu" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
              <button id="mobile-theme-btn" onClick={toggleTheme}>
                {isDarkMode ? "Light mode" : "Dark mode"}
              </button>
            </nav>
          )}
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer>
        <div className="footer-content">
          <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">
            <Github size={16} />
            GitHub
          </a>
          <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={`mailto:${portfolioData.email}`}>
            <Mail size={16} />
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
