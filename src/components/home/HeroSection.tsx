import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import kitchenParts from "../../assets/common/kitchen-spare-parts.jpeg";
import laundryParts from "../../assets/common/laundry-spare-parts.jpeg";
import boilerParts from "../../assets/common/boiler-spare-parts.png";
import hvacParts from "../../assets/common/hvac-parts.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse-soft" />
              <span className="text-xs sm:text-sm font-medium text-primary">
                Trusted Spare Parts Supplier in KSA
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-gradient">Spare World</span>
              </h1>
              <div className="space-y-1">
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-secondary text-left">
                  Sultan Salim Al Matrafi Commercial Est.
                </p>
                <p className="text-sm sm:text-base md:text-xl lg:text-2xl font-semibold text-secondary/80 text-left" dir="rtl">
                  مؤسسة سلطان سليم المطرفى التجارية
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Your premier partner for commercial kitchen and laundry equipment spare parts.
              We deliver excellence across Jeddah, Riyadh, and Khobar with trusted quality and reliable service.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button asChild size="sm" variant="default" className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/products" className="gap-2">
                  Explore Products
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="secondary" className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/contact">Get a Quote</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4">
              {["Genuine Parts", "Fast Delivery", "Expert Support"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 sm:gap-2">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative z-10">
              <div className="bg-card rounded-xl sm:rounded-2xl shadow-soft-lg p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
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
                      className="bg-background rounded-lg sm:rounded-xl p-2 sm:p-3 lg:p-4 text-center card-hover overflow-hidden"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="relative w-full h-16 sm:h-20 lg:h-24 mb-2 sm:mb-3 rounded-md sm:rounded-lg overflow-hidden bg-muted">
                        <img
                          src={item.image}
                          alt={item.label}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <span className="text-[10px] sm:text-xs lg:text-sm font-medium text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Partnering with</p>
                      <p className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">10+ Global Brands</p>
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
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
