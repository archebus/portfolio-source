import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, tags, github, preview, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative p-6 bg-[#112240] rounded-lg overflow-hidden group"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#64ffda]/0 via-[#64ffda]/5 to-[#64ffda]/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-[#ccd6f6] text-xl font-semibold mb-2"
          layout
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-[#8892b0] mb-4"
          layout
        >
          {description}
        </motion.p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <motion.span
              key={tag}
              whileHover={{ scale: 1.1 }}
              className="text-[#64ffda] text-sm font-mono px-2 py-1 bg-[#64ffda]/10 rounded"
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-4">
          {github && (
            <motion.a
              href={github}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <Github size={20} />
            </motion.a>
          )}
          {preview && (
            <motion.a
              href={preview}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="text-[#8892b0] hover:text-[#64ffda]"
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;