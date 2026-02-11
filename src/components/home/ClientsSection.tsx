// Client logos
import abuSarhadLogo from "../../assets/clients/Abu-Sarhad-logo.svg";
import businessFacilities from "../../assets/clients/Business-Facilities.png";
import ccCompany from "../../assets/clients/cc-company.png";
import ccLogo from "../../assets/clients/CC+Logo-640w.webp";
import centroSalama from "../../assets/clients/centro-salama.png";
import fmco from "../../assets/clients/fmco.png";
import hamptonHilton from "../../assets/clients/Hampton-by-Hilton.png";
import kaecLogo from "../../assets/clients/kaec-logo.png";
import mtEnterprises from "../../assets/clients/mt-enterprises.png";
import orbitAdvertising from "../../assets/clients/orbit-advertising.png";
import unitedFood from "../../assets/clients/united-food-services.png";
import abuSarhadHolding from "../../assets/clients/abu-sarhad-holding.jpg";
import alHohadaHotel from "../../assets/clients/al-hohada-hotel.jpg";
import burjassila from "../../assets/clients/burjassila.png";
import united2 from "../../assets/clients/united-2.png";

const clients = [
  { name: "Abu Sarhad", logo: abuSarhadLogo },
  { name: "Business Facilities", logo: businessFacilities },
  { name: "CC Company", logo: ccCompany },
  { name: "CC+", logo: ccLogo },
  { name: "Centro Salama", logo: centroSalama },
  { name: "FMCO", logo: fmco },
  { name: "Hampton by Hilton", logo: hamptonHilton },
  { name: "KAEC", logo: kaecLogo },
  { name: "MT Enterprises", logo: mtEnterprises },
  { name: "Orbit Advertising", logo: orbitAdvertising },
  { name: "United Food Services", logo: unitedFood },
  { name: "Abu Sarhad Holding", logo: abuSarhadHolding },
  { name: "Al Hohada Hotel", logo: alHohadaHotel },
  { name: "Burjassila", logo: burjassila },
  { name: "United", logo: united2 },
];

const ClientsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
            Our Clients
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-3 sm:mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            We proudly serve leading businesses and organizations across Saudi Arabia, delivering quality spare parts and exceptional service.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="w-full aspect-[4/3] bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 flex items-center justify-center border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-md card-hover"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain filter transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;

