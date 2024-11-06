import React, { useEffect, useRef } from "react";
import aboutMe from "../../assets/images/about.webp";
import { motion, useAnimation, useInView } from "framer-motion";

const ShowcaseImage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        transition: { duration: 1, delay: 1 },
      });

      controls.start({
        x: [-10, 55, 145, 65, -10],
        y: [-15, -50, -45, -55, -25, -15],
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [isInView, controls]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls} className="showcase-asset-container">
      <img width={200} height={220} src={aboutMe} alt="about me cartoon" loading="lazy" />
    </motion.div>
  );
};

export default ShowcaseImage;
