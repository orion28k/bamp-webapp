import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Route, Users, ArrowRight, ExternalLink, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

/* ─── FADE-IN WRAPPER ─────────────────────────────────────────────── */

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── MURAL STOPS DATA ────────────────────────────────────────────── */

const muralStops = [
  {
    number: 1,
    address: "1721 Broadway",
    title: "OAKSTOP",
    artists: "Andre Jahmora / Abba Yahudah",
    org: "",
    image: "/images/misc/IMG_4653.jpeg",
  },
  {
    number: 2,
    address: "1700 Telegraph",
    title: "OUR LIBERATION",
    artists: "Rachel Wolfe-Goldsmith",
    org: "WOLFE PACK",
    image: "",
  },
  {
    number: 3,
    address: "Tribune Tower",
    title: "OUR MOVEMENT",
    artists: "Rachel Wolfe-Goldsmith",
    org: "WOLFE PACK",
    image: "",
  },
  {
    number: 4,
    address: "1415 Webster",
    title: "VALKYRIES",
    artists: "Illuminaries",
    org: "",
    image: "/images/murals/sports-illuminaries-valkyries.png",
  },
  {
    number: 5,
    address: "1701 Broadway",
    title: "THE NAVIGATOR",
    artists: "Joshua Mays",
    org: "ABG",
    image: "",
  },
  {
    number: 6,
    address: "1900 Broadway",
    title: "TOWN BIZ",
    artists: "Matley Hurd",
    org: "",
    image: "",
  },
  {
    number: 7,
    address: "1955 Broadway",
    title: "OAKLAND FUTURE",
    artists: "Timothy B.",
    org: "",
    image: "/images/misc/IMG_0010.JPG",
  },
  {
    number: 8,
    address: "2148 Broadway",
    title: "HOOP DREAMS",
    artists: "Timothy B.",
    org: "",
    image: "/images/murals/sports-all-star-bamp-timothy-b-2.jpeg",
  },
  {
    number: 9,
    address: "2147 Broadway",
    title: "JUSTICE FOR OUR ANCESTORS",
    artists: "Shido, Kalani, Corbrae, Ignacia, Beitia, Zoe",
    org: "",
    image: "/images/murals/Kapor-Center-Final.JPG",
  },
  {
    number: 10,
    address: "2350 Broadway",
    title: "3-POINT CELEBRATION",
    artists: "Rachel Wolfe-Goldsmith / Timothy B. / Andre Jahmora",
    org: "",
    image: "/images/murals/sports-stephcurry3pt.jpeg",
  },
];

/* ─── MAIN PAGE ───────────────────────────────────────────────────── */

const MuralTour = () => {
  return (
    <>
      <PageHero
        title="Downtown Oakland Mural Tour"
        subtitle="10-Stop Walk on Broadway"
        description="Experience Downtown Oakland like never before. A self-guided walking tour featuring 10 large-scale murals and historical landmarks along Oakland's Broadway corridor."
        backgroundImage="/images/heroes/IMG_1978.JPG"
        breadcrumbs={[{ label: "Mural Tour", href: "/mural-tour" }]}
        imagePosition="center center"
      />
      <StatsBar />
      <EarlyCTA />
      <AboutSection />
      <MuralStopsSection />
      <RegisterCTA />
    </>
  );
};

/* ─── EARLY CTA ───────────────────────────────────────────────────── */

