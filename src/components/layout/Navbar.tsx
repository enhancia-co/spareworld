import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import vision2030 from "../../../src/assets/common/vision-2030.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-2"
          : "bg-transparent py-3"
      )}
    >
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg overflow-hidden flex items-center justify-center bg-background">
              <img
                src="/logo.png"
                alt="SpareWorld Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-secondary group-hover:text-primary transition-colors">
                Spare World
              </span>
              <span className="text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-wider leading-tight">
                Commercial Kitchen & Laundry Spare Parts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 relative py-1",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300",
                  location.pathname === link.path
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>




          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Vision 2030 Badge */}
            <a
              href="https://www.vision2030.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-90 transition-opacity"
              aria-label="Supporting Saudi Vision 2030"
              title="Proudly supporting Saudi Vision 2030"
            >
              <div className="">
                <img
                  src={vision2030}
                  alt="Saudi Vision 2030"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </a>

            <a
              href="tel:+966543291286"
              className="hidden xl:flex items-center gap-2 text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>+966 543291286 </span>

            </a>


            <Button asChild size="sm" className="text-xs sm:text-sm">
              <Link to="/contact">Get Quote</Link>
            </Button>


          </div>
          <div className="lg:hidden flex items-center gap-4">

          {/* Vision 2030 Badge */}
            <a
              // href="https://www.vision2030.gov.sa/"
              target="_blank"
              rel="noopener noreferrer"
              className="max-[410px]:hidden hover:opacity-90 transition-opacity"
              aria-label="Supporting Saudi Vision 2030"
              title="Proudly supporting Saudi Vision 2030"
            >
              <div className="">
                <img
                  src="/src/assets/common/vision-2030.png"
                  alt="Saudi Vision 2030"
                  className="h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            </a>






          {/* Mobile Menu Button */}
          <button
            className=" p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="bg-background rounded-xl shadow-soft-lg p-3 sm:p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base",
                  location.pathname === link.path
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-border">
              <Button asChild className="w-full">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
