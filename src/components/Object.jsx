import ground from '../assets/ground.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Object = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  return (
    <div className="object w-full" id="Object" ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-shadow-lg/30 text-center text-4xl md:text-7xl sm:text-6xl font-bold text-blue-900 mb-10"
      >
        المادة
      </motion.h1>

      <section
        className="relative flex flex-col items-center justify-center gap-10"
        style={{ marginTop: '100px' }}
      >
        {/* خط خلفي */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
          className="absolute mr-[100%] w-full h-screen bg-blue-900"
        ></motion.div>

        {/* الكروت */}
        {[
          { title: 'محاضرة 1', desc: 'قانون اوم' },
          { title: 'محاضرة 2', desc: 'قانون فولتج ديفايدر' },
          { title: 'محاضرة 3', desc: 'طريقة ميش' },
          { title: 'محاضرة 4', desc: 'طريقة نودل' },
          { title: 'محاضرة 5', desc: 'تحويل المصادر' },
          { title: 'محاضرة 6', desc: 'دلتا ستار', isLast: true },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={
              hasAnimated
                ? { opacity: 1, scale: 1 }
                : {}
            }
            transition={{
              delay: 0.3 + index * 0.2,
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
            }}
            className="hover:scale-105 relative flex flex-col items-center justify-center gap-5 rounded-2xl odd:bg-white even:bg-blue-900 even:text-white p-5 shadow-lg px-32"
          >
            <h4 className="absolute right-0 p-3.5 text-amber-300">{item.title}</h4>
            <h2 className="text-center">{item.desc}</h2>
            {item.isLast && (
              <img
                src={ground}
                className="mt-[237px] z-20 absolute w-[150px]"
                alt="ground"
              />
            )}
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Object;
