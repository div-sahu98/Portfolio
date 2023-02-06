import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Projects from "../Projects/Projects";
import Detailstack from "../About/Detailstack";
import bioSeedImage from "../../Assets/Projects/bioSeed.bmp";
import { motion } from "framer-motion";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and Basics Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">SpringBoot Hibernate</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </motion.div>
          </Col>
        </Row>
        <Row style={{ paddingTop: 30 }}>
          {" "}
          <h1 className="project-heading" style={{ paddingBottom: "15px" }}>
            Corporate <strong className="purple">Experience</strong>
          </h1>
          <Toolstack />
          <Detailstack />
        </Row>
        <div>
          {" "}
          <h1 className="project-heading">
            Research <strong className="purple">Work </strong>
          </h1>
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
            }}
            whileTap={{
              scale: 0.9,
              boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
            }}
            className="detail_card"
            style={{ color: "white" }}
          >
            <h2>
              Fungal Infection Detection in Seeds using Laser Speckle Analysis &
              CNN
            </h2>
            <div className={"aling-research-content"}>
              {" "}
              <p style={{ textAlign: "left" }}>
                • Study about the bio-speckle imaging technique & analysis of
                fungal infection in Seeds.
                <br />• Designing a detection model for curable & non curable
                Seed using laser-induced light backscattering imaging and
                convolutional neural network.
                <br /> • An Alex-Net inspired model with an 11-layer structure
                is established and trained to Binary classify curable and
                no-curable fungal infected seeds. We analyze how well the model
                does with the recognition on the basis of Bio-Speckle Activity
                map.
                <br /> • The method based on laser bio-speckle imaging analysis
                and CNN theory provides an idea and theoretical basis for
                efficient & non-destructive detection of health of Seeds & their
                quality
              </p>
              <img
                src={bioSeedImage}
                alt="about"
                style={{ height: 200, width: 200 }}
              />
            </div>
          </motion.div>
          <div>
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            <div style={{}}>
              <Techstack />
            </div>
          </div>
          <Projects />
        </div>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/div-sahu98"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divsahu98/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_div__/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
