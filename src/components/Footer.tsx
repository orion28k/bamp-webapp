import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Youtube, Mail, MapPin, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://www.thebamp.org/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubscribed(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
  ];

  const supportLinks = [
    { label: "Donate", href: "/donate" },
    { label: "Volunteer", href: "/join-the-team" },
    { label: "Partner With Us", href: "/contact" },
    { label: "Commission a Mural", href: "/services" },
  ];

  return (
    <footer ref={ref} className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      {/* Newsletter Section */}
      <div className="border-b border-secondary-foreground/10">
        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary text-sm font-medium mb-4">
              Stay Connected
            </span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Join Our Community
            </h3>
            <p className="text-secondary-foreground/70 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for updates on new murals, community events, 
              art workshops, and ways to get involved.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 h-12 rounded-full px-6"
                required
                disabled={loading}
              />
              <Button
                type="submit"
                disabled={loading}
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 rounded-full px-8 group"
              >
                {subscribed ? "Subscribed!" : loading ? "Sending…" : "Subscribe"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            {error && (
              <p className="text-red-400 text-sm mt-3">{error}</p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/bamp-logo.png" alt="BAMP" className="h-14 w-auto" />
              <span className="font-display font-bold text-2xl">The Bay Area Mural Program</span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed mb-6">
              A collective of artists dedicated to transforming public spaces with meaningful 
              art creations through community engagement.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bamp_art", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@UrbanArtistTalk", label: "YouTube" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-foreground/10 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Support BAMP</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Link to="/donate" className="inline-block mt-6">
              <Button className="bg-primary/20 hover:bg-primary text-primary hover:text-primary-foreground rounded-full group">
                <Heart className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Make a Donation
              </Button>
            </Link>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="text-secondary-foreground/70">
                    Oakland, California<br />Bay Area, USA
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a href="mailto:info@thebamp.org" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                  info@thebamp.org
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {new Date().getFullYear()} Bay Area Mural Program. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="#" className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-secondary-foreground/50 hover:text-secondary-foreground transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
