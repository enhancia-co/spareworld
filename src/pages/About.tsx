import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Sparkles,
  MapPin,
  Award,
  Users,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SEO from "@/components/SEO";
import { breadcrumbSchema, organizationSchema } from "@/lib/structuredData";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every spare part we supply meets the highest industry standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your success is our priority. We go above and beyond to meet your equipment needs.",
  },
  {
    icon: Building2,
    title: "Reliability",
    description: "Consistent, dependable service you can count on. We deliver on our promises, every time.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We continuously improve our processes and services to serve you better.",
  },
];

const locations = [
  {
    city: "Jeddah",
    description: "Serving the Western region with dedicated support and fast delivery.",
  },
  {
    city: "Riyadh",
    description: "Our central hub covering the capital and surrounding areas.",
  },
  {
    city: "Khobar",
    description: "Supporting the Eastern province with comprehensive services.",
  },
];

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", url: "https://spareworld.sa/" },
        { name: "About Us", url: "https://spareworld.sa/about" },
      ]),
      organizationSchema,
      {
        "@type": "AboutPage",
        name: "About Spare World",
        description: "Learn about Spare World, your trusted partner for commercial equipment spare parts in Saudi Arabia",
        url: "https://spareworld.sa/about",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="About Us - Your Trusted Spare Parts Partner in Saudi Arabia | Spare World"
        description="Spare World is a premier supplier of commercial kitchen and laundry equipment spare parts in Saudi Arabia. Learn about our mission, values, and commitment to quality. Serving Jeddah, Riyadh, and Khobar."
        keywords="about spare world, commercial equipment supplier, spare parts company Saudi Arabia, trusted supplier, quality spare parts"
        image="/logo.png"
        url="https://spareworld.sa/about"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-14 lg:pb-16 bg-surface">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-primary/10 text-primary text-xs sm:text-sm font-medium rounded-full mb-3 sm:mb-4">
                About Us
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                Your Trusted Partner for Quality Spare Parts
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Spare World has established itself as one of the premier suppliers of commercial kitchen and laundry equipment spare parts in Saudi Arabia, serving businesses across Jeddah, Riyadh, and Khobar.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-4 sm:mb-6">Our Story</h2>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to simplify spare parts procurement for commercial establishments, Spare World has grown to become a trusted name in the industry. We understand the critical importance of equipment uptime for businesses in the hospitality, healthcare, and industrial sectors.
                  </p>
                  <p>
                    Over the years, we have built strong partnerships with over 20 leading global manufacturers, enabling us to provide genuine, quality-assured spare parts for a wide range of commercial equipment including kitchen appliances, laundry machines, boilers, and HVAC systems.
                  </p>
                  <p>
                    Our commitment to quality, reliability, and customer satisfaction has earned us the trust of more than 1,000 happy customers across Saudi Arabia. We continue to grow and innovate, always putting our customers' needs first.
                  </p>
                </div>
              </div>
              <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                  <div className="text-center p-3 sm:p-4 lg:p-6 bg-background rounded-xl sm:rounded-2xl">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary block mb-1 sm:mb-2">2+</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Years of Experience</span>
                  </div>
                  <div className="text-center p-3 sm:p-4 lg:p-6 bg-background rounded-xl sm:rounded-2xl">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary block mb-1 sm:mb-2">10+</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Partner Brands</span>
                  </div>
                  <div className="text-center p-3 sm:p-4 lg:p-6 bg-background rounded-xl sm:rounded-2xl">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary block mb-1 sm:mb-2">1K+</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Happy Customers</span>
                  </div>
                  <div className="text-center p-3 sm:p-4 lg:p-6 bg-background rounded-xl sm:rounded-2xl">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary block mb-1 sm:mb-2">3</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground">Service Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-surface">
          <div className="container-max mx-auto">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-hover">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To be the most reliable and trusted supplier of commercial equipment spare parts in Saudi Arabia, delivering genuine products with exceptional service that helps businesses maintain operational excellence.
                </p>
              </div>
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 card-hover">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-secondary mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  To become the leading one-stop solution for all commercial equipment spare parts needs in the Middle East, known for quality, reliability, and customer-centric service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-3 sm:mb-4">Our Core Values</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center card-hover"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-secondary">
          <div className="container-max mx-auto">
            <div className="text-center mb-8 sm:mb-10 lg:mb-12">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-foreground mb-3 sm:mb-4">
                Our Service Areas
              </h2>
              <p className="text-sm sm:text-base text-secondary-foreground/80 max-w-2xl mx-auto">
                We proudly serve businesses across Saudi Arabia's major cities.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="bg-secondary-foreground/5 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-secondary-foreground mb-2">
                    {location.city}
                  </h3>
                  <p className="text-xs sm:text-sm text-secondary-foreground/70">
                    {location.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-secondary mb-4 sm:mb-6">
                  What Sets Us Apart
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Genuine parts from authorized distributors only",
                    "Extensive inventory for quick availability",
                    "Expert technical support and guidance",
                    "Fast and reliable delivery nationwide",
                    "Competitive pricing with no compromise on quality",
                    "Professional installation services available",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8">
                  <Button asChild size="sm" className="w-full sm:w-auto text-sm sm:text-base">
                    <Link to="/contact" className="gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg sm:rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-secondary">Quality Certified</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">All products meet industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg sm:rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-secondary">Expert Team</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Skilled professionals at your service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg sm:rounded-xl">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-secondary">Trusted Partner</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Partnering with 10+ global brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
