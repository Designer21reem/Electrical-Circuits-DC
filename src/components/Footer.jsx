import logo from '../assets/logo.png';
import youtube from '../assets/youtubeIcon.png';
import { motion ,AnimatePresence} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from "react";
const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // يشغل الانيميشن مرة واحدة فقط
    threshold: 0.1,     // جزء العنصر الظاهر في الشاشة (0.1 = 10%)
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  
  return (
    <AnimatePresence>
  <footer
    ref={ref}
    className="mt-22 bg-gray-800 text-white py-4 relative bottom-0 w-full"
  >
    <div className="container mx-auto text-center flex flex-col items-center justify-center gap-4">
      <img
        src={logo}
        className="animate-bounce"
        alt="Electrical Circuits DC logo"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        الدوائر الكهربائية
        <span className="text-yellow-400"> - </span>
        Electrical Circuits DC
      </motion.h1>

      <motion.div
  initial={{ opacity: 0, scale: 0 }}
  animate={hasAnimated ? { opacity: 1, y: 0, scale: 1 } : {}}
  transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
  className="mb-4 w-[300px] flex items-center justify-center gap-5 bg-white text-gray-700 p-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors"
>
  <img
    src={youtube}
    className="w-8 h-6"
    alt="YouTube logo"
  />
  <a
    href="https://youtu.be/hutrUTFB09g?si=UvaSXcR2fv5YDv1E"
    target="_blank"
    rel="noopener noreferrer"
    className="text-shadow-lg/30 hover:text-gray-900 transition-colors"
  >
    انضم إلى قناتي على اليوتيوب
  </a>
</motion.div>


      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-gray-200 text-sm"
      >
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-gray-200 text-sm"
      >
        تم تصميم هذا الموقع من قبل مهندسة ريم فاروق حكمت
      </motion.p>

      <p className="text-yellow-400">UI/UX designer && Front-End Developer</p>
    </div>
  </footer>
</AnimatePresence>

  );
}

export default Footer   