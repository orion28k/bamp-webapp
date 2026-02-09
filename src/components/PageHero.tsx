import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href: string }[];
  imagePosition?: string;
}

const PageHero = ({ title, subtitle, description, backgroundImage, breadcrumbs, imagePosition = "center calc(69%)" }: PageHeroProps) => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        {backgroundImage ? (
          <img
            src={backgroundImage}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-bamp-charcoal via-secondary to-bamp-charcoal" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-bamp-charcoal/80 via-bamp-charcoal/60 to-bamp-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bamp-charcoal/70 via-transparent to-transparent" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Link to="/" className="text-white/60 hover:text-white text-sm transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={crumb.label} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-white/40" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-primary text-sm">{crumb.label}</span>
                ) : (
                  <Link to={crumb.href} className="text-white/60 hover:text-white text-sm transition-colors">
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          {title}
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8"
        />
      </div>
    </section>
  );
};

export default PageHero;
