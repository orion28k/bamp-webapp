import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* 404 Number */}
        <div className="relative mb-8">
          <span className="font-accent text-[200px] leading-none text-primary/10">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-6xl font-bold text-secondary-foreground">
              Oops!
            </span>
          </div>
        </div>

        <h1 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-secondary-foreground/70 mb-8">
          The page you're looking for seems to have wandered off like a paintbrush 
          in a busy studio. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="rounded-full px-8 py-6 group">
              <Home className="mr-2 w-5 h-5" />
              Go to Homepage
            </Button>
          </Link>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="rounded-full px-8 py-6 border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Go Back
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
