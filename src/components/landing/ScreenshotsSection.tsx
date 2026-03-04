import { motion } from "framer-motion";
import slice2 from "@/assets/slice-2.png";
import slice4 from "@/assets/slice-4.png";
import slice5 from "@/assets/slice-5.png";

const screenshots = [
  { src: slice2, alt: "Plan Your Perfect Road Trip", label: "Destination Selection" },
  { src: slice4, alt: "Smart Spot Selection with Map", label: "Spot Selection" },
  { src: slice5, alt: "Your Personal Trip Organizer", label: "Trip Itinerary" },
];

const ScreenshotsSection = () => {
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
            See <span className="text-gradient">Vaykr</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            A beautiful, intuitive experience designed for travelers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {screenshots.map((shot, index) => (
            <motion.div
              key={shot.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="relative group">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-64 md:w-72 rounded-3xl shadow-2xl group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <p className="mt-5 font-heading font-semibold text-lg">{shot.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
