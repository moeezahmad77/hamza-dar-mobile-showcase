import { 
  Smartphone, 
  Code, 
  FileJson, 
  Layers, 
  Database, 
  GitBranch,
  Flame,
  Navigation,
  Palette,
  TestTube,
  Terminal,
  Cpu
} from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "React Native", icon: Smartphone },
    { name: "TypeScript", icon: FileJson },
    { name: "React.js", icon: Code },
    { name: "Expo", icon: Terminal },
    { name: "Redux", icon: Layers },
    { name: "REST APIs", icon: Database },
    { name: "Firebase", icon: Flame },
    { name: "Git", icon: GitBranch },
    { name: "Native Modules", icon: Cpu },
    { name: "Navigation", icon: Navigation },
    { name: "Styled Comp.", icon: Palette },
    { name: "Jest/Testing", icon: TestTube },
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring mobile applications to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <skill.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="font-medium text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
