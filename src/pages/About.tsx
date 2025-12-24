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
        <section className="pt-32 pb-16 bg-surface">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Your Trusted Partner for Quality Spare Parts
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Spare World has established itself as one of the premier suppliers of commercial kitchen and laundry equipment spare parts in Saudi Arabia, serving businesses across Jeddah, Riyadh, and Khobar.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
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
              <div className="bg-card rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <span className="text-4xl font-bold text-primary block mb-2">2+</span>
                    <span className="text-sm text-muted-foreground">Years of Experience</span>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <span className="text-4xl font-bold text-primary block mb-2">10+</span>
                    <span className="text-sm text-muted-foreground">Partner Brands</span>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <span className="text-4xl font-bold text-primary block mb-2">1K+</span>
                    <span className="text-sm text-muted-foreground">Happy Customers</span>
                  </div>
                  <div className="text-center p-6 bg-background rounded-2xl">
                    <span className="text-4xl font-bold text-primary block mb-2">3</span>
                    <span className="text-sm text-muted-foreground">Service Locations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-surface">
          <div className="container-max mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background rounded-2xl p-8 card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the most reliable and trusted supplier of commercial equipment spare parts in Saudi Arabia, delivering genuine products with exceptional service that helps businesses maintain operational excellence.
                </p>
              </div>
              <div className="bg-background rounded-2xl p-8 card-hover">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the leading one-stop solution for all commercial equipment spare parts needs in the Middle East, known for quality, reliability, and customer-centric service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and define who we are as a company.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-card rounded-2xl p-6 text-center card-hover"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary-foreground mb-4">
                Our Service Areas
              </h2>
              <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
                We proudly serve businesses across Saudi Arabia's major cities.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div
                  key={location.city}
                  className="bg-secondary-foreground/5 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                    {location.city}
                  </h3>
                  <p className="text-sm text-secondary-foreground/70">
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  What Sets Us Apart
                </h2>
                <div className="space-y-4">
                  {[
                    "Genuine parts from authorized distributors only",
                    "Extensive inventory for quick availability",
                    "Expert technical support and guidance",
                    "Fast and reliable delivery nationwide",
                    "Competitive pricing with no compromise on quality",
                    "Professional installation services available",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button asChild size="lg">
                    <Link to="/contact" className="gap-2">
                      Get in Touch
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">Quality Certified</h4>
                      <p className="text-sm text-muted-foreground">All products meet industry standards</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">Expert Team</h4>
                      <p className="text-sm text-muted-foreground">Skilled professionals at your service</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-background rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">Trusted Partner</h4>
                      <p className="text-sm text-muted-foreground">Partnering with 10+ global brands</p>
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
