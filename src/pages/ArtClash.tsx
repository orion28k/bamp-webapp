import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Users, Palette, Music, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const pastEvents = [
  {
    id: 1,
    title: "Art Clash 2025",
    winner: "Anthony Jimenez",
    location: "BLOC15 Oakland",
    image: "/images/murals/IMG_0011.jpeg",
    description: "BAMP partnered with the Oakland Ballers and Visit Oakland to celebrate Oakland's culture through live painting, music, and community engagement.",
  },
  {
    id: 2,
    title: "Art Clash 2024",
    winner: "Community Champion",
    location: "Oakland",
    image: "/images/murals/IMG_0013.jpeg",
    description: "A vibrant celebration of local talent featuring live art battles and community engagement.",
  },
  {
    id: 3,
    title: "Art Clash 2023",
    winner: "Featured Artist",
    location: "Bay Area",
    image: "/images/murals/IMG_2493.jpeg",
    description: "Artists from across the Bay Area competed in this exciting live art competition.",
  },
];

const featuredArtists = [
  "Angel Jesus Perez",
  "Jamiani Shante Gray",
  "Joaquin Tinh",
  "Janaeah Nieto",
  "Lizzy Kramer",
];

const ArtClash = () => {
  return (
    <>
      <PageHero
        title="Art Clash"
        subtitle="Live Art Battle"
        description="Where artists compete, communities connect, and creativity comes alive."
        backgroundImage="/images/murals/IMG_3631.jpeg"
        breadcrumbs={[{ label: "Art Clash", href: "/art-clash" }]}
      />

      <AboutSection />
      <LatestEvent />
      <PastEvents events={pastEvents} />
      <CTASection />
    </>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Palette,
      title: "Live Art Battles",
      description: "Watch talented artists create stunning pieces in real-time, competing for the top spot.",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Enjoy performances from local DJs, musicians, and entertainers throughout the event.",
    },
    {
      icon: Users,
      title: "Community Bonding",
      description: "Art Clash is more than a competition—it's a vibrant space for community connection and collaboration.",
    },
    {
      icon: Trophy,
      title: "Artist Recognition",
      description: "Winners receive prizes, recognition, and opportunities to showcase their work.",
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
            What Is Art Clash?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Live Art. Real Competition.
            <span className="text-primary"> Unforgettable Experience.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Art Clash brings together the Bay Area's most talented artists for an electrifying
            live painting competition. It's where creativity meets community, featuring live music,
            pop-up galleries, auctions, and more.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const LatestEvent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Latest Event
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
            Art Clash 2025 Recap
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/images/murals/IMG_0011.jpeg"
                alt="Art Clash 2025"
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-full">
                  <Trophy className="w-4 h-4 inline mr-2" />
                  Winner: Anthony Jimenez
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-secondary-foreground/80 text-lg leading-relaxed mb-6">
              The Bay Area Mural Program (BAMP) partnered with the Oakland Ballers,
              Visit Oakland, and local artists to celebrate Oakland's culture through
              live painting, music, and community engagement.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>BLOC15 Oakland</span>
              </div>
              <div className="flex items-center gap-3 text-secondary-foreground/70">
                <Music className="w-5 h-5 text-primary" />
                <span>Performances by The Yee Section and Zoe Boston</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-display text-lg font-bold text-secondary-foreground mb-4">
                Featured Artists
              </h4>
              <div className="flex flex-wrap gap-2">
                {featuredArtists.map((artist) => (
                  <span
                    key={artist}
                    className="px-4 py-2 bg-card/20 text-secondary-foreground rounded-full text-sm"
                  >
                    {artist}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-sm text-primary font-medium">Live Mural Creation</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-sm text-primary font-medium">Pop-up Gallery</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-sm text-primary font-medium">Live Auction</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-lg">
                <span className="text-sm text-primary font-medium">Food & Drinks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const PastEvents = ({ events }: { events: typeof pastEvents }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Look Back
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Previous Art Clashes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bamp-charcoal/40 group-hover:bg-bamp-charcoal/20 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                    <Trophy className="w-3 h-3 inline mr-1" />
                    {event.winner}
                  </span>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-muted-foreground text-sm flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4" />
                {event.location}
              </p>
              <p className="text-muted-foreground text-sm">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/murals/IMG_1135.jpg"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Want to Participate in Art Clash?
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
            Whether you're an artist looking to compete, a sponsor, or just want to attend
            the next event, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg group"
              >
                Get In Touch
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-full text-lg"
              >
                <Calendar className="mr-2" />
                View Gallery
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArtClash;
