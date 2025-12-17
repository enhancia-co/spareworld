import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import kitchenParts from "../../../public/kitchen-spare-parts.png";  
import laundryParts from "../../../public/laundry-spare-parts.jpg";
// import boilerParts from "../../../public/boiler-spare-parts.webp";
import boilerParts from "../../../public/boiler-spare-parts-1000x1000.webp";
import hvacParts from "../../../public/hvac-parts.png";
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              <span className="text-sm font-medium text-primary">
                Trusted Spare Parts Supplier in KSA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-secondary">Quality Spare Parts for</span>{" "}
              <span className="text-gradient">Commercial Equipment</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Spare World is your premier partner for commercial kitchen and laundry equipment spare parts. 
              We deliver excellence across Jeddah, Riyadh, and Khobar with trusted quality and reliable service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="default">
                <Link to="/products" className="gap-2">
                  Explore Products
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {["Genuine Parts", "Fast Delivery", "Expert Support"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative z-10">
              <div className="bg-card rounded-2xl shadow-soft-lg p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { 
                      image: kitchenParts,
                      label: "Kitchen Parts" 
                    },
                    { 
                      image: laundryParts,
                      label: "Laundry Parts" 
                    },
                    { 
                      image: boilerParts,
                      label: "Boiler Parts" 
                    },
                    { 
                      image: hvacParts,
                      label: "HVAC Parts" 
                    },
                  ].map((item, index) => (
                    <div
                      key={item.label}
                      className="bg-background rounded-xl p-4 text-center card-hover overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative w-full h-24 mb-3 rounded-lg overflow-hidden bg-muted">
                        <img 
                          src={item.image} 
                          alt={item.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Partnering with</p>
                      <p className="text-2xl font-bold text-primary">20+ Global Brands</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
