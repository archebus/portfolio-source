import ProjectCard from '../shared/ProjectCard';


const Projects = () => {
    return (
      <section id="projects" className="min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 py-24 w-full">
          <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">
            <span className="text-[#64ffda] font-mono">03.</span> Some Things I've Built
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Bean Scene Management",
                description: "A full-stack restaurant management system with real-time booking and staff management.",
                tags: ["React", "ASP.NET", "MySQL", "NoSQL"]
              },
              {
                title: "Portfolio Website",
                description: "A clean, modern portfolio built with React and styled-components.",
                tags: ["React", "Styled Components", "Framer Motion"]
              }
            ].map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </section>
    );
  };

export default Projects;