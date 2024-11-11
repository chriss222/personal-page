import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import call from "../assets/images/call.png";
import gmail from "../assets/images/gmail.png";
import linkedin from "../assets/images/linkedin.png";

const initialSocials = [
  { ico: linkedin, link: "https://www.linkedin.com/in/cristian-mitu-a50b49195/", id: "linkedIn" },
  { ico: gmail, link: "mailto:mitu.cristian.l@gmail.com", id: "gmail" },
  { ico: call, link: "tel:+0743334974", id: "call" },
];

const Socials = () => {
  const [socialItems, setSocialItems] = useState(initialSocials);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSocialItems((prevItems) => {
        const [first, ...rest] = prevItems;
        return [...rest, first];
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="contact-socials-container">
      <AnimatePresence>
        {socialItems.map((social) => (
          <motion.div
            key={social.id}
            className="social-item"
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href={social.link}>
              <img height={42} width={42} src={social.ico} alt={social.id} />
            </a>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Socials;
