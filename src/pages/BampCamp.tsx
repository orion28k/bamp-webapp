import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Sun,
  Palette,
  Camera,
  TreePine,
  ArrowRight,
  Mail,
  CheckCircle,
  Star,
} from "lucide-react";
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

/* ─── SCHEDULE DATA ───────────────────────────────────────────────── */

const schedule = [
  {
    time: "9:00 – 9:30",
    label: "Arrival",
    description: "Check-in and morning setup",
    color: "bamp-teal",
  },
  {
    time: "9:30 – 9:45",
    label: "Welcome & Warm-Up",
    description: "Group circle, intentions, and creative warm-up exercises",
    color: "bamp-gold",
  },
  {
    time: "9:45 – 10:30",
    label: "Mural Design & Lesson",
    description:
      "Guided instruction in mural techniques, color theory, and cultural storytelling",
    color: "bamp-red",
  },
  {
    time: "10:30 – 11:00",
    label: "Activation Session",
    description: "Hands-on application of the day's lesson on canvas or wall",
    color: "bamp-gold",
  },
  {
    time: "11:00 – 11:30",
    label: "Snack & Lunch Break",
    description: "Youth bring a packed lunch. On-site snacks available",
    color: "bamp-teal",
  },
  {
    time: "11:30 – 12:30",
    label: "Mural Work or Outside Activity",
    description:
      "Continue mural progress or rotate through scheduled field experiences",
    color: "bamp-red",
  },
  {
    time: "12:30 – 1:00",
    label: "Wrap-Up & Prep",
    description: "Reflection, cleanup, and previewing tomorrow's session",
    color: "bamp-gold",
  },
];

/* ─── OUTSIDE ACTIVITIES ─────────────────────────────────────────── */

const activities = [
  {
    icon: TreePine,
    name: "Snow Park",
    detail: "Twice weekly outdoor excursion",
  },
  {
    icon: Palette,
    name: "Draw-by-Sight Session",
    detail: "Observational drawing in the field",
  },
  {
    icon: Camera,
    name: "Landscape Session",
    detail: "Plein air and environmental studies",
  },
  {
    icon: Sun,
    name: "Animal Session",
    detail: "Nature drawing and wildlife study",
  },
  {
    icon: Star,
    name: "Joshua Mayes Exhibit",
    detail: "Gallery visit and artist talk",
  },
  {
    icon: MapPin,
    name: "Mural Tour",
    detail: "Oakland neighborhood mural walk",
  },
  {
    icon: Users,
    name: "Museum for Children's Art",
    detail: "Hands-on museum experience",
  },
  {
    icon: MapPin,
    name: "OMCA",
    detail: "Oakland Museum, children's passes included",
  },
];

/* ─── PRICING ────────────────────────────────────────────────────── */

const pricingPlans = [
  {
    label: "Weekly",
    price: "$300",
    unit: "/ week",
    description: "One full week of creative immersion",
    highlighted: false,
  },
  {
    label: "Full Program",
    price: "$1,000",
    unit: "/ 4 weeks",
    badge: "Best Value",
    description: "The complete four-week summer experience. Save $200.",
    highlighted: true,
  },
];

/* ─── EARLY CTA ──────────────────────────────────────────────────── */

