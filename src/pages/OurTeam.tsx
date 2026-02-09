import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram } from "lucide-react";
import PageHero from "@/components/PageHero";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  email?: string;
  imagePosition?: string;
  instagram?: string;
}

const leadership: TeamMember[] = [
  {
    name: "Andre Jahmora",
    role: "Executive Director",
    image: "/images/team/andre-jahmora.jpg",
    email: "andre@thebamp.org",
  },
  {
    name: "Ashley Cousin",
    role: "Assistant Director & Director of Operations",
    image: "/images/team/ashley-cousin.jpg",
    email: "ashley@thebamp.org",
  },
  {
    name: "Andre Davis",
    role: "Technical Marketing Director",
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

const artists: TeamMember[] = [
  {
    name: "Rachel Wolfe-Goldsmith",
    role: "Creative Director",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/rachelwolfepack/",
  },
  {
    name: '"Rtystk" Derrick Shavers',
    role: "Field Operations Director",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/rtystk/",
  },
  {
    name: "Timothy B.",
    role: "Lead Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/timothyb_art/",
  },
  {
    name: "Zoe Boston",
    role: "Lead Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/zoeadiahboston/",
  },
  {
    name: 'Ignacia',
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/djignacia/",
  },
  {
    name: "Nyia Garrett",
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/nyialuna/",
  },
  {
    name: "Corbrae Smith",
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/hellafutures/",
  },
  {
    name: "Sierra Salome",
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/reak.knitta/",
  },
  {
    name: "Forced2Fly",
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/forced2fly/",
  },
  {
    name: "Adisa Davis",
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/adisa_ayo/",
  },
  {
    name: "Kalani Ware",
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/kalaniware/",
  },
  {
    name: 'Shido',
    role: "Artist",
    image: "/images/no-pic.png",
    instagram: "https://www.instagram.com/artbyshido/",
  },
];

const boardMembers: TeamMember[] = [
  {
    name: "Abba Yahudah",
    role: "President",
    image: "/images/team/abba_yahudah.png",
    imagePosition: "center 40%",
    email: "Abbayahudah@gmail.com",
  },
  {
    name: "Eva Facey",
    role: "Vice President",
    image: "/images/team/eva_facey.png",
    imagePosition: "center 10%",
    email: "Evafacey@gmail.com",
  },
  {
    name: "Barrett Raftery",
    role: "Board Member",
    image: "/images/team/barrett_raftery.png",
    email: "Barrett@givepower.org",
  },
];

const OurTeam = () => {
  return (
    <>
      <PageHero
        title="Our Team"
        subtitle="Meet The People"
        description="The talented artists, dedicated leaders, and visionary board members who make BAMP's mission possible."
        backgroundImage="/images/murals/IMG_0999.jpg"
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our Team", href: "/ourteam" },
        ]}
      />
      <LeadershipSection />
      <ArtistsSection />
      <BoardSection />
    </>
  );
};

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  isInView: boolean;
  showInstagram?: boolean;
}

const TeamMemberCard = ({ member, index, isInView, showInstagram = false }: TeamMemberCardProps) => {
  const [imageError, setImageError] = useState(false);

  const getInitials = (name: string) => {
    return name
      .replace(/["]/g, "")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            className={`object-cover ${member.image === "/images/no-pic.png" ? "w-[90%] h-[90%] m-auto rounded-2xl" : "w-full h-full"}`}
            style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-primary/20 flex items-center justify-center">
            <span className="font-display text-4xl font-bold text-primary">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>
      <h3 className="font-display text-xl font-bold text-foreground mb-1">
        {member.name}
      </h3>
      <p className="text-primary font-medium mb-2">{member.role}</p>
      {showInstagram && member.instagram && (
        <a
          href={member.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram className="w-5 h-5" />
        </a>
      )}
      {member.email && !showInstagram && (
        <a
          href={`mailto:${member.email}`}
          className="text-muted-foreground text-sm hover:text-primary transition-colors"
        >
          {member.email}
        </a>
      )}
    </motion.div>
  );
};

const LeadershipSection = () => {
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
            Leadership
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Executive Team
          </h2>
          <p className="text-muted-foreground text-lg">
            Our leadership team guides BAMP's vision and strategic direction.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {leadership.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ArtistsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Artists
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Creative Talent
          </h2>
          <p className="text-muted-foreground text-lg">
            The talented artists who bring murals to life and transform communities through their work.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {artists.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              isInView={isInView}
              showInstagram={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BoardSection = () => {
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
            Board of Directors
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Governance & Oversight
          </h2>
          <p className="text-muted-foreground text-lg">
            Our board members provide strategic guidance and ensure BAMP fulfills its nonprofit mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {boardMembers.map((member, index) => (
            <TeamMemberCard
              key={member.name}
              member={member}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
