import React, { useEffect, useRef } from "react";
import achievments from "../../assets/images/achievements.webp";
import { motion, useAnimation, useInView } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";

const AchievementsImage = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      if (!isDesktop) {
        controls.start({
          x: ["100vw", "0vw", "0vw", "100vw"],
          opacity: [0, 0.8, 0.8, 0],
          transition: {
            duration: 8,
            times: [0, 0.25, 0.65, 1],
            ease: "easeInOut",
            repeat: Infinity,
          },
        });
      } else {
        controls.start({
          x: [0, -5, 5, -5, 5, 0],
          opacity: [0.6, 0.8, 0.6],
          transition: {
            duration: 1,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          },
        });
      }
    }
  }, [isInView, isDesktop, controls]);

  return (
    <motion.div ref={ref} animate={controls} className="achievments-asset-container">
      <img width={180} height={190} src={achievments} alt="achievements image" loading="lazy" />
    </motion.div>
  );
};

export default AchievementsImage;
