import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChefHat, WashingMachine, Flame, Wind } from "lucide-react";

const products = [
  {
    icon: ChefHat,
    title: "Kitchen Spare Parts",
    description:
      "Complete range of commercial kitchen equipment parts including ovens, grills, fryers, and refrigeration units.",
    items: ["Oven Elements", "Grill Parts", "Fryer Components", "Refrigeration"],
    color: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: WashingMachine,
    title: "Laundry Spare Parts",
    description:
      "Industrial washing machines, dryers, and ironing equipment spare parts from leading global brands.",
    items: ["Washer Parts", "Dryer Components", "Belts & Motors", "Control Boards"],
    color: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Flame,
    title: "Boiler Spare Parts",
    description:
      "High-quality boiler components ensuring safe and efficient heating systems for commercial establishments.",
    items: ["Burner Parts", "Valves", "Thermostats", "Heat Exchangers"],
    color: "bg-red-500/10",
    iconColor: "text-red-500",
  },
  {
    icon: Wind,
    title: "HVAC Spare Parts",
    description:
      "Heating, ventilation, and air conditioning components for optimal climate control in any facility.",
    items: ["Compressors", "Fan Motors", "Filters", "Thermostats"],
    color: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
];

const ProductsSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-max mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            Our Products
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4">
            Quality Spare Parts Categories
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Explore our comprehensive range of genuine spare parts for commercial kitchen, laundry, boiler, and HVAC equipment.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-hover border border-border hover:border-primary/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-3 sm:gap-4 lg:gap-5">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl ${product.color} flex items-center justify-center shrink-0`}
                  >
                    <Icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${product.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {product.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 sm:px-3 py-1 bg-muted text-[10px] sm:text-xs font-medium text-muted-foreground rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12">
          <Button asChild size="sm" className="w-full sm:w-auto text-sm sm:text-base">
            <Link to="/products" className="gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
