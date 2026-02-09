import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Paintbrush, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const Donate = () => {
  return (
    <>
      <PageHero
        title="Support BAMP"
        subtitle="Make an Impact"
        description="Your donation helps us create more murals, empower more artists, and transform more communities."
        backgroundImage="/images/murals/IMG_1135.jpg"
        breadcrumbs={[{ label: "Donate", href: "/donate" }]}
      />
      <DonationSection />
      <OtherWaysSection />
    </>
  );
};

const DonationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://donorbox.org/widgets.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const impacts = [
    {
      icon: Paintbrush,
      amount: "$25",
      description: "Provides art supplies for one youth workshop participant",
    },
    {
      icon: Users,
      amount: "$100",
      description: "Funds artist stipends for educational programs",
    },
    {
      icon: GraduationCap,
      amount: "$500",
      description: "Contributes to a community mural installation",
    },
    {
      icon: Heart,
      amount: "$1,000",
      description: "Helps fund an entire youth summer art program",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Donorbox Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div
              className="max-w-md mx-auto"
              dangerouslySetInnerHTML={{
                __html: '<dbox-widget campaign="bay-area-mural-donations" type="donation_form" enable-auto-scroll="true"></dbox-widget>',
              }}
            />
          </motion.div>

          {/* Impact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Your Impact
            </span>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Every Dollar Makes a Difference
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Your generous donation directly supports our mission to transform
              communities through the power of mural arts. BAMP is a 501(c)(3)
              nonprofit — your donation is tax-deductible.
            </p>

            <div className="space-y-6">
              {impacts.map((item, index) => (
                <motion.div
                  key={item.amount}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary font-bold text-lg">{item.amount}</span>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


const OtherWaysSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ways = [
    {
      title: "Corporate Partnerships",
      description: "Partner with BAMP to create community impact through art while engaging your employees and customers.",
      cta: "Learn More",
      link: "/services",
    },
    {
      title: "Volunteer",
      description: "Join us for community paint days, help with events, or contribute your professional skills.",
      cta: "Get Involved",
      link: "/join-the-team",
    },
    {
      title: "In-Kind Donations",
      description: "Donate art supplies, equipment, or professional services to support our programs.",
      cta: "Contact Us",
      link: "/contact",
    },
    {
      title: "Planned Giving",
      description: "Include BAMP in your estate planning and create a lasting legacy of community art.",
      cta: "Learn More",
      link: "/contact",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-white/80 font-semibold uppercase tracking-widest text-sm mb-4 block">
            More Ways to Help
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Other Ways to Support
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
            >
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {way.title}
              </h3>
              <p className="text-white/80 mb-6 text-sm">
                {way.description}
              </p>
              <Link to={way.link}>
                <Button variant="ghost" size="sm" className="rounded-full group border border-white/30 text-white hover:bg-white/20 hover:text-white">
                  {way.cta}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Donate;
