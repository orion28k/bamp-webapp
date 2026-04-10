import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Paintbrush, Building2, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

// Hero Section
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/heroes/image000000.jpeg"
          alt="BAMP community mural art"
          className="w-full h-full object-cover object-[center_80%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bamp-charcoal/80 via-bamp-charcoal/60 to-bamp-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/70 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            We Are The
            <span className="block text-gradient">Bay Area</span>
            <span className="block">Mural Program</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed"
          >
            The Bay Area Mural Program is an award-winning nonprofit public art organization delivering large-scale murals for communities, schools, and global brands including the NBA, Golden State Warriors, Valkyries, Jordan Brand, Rakuten, Amazon, and YMCA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/gallery">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg group"
              >
                View Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Impact Stats Section
const ImpactStats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "100+", label: "Murals Created" },
    { number: "30+", label: "Communities Served" },
    { number: "130+", label: "Artists Empowered" },
    { number: "10+", label: "Years of Impact" },
  ];

  return (
    <section ref={ref} className="relative py-12">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-2xl shadow-2xl px-8 py-12 md:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
            }} />
          </div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-accent text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      title: "Community Engagement",
      description: "We work directly with communities to understand their stories and create murals that reflect their unique identities.",
      image: "/images/murals/IMG_0999.jpg",
      link: "/about",
    },
    {
      title: "Inspiring Murals",
      description: "From NBA All-Star Weekend projects to The Golden State Warriors, The Valkyries, and Jordan Brand, our team of talented artists create large-scale murals for leading brands and organizations.",
      image: "/images/murals/sports-all-star-bamp-timothy-b-2.jpeg",
      link: "/gallery",
    },
    {
      title: "Public Art at Scale",
      description: "From school corridors to corporate installations, BAMP delivers professional large-scale mural production insured, licensed, and experienced in project management from concept to completion.",
      image: "/images/murals/art-as-a-lifelong-path.png",
      link: "/services",
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-muted/50 -skew-x-12 origin-top-right" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            About BAMP
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            The Bay Area's Leading
            <span className="text-primary"> Public Art Organization</span>
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Since our founding, BAMP has completed over 100 murals across the Bay Area, partnering with organizations such as the Golden State Warriors, Rakuten, and YMCA while remaining rooted in neighborhood collaboration. We collaborate with local leaders, schools, and national brands to create murals that reflect the identity and priorities of each project.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={feature.title} to={feature.link}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link to="/about">
            <Button variant="outline" className="rounded-full px-8 py-6 group">
              Learn More About Us
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// YouTube Videos Section
const YouTubeVideosSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/YuuqAnalo8U/maxresdefault.jpg",
      title: "Eastmont Mall Mural",
      description: "BAMP transforms Oakland's Eastmont Mall entrance with a stunning community mural.",
      url: "https://www.youtube.com/watch?v=YuuqAnalo8U",
    },
    {
      thumbnail: "https://img.youtube.com/vi/hgb9ypQwan4/maxresdefault.jpg",
      title: "Natty Rebel: Art Basel Arrest",
      description: "The wild story of painting in Wynwood and getting arrested with the art still wet.",
      url: "https://www.youtube.com/watch?v=hgb9ypQwan4",
    },
    {
      thumbnail: "https://img.youtube.com/vi/K3Vrfy6Pbms/maxresdefault.jpg",
      title: "Joshua Mays: Visionary Worlds",
      description: "Philadelphia muralist on creative discipline, AI, and the Ogaruth universe.",
      url: "https://www.youtube.com/watch?v=K3Vrfy6Pbms",
    },
    {
      thumbnail: "https://img.youtube.com/vi/4zm7NvAGdmE/maxresdefault.jpg",
      title: "David Burke: Four Decades of Art",
      description: "Oakland muralist Hungry Ghost on healing communities through public art.",
      url: "https://www.youtube.com/watch?v=4zm7NvAGdmE",
    },
  ];

  return (
    <section id="videos" ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            From Our YouTube
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Dive deeper into our work, meet our artists, and see the impact
            of community-driven art through our video content.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <motion.a
              key={video.title}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group block"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-video">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bamp-charcoal/0 group-hover:bg-bamp-charcoal/50 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-7 h-7 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                {video.description}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.youtube.com/@UrbanArtistTalk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 group">
              Visit Our YouTube Channel
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Featured Work Section
const FeaturedWork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const artworks = [
    {
      src: "/images/murals/activism-angeladavis.jpg",
      alt: "Angela Davis portrait mural",
      category: "Activism",
    },
    {
      src: "/images/murals/community-rosa-parks-center-2.jpg",
      alt: "Rosa Parks Center mural",
      category: "Community",
    },
    {
      src: "/images/murals/sports-stephcurry3pt.jpeg",
      alt: "Steph Curry 3-point record mural",
      category: "Sports",
    },
    {
      src: "/images/murals/schools-rosaparkcener8.jpg",
      alt: "Rosa Park Center mural",
      category: "Schools",
    },
  ];

  return (
    <section id="gallery" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Featured Artwork
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Explore a selection of BAMP's public art projects across Oakland and the greater Bay Area, from neighborhood schools to NBA All-Star installations.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {artworks.map((artwork, index) => (
            <Link
              key={artwork.src}
              to={`/gallery?image=${encodeURIComponent(artwork.src)}`}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square"
              >
                <img
                  src={artwork.src}
                  alt={artwork.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {artwork.category}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link to="/gallery">
            <Button variant="outline" className="rounded-full px-8 py-6 group">
              View Full Gallery
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Partners Section
const Partners = () => {
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
    <section ref={ref} className="py-24 bg-muted overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Trusted By
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Partners & Collaborators
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted to-transparent z-10" />
        
        <div className="flex animate-marquee">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex-shrink-0 mx-8 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// BAMP Camp Section
const BampCampSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { label: "Ages", value: "5 – 13" },
    { label: "Dates", value: "June 7 – July 3" },
    { label: "Hours", value: "9 AM – 1 PM" },
    { label: "Days", value: "Mon – Fri" },
  ];

  return (
    <section ref={ref} className="py-14 lg:py-20 relative overflow-hidden bg-primary">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white font-semibold uppercase tracking-widest text-sm mb-4 block">
              Summer 2026
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Introducing BAMP Camp
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8">
              A four-week hands-on program where youth ages 5–13 create real public art, explore Oakland's culture, and develop their artistic voice alongside professional muralists. Space is limited.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                  className="rounded-xl px-4 py-4 text-center border border-white/15 bg-white"
                >
                  <div className="font-accent text-xl text-primary leading-none mb-1">{h.value}</div>
                  <div className="text-black text-xs uppercase tracking-wider font-bold">{h.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/bamp-camp">
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-primary font-semibold px-8 py-6 rounded-full text-lg group"
                >
                  About BAMP Camp
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-2xl">
              <img
                src="/images/murals/bamp-camp-kids-painting.webp"
                alt="Youth creating murals at BAMP Camp"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 bg-bamp-gold rounded-2xl px-5 py-4 shadow-2xl">
              <p className="font-accent text-4xl text-bamp-charcoal leading-none">Mural Arts</p>
              <p className="font-accent text-base text-bamp-charcoal mt-1 leading-none">for the youth</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary relative overflow-hidden">
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Commission a Mural
          </h2>
          <p className="text-white text-lg md:text-xl mb-10">
            BAMP is insured, licensed, and experienced in large-scale mural project management. Whether you're a brand, school, or municipality — let's build something together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/services">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg group"
              >
                Start a Project
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Who It's For Section
const WhoItsFor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pathways = [
    {
      icon: Paintbrush,
      title: "Commission a Mural",
      description: "Work with BAMP's professional team to design and install a large-scale mural for your space.",
      cta: "Start a Project",
      href: "/services",
    },
    {
      icon: Building2,
      title: "Partner With Us",
      description: "Corporate, institutional, and brand partnerships that create real community impact.",
      cta: "Partner With Us",
      href: "/contact",
    },
    {
      icon: Heart,
      title: "Support Our Work",
      description: "Fuel youth programs, school murals, and community installations through your donation.",
      cta: "Donate",
      href: "/donate",
    },
    {
      icon: Users,
      title: "Join as an Artist",
      description: "BAMP works with artists, organizers, and educators ready to produce real public projects.",
      cta: "Join the Team",
      href: "/join-the-team",
    },
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            Get Involved
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            What Brings You Here?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={path.href} className="group block h-full">
                <div className="bg-card rounded-2xl p-8 h-full flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 border border-border hover:border-primary/30">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <path.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {path.title}
                  </h3>
                  <p className="text-black text-sm leading-relaxed flex-1 mb-6">
                    {path.description}
                  </p>
                  <span className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    {path.cta}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Index Page
const Index = () => {
  return (
    <>
      <Hero />
      <BampCampSection />
      <AboutSection />
      <Partners />
      <FeaturedWork />
      <ImpactStats />
      <WhoItsFor />
      <YouTubeVideosSection />
      <CTASection />
    </>
  );
};

export default Index;
