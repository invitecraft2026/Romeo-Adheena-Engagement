import { motion } from "framer-motion";
import { MapPin, Clock, Heart, Navigation } from "lucide-react";
import dividerImg from "@/assets/bougainvillea-divider.png";

const details = [
  {
    icon: Clock,
    title: "Ceremony",
    lines: ["Sunday, May 24, 2026", "5:00 PM"],
  },
  {
    icon: MapPin,
    title: "Venue",
    lines: [
      "St. Mary’s Syro-Malabar Church",
      "Moonnamparambu",
    ],
    map: "https://www.google.com/maps/search/?api=1&query=St.+Mary’s+Syro-Malabar+Church+Moonnamparambu",
  },
  {
    icon: Heart,
    title: "Reception",
    lines: [
      "LA Mirage Wedding Venue",
      "Koratty",
      "6:30 PM – 10:00 PM",
    ],
    map: "https://www.google.com/maps/search/?api=1&query=LA+Mirage+Wedding+Venue+Koratty",
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
          Engagement Details
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

              <h4 className="font-heading text-wedding-gold text-xl mb-2">
                {detail.title}
              </h4>

              {detail.lines.map((line, idx) => (
                <p
                  key={idx}
                  className="font-body text-sm leading-relaxed text-gray-900"
                >
                  {line}
                </p>
              ))}

              {detail.map && (
                <a
                  href={detail.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-3 text-wedding-gold text-sm hover:underline"
                >
                  <Navigation className="w-4 h-4" />
                  View on Map
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 p-6 rounded-xl border border-wedding-gold/20 bg-wedding-ivory/60 backdrop-blur-sm"
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