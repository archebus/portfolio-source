import { motion } from 'framer-motion';
import HeroDesktop from '../../assets/images/hero-desktop.png'

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-12">
            <span className="text-[#64ffda] font-mono text-lg">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#ccd6f6]">About Me</h2>
            <div className="hidden md:block h-[1px] bg-[#233554] flex-grow ml-4" />
          </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-5 gap-12">
          {/* Text Content */}
          <div className="md:col-span-3 space-y-4 text-[#8892b0] text-lg leading-relaxed">
            <p>
              Hello! I'm Josh, a software developer transitioning from a background in IT operations and digital marketing. 
              My journey in technology has given me a unique perspective on building user-centric solutions.
            </p>
            <p>
              With over 15 years of diverse technical exposure, I've developed a deep understanding of how systems work 
              end-to-end. Recently, I completed my Diploma in Software Development, where I built enterprise-level 
              applications using modern tech stacks.
            </p>
            <p>
              I'm particularly passionate about creating polished front-end experiences while maintaining a deep 
              understanding of full-stack architecture. My background in digital marketing helps me focus on what truly 
              matters - delivering exceptional user experiences that drive results.
            </p>
          </div>
          
          {/* Image Container */}
          <div className="md:col-span-2">
            <motion.div 
              className="relative group w-full max-w-[300px] mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image */}
              <div className="relative rounded overflow-hidden bg-[#64ffda]">
                <img 
                  src={HeroDesktop}
                  alt="Josh Devon" 
                  className="mix-blend-multiply filter grayscale contrast-100 brightness-90 hover:filter-none 
                           transition-all duration-300 object-cover"
                />
                <div className="absolute inset-0 bg-[#64ffda] opacity-20 hover:opacity-0 transition-opacity duration-300" />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-2.5 border-2 border-[#64ffda] rounded 
                            translate-x-3 translate-y-3 -z-10 group-hover:translate-x-4 
                            group-hover:translate-y-4 transition-all duration-200" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default About;