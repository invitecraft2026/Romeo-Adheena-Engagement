import { useMemo } from "react";

const PETAL_COLORS = [
  "hsl(340, 60%, 75%)",
  "hsl(290, 40%, 55%)",
  "hsl(330, 50%, 70%)",
  "hsl(310, 45%, 65%)",
  "hsl(350, 55%, 80%)",
];

const FloatingPetals = ({ count = 15 }: { count?: number }) => {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 14,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        rotation: Math.random() * 360,
      })),
    [count]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-petal animate-sway"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
            animationDelay: `${p.delay}s`,
          } as React.CSSProperties}
        >
          <svg viewBox="0 0 20 20" className="w-full h-full" style={{ transform: `rotate(${p.rotation}deg)` }}>
            <ellipse cx="10" cy="10" rx="8" ry="5" fill={p.color} opacity="0.7" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FloatingPetals;
