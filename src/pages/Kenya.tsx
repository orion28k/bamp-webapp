import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Palette, Users, Heart, Globe, Zap, HandHeart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const Kenya = () => {
  return (
    <>
      <PageHero
        title="Art + Solar Kenya"
        subtitle="International Initiative"
        description="In 2024 ten Bay Area BIPOC Artists traveled to Africa for a cultural exchange, painting murals and installing solar panels."
        backgroundImage="/images/kenya/hero-kenya.jpg"
        breadcrumbs={[{ label: "Kenya 2024", href: "/kenya" }]}
      />

      <MissionSection />
      <PartnershipSection />
      <ImpactSection />
      <InequalitySection />
      <HowToHelp />
    </>
  );
};

const MissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Our Mission
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Art + Solar
              <span className="text-primary"> Kenya 2024</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The Bay Area Mural Program partnered with GivePower for an incredible journey
              to Kenya in October 2024. Ten Bay Area BIPOC artists traveled to Africa for
              a cultural exchange, painting a mural and installing solar panels at a rural school.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This initiative combines the power of art and sustainable energy to make a lasting
              impact on communities while providing our artists with life-changing experiences
              and global perspectives.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">10 BIPOC Artists</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Palette className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Mural Installation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                <Sun className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Solar Panels</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
              <img
                src="/images/kenya/GPTrek_Ken_Bamp Gerstner_Sel_GPTrek_Ken_Bamp Gerstner_24_M2A07928.jpg"
                alt="BAMP artists in Kenya"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="font-accent text-4xl">Oct 2024</div>
              <div className="text-sm opacity-80">Kenya, Africa</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PartnershipSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/kenya/solar-panels.jpg"
                  alt="Solar panel installation"
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-display text-lg font-bold text-white">GivePower</h3>
                  <p className="text-white/70 text-xs">2,650+ solar installations</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src="/images/kenya/GPTrek_Ken_Bamp Gerstner_Sel_GPTrek_Ken_Bamp Gerstner_24_M2A07846.jpg"
                  alt="BAMP mural painting in Kenya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Palette className="w-8 h-8 text-primary mb-2" />
                  <h3 className="font-display text-lg font-bold text-white">BAMP</h3>
                  <p className="text-white/70 text-xs">Art & cultural exchange</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Better Together
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              A Powerful Partnership
            </h2>
            <p className="text-secondary-foreground/70 text-lg leading-relaxed mb-6">
              BAMP and GivePower first collaborated at Standing Rock, combining art and
              sustainable energy to support indigenous communities. The Kenya initiative
              extends this shared vision to bring lasting change to rural Africa.
            </p>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Together, we're proving that art and sustainability go hand in hand,
              creating beautiful spaces while providing essential resources like clean energy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImpactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/murals/IMG_0011.jpeg", alt: "Colorful mural of joyful girl running" },
    { src: "/images/murals/IMG_0013.jpeg", alt: "Boy kicking soccer ball mural" },
    { src: "/images/murals/schools-kenya.jpg", alt: "Kenya school mural" },
  ];

  return (
    <>
      <section ref={ref} className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Our Impact
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              What We Did in Kenya
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {images.map((image) => (
              <div
                key={image.src}
                className="relative overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                    Click to view
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HowToHelp = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ways = [
    {
      icon: Heart,
      title: "Donate Funds",
      description: "Your financial contribution directly supports artist travel, materials, and solar panel installations.",
    },
    {
      icon: Users,
      title: "Share Our Story",
      description: "Help spread the word about our initiative through social media and your personal networks.",
    },
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Offer your time and skills to support our programs, events, and community outreach efforts.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Get Involved
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              How You Can Help Us
            </h2>
            <p className="text-muted-foreground text-lg">
              There are many ways to support our Kenya initiative and help make a lasting difference. Whether it's through donations, spreading the word, or volunteering your time and skills, every contribution brings us closer to empowering communities through art and sustainable energy. Your support helps fund mural supplies, solar panel installations, and travel for BIPOC artists to participate in this life-changing cultural exchange.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/kenya/schools-kenya-mural.jpeg"
                alt="Mural at Kenya school"
                className="w-full aspect-video object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
                <way.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {way.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {way.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link to="/donate">
            <Button size="lg" className="rounded-full px-8 py-6 group">
              Donate Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const InequalitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Addressing Barriers
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Inequality in Philanthropy
            </h2>

            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              The Problem
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Limited African American representation exists in corporate-sponsored international
              philanthropic treks. Financial barriers, lack of awareness, and systemic inequities
              have historically prevented BIPOC artists from participating in global initiatives.
            </p>

            <h3 className="font-display text-xl font-bold text-foreground mb-3">
              Our Solution
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The Art + Solar Kenya initiative directly addresses these barriers by fully funding
              BIPOC artists' participation, ensuring diversity in international philanthropy,
              and creating pathways for underrepresented communities to engage in global change.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/5 p-4 rounded-xl">
                <h4 className="font-semibold text-foreground mb-1 text-sm">Diversity & Inclusion</h4>
                <p className="text-muted-foreground text-xs">
                  We prioritize BIPOC representation in all our international programs.
                </p>
              </div>
              <div className="bg-primary/5 p-4 rounded-xl">
                <h4 className="font-semibold text-foreground mb-1 text-sm">Financial Support</h4>
                <p className="text-muted-foreground text-xs">
                  Full funding ensures financial barriers don't prevent participation.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/kenya/GPTrek_Ken_Bamp Gerstner_Sel_GPTrek_Ken_Bamp Gerstner_24_M2A07833.jpg"
                alt="BAMP artists working in Kenya"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};


export default Kenya;
