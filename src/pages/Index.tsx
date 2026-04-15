import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LandingScreen from "@/components/LandingScreen";
import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import ScratchReveal from "@/components/ScratchReveal";
import WeddingDetails from "@/components/WeddingDetails";
import Footer from "@/components/Footer";
import FloatingPetals from "@/components/FloatingPetals";
import MusicPlayer from "@/components/MusicPlayer";
import DressCode from "@/components/Dresscode";

const Index = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="min-h-screen bg-wedding-dark">
      <AnimatePresence>
        {!isOpened && (
          <LandingScreen onTap={() => setIsOpened(true)} />
        )}
      </AnimatePresence>

      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FloatingPetals count={12} />
          <MusicPlayer />
          <HeroSection />
          <CountdownTimer />
          <ScratchReveal />
          <DressCode/>
          <WeddingDetails />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
