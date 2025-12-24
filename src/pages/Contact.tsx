import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SEO from "@/components/SEO";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structuredData";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+966 543291286"],
    action: "tel:+966500000000",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["sales@spareworldsa.com"],
    action: "mailto:info@spareworld.sa",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sun - Thu: 8:00 AM - 6:00 PM", "Fri - Sat: Closed"],
    action: null,
  },
];

const locations = [
  { city: "Jeddah", region: "Western Region" },
  { city: "Riyadh", region: "Central Region" },
  { city: "Khobar", region: "Eastern Region" },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    axios.defaults.headers.post["Content-Type"] = "application/json";

    try {
      const response = await axios.post(
        `https://formsubmit.co/ajax/sales@spareworldsa.com`,
        formData
      );
      if (response.status >= 200 && response.status < 300) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you soon.",
        });
      } else {
        setSubmitError(
          "There was an error submitting the form. Please try again."
        );
      }
    } catch (error) {
      setSubmitError(
        "There was an error submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", url: "https://spareworld.sa/" },
        { name: "Contact", url: "https://spareworld.sa/contact" },
      ]),
      localBusinessSchema,
      {
        "@type": "ContactPage",
        name: "Contact Spare World",
        description: "Get in touch with Spare World for commercial equipment spare parts. Contact us for quotes, support, and inquiries.",
        url: "https://spareworld.sa/contact",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Get Spare Parts Quote | Spare World Saudi Arabia"
        description="Contact Spare World for commercial equipment spare parts. Reach us in Jeddah, Riyadh, or Khobar. Phone: +966 543291286 | Email: sales@spareworldsa.com"
        keywords="contact spare world, spare parts quote, commercial equipment supplier contact, Jeddah, Riyadh, Khobar, Saudi Arabia"
        image="/logo.png"
        url="https://spareworld.sa/contact"
        structuredData={structuredData}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-surface">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                Get in Touch with Our Team
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions about our products or services? Need a quote for spare parts?
                Our team is here to help you find the right solutions for your equipment needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-background">
          <div className="container-max mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1 space-y-6">
                <h2 className="text-2xl font-bold text-secondary mb-6">
                  Contact Information
                </h2>

                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-card rounded-xl card-hover">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-secondary mb-1">
                          {item.title}
                        </h3>
                        {item.details.map((detail) => (
                          <p
                            key={detail}
                            className="text-sm text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );

                  return item.action ? (
                    <a
                      key={item.title}
                      href={item.action}
                      target={item.action.startsWith("http") ? "_blank" : undefined}
                      rel={item.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.title}>{content}</div>
                  );
                })}

                {/* Service Locations */}
                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-secondary mb-4">
                    Service Locations
                  </h3>
                  <div className="space-y-3">
                    {locations.map((location) => (
                      <div
                        key={location.city}
                        className="flex items-center gap-3"
                      >
                        <MapPin className="w-5 h-5 text-primary shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">
                            {location.city}
                          </span>
                          <span className="text-sm text-muted-foreground ml-2">
                            ({location.region})
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-2xl p-8 shadow-soft">
                  <h2 className="text-2xl font-bold text-secondary mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium text-foreground"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    {/* <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        className="h-12"
                      />
                    </div> */}

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your spare parts requirements..."
                        required
                        rows={5}
                        className="resize-none"
                      />
                    </div>

                    {submitError && (
                      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                        <p className="text-sm text-destructive">{submitError}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full md:w-auto gap-2"
                      disabled={isSubmitting}
                      
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-surface">
          <div className="container-max mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-secondary mb-4">
                Our Coverage Area
              </h2>
              <p className="text-muted-foreground">
                Serving businesses across Saudi Arabia's major cities
              </p>
            </div>
            <div className="bg-card rounded-2xl p-4 shadow-soft overflow-hidden">
              <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3712.5208355983086!2d39.17876007564276!3d21.48730997187056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI5JzE0LjMiTiAzOcKwMTAnNTIuOCJF!5e0!3m2!1sen!2sin!4v1766598065096!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="Spare World Service Area"
              />
            </div>
          </div>
        </section>

        {/* Quick Response */}
        <section className="py-12 bg-primary">
          <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-primary-foreground">
                  <h3 className="font-semibold text-lg">Need Urgent Support?</h3>
                  <p className="text-primary-foreground/80 text-sm">
                    Call us directly for immediate assistance
                  </p>
                </div>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <a href="tel:+966543291286" className="gap-2">
                  <Phone className="w-5 h-5" />
                  +966 543291286
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
};

export default Contact;
