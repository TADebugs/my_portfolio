import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
  className="xs:w-[250px] w-full"
  tiltMaxAngleX={45}
  tiltMaxAngleY={45}
  scale={1}
  transitionSpeed={450}
>
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  >
    <div
      className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
    >
      <img
        src={icon}
        alt="Fullstack Developer"
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">
        {title}
      </h3>
    </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a detail-oriented Information Technology student at Northeastern University
        with a passion for building innovative solutions across web, mobile, and blockchain
        technologies. With expertise in Python, JavaScript, Kotlin, and frameworks like React
        and FastAPI, I specialize in creating user-centric applications that solve real-world
        problems. From developing AI-powered DeFi platforms on Algorand to crafting immersive
        WebAR experiences, I combine strong algorithmic thinking with emerging technologies
        like AI, AR/VR, and blockchain. I'm a quick learner who thrives in collaborative
        environments and loves exploring cutting-edge tech. Let's work together to turn
        ambitious ideas into impactful solutions!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
