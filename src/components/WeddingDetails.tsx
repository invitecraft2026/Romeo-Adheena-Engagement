import { motion } from "framer-motion";
import { MapPin, Clock, Heart } from "lucide-react";
import dividerImg from "@/assets/bougainvillea-divider.png";

const details = [
  {
    icon: Clock,
    title: "Ceremony",
    lines: ["Saturday, December 20, 2025", "2:00 PM"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: ["St. Mary's Cathedral", "123 Garden Avenue, Bougainvillea Estate"],
  },
  {
    icon: Heart,
    title: "Reception",
    lines: ["The Grand Pavilion", "Dinner & Dancing to follow"],
  },
];

const WeddingDetails = () => {
  return (
    <section className="py-20 px-6 gradient-wedding relative overflow-hidden">
      <motion.div
        className="max-w-lg mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-display text-wedding-purple text-base tracking-[0.3em] uppercase mb-3">
          Wedding Details
        </p>
        <h3 className="font-heading text-foreground text-3xl mb-4">
          Join Us in Celebration
        </h3>

        <img
          src={dividerImg}
          alt="Bougainvillea divider"
          className="w-48 mx-auto mb-10 opacity-80"
        />

        <div className="space-y-8">
          {details.map((detail, i) => (
            <motion.div
              key={detail.title}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-wedding-gold/30 mb-4">
                <detail.icon className="w-5 h-5 text-wedding-gold" />
              </div>
              <h4 className="font-heading text-foreground text-xl mb-2">
                {detail.title}
              </h4>
              {detail.lines.map((line) => (
                <p key={line} className="font-body text-muted-foreground text-sm leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 p-6 rounded-xl border border-wedding-gold/20 bg-wedding-ivory/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <p className="font-display text-foreground text-lg italic leading-relaxed">
            "Two are better than one, because they have a good reward for their toil."
          </p>
          <p className="font-body text-wedding-gold text-sm mt-3 tracking-wider">
            — Ecclesiastes 4:9
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WeddingDetails;
