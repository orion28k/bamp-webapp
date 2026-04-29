import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Users,
  CalendarDays,
  Paintbrush,
  Heart,
  HandHeart,
} from "lucide-react";
import PageHero from "@/components/PageHero";

/* ─── MAIN PAGE ───────────────────────────────────────────────────── */

const JoinUs = () => {
  return (
    <>
      <PageHero
        title="Join Us"
        subtitle="Get Involved"
        description="Whether you want to stay connected with the BAMP community, volunteer your time, or work alongside professional artists on real public projects — there's a place for you here."
        backgroundImage="/images/murals/File_040.jpeg"
        imagePosition="center top"
        breadcrumbs={[{ label: "Join Us", href: "/join-us" }]}
      />
      <WhyJoinSection />
      <IntroSection />
      <VolunteerSection />
      <NewsletterFormSection />
    </>
  );
};

/* ─── WHY JOIN SECTION ────────────────────────────────────────────── */

const WhyJoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Paintbrush,
      title: "Mural Updates",
      description:
        "Be the first to hear about new public art installations and projects across the Bay Area.",
    },
    {
      icon: CalendarDays,
      title: "Events & Workshops",
      description:
        "Get invitations to community events, art workshops, BAMP Camp announcements, and more.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Stay connected with a growing network of artists, volunteers, and partners making real change.",
    },
    {
      icon: Mail,
      title: "Direct Access",
      description:
        "Receive news straight from the BAMP team — no noise, just meaningful updates.",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-black text-base">
            Thousands of supporters follow BAMP's work across the Bay Area.
            Join the community and never miss a moment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-muted rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-black text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── NEWSLETTER FORM SECTION ─────────────────────────────────────── */

const NewsletterFormSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div
            ref={formRef}
            className="hs-form-frame"
            data-region="na2"
            data-form-id="7a66417d-819f-48ea-8aae-649e19858439"
            data-portal-id="245382363"
          />
        </motion.div>
      </div>
    </section>
  );
};

/* ─── INTRO / TEAM SECTION ────────────────────────────────────────── */

const IntroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-bamp-charcoal relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Be Part of Something Bigger
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Work on <span className="text-primary">Real Public Projects</span>
            </h2>
            <div className="space-y-4 text-white leading-relaxed">
              <p>
                BAMP produces large-scale murals for schools, corporations, and public
                spaces across the Bay Area and internationally. We're building a roster
                of artists, organizers, and educators who want to do meaningful work.
              </p>
              <p>
                We've worked alongside the Golden State Warriors, NBA All-Star Weekend,
                Jordan Brand, Rakuten, and Amazon — and we're always looking for talent
                ready to work at that level.
              </p>
              <p>
                If you bring craft, professionalism, and community commitment, there's a
                place for you here.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white/8 rounded-2xl p-6 border border-white/10">
                <HandHeart className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-accent text-2xl font-bold text-white">1,100+</div>
                <div className="text-sm text-white">Volunteers</div>
              </div>
              <div className="bg-white/8 rounded-2xl p-6 border border-white/10">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-accent text-2xl font-bold text-white">90</div>
                <div className="text-sm text-white">Artists</div>
              </div>
              <div className="bg-white/8 rounded-2xl p-6 border border-white/10">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-accent text-2xl font-bold text-white">30</div>
                <div className="text-sm text-white">Communities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── VOLUNTEER SECTION ───────────────────────────────────────────── */

const VolunteerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/images/murals/photo-jun-19-2021.jpg"
                alt="Community art event"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/30 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <HandHeart className="w-8 h-8 text-white" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Volunteer
            </h2>
            <div className="space-y-4 text-black leading-relaxed mb-8">
              <p>
                Join us in bringing vibrant and inspiring art, meaningful mentorship, and
                impactful community projects to life.
              </p>
              <p>
                Share your valuable time, skills, and unique talents to help foster
                creativity and build connections, creating a lasting and positive impact
                through our diverse and engaging programs.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
