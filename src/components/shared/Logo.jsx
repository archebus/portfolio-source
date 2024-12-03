import { motion } from 'framer-motion';

const Logo = () => {
  const logoVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: { 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={logoVariants}
      className="text-[#64ffda] font-mono text-xl relative"
    >
      <motion.div
        className="absolute -inset-2 bg-[#64ffda] opacity-10 rounded-lg"
        layoutId="hoverBackground"
      />
      JD.
    </motion.div>
  );
};

export default Logo;