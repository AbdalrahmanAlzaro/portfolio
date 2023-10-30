import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import image from "../../assets/IMG_1699.png";
import certificateImage from "../../assets/certificate.png"; // Import the certificate image

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
              WebkitTextStroke: "3px black", // For Webkit (Safari and Chrome)
              textStroke: "55px black", // For other browsers
            }}
          >
            Hey There,
            <br />
            I'm Abd alrahman.
          </motion.span>
          <motion.span
            className={`secondaryText ${css.meltText}`} // Apply the CSS class for melting text
            variants={fadeIn("left", "tween", 0.4, 1)}
            initial={{ opacity: 0, y: 20 }} // Initial opacity and y-position
            animate={{ opacity: 1, y: 0 }} // Target opacity and y-position
            transition={{ duration: 1, delay: 0.4 }} // Duration and delay of the animation
          >
            I'm a Full-stack web developer
            <br />
            (MERN Stack) and I love what I do.
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <div className={css.imageContainer}>
            <motion.img
              variants={slideIn("up", "tween", 0.5, 1.3)}
              src={image}
              alt=""
              style={{ height: "30rem" }}
            />
            <img
              className={css.reflection}
              src={image}
              alt=""
              style={{
                width: "23rem",
                height: "30rem",
                position: "absolute",
                top: "0",
                left: "3rem",
                // height: "30rem",
                transform: "scaleY(1)",
                opacity: 0.3,
              }}
            />
          </div>
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
              className={css.rotatedCertificate}
              src={certificateImage}
              alt=""
            />
            <span>CERTIFIED PROFESSIONAL</span>
            <span>FULL STACK WEB DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
