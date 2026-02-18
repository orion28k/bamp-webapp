import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Instagram, Youtube, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Programs", 
    href: "#",
    submenu: [
      { label: "Our Services", href: "/services" },
      // { label: "BAMP Camp", href: "/bamp-camp" },
      { label: "Art + Solar Kenya 2024", href: "/kenya" },
      // { label: "Art Clash 2025 [WIP]", href: "/art-clash" },
      { label: "Join the Team", href: "/join-the-team" },
    ]
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/bamp-logo.png" alt="BAMP" className="h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div 
                key={link.label} 
                className="relative"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.label)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                {link.submenu ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-full transition-all font-medium text-sm tracking-wide ${
                      scrolled 
                        ? "text-muted-foreground hover:text-foreground hover:bg-muted" 
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    } ${activeSubmenu === link.label ? (scrolled ? "bg-muted text-foreground" : "bg-white/10 text-white") : ""}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === link.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-full transition-all font-medium text-sm tracking-wide ${
                      scrolled 
                        ? `text-muted-foreground hover:text-foreground hover:bg-muted ${isActive(link.href) ? "text-primary bg-primary/10" : ""}` 
                        : `text-white/80 hover:text-white hover:bg-white/10 ${isActive(link.href) ? "text-white bg-white/20" : ""}`
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Submenu */}
                <AnimatePresence>
                  {link.submenu && activeSubmenu === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-card rounded-xl shadow-xl border border-border overflow-hidden"
                    >
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.label}
                          to={sublink.href}
                          className={`block px-4 py-3 text-sm transition-colors hover:bg-muted ${
                            isActive(sublink.href) ? "text-primary bg-primary/5" : "text-foreground"
                          }`}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/bamp_art"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  scrolled 
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/10" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@UrbanArtistTalk"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-full transition-colors ${
                  scrolled 
                    ? "text-muted-foreground hover:text-primary hover:bg-primary/10" 
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Donate Button */}
            <Link to="/donate">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-full group">
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === link.label ? null : link.label)}
                        className="w-full flex items-center justify-between text-foreground hover:text-primary transition-colors font-medium text-lg py-3"
                      >
                        {link.label}
                        <ChevronDown className={`w-5 h-5 transition-transform ${activeSubmenu === link.label ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {activeSubmenu === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pl-4 border-l-2 border-primary/30"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.label}
                                to={sublink.href}
                                className={`block py-2 text-muted-foreground hover:text-primary transition-colors ${
                                  isActive(sublink.href) ? "text-primary" : ""
                                }`}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href}
                      className={`block text-foreground hover:text-primary transition-colors font-medium text-lg py-3 ${
                        isActive(link.href) ? "text-primary" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Social & Donate */}
              <div className="pt-4 mt-4 border-t border-border">
                <div className="flex items-center gap-4 mb-4">
                  <a href="https://www.instagram.com/bamp_art" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@UrbanArtistTalk" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
                <Link to="/donate">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Donate Now
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
