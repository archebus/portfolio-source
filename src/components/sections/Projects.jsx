// Projects.jsx
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack: Restaurant Management System",
      description: "Full-stack restaurant management system with real-time booking, staff management, and dual database architecture.",
      tags: ["React", "ASP.NET", "MySQL", "NoSQL", "Capacitor"],
      github: "https://github.com/orgs/TEAM-3-Luke-and-Josh/repositories",
      preview: "https://zebra.dev.thickets.onl"
    },
    {
      title: "8-Bit CPU Design & Compiler",
      description: "Fully functional 8-bit CPU architecture built in Digital.js with custom assembly language and companion JavaScript compiler.",
      tags: ["Digital Logic", "CPU Design", "JavaScript", "Assembly"],
      github: "https://github.com/archebus/CPU_Build/",
      preview: "https://github.com/archebus/CPU_Build/blob/main/showcase.md"
    },
    {
      title: "Game-Dev: Brick Breaker Game",
      description: "Classic arcade-style brick breaker game developed in Godot Engine.",
      tags: ["Godot", "GDScript", "Game Development", "Physics"],
      github: "https://github.com/Studio-Fritz/Brick_Breaker",
    },
    {
      title: "Front-End: Admin Dashboard",
      description: "Responsive admin interface with modern design principles with css grid.",
      tags: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/archebus/odin_admindashboard",
      preview: "https://archebus.github.io/odin_admindashboard"
    },
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