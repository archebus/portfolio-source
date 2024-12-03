// Projects.jsx
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Bean Scene Management",
      description: "Full-stack restaurant management system with real-time booking, staff management, and dual database architecture.",
      tags: ["React", "ASP.NET", "MySQL", "NoSQL", "Capacitor"],
      github: "https://github.com/orgs/TEAM-3-Luke-and-Josh/repositories",
      preview: "https://zebra.dev.thickets.onl"
    },
    {
      title: "Admin Dashboard",
      description: "Responsive admin interface with modern design principles with css grid.",
      tags: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/archebus/odin_admindashboard",
      preview: "https://archebus.github.io/odin_admindashboard"
    },
    {
      title: "JavaScript Calculator",
      description: "Interactive calculator built with javascript and css.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/archebus/Calculator",
      preview: "https://archebus.github.io/Calculator"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio built with React and Framer Motion animations.",
      tags: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/archebus/portfolio-source",
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-24 w-full">
        <h2 className="text-3xl font-bold text-[#ccd6f6] mb-12">
          <span className="text-[#64ffda] font-mono">03.</span> Some Things I've Built
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;