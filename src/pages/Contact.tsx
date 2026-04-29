import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Mail, MapPin, Clock, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get In Touch"
        description="We'd love to hear from you. Reach out for commissions, partnerships, or just to say hello."
        backgroundImage="/images/murals/community-file_002.jpeg"
        imagePosition="center 20%"
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <ContactSection />
      <MapSection />
    </>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js-na2.hsforms.net/forms/embed/245382363.js";
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["1721 Broadway #102", "Oakland, CA 94612"],
    },
    {
      icon: Mail,
      title: "Email Us",
      lines: ["admin@thebamp.org"],
    },
    {
      icon: Clock,
      title: "Hours",
      lines: ["Monday - Friday: 10am - 6pm", "By appointment only"],
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Reach Out
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-8">
              Let's Create Something Amazing Together
            </h2>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.lines.map((line, i) => (
                      <p key={i} className="text-black text-sm">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="font-display font-bold text-foreground mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "https://www.instagram.com/bamp_art/", label: "Instagram" },
                  { icon: Youtube, href: "https://www.youtube.com/@UrbanArtistTalk", label: "YouTube" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-muted hover:bg-primary rounded-full flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-black group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* HubSpot Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl shadow-lg p-8">
              <div
                className="hs-form-frame"
                data-region="na2"
                data-form-id="3e65fd40-e703-4491-81db-4f01f0b9dd99"
                data-portal-id="245382363"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Find Us
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground">
            Located in the Heart of Oakland
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-secondary relative"
        >
          {/* Placeholder for map - in production, you'd use Google Maps or similar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-secondary-foreground mb-2">
                BAMP Studio
              </h3>
              <p className="text-secondary-foreground/70">
                1721 Broadway #102, Oakland, CA 94612
              </p>
              <a
                href="https://maps.google.com/?q=1721+Broadway+%23102,+Oakland,+CA+94612"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4"
              >
                <Button variant="outline" className="rounded-full">
                  Open in Google Maps
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
