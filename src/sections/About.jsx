
import {
  Code2,
  Rocket,
  Lightbulb,
  Cpu,
  ArrowUpRight,
} from "lucide-react";

import aboutImg from "../assets/nicholus.jpg";

const focusAreas = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Building intuitive, responsive digital experiences.",
  },
  {
    icon: Cpu,
    title: "STEM & Robotics",
    description: "Exploring technology through creativity and experimentation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Turning ambitious ideas into practical solutions.",
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-[0.08] blur-[120px] bg-primary pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-8 h-px bg-primary" />
          <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-primary">
            Get to know me
          </span>
          <span className="text-xs text-muted-foreground ml-2">
            / 01
          </span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center">

          {/* Portrait */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div
              className="relative w-full mx-auto"
              style={{
                maxWidth: "460px",
                height: "min(620px, 75vh)",
                minHeight: "460px",
              }}
            >
              {/* Ambient glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2rem] opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-primary), transparent 70%)",
                }}
              />

              {/* Offset frame */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[1.8rem] border border-primary/30" />

              {/* Image */}
              <div className="relative w-full h-full p-2 glass glow-border rounded-[1.8rem] overflow-hidden">
                <img
                  src={aboutImg}
                  alt="Portrait of Asaasira Nicholus"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full rounded-[1.35rem] object-cover object-[center_25%] transition-transform duration-700 hover:scale-[1.025]"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-2 rounded-[1.35rem] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(5,12,16,0.65) 100%)",
                  }}
                />

                {/* Image caption */}
                <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between">
                  <div>
                    <p className="text-white text-lg font-semibold tracking-tight">
                      Asaasira Nicholus
                    </p>
                    <p className="text-white/60 text-xs mt-1 tracking-wider uppercase">
                      Developer · Innovator · Creator
                    </p>
                  </div>

                  <span className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About content */}
          <div className="space-y-9 animate-fade-in animation-delay-100 order-1 lg:order-2">

            {/* Heading */}
            <div className="space-y-5">
              <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-bold leading-[1.08] tracking-tight text-secondary-foreground">
                I imagine what
                <span className="block font-serif italic font-normal text-primary">
                  it could be.
                </span>
                <span className="block">
                  Then I build it.
                </span>
              </h2>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I turn ideas into digital experiences that are intuitive,
                purposeful and built to grow. By bringing creativity and
                technology together, I transform abstract thoughts into
                something people can see, use and connect with.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Personal philosophy */}
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold">
                Beyond the screen
              </span>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                My curiosity extends beyond web development into software,
                STEM, robotics and emerging technologies. I enjoy experimenting,
                solving problems and exploring ideas that challenge what
                technology can do.
              </p>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                I'm constantly learning, building and refining my craft.
                For me, every project is an opportunity to turn curiosity
                into something meaningful.
              </p>
            </div>

            {/* Focus areas */}
            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-secondary-foreground tracking-wide">
                  What drives me
                </h3>
                <span className="text-xs text-muted-foreground">
                  03 Areas of focus
                </span>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {focusAreas.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="group p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-primary/40 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon size={18} />
                      </div>

                      <h4 className="text-sm font-semibold text-secondary-foreground mb-2">
                        {item.title}
                      </h4>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing statement */}
            <div className="pt-5 border-t border-white/10">
              <p className="text-sm md:text-base text-secondary-foreground font-medium leading-relaxed">
                The future isn't something I simply wait for.
                <span className="text-primary">
                  {" "}It's something I want to help create.
                </span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
