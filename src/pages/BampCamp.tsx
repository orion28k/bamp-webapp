import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/* ─── MAIN PAGE ───────────────────────────────────────────────────── */

const BampCamp = () => {
  return (
    <>
      <HeroSection />
      <CTASection />
    </>
  );
};

/* ─── HERO ────────────────────────────────────────────────────────── */

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/murals/community-youthempowerment1.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bamp-charcoal/70 via-bamp-charcoal/50 to-bamp-charcoal/90" />
      </div>

      {/* Decorative accents */}
      <div className="absolute top-16 left-8 w-56 h-56 rounded-full bg-amber-400/20 blur-3xl animate-float" />
      <div
        className="absolute bottom-24 right-12 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-sky-400/15 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="font-accent text-lg md:text-xl tracking-[0.3em] text-amber-400 uppercase">
            Summer 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-[0.95] mb-4"
        >
          BAMP
          <span className="block text-gradient">Camp</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-accent text-2xl md:text-3xl tracking-wide text-white/80 mb-4"
        >
          Summer Youth Mural Camp
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A hands-on, mentorship-driven mural program where youth create
          real public art alongside professional artists.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          <a href="mailto:camp@bamp.org">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 rounded-full text-lg group"
            >
              Get Notified
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-white/50 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

/* ─── CTA / JOIN OUR COMMUNITY ────────────────────────────────────── */

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/murals/schools-achieve-academy.jpeg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="font-accent text-lg tracking-[0.25em] text-white/60 mb-4 block">
            Summer 2026
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Dates & Registration Coming Soon
          </h2>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-10 leading-relaxed">
            Have questions or want to be first to know when registration opens?
            Reach out — we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:camp@bamp.org">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 rounded-full text-lg group"
              >
                <Mail className="mr-2 w-5 h-5" />
                camp@bamp.org
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
          <p className="text-primary-foreground/50 text-sm mt-8">
            Interested in being a lead artist or mentor?{" "}
            <a
              href="mailto:camp@bamp.org"
              className="text-white underline underline-offset-4 hover:text-white/80 transition-colors"
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
