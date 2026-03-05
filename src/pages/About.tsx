import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, Target, Eye, Paintbrush, MapPin, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const About = () => {
  return (
    <>
      <PageHero
        title="About BAMP"
        subtitle="Our Story"
        description="Learn about our mission, vision, and the passionate team behind the Bay Area Mural Program."
        backgroundImage="/images/murals/tempImage1b98Sr.jpg"
        breadcrumbs={[{ label: "About Us", href: "/about" }]}
      />
      <StorySection />
      <ImpactStats />
      <MissionVision />
      <AwardsSection />
      <TeamSection />
      <RosterSection />
      <PartnersSection />
      <ValuesSection />
    </>
  );
};

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Leading Bay Area
              <span className="text-primary"> Nonprofit Public Art Organization</span>
            </h2>
            <div className="space-y-4 text-black leading-relaxed">
              <p>
                Since our founding, BAMP has completed over 100 murals across the Bay Area, partnering with organizations such as the Golden State Warriors, Rakuten, Amazon, and YMCA while remaining rooted in neighborhood collaboration.
              </p>
              <p>
                We collaborate with local leaders, schools, and national brands to create murals that reflect the identity and priorities of each project.
              </p>
              <p>
                BAMP is insured, licensed, and experienced in large-scale mural project management — from concept and community engagement to installation and documentation.
              </p>
            </div>
            <Link to="/join-the-team" className="inline-block mt-8">
              <Button className="rounded-full px-8 py-6 group">
                Join Our Journey
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/murals/art-as-a-lifelong-path.png"
                alt="BAMP artists at work"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/30 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Paintbrush, value: "100+", label: "Murals Created" },
    { icon: Users, value: "100+", label: "Artists Contracted" },
    { icon: MapPin, value: "30+", label: "Communities Engaged" },
    { icon: HandHeart, value: "1,100+", label: "Volunteers Signed Up" },
  ];

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/murals/community-hayward-history.jpg"
          alt=""
          className="w-full h-full object-cover scale-[1.8] object-[center_57%]"
        />
        <div className="absolute inset-0 bg-bamp-charcoal/80" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-10 h-10 text-white mx-auto mb-4" />
              <div className="font-accent text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-white font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To design and deliver high-quality public art projects that combine professional mural production with meaningful community collaboration.",
      color: "bg-primary",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A Bay Area where public art is a standard part of the built environment — commissioned by leading brands, installed in schools, and rooted in the communities where it lives.",
      color: "bg-accent",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Community empowerment, artistic excellence, collaborative processes, addressing community issues, and setting high standards for public and contemporary art.",
      color: "bg-bamp-teal",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            What Drives Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Mission, Vision & Values
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
                <card.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                {card.title}
              </h3>
              <p className="text-black leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link to="/services">
            <Button className="rounded-full px-8 py-6 group">
              Explore Our Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const team = [
    {
      name: "Andre Jahmora",
      role: "Founder/Executive Director",
      image: "/images/team/andre-jahmora.jpg",
      email: "andre@thebamp.org",
    },
    {
      name: "Ashley Cousin",
      role: "Director of Operations",
      image: "/images/team/ashley-cousin.jpg",
      email: "ashley@thebamp.org",
    },
    {
      name: "Andre Davis",
      role: "Director of Technologies",
      image: "/images/team/andre-davis.png",
      imagePosition: "20% center",
      email: "andredavis@thebamp.org",
    },
    {
      name: "Jordan Wiebe",
      role: "Project Manager",
      image: "/images/team/jordan-wiebe.png",
      email: "jordan@thebamp.org",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Our Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Artists & Leaders
          </h2>
          <p className="text-black text-lg">
            Our diverse team brings together talented artists, community organizers, 
            and dedicated staff who share a passion for transforming spaces through art.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover"
                  style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium">{member.role}</p>
              <a
                href={`mailto:${member.email}`}
                className="text-black text-sm hover:text-primary transition-colors"
              >
                {member.email}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link to="/ourteam">
            <Button className="rounded-full px-8 py-6 group">
              Full Team
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    { name: "Golden State Warriors", logo: "/images/partners/golden-state-warriors.png" },
    { name: "Golden State Valkyries", logo: "/images/partners/golden-state-valkyries.png" },
    { name: "YMCA", logo: "/images/partners/ymca.png" },
    { name: "Square", logo: "/images/partners/square.png" },
    { name: "Amazon", logo: "/images/partners/amazon.png" },
    { name: "Rakuten", logo: "/images/partners/rakuten.png" },
    { name: "Planet Fitness", logo: "/images/partners/planet-fitness.png" },
    { name: "GivePower", logo: "/images/partners/givepower.png" },
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Our Partners
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Collaborating for Impact
          </h2>
          <p className="text-black text-lg">
            We're proud to work alongside organizations that share our commitment to community transformation.
          </p>
        </motion.div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-8 lg:gap-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-24 h-16 lg:w-28 lg:h-18 flex items-center justify-center shrink-0"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Work With BAMP
          </h2>
          <p className="text-white text-lg mb-10">
            BAMP works at the intersection of public art, youth mentorship, and large-scale mural production. If you're an artist, organizer, or educator ready to work on real public projects, we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 group">
                Get Involved
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-white text-red-500 hover:bg-white/10 rounded-full px-8 py-6">
                <Heart className="mr-2" />
                Support BAMP
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "National Institute of Design",
      description: "Recognized for excellence in public art and community-centered design.",
    },
    {
      title: "501(c)(3) Nonprofit",
      description: "Certified nonprofit organization — all donations are fully tax-deductible.",
    },
    {
      title: "10+ Years in Public Art",
      description: "Over a decade of delivering professional murals across the Bay Area and beyond.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Recognition
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Awards & Accolades
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center bg-muted rounded-2xl p-8"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Paintbrush className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-black text-sm leading-relaxed">{award.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RosterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roster = [
    "Andre Jahmora", "Ashley Cousin", "Andre Davis", "Jordan Wiebe",
    "Timothy B.", "Rachel Wolfe", "Oni Jahmora", "Tone Oliver",
    "Zoe Boston", "Taylor Smalls", "Saman Qadir",
  ];

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Our Roster
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Artists & Contributors
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
        >
          {roster.map((name, index) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="px-5 py-2 bg-card border border-border rounded-full text-foreground font-medium text-sm"
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
