import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center w-full">
      <div className="max-w-4xl mx-auto px-4 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-[#64ffda] font-mono">04. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mt-4 mb-6">Get In Touch</h2>
          <p className="text-[#8892b0] max-w-lg mx-auto mb-12">
            I'm currently looking for new opportunities and my inbox is always open. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col items-center space-y-6">
            <motion.a
              href="mailto:joshua.devon@gmail.com"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded hover:bg-[rgba(100,255,218,0.1)]"
            >
              <Mail size={20} />
              Say Hello
            </motion.a>
            
            <div className="flex gap-6">
              <motion.a
                href="https://github.com/archebus"
                initial={{ color: '#8892b0' }}
                whileHover={{ y: -2 }}
                className="hover:text-[#64ffda] transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/joshua-devon-8304aa86"
                initial={{ color: '#8892b0' }}
                whileHover={{ y: -2 }}
                className="hover:text-[#64ffda] transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;