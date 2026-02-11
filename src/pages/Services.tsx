import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Wrench,
  Truck,
  Shield,
  HeadphonesIcon,
  Settings,
  Clock,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Award,
} from "lucide-react";
import SEO from "@/components/SEO";
import { breadcrumbSchema, serviceSchema } from "@/lib/structuredData";

const services = [
  {
    icon: Wrench,
    title: "Professional Installation",
    description:
      "Our certified technicians provide expert installation services for all types of commercial equipment spare parts. We ensure proper fitting, calibration, and testing to guarantee optimal performance.",
    features: [
      "Certified technicians",
      "Proper calibration",
      "Performance testing",
      "Safety compliance",
    ],
  },
  {
    icon: Truck,
    title: "Fast & Reliable Delivery",
    description:
      "We maintain extensive inventory and logistics networks across Saudi Arabia to ensure quick delivery of spare parts to Jeddah, Riyadh, Khobar, and surrounding areas.",
    features: [
      "Same-day dispatch",
      "Real-time tracking",
      "Secure packaging",
      "Nationwide coverage",
    ],
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description:
      "Every spare part we supply comes with manufacturer warranty and quality certification. We source only from authorized distributors to guarantee genuine parts.",
    features: [
      "Genuine parts only",
      "Manufacturer warranty",
      "Quality certification",
      "Return guarantee",
    ],
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    description:
      "Our experienced technical team provides round-the-clock support for troubleshooting, part identification, and equipment maintenance guidance.",
    features: [
      "24/7 availability",
      "Expert guidance",
      "Part identification",
      "Maintenance tips",
    ],
  },
  {
    icon: Settings,
    title: "Preventive Maintenance",
    description:
      "We help businesses maintain their equipment proactively with scheduled maintenance programs, reducing downtime and extending equipment lifespan.",
    features: [
      "Scheduled service",
      "Equipment inspection",
      "Part replacement",
      "Performance optimization",
    ],
  },
  {
    icon: Clock,
    title: "Emergency Service",
    description:
      "When equipment breaks down, every minute counts. Our emergency service ensures rapid response and quick resolution to minimize business disruption.",
    features: [
      "Rapid response",
      "Priority handling",
      "Quick resolution",
      "Minimal downtime",
    ],
  },
];

const whyChooseUs = [
  {
    icon: Building2,
    title: "Industry Expertise",
    description: "Deep knowledge of commercial kitchen and laundry equipment from years of experience.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All parts are genuine, certified, and backed by manufacturer warranty.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Dedicated support team committed to your complete satisfaction.",
  },
];

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", url: "https://spareworld.sa/" },
        { name: "Services", url: "https://spareworld.sa/services" },
      ]),
      serviceSchema(
        "Commercial Equipment Spare Parts Services",
        "Professional installation, fast delivery, quality assurance, technical support, preventive maintenance, and emergency service for commercial equipment spare parts"
      ),
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Commercial Equipment Services - Installation, Delivery & Support | Spare World"
        description="Comprehensive equipment services including professional installation, fast delivery, quality assurance, 24/7 technical support, preventive maintenance, and emergency service. Serving Jeddah, Riyadh, and Khobar."
        keywords="equipment installation, spare parts delivery, technical support, preventive maintenance, emergency service, commercial equipment repair, Saudi Arabia"
        image="/logo.png"
        url="https://spareworld.sa/services"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16 bg-surface">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                Our Services
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                Comprehensive Equipment Services
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                From supply to installation, we provide complete solutions for your commercial equipment needs.
                Our expert team ensures your business runs smoothly with minimal downtime.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-hover border border-transparent hover:border-primary/20"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                          <span className="text-xs sm:text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-secondary">
          <div className="container-max mx-auto">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-foreground mb-3 sm:mb-4">
                Why Choose Spare World?
              </h2>
              <p className="text-sm sm:text-base text-secondary-foreground/80 max-w-2xl mx-auto">
                We're committed to providing exceptional service and quality products that keep your business running efficiently.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {whyChooseUs.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/20 mb-3 sm:mb-4">
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-secondary-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-secondary-foreground/70">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact our team today for a consultation and discover how we can support your equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="sm" className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/contact" className="gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                <Link to="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
