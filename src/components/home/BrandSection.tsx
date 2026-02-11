// Laundry brand logos
import americanDryerCorp from "../../assets/brands/american-dryer-corp.png";
import primus from "../../assets/brands/primus.png";
import girbau from "../../assets/brands/girbau.png";
import unimac from "../../assets/brands/unimac.png";
import maestrellisrl from "../../assets/brands/maestrellisrl.jpeg";
import sidi from "../../assets/brands/sidi.jpeg";
import imesa from "../../assets/brands/imesa.jpg";
import electrolux from "../../assets/brands/electrolux.png";

// Kitchen brand logos
import scotman from "../../assets/brands/scotman.webp";
import hennyPenny from "../../assets/brands/henny-penny.webp";
import robotCoupe from "../../assets/brands/robot-coupe.png";
import blodgettOvens from "../../assets/brands/blodgett-ovens.png";
import bakersPride from "../../assets/brands/bakers-pride.png";
import hatco from "../../assets/brands/hatco.webp";
import hobart from "../../assets/brands/hobart.jpg";
import middlebyMarshall from "../../assets/brands/middleby-marshall.png";

const laundryBrands = [
  { name: "American Dryer Corp", logo: americanDryerCorp },
  { name: "Primus", logo: primus },
  { name: "Girbau", logo: girbau },
  { name: "Unimac", logo: unimac },
  { name: "Maestrellisrl", logo: maestrellisrl },
  { name: "Sidi", logo: sidi },
  { name: "I mesa", logo: imesa },
  { name: "Electrolux", logo: electrolux },
]

const kitchenBrands = [
  { name: "Scotman", logo: scotman },
  { name: "Henny Penny", logo: hennyPenny },
  { name: "Robot Coupe", logo: robotCoupe },
  { name: "Blodgett Ovens", logo: blodgettOvens },
  { name: "Bakers Pride", logo: bakersPride },
  { name: "Hatco", logo: hatco },
  { name: "Hobart", logo: hobart },
  { name: "Middleby Marshall", logo: middlebyMarshall },
]

const BrandSection = () => {
  return (
    <section className="section-padding">
      <div className="container-max mx-auto">
        <div className="space-y-6">
          <div className="text-center space-y-1 sm:space-y-2">
             <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            Our Brand Partners
          </span>
               <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Partnering with industry leaders across Saudi Arabia
            </p>
          </div>

          {/*Laundry Brands Row - Scroll Right to Left */}
          <div className="relative overflow-hidden py-3 sm:py-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-right gap-3 sm:gap-4 lg:gap-6">
              {laundryBrands.map((brand, index) => (
                <div
                  key={`laundry-${index}`}
                  className="flex-shrink-0 w-32 sm:w-40 lg:w-52 h-24 sm:h-28 lg:h-36 bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md card-hover"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Brands Row - Scroll Left to Right */}
          <div className="relative overflow-hidden py-3 sm:py-4">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            <div className="flex animate-scroll-left gap-3 sm:gap-4 lg:gap-6">
              {kitchenBrands.map((brand, index) => (
                <div
                  key={`kitchen-${index}`}
                  className="flex-shrink-0 w-32 sm:w-40 lg:w-52 h-24 sm:h-28 lg:h-36 bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md card-hover"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain filter transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;

