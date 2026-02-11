import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, WashingMachine, Flame, Wind, ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/lib/structuredData";

import kitchenSpareParts from "../../src/assets/common/kitchen-spare-parts.jpeg"
import laundrySpareParts from "../../src/assets/common/laundry-spare-parts.jpeg"
import boilerSpareParts from "../../src/assets/common/boiler-spare-parts.png"
import hvacSpareParts from "../../src/assets/common/hvac-spare-parts.png"


const categories = [
  {
    icon: ChefHat,
    title: "Commercial Kitchen Spare Parts",
    description:
      "Premium quality spare parts for all types of commercial kitchen equipment. From high-performance ovens to industrial refrigeration systems, we supply genuine parts that ensure optimal performance.",
    items: [
      "Commercial Oven Parts",
      "Deep Fryer Components",
      "Grill & Griddle Parts",
      "Refrigeration Units",
      "Ice Machine Parts",
      "Dishwasher Components",
      "Food Prep Equipment",
      "Ventilation Systems",
    ],
    color: "from-orange-500/20 to-orange-500/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    image: kitchenSpareParts,
  },
  {
    icon: WashingMachine,
    title: "Commercial Laundry Spare Parts",
    description:
      "Industrial-grade laundry equipment parts for hotels, hospitals, and commercial laundries. We stock components for washers, dryers, and finishing equipment from major manufacturers.",
    items: [
      "Washer Drum Parts",
      "Dryer Components",
      "Belt & Motor Systems",
      "Control Boards",
      "Heating Elements",
      "Door & Seal Parts",
      "Pump Assemblies",
      "Timer & Sensors",
    ],
    color: "from-blue-500/20 to-blue-500/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    image: laundrySpareParts,
  },
  {
    icon: Flame,
    title: "Boiler Spare Parts",
    description:
      "High-quality boiler components for safe and efficient heating systems. Our range includes parts for steam boilers, hot water systems, and industrial heating equipment.",
    items: [
      "Burner Assemblies",
      "Control Valves",
      "Pressure Gauges",
      "Safety Valves",
      "Heat Exchangers",
      "Thermostats",
      "Ignition Systems",
      "Pump Components",
    ],
    color: "from-red-500/20 to-red-500/5",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-500",
    image: boilerSpareParts,
  },
  {
    icon: Wind,
    title: "HVAC Spare Parts",
    description:
      "Complete range of heating, ventilation, and air conditioning components. We supply parts for commercial AC units, chillers, and ventilation systems.",
    items: [
      "Compressor Parts",
      "Fan Motors",
      "Air Filters",
      "Thermostats",
      "Condenser Coils",
      "Expansion Valves",
      "Refrigerant Lines",
      "Control Systems",
    ],
    color: "from-cyan-500/20 to-cyan-500/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
    image: hvacSpareParts,
  },
];

const Products = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", url: "https://spareworld.sa/" },
        { name: "Products", url: "https://spareworld.sa/products" },
      ]),
      {
        "@type": "CollectionPage",
        name: "Commercial Equipment Spare Parts",
        description: "Quality spare parts for commercial kitchen, laundry, boiler, and HVAC equipment",
        url: "https://spareworld.sa/products",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Commercial Equipment Spare Parts - Kitchen, Laundry, Boiler & HVAC | Spare World"
        description="Explore our comprehensive range of genuine spare parts for commercial kitchen, laundry, boiler, and HVAC equipment. Quality-assured components from authorized distributors. Serving Jeddah, Riyadh, and Khobar."
        keywords="commercial kitchen spare parts, laundry equipment parts, boiler spare parts, HVAC parts, commercial oven parts, washer parts, dryer components, Saudi Arabia, Jeddah, Riyadh, Khobar"
        image="/logo.png"
        url="https://spareworld.sa/products"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16 bg-surface">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                Our Products
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                Quality Spare Parts for Commercial Equipment
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive range of genuine spare parts sourced from authorized distributors.
                We provide quality-assured components for kitchen, laundry, boiler, and HVAC equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="space-y-8">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isEven = index % 2 === 1; // 0-indexed, so 2nd item (index 1) is "even" visually

                return (
                  <div
                    key={category.title}
                    className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} gap-0 rounded-2xl lg:rounded-3xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}
                  >
                    {/* Content Section (Left) */}
                    <div className={`bg-gradient-to-br ${category.color} p-4 sm:p-5 lg:p-7 relative overflow-hidden md:w-3/5 transition-all duration-500`}>
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-40 h-40 bg-background/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                      {/* Icon & Title */}
                      <div className="flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4 relative z-10">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-15 lg:h-15 ${category.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                          <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-7.5 lg:h-7.5 ${category.iconColor} group-hover:rotate-12 transition-transform duration-300`} />
                        </div>

                        <h2 className="text-lg sm:text-xl lg:text-xl font-bold text-secondary group-hover:text-primary transition-colors duration-300">
                          {category.title}
                        </h2>
                      </div>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3.5 sm:mb-5 relative z-10">
                        {category.description}
                      </p>

                      {/* Items Grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-3.5 sm:mb-5 relative z-10">
                        {category.items.map((item, idx) => (
                          <div
                            key={item}
                            className="flex items-center gap-1.5 sm:gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 group-hover:bg-background/90 transition-all duration-300"
                            style={{ transitionDelay: `${idx * 30}ms` }}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 group-hover:scale-125 transition-transform duration-300" />
                            <span className="text-[10px] sm:text-xs font-medium text-foreground">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button asChild variant="outline" size="sm" className="relative z-10 hover:border-primary hover:text-white transition-all duration-300 w-full sm:w-auto text-xs sm:text-sm">
                        <Link to="/contact" className="gap-1.5 sm:gap-2">
                          Request Parts Quote
                          <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </Button>
                    </div>

                    {/* Image Section (Right) */}
                    <div className="md:w-2/5 bg-muted relative overflow-hidden min-h-[180px] sm:min-h-[220px] md:min-h-[320px]">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Dark glowing overlay */}
                      <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/20 to-black/50 group-hover:to-black/40 transition-all duration-500" />
                      <div className="absolute inset-0 shadow-inner-glow opacity-60 group-hover:opacity-40 transition-all duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-surface">
          <div className="container-max mx-auto text-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our team can help source any spare part for your commercial equipment.
              Contact us with your requirements and we'll provide a quick quote.
            </p>
            <Button asChild size="sm" className="w-full sm:w-auto text-sm sm:text-base">
              <Link to="/contact" className="gap-2">
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
