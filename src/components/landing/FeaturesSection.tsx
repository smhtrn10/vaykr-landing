import { motion } from "framer-motion";
import { Map, Route, Backpack, CalendarDays } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Plan Your Perfect Road Trip",
    description: "Select your destination, pick the best spots, and let Vaykr create the perfect route for you.",
  },
  {
    icon: Route,
    title: "Smart Spot Selection",
    description: "Browse and select from top attractions. See them on the map with optimized routing between stops.",
  },
  {
    icon: CalendarDays,
    title: "Personal Trip Organizer",
    description: "Day-by-day itineraries with time estimates, distances, and all the details you need.",
  },
  {
    icon: Backpack,
    title: "Smart Packing List",
    description: "Never forget essentials. Get personalized packing suggestions based on your destination and trip type.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Travel Smart</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            From planning to packing, Vaykr has you covered every step of the way.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
