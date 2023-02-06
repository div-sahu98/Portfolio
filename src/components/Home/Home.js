import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";

import downArrowIcon from "../../Assets/detailsStack/detaildownarrow.svg";
import resumeFile from "../../../src/Files/dResume.pdf";
import Home2 from "./Home2";
import Type from "./Type";
import fileSaver from "file-saver";
import dowloadResumeImage from "../../Assets/download-resume.png";
import Particles from "react-tsparticles";
import Particle from "../Particle";
import { motion } from "framer-motion";
const saveFile = () => {
  fileSaver.saveAs(resumeFile, "Divyansh_9717157937.pdf");
};

function Home() {
  return (
    <section>
      <Particle />

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Divyansh Sahu</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="download_res_aling"
        onClick={() => {
          saveFile();
        }}
      >
        {/* <img
          src={dowloadResumeImage}
          alt="client image"
          style={{ height: 80, width: "auto", marginLeft: 40 }}
        />{" "} */}
        <div className="download_resume">
          Want To Know More About Me!!
          <span style={{ paddingTop: 10, paddingBottom: 10 }}>
            {" "}
            (click Here)
          </span>
          <img src={downArrowIcon} style={{ height: 16, width: 24 }} />
        </div>
      </motion.div>
      <Home2 />
    </section>
  );
}

export default Home;
