import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Users, CalendarDays, Paintbrush } from "lucide-react";
import PageHero from "@/components/PageHero";

const JoinUs = () => {
  return (
    <>
      <PageHero
        title="Join Us"
        subtitle="Stay Connected"
        description="Be part of the BAMP community. Get updates on new murals, events, workshops, and ways to get involved."
        backgroundImage="/images/murals/bamp-camp-kids-painting.jpg"
        breadcrumbs={[{ label: "Join Us", href: "/join-us" }]}
        imagePosition="center 55%"
      />
      <NewsletterFormSection />
      <WhyJoinSection />
    </>
  );
};

const WhyJoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Paintbrush,
      title: "Mural Updates",
      description: "Be the first to hear about new public art installations and projects across the Bay Area.",
    },
    {
      icon: CalendarDays,
      title: "Events & Workshops",
      description: "Get invitations to community events, art workshops, BAMP Camp announcements, and more.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Stay connected with a growing network of artists, volunteers, and partners making real change.",
    },
    {
      icon: Mail,
      title: "Direct Access",
      description: "Receive news straight from the BAMP team — no noise, just meaningful updates.",
    },
  ];

  return (
    <section ref={ref} className="pt-36 pb-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-primary font-semibold uppercase tracking-widest text-xs mb-3 block">
            Why Join
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-black text-base">
            Thousands of supporters follow BAMP's work across the Bay Area.
            Join the community and never miss a moment.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
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

const NewsletterFormSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
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

export default JoinUs;
