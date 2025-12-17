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
      "Quick and reliable delivery across Jeddah, Riyadh, and Khobar with real-time tracking and secure handling.",
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
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Comprehensive Solutions for Your Equipment
          </h2>
          <p className="text-muted-foreground">
            From supply to installation, we provide end-to-end services ensuring your commercial equipment operates at peak efficiency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-card rounded-2xl p-6 card-hover border border-transparent hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline">
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
