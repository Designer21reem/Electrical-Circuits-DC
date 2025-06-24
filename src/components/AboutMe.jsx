import youtube from "../assets/youtube.png";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import build from "../assets/build.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setHasAnimated(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      id="AboutMe"
      className="about-me flex flex-col items-center justify-center px-4"
      style={{ marginTop: "300px" }}
    >
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 }}
        src={youtube}
        className="w-[300px] md:w-[400px]"
        alt="YouTube banner"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 100 }}
        className="text-3xl md:text-4xl text-shadow-lg/30 font-bold mb-6 text-blue-800 mt-8 p-2 text-center"
      >
        تم رفع المادة على اليوتيوب
      </motion.h1>

      <div className="flex flex-col md:flex-row gap-4 mt-10">
        {[c1, c2, c3].map((img, index) => (
          <motion.a
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: 1 + index * 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            href={
              index === 0
                ? "https://youtu.be/kIMu1-njB8o?si=cXr6kTwLBgStEO3g"
                : index === 1
                ? "https://youtu.be/eTiBhj7j3mo?si=CICSqV9ws4OCJx4y"
                : "https://youtu.be/eTiBhj7j3mo?si=cy3vSp7TWDK2ETT8"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 px-4 md:px-8 py-6"
          >
            <img
              src={img}
              className="w-full shadow-lg rounded-3xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              alt={`lecture ${index + 1}`}
            />
          </motion.a>
        ))}
      </div>

      {/* About Text */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-16 gap-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 1.4,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="text-xl md:text-3xl font-bold text-blue-800 text-center md:text-right md:w-1/2"
        >
          تم شرح المادة من قبل المهندسة{" "}
          <span className="text-yellow-400 text-shadow-lg/30 font-bold">ريم فاروق حكمت</span>
          ، إحدى طالبات كلية هندسة الخوارزمي - قسم هندسة المعلومات والاتصالات.
        </motion.h1>

        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
          transition={{
            delay: 1.6,
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          src={build}
          className="w-[300px] md:w-[450px]"
          alt="Engineering building"
        />
      </div>
    </div>
  );
};

export default AboutMe;
