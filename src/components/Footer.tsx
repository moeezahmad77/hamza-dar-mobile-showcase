const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display font-bold text-lg">
          <span className="text-foreground">Hamza</span>
          <span className="text-accent">Dar</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center">
          © {new Date().getFullYear()} Hamza Dar. Built with React Native passion.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
