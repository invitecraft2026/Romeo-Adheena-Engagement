import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Generate random future date (between 30 and 120 days from now)
const getRandomWeddingDate = () => {
  const minDays = 30;
  const maxDays = 120;
  const randomDays = Math.floor(Math.random() * (maxDays - minDays + 1)) + minDays;

  const now = new Date();
  now.setDate(now.getDate() + randomDays);
  return now;
};

const WEDDING_DATE = getRandomWeddingDate();

const CountdownTimer = () => {
  const getTimeLeft = () => {
    const diff = WEDDING_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-6 bg-wedding-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 gradient-wedding" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-lg mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-display text-wedding-gold text-base tracking-[0.3em] uppercase mb-3">
          Counting down to
        </p>

        <h3 className="font-heading text-wedding-ivory text-3xl md:text-4xl mb-10">
          Our Special Day
        </h3>

        <div className="grid grid-cols-4 gap-3">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <div className="w-full aspect-square rounded-lg border border-wedding-gold/20 flex items-center justify-center mb-2 bg-wedding-dark/50 backdrop-blur-sm">
                <span className="font-heading text-wedding-ivory text-3xl md:text-4xl">
                  {String(unit.value).padStart(2, "0")}
                </span>
              </div>

              <span className="font-body text-wedding-gold/70 text-xs tracking-[0.15em] uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;