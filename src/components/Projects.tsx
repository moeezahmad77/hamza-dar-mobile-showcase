import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import PhoneMockup from "./PhoneMockup";

const Projects = () => {
  const projects = [
    {
      title: "FinTrack Pro",
      description:
        "A comprehensive personal finance app with real-time expense tracking, budget management, and investment portfolio insights.",
      tech: ["React Native", "TypeScript", "Redux", "Firebase"],
      color: "#3B82F6",
      platforms: ["iOS", "Android"],
    },
    {
      title: "FitFlow",
      description:
        "Health and fitness app featuring workout tracking, meal planning, and progress analytics with native health kit integration.",
      tech: ["React Native", "Expo", "GraphQL", "HealthKit"],
      color: "#10B981",
      platforms: ["iOS", "Android"],
    },
    {
      title: "ChatConnect",
      description:
        "Real-time messaging app with end-to-end encryption, voice/video calls, and seamless file sharing capabilities.",
      tech: ["React Native", "WebRTC", "Socket.io", "Node.js"],
      color: "#8B5CF6",
      platforms: ["iOS", "Android"],
    },
    {
      title: "ShopEase",
      description:
        "E-commerce mobile app with intuitive shopping experience, AR product preview, and secure payment integration.",
      tech: ["React Native", "Stripe", "ARKit", "REST API"],
      color: "#F59E0B",
      platforms: ["iOS", "Android"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of mobile applications I've built and shipped
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Phone Mockup */}
              <div className="bg-secondary/50 py-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" 
                  style={{ 
                    background: `radial-gradient(circle at 50% 50%, ${project.color}, transparent 70%)` 
                  }} 
                />
                <div className="transform group-hover:scale-105 transition-transform duration-500">
                  <PhoneMockup color={project.color} appName={project.title} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {project.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="text-xs font-medium px-2 py-1 bg-accent/10 text-accent rounded-full flex items-center gap-1"
                    >
                      <Smartphone className="w-3 h-3" />
                      {platform}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 bg-secondary text-foreground/70 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90">
                    <ExternalLink className="w-4 h-4" />
                    Live App
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
