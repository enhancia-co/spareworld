import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-max mx-auto section-padding">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden flex items-center justify-center bg-background">
                <img
                  src="/logo.png"
                  alt="SpareWorld Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-secondary-foreground">Spare World</h3>
                <p className="text-[10px] sm:text-xs text-secondary-foreground/70">
                  Commercial Kitchen & Laundry
                  <br />
                  Spare Parts
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-bold text-secondary-foreground text-left">
                Sultan Salim Al Matrafi Commercial Est.
              </p>
              <p className="text-sm font-bold text-secondary-foreground/80 text-left" dir="rtl">
                مؤسسة سلطان سليم المطرفى التجارية
              </p>
            </div>
            <p className="text-xs sm:text-sm text-secondary-foreground/80 leading-relaxed">
              Your trusted partner for commercial kitchen & laundry equipment spare parts across Saudi Arabia.
            </p>
            <div className="flex gap-2 sm:gap-3 items-center flex-wrap">
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/spare-world-sa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              {/* Vision 2030 Badge */}
              <div className="ml-1 sm:ml-2">
                <a
                  href="https://www.vision2030.gov.sa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-90 transition-opacity"
                  aria-label="Supporting Saudi Vision 2030"
                  title="Proudly supporting Saudi Vision 2030"
                >
                  <div className="bg-white rounded-lg p-1.5 sm:p-2">
                    <img
                      src="/src/assets/common/vision-2030.png"
                      alt="Saudi Vision 2030"
                      className="h-5 sm:h-6 w-auto object-contain"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-secondary-foreground">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "Services", path: "/services" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-secondary-foreground">Our Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Kitchen Spare Parts",
                "Laundry Spare Parts",
                "Boiler Spare Parts",
                "HVAC Spare Parts",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-xs sm:text-sm text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-secondary-foreground">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm text-secondary-foreground/80">
                  Jeddah, Riyadh, Khobar<br />
                  Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <a
                  href="tel:+966500000000"
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  +966 543291286

                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                <a
                  href="mailto:sales@spareworldsa.com"
                  className="text-xs sm:text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  sales@spareworldsa.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-secondary-foreground/60 text-center md:text-left">
              © {new Date().getFullYear()} Sultan Salim Al Matrafi Commercial Est.
              <br className="max-[400px]:block hidden" /> All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-[10px] sm:text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[10px] sm:text-xs text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
