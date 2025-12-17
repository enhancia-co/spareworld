import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max mx-auto">
        <div className="relative bg-secondary rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Need Spare Parts for Your Equipment?
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
              Get in touch with our expert team for quick quotes, technical support, and reliable delivery across Saudi Arabia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link to="/contact" className="gap-2">
                  Request a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-secondary-foreground/10 text-secondary-foreground hover:bg-transparent hover:border-secondary-foreground/30 hover:border"
              >
                <a href="tel:+966500000000" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Jeddah</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Riyadh</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
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
