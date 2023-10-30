import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{
        background:
          "linear-gradient(90deg, rgba(248, 247, 241, 1) 36%, rgba(140, 151, 153, 1) 100%)",
      }}
    >
      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by{" "}
            <a href="mailto:abdalrahman.h.alzaro@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p> Zarqa, New Zarqa, JORDAN</p>
          </div>
          <ul className={css.menu}>
            <li>
              <a
                href="#experties"
                style={{ textDecoration: "none", color: "black" }}
              >
                Services
              </a>
            </li>

            <li>
              {" "}
              <a
                href="#portfolio"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Works{" "}
              </a>
            </li>
            {/* <li>Notes</li> */}
            <li>
              {" "}
              <a
                href="#work"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Experience
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
