import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import image from "../../assets/IMG_1699.png";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
            style={{
              WebkitTextStroke: "1px black", // For Webkit (Safari and Chrome)
              textStroke: "15px black", // For other browsers
            }}
          >
            Hey There,
            <br />
            I'm Abd alrahman.
          </motion.span>
          <motion.span
            className="secondaryText"
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            I Full stack web developer
            <br />
            (MERN Stack) , And I love what i do{" "}
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1.3)}
            src={image}
            alt=""
            style={{ height: "30rem" }}
          />
        </motion.div>

        <a className={css.email} href="mailto:abdalrahman.h.alzaro@gmail.com">
          abdalrahman.h.alzaro@gmail.com
        </a>

        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">2</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img
              src="./certificate.png"
              alt=""
              style={{
                transition: "transform 0.3s ease-in-out",
                ":hover": {
                  transform: "rotate(360deg)",
                },
              }}
            />
            <span>CERTIFIED PROFATIONAL</span>
            <span>FULL STACK WEP DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
