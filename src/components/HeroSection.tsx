import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow motion (0.5 = half speed)
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/wedding-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 gradient-overlay" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1.5 }}
      >
        <motion.p
          className="font-display text-wedding-gold text-base tracking-[0.3em] uppercase mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Together with their families
        </motion.p>

        <motion.h2
          className="font-heading text-wedding-ivory text-5xl md:text-7xl mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Jessica
        </motion.h2>

        <motion.p
          className="font-display text-wedding-gold text-3xl md:text-4xl italic my-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          &amp;
        </motion.p>

        <motion.h2
          className="font-heading text-wedding-ivory text-5xl md:text-7xl mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
        >
          Michael
        </motion.h2>

        <motion.div
          className="w-32 h-px mx-auto mb-6 gold-shimmer"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        />

        <motion.p
          className="font-display text-wedding-ivory/80 text-lg tracking-[0.15em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Request the honour of your presence
          <br />
          at their wedding celebration
        </motion.p>
      </motion.div>
    </section>
  );
};

export default HeroSection;