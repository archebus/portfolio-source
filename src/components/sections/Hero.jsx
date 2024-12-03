import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-4xl"
      >
        <motion.div variants={item} className="font-mono text-[#64ffda] mb-4">
          Hi, my name is
        </motion.div>
        <motion.h1 
          variants={item} 
          className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4"
        >
          Josh Devon.
        </motion.h1>
        <motion.h2 
          variants={item}
          className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p 
          variants={item}
          className="max-w-lg text-[#8892b0] mb-8"
        >
          I'm a software developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building accessible, human-centered products.
        </motion.p>
        <motion.div variants={item}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-[#64ffda] text-[#64ffda] px-6 py-3 rounded hover:bg-[rgba(100,255,218,0.1)] transition-colors font-mono"
          >
            Check out my work!
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;