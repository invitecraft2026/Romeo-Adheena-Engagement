import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-12 px-6 bg-wedding-dark text-center">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <Heart className="w-5 h-5 text-wedding-pink mx-auto mb-4" />
      <p className="font-heading text-wedding-ivory text-2xl mb-2">
        Jessica & Michael
      </p>
      <p className="font-body text-wedding-ivory/50 text-sm tracking-wider">
        December 20, 2025
      </p>
      <div className="w-16 h-px bg-wedding-gold/30 mx-auto mt-6" />
      <p className="font-body text-wedding-ivory/30 text-xs mt-4">
        With love and blessings
      </p>
    </motion.div>
  </footer>
);

export default Footer;
