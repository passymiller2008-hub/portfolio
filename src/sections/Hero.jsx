import { ArrowRight, X } from "lucide-react";
import { FaGithub as Github, FaFacebook as Facebook } from "react-icons/fa";
import { useMemo } from "react";
import heroImg from "../assets/hero.jpg";
import dpImg from "../assets/dp.jpg";

function Hero() {
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

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Available for new projects!
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold leading-tight animate-fade-in animation-delay-100">
                <span className="text-white font-serif italic font-normal">
                  I build full-stack web applications that{" "}
                </span>
                <br />
                <span className="text-primary glow-text">
                  solve real-world problems
                </span>
                <br />
                and deliver exceptional user experiences.
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Nicholus a full-stack developer focused on creating
                modern, scalable and user-friendly web-applications. I turn
                ideas into functional products- from clear front ends to robust
                backends and everything in between.
              </p>
            </div>

            <div>
              <button className="animated-border">
                Contact Me <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: Github, href: "#" },
                { icon: X, href: "#" },
                { icon: Facebook, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          {/*Right column- Profile Image */}
          <div className="relative animate-fade-in animation-delay-300">
            {/*Profile Image */}
            <div className ="relative mx-w-md mx-auto">
              <div className ="relative glass rounded-3xl p-2 glow-border">
                <img
                  src={dpImg}
                  alt="Asaasira Nicholus"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;