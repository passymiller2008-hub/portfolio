import { useMemo } from "react";
import heroImg from "@/assets/hero.jpg";

export const Hero = () => {
  const dots = useMemo(
    () =>
      Array.from({ length: 30 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      })),
    []
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {dots.map((pos, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              left: pos.left,
              top: pos.top,
              backgroundColor: "#20B2A6",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;