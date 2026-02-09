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
      <TeamSection />
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
              Transforming Walls Into <span className="text-primary">Artistic Gateways</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Bay Area Mural Program is a nonprofit organization of local artists
                dedicated to facilitating and creating public art.
              </p>
              <p>
                Our vision centers on transforming bare, blighted walls into artistic gateways
                to the community's surrounding environment.
              </p>
              <p>
                We use collaborative processes to empower artists and communities to address
                community issues, with a focus on setting high standards for public and
                contemporary art.
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
              <stat.icon className="w-10 h-10 text-primary-foreground/80 mx-auto mb-4" />
              <div className="font-accent text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-primary-foreground/80 font-medium">
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
      description: "To turn neglected urban spaces into vibrant artistic expressions that inspire viewers and build community connections through collaborative art creation.",
      color: "bg-primary",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "Transforming bare, blighted walls into artistic gateways to the community's surrounding environment through collaborative processes that empower artists and communities.",
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
              <p className="text-muted-foreground leading-relaxed">
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
          <p className="text-muted-foreground text-lg">
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
                className="text-muted-foreground text-sm hover:text-primary transition-colors"
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
          <p className="text-muted-foreground text-lg">
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
            Join Us in Making a Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10">
            Whether you're an artist looking to contribute, a community seeking transformation, 
            or a supporter who believes in our mission, there's a place for you at BAMP.
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

export default About;
