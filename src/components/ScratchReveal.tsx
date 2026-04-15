import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const ScratchReveal = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const scratchPercentRef = useRef(0);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const gradient = ctx.createLinearGradient(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    gradient.addColorStop(0, "hsl(330, 45%, 55%)");
    gradient.addColorStop(0.5, "hsl(290, 40%, 55%)");
    gradient.addColorStop(1, "hsl(340, 60%, 75%)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

    ctx.fillStyle = "hsl(40, 40%, 95%)";
    ctx.font = "600 16px 'Lato', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✨ Scratch to reveal ✨", canvas.offsetWidth / 2, canvas.offsetHeight / 2 + 6);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = useCallback((x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scratchX = x - rect.left;
    const scratchY = y - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(scratchX, scratchY, 24, 0, Math.PI * 2);
    ctx.fill();

    scratchPercentRef.current += 0.8;
    if (scratchPercentRef.current > 40) {
      setIsRevealed(true);
    }
  }, [isRevealed]);

  const handleStart = () => setIsScratching(true);
  const handleEnd = () => setIsScratching(false);

  const handleMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!isScratching) return;
      const point = "touches" in e ? e.touches[0] : e;
      scratch(point.clientX, point.clientY);
    },
    [isScratching, scratch]
  );

  return (
    <section className="py-20 px-6 bg-wedding-ivory">
      <motion.div
        className="max-w-sm mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-display text-wedding-purple text-base tracking-[0.3em] uppercase mb-3">
          Save the Date
        </p>
        <h3 className="font-heading text-foreground text-3xl mb-8">
          The Big Day
        </h3>

        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-lg border border-wedding-gold/20">
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-wedding-dark">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isRevealed ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <p className="font-display text-wedding-gold text-sm tracking-[0.2em] uppercase mb-1">
                May
              </p>
              <p className="font-heading text-wedding-ivory text-5xl mb-1">24</p>
              <p className="font-display text-wedding-gold text-lg">2026</p>
              <p className="font-body text-wedding-ivory/60 text-xs mt-2 tracking-wider">
                Sunday • 5:00 PM
              </p>
            </motion.div>
          </div>

          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ${
              isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onMouseMove={handleMove}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
            onTouchMove={handleMove}
          />
        </div>

        {isRevealed && (
          <motion.p
            className="font-body text-muted-foreground text-sm mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            We can't wait to celebrate with you! ✨
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default ScratchReveal;