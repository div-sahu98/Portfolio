import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiReact, DiPython, DiGit, DiJavascript, DiJava } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
function Techstack() {
  return (
    <div className="techstack_layout">
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <DiJava style={{ color: "white" }} />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <DiJavascript style={{ color: "white" }} />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="76"
          height="76"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="#fff"
          fill-rule="evenodd"
        >
          <path
            d="M68.7457 3.9981c-1.0579 2.5388-2.4121 4.9434-4.0347 7.1635-9.6404-9.6907-23.7469-13.4331-36.916-9.7934S4.4357 15.4661 1.1278 28.7356s.7799 27.294 10.6966 36.701l1.3995 1.2369c10.8903 9.1862 26.009 11.4769 39.1272 5.9286s22.016-17.9969 23.0278-32.2173c1.0327-9.6515-1.7984-21.8667-6.632-36.3857zM17.2114 65.6565c-.8242 1.0193-2.1808 1.4412-3.4369 1.0688s-2.1642-1.4661-2.3007-2.7704.5255-2.5625 1.6773-3.1877 2.5662-.4937 3.5837.3327c1.3873 1.127 1.6006 3.1662.4766 4.5566zm51.3784-11.3528c-9.3464 12.4632-29.3014 8.2576-42.0958 8.8624 0 0-2.2682.1336-4.5516.508 0 0 .8614-.3663 1.9624-.7832 8.9852-3.1305 13.2324-3.7332 18.6902-6.5448 10.2762-5.2297 20.4415-16.6831 22.5538-28.5888-3.9097 11.4532-15.7814 21.3023-26.5873 25.3024-7.4062 2.7323-20.7859 5.3939-20.7859 5.3939l-.5394-.2892c-9.103-4.4303-9.3838-24.1671 7.1714-30.5323 7.2492-2.7951 14.1846-1.2604 22.0132-3.1306 8.3597-1.9882 18.0317-8.2576 21.9673-16.4397 4.4016 13.0894 9.7051 33.5764.1959 46.25z"
            stroke="none"
            fill-rule="nonzero"
          />
        </svg>
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <DiReact style={{ color: "white" }} />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <SiNextdotjs style={{ color: "white" }} />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <DiGit style={{ color: "white" }} />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        whileTap={{
          scale: 0.9,
          boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          type: "spring",
          damping: 5,
          mass: 2,
          stiffness: 100,
          repeat: Infinity,
          repeatDelay: 2,
        }}
        className="tech-icons"
      >
        <DiPython style={{ color: "white" }} />
      </motion.div>
    </div>
  );
}

export default Techstack;
