import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';


const Hello = () => {

     const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (inView) setShowContent(true);
  }, [inView]);

  
    return (
        
        <div ref={ref} className="relative" id="Hello">
            <div className="flex col-3 items-center justify-center h-screen w-screen z-20 absolute p-24   text-center wrap-anywhere">
                <div className="text-shadow-lg/30 container mx-auto w-full mb-32 lg:mb-0 lg:w-1/2 ">
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={showContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.5 ,type: 'spring', stiffness: 100 }}
                    className="text-4xl md:text-7xl sm:text-6xl font-bold text-blue-600 mb-10 ">اهلا بكم</motion.h1>
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }} 
                    animate={showContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.5 ,type: 'spring', stiffness: 100 }}
                    className="text-4xl md:text-7xl sm:text-6xl font-bold text-blue-600 mb-10">في موقعي</motion.h1>
                    <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={showContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 ,type: 'spring', stiffness: 100 }}
                    className="text-4xl md:text-7xl sm:text-6xl font-bold text-blue-600 mb-10">لدراسة الدوائر الكهربائية</motion.h1>
                </div>
            </div>
         <div className="flex  items-center justify-center h-screen relative group animate-pulse">
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  animate={showContent ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.5 ,type: 'spring', stiffness: 100 }}
                src={p1} alt="p1" className="absolute top-0 left-0 w-[300px] md:w-[400px] lg:w-[400px]"/>
                <motion.img
                    initial={{ opacity: 0, x: 20 }}
                    animate={showContent ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.5 ,type: 'spring', stiffness: 100 }}
                src={p2} alt="p2" className="absolute top-0 right-0  w-[300px] md:w-[400px] lg:w-[400px]"/>
         </div>

          
       </div>
    
    )
}

export default Hello