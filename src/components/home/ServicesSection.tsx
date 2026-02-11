import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, Truck, Shield, HeadphonesIcon, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Expert Installation",
    description:
      "Professional installation services by certified technicians ensuring optimal equipment performance and longevity.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery across Jeddah, Riyadh, and Khobar with same-day service and secure handling.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "All spare parts are sourced from authorized distributors with manufacturer warranty and quality certification.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and customer service to address your equipment needs anytime.",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            Our Services
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4">
            Comprehensive Solutions for Your Equipment
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            From supply to installation, we provide end-to-end services ensuring your commercial equipment operates at peak efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 card-hover border border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Button asChild size="sm" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
