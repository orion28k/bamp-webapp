import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Youtube, ArrowRight, CheckCircle } from "lucide-react";

// SVG rough brush stroke shape
const BrushSmear = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 600 80" className={className} preserveAspectRatio="none">
    <path
      d="M0,40 C60,10 120,60 200,38 C280,16 340,55 420,32 C500,10 560,45 600,30 L600,80 L0,80 Z"
      fill="currentColor"
      opacity="0.6"
    />
    <path
      d="M0,55 C80,30 180,65 260,45 C340,25 400,60 480,42 C540,28 580,50 600,40 L600,80 L0,80 Z"
      fill="currentColor"
      opacity="0.4"
    />
  </svg>
);

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "hsl(20 10% 10%)" }}
    >
      {/* Noise texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.045,
        }}
      />

      {/* Atmospheric color orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-8rem",
          left: "-8rem",
          width: "36rem",
          height: "36rem",
          borderRadius: "50%",
          background: "hsl(var(--bamp-red))",
          opacity: 0.12,
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-6rem",
          right: "-6rem",
          width: "30rem",
          height: "30rem",
          borderRadius: "50%",
          background: "hsl(var(--bamp-gold))",
          opacity: 0.1,
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "60%",
          width: "22rem",
          height: "22rem",
          borderRadius: "50%",
          background: "hsl(var(--bamp-teal))",
          opacity: 0.07,
          filter: "blur(80px)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Bottom brush smear — gold */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-20 text-bamp-gold overflow-hidden pointer-events-none rotate-180"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.9, ease: "easeOut" }}
      >
        <BrushSmear className="w-full h-full opacity-30" />
      </motion.div>

      {/* ─── Red header with logo ─── */}
      <motion.header
        className="relative z-10 flex items-center justify-center w-full px-6 py-5"
        style={{ background: "hsl(var(--bamp-red))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/bamp-logo.png"
          alt="BAMP — Bay Area Mural Program"
          className="h-14 w-auto"
          style={{ filter: "brightness(1.05)" }}
        />
      </motion.header>

      {/* ─── Main content ─── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto">

        {/* "COMING" — brush-reveal left to right */}
        <div className="overflow-hidden leading-none mb-0">
          <motion.h1
            className="font-accent leading-none uppercase select-none"
            style={{
              fontSize: "clamp(5rem, 20vw, 17rem)",
              color: "hsl(var(--bamp-cream))",
              letterSpacing: "0.06em",
            }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ delay: 0.3, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            COMING
          </motion.h1>
        </div>

        {/* "SOON" — brush-reveal, staggered */}
        <div className="overflow-hidden leading-none relative">
          <motion.h1
            className="font-accent leading-none uppercase select-none"
            style={{
              fontSize: "clamp(5rem, 20vw, 17rem)",
              color: "hsl(var(--bamp-gold))",
              letterSpacing: "0.06em",
            }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{ delay: 0.65, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          >
            SOON
          </motion.h1>

          {/* Animated gradient underline */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[3px]"
            style={{
              background:
                "linear-gradient(90deg, hsl(var(--bamp-red)), hsl(var(--bamp-gold)), hsl(var(--bamp-teal)))",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.6, duration: 0.9, ease: "easeOut" }}
          />
        </div>

        {/* Tagline */}
        <motion.p
          className="font-display italic mt-8 md:mt-10 mb-2"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            color: "hsl(var(--bamp-cream) / 0.65)",
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Something bold is being painted.
        </motion.p>

        {/* Location tag */}
        <motion.p
          className="font-body uppercase tracking-[0.35em] text-xs md:text-sm mb-12 md:mb-16"
          style={{ color: "hsl(var(--bamp-cream) / 0.35)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
        >
          Bay Area Mural Program · Oakland, CA
        </motion.p>

        {/* Email notify form */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {!submitted ? (
            <>
              <p
                className="font-body text-xs md:text-sm mb-4 tracking-wide"
                style={{ color: "hsl(var(--bamp-cream) / 0.5)" }}
              >
                Be the first to know when we launch.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 font-body text-sm px-5 py-4 rounded-full focus:outline-none transition-all duration-300"
                  style={{
                    background: "hsl(var(--bamp-cream) / 0.06)",
                    border: "1px solid hsl(var(--bamp-cream) / 0.12)",
                    color: "hsl(var(--bamp-cream))",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "hsl(var(--bamp-gold) / 0.5)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 2px hsl(var(--bamp-gold) / 0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "hsl(var(--bamp-cream) / 0.12)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 font-body font-semibold text-sm px-7 py-4 rounded-full transition-all duration-300 whitespace-nowrap"
                  style={{
                    background: "hsl(var(--bamp-red))",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "hsl(var(--bamp-gold))";
                    e.currentTarget.style.color = "hsl(var(--bamp-charcoal))";
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px hsl(var(--bamp-gold) / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "hsl(var(--bamp-red))";
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Notify Me
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            </>
          ) : (
            <motion.div
              className="flex items-center justify-center gap-3"
              style={{ color: "hsl(var(--bamp-gold))" }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <p className="font-body text-base">
                You're on the list. See you soon.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Social links */}
        <motion.div
          className="flex items-center gap-5 mt-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <a
            href="https://www.instagram.com/bamp_art"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-all duration-300 hover:scale-110"
            style={{ color: "hsl(var(--bamp-cream) / 0.4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "hsl(var(--bamp-gold))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "hsl(var(--bamp-cream) / 0.4)";
            }}
          >
            <Instagram className="w-5 h-5" />
          </a>

          <div
            className="w-px h-4"
            style={{ background: "hsl(var(--bamp-cream) / 0.15)" }}
          />

          <a
            href="https://www.youtube.com/@UrbanArtistTalk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="transition-all duration-300 hover:scale-110"
            style={{ color: "hsl(var(--bamp-cream) / 0.4)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "hsl(var(--bamp-red))";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color =
                "hsl(var(--bamp-cream) / 0.4)";
            }}
          >
            <Youtube className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Bottom gradient bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--bamp-red)), hsl(var(--bamp-gold)), hsl(var(--bamp-teal)))",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.4, duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
