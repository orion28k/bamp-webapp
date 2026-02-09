import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mic, Play, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  imagePosition?: string;
}

interface Guest {
  name: string;
  image: string;
  imagePosition?: string;
  episodeUrl?: string;
}

const podcastTeam: TeamMember[] = [
  {
    name: "Andre Jahmora",
    role: "Founder / Visionary",
    image: "/images/team/andre-jahmora.jpg",
  },
  {
    name: "Tone Oliver",
    role: "Director, Pod Masters Co-founder",
    image: "/images/team/tone_oliver.png",
  },
];

const guests: Guest[] = [
  { name: "Rachel Wolfe", image: "/images/guests/rachel_wolfe.png", episodeUrl: "https://www.youtube.com/watch?v=gJOORqN-jJA" },
  { name: "Oni Jahmora", image: "/images/guests/oni_jahmora.png", episodeUrl: "https://www.youtube.com/watch?v=nMbAMHKJGXM" },
  { name: "Timothy B.", image: "/images/guests/timothy_b.png", episodeUrl: "https://www.youtube.com/watch?v=Uif8N4Ept48" },
  { name: "Taylor Smalls", image: "/images/guests/taylor_smalls.png", episodeUrl: "https://www.youtube.com/watch?v=mHa7C-nMUdw" },
  { name: "Saman Qadir", image: "/images/guests/saman_qadir.png", episodeUrl: "https://www.youtube.com/watch?v=SVFbCMVX7vY" },
];

const Podcast = () => {
  return (
    <>
      <PageHero
        title="Urban Artist Talk"
        subtitle="The Podcast"
        description="The go-to podcast for exclusive interviews with top professionals and masters of their craft."
        backgroundImage="/images/podcast-hero.png"
        imagePosition="center top"
        breadcrumbs={[{ label: "Podcast", href: "/podcast" }]}
      />
      <IntroSection />
      <TeamSection />
      <GuestsSection />
      <CTASection />
    </>
  );
};

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
            New Addition to BAMP
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tune In to
            <span className="text-primary"> Urban Artist Talk</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <a
            href="https://www.youtube.com/watch?v=qk8BPvo_Vcw"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group"
          >
            <div className="relative bg-card rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-video relative">
                <img
                  src="/images/podcast/featured-episode.jpg"
                  alt="Latest Episode"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-center mt-10"
        >
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Urban Artist Talk is the go-to podcast for exclusive interviews with top professionals
            and masters of their craft. We dive deep into navigating creative landscapes, staying
            relevant amid AI influence, and thriving in tech-driven industries.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            New episodes release every Friday on YouTube. Join us as we sit down
            with the Bay Area's most impactful artists and creative professionals.
          </p>
          <a
            href="https://www.youtube.com/watch?v=qk8BPvo_Vcw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="rounded-full group">
              <Youtube className="mr-2 w-5 h-5" />
              Watch Latest Episode
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const EQBars = ({ count = 5, className = "" }: { count?: number; className?: string }) => (
  <div className={`flex items-end gap-[3px] ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <div
        key={i}
        className="w-[3px] rounded-full bg-primary"
        style={{ height: `${10 + ((i * 7 + 3) % 14)}px` }}
      />
    ))}
  </div>
);

const TeamSection = () => {
  return (
    <section
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background: "linear-gradient(160deg, hsl(20 10% 8%) 0%, hsl(20 12% 12%) 40%, hsl(0 20% 10%) 100%)",
      }}
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <EQBars count={4} />
            <span className="font-accent text-primary uppercase tracking-[0.35em] text-sm">
              Meet The Hosts
            </span>
            <EQBars count={4} />
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-5 leading-[0.95]">
            The Voices Behind
            <br />
            <span className="text-primary">The Podcast</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            The passionate team bringing you insightful conversations with the Bay Area's top artists.
          </p>
        </div>

        {/* Host panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {podcastTeam.map((member) => (
            <HostPanel key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HostPanel = ({ member }: { member: TeamMember }) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-white/5">
        {/* Photo */}
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover"
            style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-primary/10 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-primary/40">
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

        {/* Crimson accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {/* EQ bars */}
          <div className="mb-4">
            <EQBars count={6} />
          </div>

          {/* Role tag */}
          <span className="inline-block font-accent text-primary tracking-[0.2em] text-xs uppercase mb-2">
            {member.role}
          </span>

          {/* Name */}
          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            {member.name}
          </h3>
        </div>

        {/* Corner mic icon */}
        <div className="absolute top-5 right-5">
          <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
            <Mic className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

const GuestsSection = () => {
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
            Art Talks Guests
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Guests
          </h2>
          <p className="text-muted-foreground text-lg">
            We've had the honor of speaking with some of the Bay Area's most talented and influential artists.
          </p>
        </motion.div>

        <div className="flex gap-8 overflow-x-auto pb-4 justify-start md:justify-center">
          {guests.map((guest, index) => (
            <div key={guest.name} className="w-64 md:w-72 flex-shrink-0">
              <GuestCard guest={guest} index={index} isInView={isInView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GuestCard = ({ guest, index, isInView }: { guest: Guest; index: number; isInView: boolean }) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const CardContent = (
    <>
      <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
        {!imageError ? (
          <img
            src={guest.image}
            alt={guest.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={guest.imagePosition ? { objectPosition: guest.imagePosition } : undefined}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <span className="font-display text-2xl font-bold text-primary">
              {getInitials(guest.name)}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
          <Play className="w-8 h-8 text-white" />
        </div>
      </div>
      <h3 className="font-display text-lg font-bold text-foreground">
        {guest.name}
      </h3>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group text-center"
    >
      {guest.episodeUrl ? (
        <a href={guest.episodeUrl} target="_blank" rel="noopener noreferrer" className="block">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
};

const CTASection = () => {
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
            Join The Conversation
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
            Subscribe now and never miss an episode. New interviews drop every Friday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://youtu.be/Uif8N4Ept48"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg group"
              >
                <Youtube className="mr-2 w-5 h-5" />
                Watch on YouTube
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Podcast;
