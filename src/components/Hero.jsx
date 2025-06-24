import { motion } from 'framer-motion';

const Hero = () => {
    
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-blue-900 text-center px-4">
      <div className="text-shadow-lg/30 container mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={ { opacity: 1, y: 0 } }
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
        >
          الدوائر الكهربائية
          
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={ { opacity: 1, y: 0 } }
          transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
        >
          DC
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
