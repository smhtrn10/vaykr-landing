import { motion } from "framer-motion";
import { Apple } from "lucide-react";

const APPLE_STORE_URL = "https://apps.apple.com/us/app/vaykr-road-ready-booker/id6759841334"; // Replace with your actual App Store link

const CtaSection = () => {
  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto glass-card rounded-3xl p-12 md:p-16 text-center"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Ready to Plan Your Next <span className="text-gradient">Adventure</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 font-body">
          Download Vaykr now and start exploring the world, one trip at a time.
        </p>
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
    </section>
  );
};

export default CtaSection;
