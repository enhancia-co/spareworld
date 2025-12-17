import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChefHat, WashingMachine, Flame, Wind, ArrowRight, CheckCircle2 } from "lucide-react";

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
  },
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Our Products
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Quality Spare Parts for Commercial Equipment
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explore our comprehensive range of genuine spare parts sourced from authorized distributors. 
                We provide quality-assured components for kitchen, laundry, boiler, and HVAC equipment.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="space-y-16">
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={category.title}
                    className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 lg:gap-16 items-center`}
                  >
                    {/* Visual */}
                    <div className="w-full lg:w-1/2">
                      <div className={`bg-gradient-to-br ${category.color} rounded-3xl p-10 relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-40 h-40 bg-background/20 rounded-full blur-3xl" />
                        <div className={`w-24 h-24 ${category.iconBg} rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                          <Icon className={`w-12 h-12 ${category.iconColor}`} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 relative z-10">
                          {category.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                              <span className="text-sm font-medium text-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {category.description}
                      </p>
                      <Button asChild variant="outline">
                        <Link to="/contact" className="gap-2">
                          Request Parts Quote
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
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
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team can help source any spare part for your commercial equipment. 
              Contact us with your requirements and we'll provide a quick quote.
            </p>
            <Button asChild size="lg">
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
