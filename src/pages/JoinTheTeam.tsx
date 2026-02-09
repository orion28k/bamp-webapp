import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Heart, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/PageHero";

const JoinTheTeam = () => {
  return (
    <>
      <PageHero
        title="Join Our Team"
        subtitle="Get Involved"
        description="Are you passionate about art, community, and making a difference? Explore opportunities to grow with us and contribute your talents to transforming spaces and inspiring people."
        backgroundImage="/images/murals/File_040.jpeg"
        imagePosition="center top"
        breadcrumbs={[{ label: "Join the Team", href: "/join-the-team" }]}
      />
      <IntroSection />
      <VolunteerSection />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Be Part of Something Bigger
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Make a <span className="text-primary">Difference</span> With Us
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Our nonprofit is always looking for creative, dedicated individuals to help
                bring murals, mentorship, and meaningful projects to life.
              </p>
              <p>
                Whether you're an artist, organizer, or someone who simply believes in the
                power of public art to transform communities, there's a place for you here.
              </p>
              <p>
                Join us in creating lasting impact through art and community engagement.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-16 h-16 text-primary" />
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-muted rounded-2xl p-6">
                <HandHeart className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-accent text-2xl font-bold text-foreground">1,100+</div>
                <div className="text-sm text-muted-foreground">Volunteers</div>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-accent text-2xl font-bold text-foreground">90</div>
                <div className="text-sm text-muted-foreground">Artists</div>
              </div>
              <div className="bg-muted rounded-2xl p-6">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-accent text-2xl font-bold text-foreground">30</div>
                <div className="text-sm text-muted-foreground">Communities</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

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
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Join us in bringing vibrant and inspiring art, meaningful mentorship, and
                impactful community projects to life.
              </p>
              <p>
                Share your valuable time, skills, and unique talents to help foster creativity
                and build connections, creating a lasting and positive impact through our
                diverse and engaging programs.
              </p>
            </div>
            <a
              href="https://forms.gle/RPHmXmFkzmVVyKhX7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="rounded-full px-8 py-6 group">
                Volunteer Application
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Whether you want to volunteer, apply for a position, or simply learn more
            about how you can contribute, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 group">
                Contact Us
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-muted rounded-full px-8 py-6">
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

export default JoinTheTeam;
