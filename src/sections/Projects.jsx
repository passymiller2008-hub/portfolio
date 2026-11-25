
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Molecule Restaurant",
    description:
      "A modern restaurant website designed to showcase its identity, menu and dining experience.",
    image: "/projects/molecule-restaurant.png",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    category: "Web Development",
    link: "https://your-molecule-restaurant-url.com",
  },

  {
    title: "Great Rides",
    description:
      "A brief description of what this project does and the problem it solves.",
    image: "/projects/great-rides.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "Web Development",
    link: "https://index-bay-nine.vercel.app/",
  },

  {
    title: "STEM and Robotics",
    description:
      "Describe the purpose, features and experience of this project.",
    image: "/projects/project-three.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    category: "Web Application",
    link: "https://your-project-three-url.com",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">

        {/* Section heading */}
        <div className="flex items-center gap-3 mb-12 md:mb-16">
          <span className="w-8 h-px bg-primary" />

          <span className="text-xs md:text-sm uppercase tracking-[0.25em] font-medium text-primary">
            Selected Work
          </span>

          <span className="text-xs text-muted-foreground ml-2">
            / 02
          </span>
        </div>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-secondary-foreground">
              Ideas brought
              <span className="block font-serif italic font-normal text-primary">
                to life.
              </span>
            </h2>

            <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
              A collection of things I've imagined, designed and built.
              Each project represents an opportunity to explore ideas,
              solve problems and create meaningful digital experiences.
            </p>
          </div>

          <span className="text-xs text-muted-foreground tracking-wider uppercase">
            {projects.length} Projects
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} website`}
              className="group block rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-all duration-500"
            >

              {/* Project image */}
              <div className="relative aspect-[16/11] overflow-hidden bg-white/[0.04]">

                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                {/* External link icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={19} />
                </div>

                {/* Project number */}
                <div className="absolute bottom-4 left-4 text-xs tracking-widest text-white/80">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Project details */}
              <div className="p-5 space-y-4">

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                    {project.category}
                  </span>

                  <ExternalLink
                    size={15}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-secondary-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-medium text-secondary-foreground">
                    View live project
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>

              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
