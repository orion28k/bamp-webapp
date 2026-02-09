import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Clock, Send, Instagram, Youtube, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://www.thebamp.org/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          ...(formData.phone && { phone: formData.phone }),
          ...(formData.subject && { subject: formData.subject }),
          ...(formData.type !== "general" && { type: formData.type }),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", type: "general" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "commission", label: "Commission a Mural" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "volunteer", label: "Volunteer" },
    { value: "press", label: "Press & Media" },
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
                      <p key={i} className="text-muted-foreground text-sm">{line}</p>
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
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl shadow-lg p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Inquiry Type */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        What can we help you with?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {inquiryTypes.map((type) => (
                          <button
                            key={type.value}
                            type="button"
                            onClick={() => setFormData({ ...formData, type: type.value })}
                            className={`px-4 py-2 rounded-full text-sm transition-colors ${
                              formData.type === type.value
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground hover:bg-muted/80"
                            }`}
                          >
                            {type.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Your Name *
                        </label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                          className="h-12 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Subject
                        </label>
                        <Input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="How can we help?"
                          className="h-12 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Message *
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your project or inquiry..."
                        required
                        className="min-h-[150px] rounded-xl resize-none"
                      />
                    </div>

                    {error && (
                      <div className="bg-destructive/10 text-destructive text-sm rounded-xl p-4">
                        {error}
                      </div>
                    )}

                    <Button type="submit" disabled={loading} className="w-full rounded-full h-12 text-lg group">
                      {loading ? "Sending..." : "Send Message"}
                      {!loading && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                  </form>
                </>
              )}
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
