import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max mx-auto">
        <div className="relative bg-secondary rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-4 py-12 sm:px-8 sm:py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-3 sm:mb-4">
              Need Spare Parts for Your Equipment?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8">
              Get in touch with our expert team for quick quotes, technical support, and reliable delivery across Saudi Arabia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-sm sm:text-base"
              >
                <Link to="/contact" className="gap-2">
                  Request a Quote
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="sm"
                className="bg-secondary-foreground/10 text-secondary-foreground hover:bg-transparent hover:border-secondary-foreground/30 hover:border w-full sm:w-auto text-sm sm:text-base"
              >
                <a href="tel:+966543291286" className="gap-2">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Jeddah</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Riyadh</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>Khobar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
