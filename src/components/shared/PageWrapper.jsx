import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const PageWrapper = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isLoaded ? 1 : 0,
        y: isLoaded ? 0 : 20
      }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;