import { motion } from "framer-motion";
import bougainvilleaFrame from "@/assets/bougainvillea-frame.png";

interface LandingScreenProps {
  onTap: () => void;
}

const LandingScreen = ({ onTap }: LandingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      onClick={onTap}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={bougainvilleaFrame}
          alt="Bougainvillea floral frame"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.p
          className="font-display text-wedding-ivory text-lg tracking-[0.3em] uppercase mb-4"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          You are invited
        </motion.p>

        <h1 className="font-heading text-wedding-ivory text-4xl md:text-5xl mb-6 leading-tight">
          A Celebration
          <br />
          <span className="text-wedding-gold italic">of Love</span>
        </h1>

        <div className="w-24 h-px bg-wedding-gold mx-auto mb-6 gold-shimmer" />

        <motion.p
          className="font-body text-wedding-ivory/70 text-sm tracking-[0.2em] uppercase"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        >
          Tap anywhere to open
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default LandingScreen;
