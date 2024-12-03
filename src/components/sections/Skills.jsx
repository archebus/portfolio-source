import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
      {
        title: "Frontend",
        skills: ["React", "HTML & CSS", "JavaScript", "Responsive Design", "UI/UX"]
      },
      {
        title: "Backend",
        skills: ["C#", "ASP.NET Core", "Entity Framework", "REST APIs", "SQL/NoSQL"]
      },
      {
        title: "Tools & Other",
        skills: ["Git", "Visual Studio", "Agile/SCRUM", "System Architecture", "API Integration"]
      }
    ];
  
    return (
      <section id="skills" className="min-h-screen flex items-center w-full">
        <div className="w-full bg-[#112240] py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-12">
                <span className="text-[#64ffda] font-mono">02.</span> Skills & Technologies
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="w-full"
                  >
                    <h3 className="text-[#64ffda] font-mono mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, idx) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: idx * 0.1 }}
                          className="flex items-center text-[#8892b0]"
                        >
                          <span className="text-[#64ffda] mr-2">▹</span>
                          {skill}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

export default Skills;