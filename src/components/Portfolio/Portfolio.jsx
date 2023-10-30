import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import pro1Image from "../../assets/Pro1.png";
import pro2Image from "../../assets/pro2.png";
import pro3Image from "../../assets/pro3.png";
import {
  fadeIn,
  staggerChildren,
  textVariant,
  textVariant2,
} from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{
        background:
          "radial-gradient(circle, rgba(248,247,241,1) 71%, rgba(140,151,153,1) 100%)",
      }}
    >
      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>
        <motion.div
          variants={textVariant(0.4)}
          className={`flexCenter ${css.heading}`}
        >
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution for digital experience
            </p>
          </div>
          <span className="secondaryText">
            {" "}
            <a
              href="https://github.com/AbdalrahmanAlzaro"
              target="blank"
              style={{ color: "#eec048" }}
            >
              {" "}
              Explore More Works
            </a>
          </span>
        </motion.div>

        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={pro1Image}
            alt="project"
          />

          <motion.img
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            src={pro2Image}
            alt="project"
          />
          <motion.img
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            src={pro3Image}
            alt="project"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
