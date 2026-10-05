import { Button } from "@/components/Button";

const navLinks = [
  {href: "#about", label: "About"},
  {href: "#projects", label: "Projects"},
  {href: "#contact", label:"Contact"},
]

export const Navbar = () => {
  return (
    <header className ="fixed top-0 left-0 right-0 bg-transparent py-5">
      <nav className ="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className ="text-xl font-bold tracking-tight hover:text-primary">
          AN<span className ="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className ="flex items-center gap-1">
          <div className ="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className ="px-4 py-2 text-sm text-muted-foreground hoover:text-foreground rounded-full hoover:bg-surface">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div>
          <Button size="sm">Contact Me</Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;