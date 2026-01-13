import { Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior React Native Developer",
      company: "TechCorp Inc.",
      period: "Jan 2023 - Present",
      description:
        "Leading mobile development for flagship fintech app with 500K+ downloads. Architecting scalable solutions, mentoring junior developers, and driving best practices for cross-platform development.",
    },
    {
      title: "React Native Developer",
      company: "MobileFirst Studios",
      period: "Mar 2021 - Dec 2022",
      description:
        "Built and maintained multiple React Native apps for healthcare and e-commerce clients. Implemented complex native modules, optimized app performance, and reduced crash rates by 60%.",
    },
    {
      title: "Mobile App Developer",
      company: "StartupHub",
      period: "Jun 2019 - Feb 2021",
      description:
        "Developed cross-platform mobile applications from scratch. Collaborated with designers to implement pixel-perfect UIs and integrated RESTful APIs for real-time data synchronization.",
    },
  ];

  return (
    <section id="experience" className="section-padding bg-dark-section text-dark-section-foreground">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-accent">Experience</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Professional journey building exceptional mobile experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{exp.title}</h3>
                    <p className="text-white/70">{exp.company}</p>
                  </div>
                </div>
                <span className="text-accent font-medium text-sm md:text-base whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <p className="text-white/60 leading-relaxed pl-0 md:pl-16">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
