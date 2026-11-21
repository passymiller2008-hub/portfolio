import { ArrowRight, X, Download, MapPin } from "lucide-react";
import { FaGithub as Github, FaFacebook as Facebook } from "react-icons/fa";
import { useMemo, useRef, useEffect, useState } from "react";
import heroImg from "../assets/hero.jpg";
import dpImg from "../assets/dp.jpg";

/* ---------- Constants ---------- */
const PARTICLE_COUNT = 24;

const SOCIALS = [
  { icon: Github, href: "https://github.com/", label: "GitHub" },
  { icon: X, href: "https://x.com/", label: "X (Twitter)" },
  { icon: Facebook, href: "https://facebook.com/", label: "Facebook" },
];

const ROLES = [
  "Full-Stack Developer",
  "React Specialist",
  "UI Engineer",
  "Problem Solver",
];

/* ---------- Hooks ---------- */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

function useTypewriter(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDeleting(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDeleting(false);
            setIndex((i) => i + 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

/* ---------- Component ---------- */
function Hero() {
  const reducedMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const role = useTypewriter(ROLES);

  const dots = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: `${15 + Math.random() * 20}s`,
        delay: `${Math.random() * 5}s`,
        size: `${1 + Math.random() * 2}px`,
      })),
    []
  );

  const handleMouseMove = (e) => {
    if (reducedMotion || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <header
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] md:min-h-[100dvh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
      style={{
        paddingTop: "env(safe-area-inset-top)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      {/* ---------- Background ---------- */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />

        {/* Fine grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "clamp(32px, 5vw, 48px) clamp(32px, 5vw, 48px)",
            color: "var(--color-primary)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />

        {/* Cursor-following radial glow (desktop only) */}
        <div
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x * 100}% ${
              mouse.y * 100
            }%, color-mix(in srgb, var(--color-primary) 8%, transparent), transparent 60%)`,
          }}
          aria-hidden="true"
        />
      </div>

      {/* ---------- Particles (desktop only) ---------- */}
      {!reducedMotion && (
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block"
          aria-hidden="true"
        >
          {dots.map((dot, i) => (
            <span
              key={i}
              className="absolute rounded-full opacity-60"
              style={{
                width: dot.size,
                height: dot.size,
                backgroundColor: "var(--color-primary)",
                left: dot.left,
                top: dot.top,
                animation: `slow-drift ${dot.duration} ease-in-out infinite`,
                animationDelay: dot.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* ---------- Content ---------- */}
      <div
        className="mx-auto w-full relative z-10"
        style={{
          maxWidth: "min(1280px, 100%)",
          paddingInline: "clamp(1rem, 5vw, 3rem)",
          paddingTop: "clamp(5rem, 12vw, 8rem)",
          paddingBottom: "clamp(2.5rem, 8vw, 6rem)",
        }}
      >
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 sm:gap-10 md:gap-12 items-center">

          {/* ---------- Profile — premium editorial placement ---------- */}
          <div className="relative animate-fade-in animation-delay-300 flex justify-center lg:justify-end order-first lg:order-last">
            <div
              className="relative w-full mx-auto lg:mr-2"
              style={{ maxWidth: "min(450px, 82vw)" }}
            >
              {/* Soft teal atmospheric glow */}
              <div
                aria-hidden="true"
                className="absolute -inset-5 sm:-inset-7 rounded-[2.8rem] opacity-70"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 45%, color-mix(in srgb, var(--color-primary) 25%, transparent), transparent 70%)",
                  filter: "blur(35px)",
                }}
              />

              {/* Offset architectural outline */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-primary/30"
              />

              {/* Main portrait frame */}
              <div className="relative glass rounded-[2rem] p-2 sm:p-2.5 glow-border overflow-hidden">
                <img
                  src={dpImg}
                  alt="Portrait of Asaasira Nicholus"
                  loading="eager"
                  decoding="async"
                  className="w-full aspect-[4/5] rounded-[1.5rem] object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                />

                {/* Subtle image shading */}
                <div
                  aria-hidden="true"
                  className="absolute inset-2 sm:inset-2.5 rounded-[1.5rem] pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 65%, rgba(5, 12, 16, 0.28) 100%)",
                  }}
                />

                {/* Availability badge */}
                <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 glass-strong rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 shadow-xl">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="relative flex h-2.5 w-2.5 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                    </span>
                    <div className="leading-tight">
                      <div className="text-[13px] sm:text-sm font-semibold text-foreground">
                        Open to work
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-muted-foreground">
                        Replies within 24h
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small technical accent */}
              <div className="absolute -left-5 top-12 hidden sm:block h-16 w-px bg-gradient-to-b from-transparent via-primary/70 to-transparent" />
            </div>
          </div>

          {/* ---------- Text column ---------- */}
          <div className="space-y-6 sm:space-y-7 md:space-y-8 min-w-0">

            {/* Status chip */}
            <div className="animate-fade-in">
              <span className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 pl-2 pr-3 sm:pr-4 py-1.5 rounded-full glass text-[13px] sm:text-sm max-w-full">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
                <span className="text-foreground/80 whitespace-nowrap">
                  Available for work
                </span>
                <span className="hidden sm:inline h-3 w-px bg-border" />
                <span className="hidden sm:inline-flex items-center gap-1 text-muted-foreground whitespace-nowrap">
                  <MapPin className="w-3 h-3 shrink-0" />
                  Remote · Worldwide
                </span>
              </span>
            </div>

            {/* Name + Headline */}
            <div className="space-y-4 sm:space-y-5">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground animate-fade-in animation-delay-100">
                Asaasira Nicholus
              </p>

              <h1
                id="hero-heading"
                className="font-bold leading-[1.08] sm:leading-[1.05] tracking-tight animate-fade-in animation-delay-100 break-words"
                style={{ fontSize: "clamp(1.75rem, 5.5vw, 3.5rem)" }}
              >
                <span className="text-white font-serif italic font-normal block">
                  I build full-stack web apps that
                </span>
                <span className="relative inline-block mt-2 max-w-full">
                  <span className="text-primary glow-text">
                    solve real-world problems
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 -bottom-1 h-[3px] w-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, var(--color-primary), transparent)",
                    }}
                  />
                </span>
              </h1>

              {/* Typewriter */}
              <p
                className="text-primary font-mono text-xs sm:text-sm tracking-wide break-words"
                aria-live="polite"
              >
                <span className="text-muted-foreground">{"// "}</span>
                {role}
                <span className="inline-block w-[2px] h-[1em] bg-primary ml-0.5 animate-pulse align-middle" />
              </p>

              <p
                className="text-muted-foreground max-w-lg leading-relaxed"
                style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)" }}
              >
                Full-stack developer focused on creating modern, scalable, and
                user-friendly web applications. I turn ideas into functional
                products — from polished frontends to robust backends.
              </p>
            </div>

            
              {/* ---------- CTAs ---------- */}
              <div className="flex flex-wrap items-center gap-3 animate-fade-in animation-delay-300">

                {/* 1. Primary button */}
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* 2. Secondary button */}
                <a
                  href="#projects"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass border border-white/10 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/40 hover:-translate-y-1 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>

                {/* 3. Tertiary button */}
                <a
                  href="/resume.pdf"
                  download
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-transparent text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  Résumé
                </a>

              </div>


            {/* Socials */}
            <div className="flex items-center gap-3 pt-1 animate-fade-in animation-delay-500 flex-wrap">
              <span className="text-[11px] sm:text-xs uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                Follow
              </span>
              <div className="flex items-center gap-2">
                {SOCIALS.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Hero;