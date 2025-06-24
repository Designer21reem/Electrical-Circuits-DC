import Dc from '../assets/DC.png';
import Dc2 from '../assets/DC2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (inView) setShowContent(true);
  }, [inView]);

  return (
    <div ref={ref} id="About" className="about p-5 md:p-10 bg-white mt-10">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-600 mb-10 text-center"
      >
        نبذة عن مادة الدوائر الكهربائية
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-xl md:text-2xl text-blue-800 mb-8 leading-relaxed text-center"
      >
        مادة الدوائر الكهربائية تتناول دراسة تدفق التيار الكهربائي في دوائر مختلفة، بما في ذلك المقاومات، والمكثفات،
        والملفات الكهربائية، والمصادر الكهربائية. تشمل الدراسة النظريات والمفاهيم الأساسية للتيار المستمر والتيار المتردد،
        بالإضافة إلى أساسيات تصميم وتحليل الدوائر الكهربائية.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={showContent ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-xl md:text-2xl text-blue-800 mb-10 leading-relaxed text-center"
      >
        تشمل دراسة القوانين الأساسية للكهرباء مثل قانون أوم وقانون كيرشهوف، وكذلك تحليل الدوائر كما سنرى في المحاضرات لدينا.
      </motion.p>

      <hr className="border-t-2 border-blue-300 my-10 mx-auto w-[60%]" />

      <div className="flex flex-col lg:flex-row gap-10 items-center justify-center mb-10">
        <motion.h1
          initial={{ opacity: 0, x: 20 }}
          animate={showContent ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
          className="text-3xl md:text-5xl font-bold text-blue-600 text-center lg:text-right"
        >
          نبذة عن مادة الدوائر الكهربائية DC
        </motion.h1>

        <motion.img
          initial={{ opacity: 0, x: -20 }}
          animate={showContent ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100 }}
          className="w-[120px] md:w-[160px] lg:w-[200px]"
          src={Dc}
          alt="DC"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={showContent ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-xl md:text-2xl text-blue-800 mb-8 text-center leading-relaxed"
      >
        الدوائر الكهربائية DC تستخدم التيار المستمر (DC)، وهي تستخدم في العديد من التطبيقات مثل الإلكترونيات المنزلية
        والسيارات والأجهزة الإلكترونية الصغيرة. تتضمن عناصرها المكونات الأساسية مثل المصادر الكهربائية والمقاومات والمكثفات
        والمفاتيح والمحولات والمحركات الكهربائية.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={showContent ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 100 }}
        className="text-xl md:text-2xl text-blue-800 mb-10 text-center leading-relaxed"
      >
        سوف ندرس في هذا الفصل المواضيع الآتية: قانون أوم، قانون كيرشهوف، نودل، سوبر نود، ميش، سوبر ميش، سوبر بوزيشن،
        ثيفينن، ونورتن.
      </motion.p>

      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showContent ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.8, duration: 0.5, type: 'spring', stiffness: 100 }}
        src={Dc2}
        alt="DC2"
        className="mx-auto w-full md:w-[80%] lg:w-[60%]"
      />

      <hr className="border-t-2 border-blue-300 my-10 mx-auto w-[60%]" />
    </div>
  );
};

export default About;