const EarlyCTA = () => (
  <section className="bg-bamp-cream py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
        <div>
          <p className="font-display text-2xl md:text-3xl font-bold text-bamp-charcoal leading-tight">
            Ready to sign up for camp?
          </p>
          <p className="text-black text-sm mt-1">
            Space is limited. Register your child for Summer BAMP Camp 2026 today!
          </p>
        </div>
        <Link to="/bamp-camp/register" className="flex-shrink-0">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 rounded-full group"
          >
            Register Now
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─── MAIN PAGE ───────────────────────────────────────────────────── */

const BampCamp = () => {
  return (
    <>
      <PageHero
        title="BAMP Camp"
        subtitle="Summer Youth Mural Camp"
        description="Summer BAMP Camp is a hands-on creative program where youth ages 5–13 create real public art, explore Oakland's culture, and develop their artistic voice alongside professional artists."
        backgroundImage="/images/heroes/21964FB4-DC59-4088-888E-4F4B631B9145.jpeg"
        breadcrumbs={[{ label: "BAMP Camp", href: "/bamp-camp" }]}
        imagePosition="center 50%"
      />

      <QuickStatsBar />
      <EarlyCTA />
      <AboutSection />
      <ScheduleSection />
      <ActivitiesSection />
      <PricingSection />
      <RegisterSection />
    </>
  );
};

/* ─── QUICK STATS BAR ────────────────────────────────────────────── */

const QuickStatsBar = () => {
  const stats = [
    { icon: Users, label: "Ages", value: "5 – 13" },
    { icon: Calendar, label: "Dates", value: "June 7 – July 3" },
    { icon: Clock, label: "Hours", value: "9 AM – 1 PM" },
    { icon: Sun, label: "Days", value: "Mon – Fri" },
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

/* ─── ABOUT SECTION ──────────────────────────────────────────────── */

const AboutSection = () => {
  return (
    <section className="py-14 lg:py-20 bg-bamp-charcoal relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="font-accent text-sm tracking-[0.3em] text-primary uppercase block mb-4">
                Summer 2026
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Where Youth Become
                <span className="text-gradient block">Muralists</span>
              </h2>
              <p className="text-white text-lg leading-relaxed mb-6">
                BAMP Summer Camp provides youth with access to creative education
                through mural arts, collaborative projects, and cultural
                storytelling, while offering families a safe and enriching
                daytime program.
              </p>
              <p className="text-white text-base leading-relaxed">
                Each camper works toward a final collaborative mural, building
                real skills alongside Oakland's working artists. Four weeks.
                One community. Real art on real walls.
              </p>
            </FadeIn>

            <FadeIn delay={0.15} className="mt-10">
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Four-week session",
                  "Ages 5 through 13",
                  "Daily creative curriculum",
                  "Final collaborative mural",
                  "Field trips & museum visits",
                  "Artist's Kit included",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-white text-sm font-body">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="/images/murals/bamp-camp-kids-painting.webp"
                  alt="Youth working on murals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/40 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-bamp-gold rounded-2xl px-5 py-4 shadow-2xl">
                <p className="font-accent text-4xl text-bamp-charcoal leading-none">Mural Arts</p>
                <p className="font-accent text-base text-bamp-charcoal mt-1 leading-none">for the youth</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─── SCHEDULE SECTION ───────────────────────────────────────────── */

const colorMap: Record<string, string> = {
  "bamp-red": "bg-bamp-red",
  "bamp-gold": "bg-bamp-gold",
  "bamp-teal": "bg-bamp-teal",
};

const dotColorMap: Record<string, string> = {
  "bamp-red": "border-bamp-red",
  "bamp-gold": "border-bamp-gold",
  "bamp-teal": "border-bamp-teal",
};

const ScheduleSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-bamp-cream relative overflow-hidden">
      <div className="container mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="font-accent text-sm tracking-[0.3em] text-primary uppercase block mb-4">
            A Day at Camp
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bamp-charcoal">
            Daily Schedule
          </h2>
        </FadeIn>

        <div ref={ref} className="max-w-3xl mx-auto relative">
          {/* Vertical timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-bamp-charcoal/15 origin-top"
          />

          <div className="space-y-3">
            {schedule.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="relative flex gap-6 md:gap-10 pl-10 md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[11px] md:left-[27px] top-5 w-3 h-3 rounded-full border-2 ${dotColorMap[item.color]} bg-bamp-cream`}
                />

                {/* Card */}
                <div className="flex-1 bg-white hover:bg-white/80 border border-bamp-charcoal/10 rounded-xl p-4 md:p-5 transition-colors duration-300 group shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-lg font-semibold text-bamp-charcoal group-hover:text-primary transition-colors">
                      {item.label}
                    </h3>
                    <span
                      className={`font-accent text-sm tracking-wider px-3 py-0.5 rounded-full text-bamp-charcoal self-start sm:self-auto ${colorMap[item.color]}`}
                    >
                      {item.time}
                    </span>
                  </div>
                  <p className="text-black text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <FadeIn delay={0.3} className="mt-8 pl-10 md:pl-20">
            <p className="text-black text-sm italic">
              * Youth are required to bring a packed lunch.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─── ACTIVITIES SECTION ─────────────────────────────────────────── */

const ActivitiesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-bamp-charcoal relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="font-accent text-sm tracking-[0.3em] text-primary uppercase block mb-4">
            Beyond the Studio
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Outside Activities
          </h2>
          <p className="text-white max-w-xl mx-auto text-base leading-relaxed">
            Campers step outside the studio to explore Oakland's art and nature,
            from mural tours to museum visits.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {activities.map((activity, i) => (
            <FadeIn key={activity.name} delay={i * 0.06}>
              <div className="group bg-white/5 hover:bg-primary/10 border border-white/8 hover:border-primary/30 rounded-2xl p-5 transition-all duration-300 h-full">
                <activity.icon className="w-7 h-7 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-base font-semibold text-white mb-1 leading-tight">
                  {activity.name}
                </h3>
                <p className="text-white text-xs leading-relaxed">
                  {activity.detail}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── PRICING SECTION ────────────────────────────────────────────── */

const PricingSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-bamp-cream relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn className="text-center mb-16">
          <span className="font-accent text-sm tracking-[0.3em] text-primary uppercase block mb-4">
            Enrollment
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-bamp-charcoal mb-4">
            Tuition & Pricing
          </h2>
          <p className="text-black max-w-xl mx-auto text-base">
            All sessions include instruction, activities, and museum passes. Payment in advance.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <FadeIn key={plan.label} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-7 h-full flex flex-col border transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary border-primary shadow-2xl shadow-primary/20 scale-[1.03]"
                    : "bg-white border-bamp-charcoal/10 hover:border-bamp-charcoal/25 shadow-sm"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-bamp-gold text-bamp-charcoal font-body font-semibold text-xs tracking-wider px-4 py-1 rounded-full uppercase">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <p
                    className={`font-accent text-sm tracking-[0.25em] uppercase mb-3 ${
                      plan.highlighted ? "text-white" : "text-black"
                    }`}
                  >
                    {plan.label}
                  </p>
                  <div className="flex items-end gap-1">
                    <span
                      className={`font-display text-5xl font-bold leading-none ${
                        plan.highlighted ? "text-white" : "text-bamp-charcoal"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span
                      className={`font-body text-base mb-1 ${
                        plan.highlighted ? "text-white" : "text-black"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-sm leading-relaxed flex-1 ${
                    plan.highlighted ? "text-white" : "text-black"
                  }`}
                >
                  {plan.description}
                </p>

                <Link to="/bamp-camp/register" className="block mt-6">
                  <Button
                    className={`w-full rounded-full font-semibold ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-bamp-charcoal/8 text-bamp-charcoal hover:bg-primary hover:text-primary-foreground border border-bamp-charcoal/15"
                    }`}
                  >
                    Register
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          ))}

          {/* Family Discount card */}
          <FadeIn delay={0.2}>
            <div className="relative rounded-2xl p-7 h-full flex flex-col border bg-bamp-gold/15 border-bamp-gold/40 shadow-sm">
              <div className="mb-6">
                <p className="font-accent text-sm tracking-[0.25em] uppercase mb-3 text-black">
                  Family Discount
                </p>
                <div className="flex items-end gap-1">
                  <span className="font-display text-5xl font-bold leading-none text-bamp-charcoal">
                    25%
                  </span>
                  <span className="font-body text-base mb-1 text-black">
                    off
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed flex-1 text-black">
                Register more than one child and receive 25% off each additional enrollment.
              </p>
              <div className="mt-6 flex items-center gap-2 text-black text-xs font-body">
                <Star className="w-4 h-4 text-black flex-shrink-0" />
                Applied automatically at checkout
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ─── REGISTER CTA ───────────────────────────────────────────────── */

const RegisterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/murals/community-youthempowerment1.jpeg"
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
            June 7 – July 3, 2026
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Register?
          </h2>
          <p className="text-white text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Space is limited. Register below to secure your child's spot in Summer BAMP Camp 2026.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bamp-camp/register">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg group"
              >
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="mailto:camp@thebamp.org">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-bamp-red hover:bg-white/10 font-semibold px-8 py-6 rounded-full text-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </a>
          </div>

          <p className="text-white text-sm mt-8">
            Interested in teaching or mentoring?{" "}
            <a
              href="mailto:camp@thebamp.org"
              className="text-white underline underline-offset-4 hover:text-white transition-colors"
            >
              Let us know
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BampCamp;
