import { motion } from "framer-motion";
import { Apple, Plane, MapPin } from "lucide-react";
import slice1 from "@/assets/slice-1.png";

const APPLE_STORE_URL = "https://apps.apple.com"; // Replace with your actual App Store link

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[15%] opacity-20"
        >
          <Plane className="w-12 h-12 text-primary" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 left-[10%] opacity-15"
        >
          <MapPin className="w-10 h-10 text-secondary" />
        </motion.div>
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-secondary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl mx-auto"
      >
        {/* Logo area */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
            Get Road{" "}
            <span className="text-gradient">Ready</span>
            <br />
            <span className="text-gradient">in</span> Seconds
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-4 font-body"
        >
          <span className="font-semibold text-foreground">Vaykr</span> — Road Ready & Booker
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-muted-foreground mb-10 font-body"
        >
          Trip Planner & Itinerary Maker
        </motion.p>

        {/* App Store Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href={APPLE_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground text-background font-heading font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Apple className="w-6 h-6" />
            Download on the App Store
          </a>
        </motion.div>
      </motion.div>

      {/* Hero phone image */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 z-10"
      >
        <img
          src={slice1}
          alt="Vaykr app - Get Road Ready in Seconds"
          className="w-72 md:w-80 mx-auto drop-shadow-2xl"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