const EarlyCTA = () => (
  <section className="bg-bamp-cream py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
        <div>
          <p className="font-display text-2xl md:text-3xl font-bold text-bamp-charcoal leading-tight">
            Ready to walk the tour?
          </p>
          <p className="text-black text-sm mt-1">
            Sign up to join our May 1st mural tour today!
          </p>
        </div>
        <Link to="/mural-tour/register" className="flex-shrink-0">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full group"
          >
            Register for the Tour
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─── STATS BAR ───────────────────────────────────────────────────── */

const StatsBar = () => {
  const stats = [
    { icon: Route, label: "Walk Length", value: "10 Blocks" },
    { icon: MapPin, label: "Mural Stops", value: "10 Murals" },
    { icon: Building2, label: "Corridor", value: "Broadway" },
    { icon: Users, label: "Streets", value: "13th – 23rd" },
  ];

  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary-foreground/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center py-8 px-4 gap-1"
            >
              <stat.icon className="w-5 h-5 text-white mb-1" />
              <span className="font-accent text-2xl md:text-3xl text-primary-foreground leading-none">
                {stat.value}
              </span>
              <span className="font-body text-xs font-bold tracking-widest uppercase text-white">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── ABOUT SECTION ───────────────────────────────────────────────── */

const AboutSection = () => {
  const highlights = [
    "10 monumental murals on Broadway",
    "Historical Oakland landmarks",
    "Support local businesses",
    "Black Terminus AR experience",
    "Brought to you by BAMP & Oakstop",
    "Free self-guided format",
  ];

  return (
    <section className="py-20 lg:py-28 bg-bamp-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-bamp-gold/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="font-accent text-sm tracking-[0.3em] text-primary uppercase block mb-4">
                Experience Oakland
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Art Woven Into
                <span className="text-gradient block">Every Block</span>
              </h2>
              <p className="text-white text-lg leading-relaxed mb-5">
                The BAMP Downtown Oakland Mural Tour is a walking experience along
                Broadway showcasing 10 murals created by local and nationally recognized artists.
              </p>
              <p className="text-white text-base leading-relaxed">
                Explore the corridor from Oakland City Hall to the Oakstop creative hub,
                passing historical landmarks and the vibrant businesses that shape
                Oakland's cultural identity.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-white text-sm font-body leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.25} className="mt-8">
              <a href="#join">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 rounded-full group"
                >
                  View Tour Brochure
                </Button>
              </a>
            </FadeIn>
          </div>

          {/* Image stack */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/murals/Kapor-Center-Final.JPG"
                  alt="Oakland mural art"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-bamp-gold rounded-2xl px-5 py-4 shadow-2xl">
                <p className="font-accent text-4xl text-bamp-charcoal leading-none">Mural Arts</p>
                <p className="font-accent text-base text-bamp-charcoal mt-1 leading-none">for Oakland</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─── MURAL STOPS SECTION ─────────────────────────────────────────── */

const MuralStopsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-bamp-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-10">
          <span className="font-accent text-sm tracking-[0.3em] text-primary uppercase block mb-4">
            The Route
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bamp-charcoal mb-4">
            Highlighted Murals
          </h2>
          <p className="text-black max-w-xl mx-auto text-base leading-relaxed">
            Ten stops along Broadway, each telling a chapter of Oakland's living story.
          </p>
        </FadeIn>

        <FadeIn className="mb-14">
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-bamp-charcoal/10">
            <img
              src="/images/misc/map.png"
              alt="Downtown Oakland Mural Tour Map"
              className="w-full h-auto object-contain"
            />
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {muralStops.map((stop, i) => {
            const isWide = stop.number === 5 || stop.number === 6;

            if (stop.image) {
              /* ── Card with image ── */
              return (
                <FadeIn key={stop.number} delay={i * 0.04}>
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-bamp-charcoal/8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={stop.image}
                        alt={stop.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 left-3 w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg">
                        <span className="font-accent text-base text-white leading-none">{stop.number}</span>
                      </div>
                      {stop.org && (
                        <div className="absolute top-3 right-3 bg-bamp-gold/90 rounded-full px-3 py-0.5">
                          <span className="font-accent text-xs text-bamp-charcoal tracking-wider">{stop.org}</span>
                        </div>
                      )}
                      {stop.address && (
                        <div className="absolute bottom-3 left-3">
                          <span className="font-body text-xs text-white/80 flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {stop.address}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-accent text-xl text-bamp-charcoal tracking-wide leading-tight mb-1 group-hover:text-primary transition-colors">
                          {stop.title}
                        </h3>
                        <p className="font-body text-sm text-black leading-snug">{stop.artists}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              );
            }

            if (isWide) {
              /* ── Wide text card spanning 2 cols (stops 5 & 6) ── */
              return (
                <FadeIn key={stop.number} delay={i * 0.04} className="xl:col-span-2">
                  <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-bamp-charcoal/8 hover:border-primary/20 transition-all duration-300 h-full flex items-center gap-8 px-8 py-7">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="font-accent text-2xl text-white leading-none">{stop.number}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-accent text-2xl text-bamp-charcoal tracking-wide leading-tight mb-1 group-hover:text-primary transition-colors">
                        {stop.title}
                      </h3>
                      <p className="font-body text-sm text-black leading-snug">{stop.artists}</p>
                      {stop.address && (
                        <span className="font-body text-xs text-black flex items-center gap-1 mt-2">
                          <MapPin className="w-3 h-3 text-primary flex-shrink-0" />
                          {stop.address}
                        </span>
                      )}
                    </div>
                    {stop.org && (
                      <div className="bg-bamp-gold/90 rounded-full px-3 py-0.5 flex-shrink-0">
                        <span className="font-accent text-xs text-bamp-charcoal tracking-wider">{stop.org}</span>
                      </div>
                    )}
                  </div>
                </FadeIn>
              );
            }

            /* ── Narrow text card (stops 2 & 3) ── */
            return (
              <FadeIn key={stop.number} delay={i * 0.04}>
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-bamp-charcoal/8 hover:border-primary/20 transition-all duration-300 h-full flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="font-accent text-base text-white leading-none">{stop.number}</span>
                    </div>
                    {stop.org && (
                      <div className="bg-bamp-gold/90 rounded-full px-3 py-0.5">
                        <span className="font-accent text-xs text-bamp-charcoal tracking-wider">{stop.org}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 flex flex-col justify-end">
                    <h3 className="font-accent text-2xl text-bamp-charcoal tracking-wide leading-tight mb-2 group-hover:text-primary transition-colors">
                      {stop.title}
                    </h3>
                    <p className="font-body text-sm text-black leading-snug mb-3">{stop.artists}</p>
                    {stop.address && (
                      <span className="font-body text-xs text-black flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-primary" />
                        {stop.address}
                      </span>
                    )}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── REGISTER CTA ────────────────────────────────────────────────── */

const RegisterCTA = () => {
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

  return (
    <section ref={ref} id="join" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/murals/sports-stephcurry3pt.webp"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-accent text-sm tracking-[0.3em] text-white uppercase block mb-4">
            Broadway · 13th to 23rd St
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Join the Mural Tour
          </h2>
          <p className="text-white text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Register to secure your spot on an upcoming guided tour.
          </p>

          <div className="flex justify-center mb-10">
            <Link to="/mural-tour/register">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg group"
              >
                Register for the Tour
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div
            className="hs-form-frame"
            data-region="na2"
            data-form-id="445a4574-c3f2-4454-b2cf-4f40924ea32b"
            data-portal-id="245382363"
          />

          <p className="text-white text-sm mt-8">
            Presented by{" "}
            <span className="font-semibold text-white">BAMP</span>
            {" & "}
            <span className="font-semibold text-white">Oakstop</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MuralTour;
