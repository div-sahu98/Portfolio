import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="BioSpeckle Activity Scripts "
              description="Different python based script for pre processing of Bio-Speckle Images . I have tried to apply different methods such as fujii's algorithm, Generalized Difference method, LASCA & some other different image pre-processing technique"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="BLE -Local Postioning System"
              description="his system User Interface is building under Django framework of python,This Technology uses Bluetooth Signal for approximating the location, this is done through using a IOT device named BLE Beacon which emits Bluetooth signal to locate position"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="
              Industrial Quality Control System"
              description="Make a real-time quality control system for fault detection in casting products(for Industrial use). Real-time .jpg images are taken through QHMPL 5MP digital camera integrated with python script for capturing images after a time period. Use a deep learning neural network based image processing System and classifying the product in OK or Defected categories.This system use python based script for iterative timer based feeding of data in the model."
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Fruit AI"
              description="A Deep Network Based Health Detection Model For Citrus Fruits Abstract - One of the most significant factors is the quality evaluation of agricultural products in supporting their marketability and controlling waste management. To classify the fruits into healthy and defected class, deep learning algorithms have been implemented to perform citrus disease detection. This study aims to use the dense CNN algorithm to detect and provide an effective method for detecting the apparent defects of citrus fruit. Citrus fruit images are collected and put in two classes of good and damaged ones, to recognize and categorize the image dataset."
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
