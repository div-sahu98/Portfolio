import React, { useState } from "react";
import { Col } from "react-bootstrap";
import downArrowIcon from "../../Assets/detailsStack/detaildownarrow.svg";
import { detaildownarrow } from "../../Assets/detailsStack/detaildownarrow.svg";
import { motion } from "framer-motion";
function Detailstack() {
  const [openModal, setOpenModal] = useState(false);
  console.log("openModal", openModal);
  return openModal ? (
    <div className="detail_view_layout">
      {" "}
      <Col
        xs={4}
        md={2}
        className="detail_view"
        onClick={() => setOpenModal(false)}
      >
        Detail view{"      "}
        <img
          src={downArrowIcon}
          style={{ height: 16, width: 24, paddingLeft: 10 }}
        />
      </Col>
    </div>
  ) : (
    <div className="detail_view_box">
      <h1 className="project_heading" style={{ color: "white" }}>
        My Work & <strong class="purple"> Learnings </strong>
      </h1>
      <div className="detail_view_card_layout">
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          whileTap={{
            scale: 0.9,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          className="detail_card"
        >
          <h2>NowPurchase SDE-I</h2>
          <p style={{ textAlign: "left" }}>
            • Used understanding of React fundamentals & Redux to promote better
            component lifecycle practices, increasing turnaround time.
            <br />• Using JSX ,CSS and Material UI libraries to build the UI of
            the Metal Cloud Software.
            <br />• Developed a Javascript based script use in Spectrometer data
            monitoring system it get triggers when the directory get modified.
            <br />• Successfully build a scalable and responsive system on
            Spring framework for the Metal Cloud Software of NowPurchase. <br />{" "}
            • Successfully designed and implemented the centralized Database of
            the IoT Middleware & different component of software for analysis.{" "}
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          whileTap={{
            scale: 0.9,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          className="detail_card"
        >
          <h2>ZS Associate BTSA Intern</h2>
          <p style={{ textAlign: "left" }}>
            • Worked on Verso Orchestration Engine ML based platform which
            provide targeted marketing recommendation for Users.
            <br />
            •Successfully build a scalable and responsive system on Spring
            framework for ZS Orchestration Engine.
            <br />• Use Frontend Technologies like HTML ,CSS ,JavaScript &
            React-Redux to create the UI of Verso Orchestration Engine.
            <br />• Worked with EX-US BMS team, helping them to develop tangible
            ETL Pipelines & python based Assets for data feeding & processing.
            <br />• Working on AWS S3 bucket for data loading & Hive, Putty &
            SQL for testing..
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          whileTap={{
            scale: 0.9,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          className="detail_card"
        >
          <h2>Persistent System SDE-I Intern</h2>
          <p style={{ textAlign: "left" }}>
            • Identified web based user interaction & developed
            highly-responsive user interface component via React components.
            <br /> • Translated designs & wireframes into high-quality code and
            wrote application interface code via JavaScript
            <br /> • Liaised with cross-functional teams to ensure that client
            project were completed on time & with a stipulated budget
          </p>
        </motion.div>
        <motion.div
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          whileTap={{
            scale: 0.9,
            boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
          }}
          className="detail_card"
        >
          <h2>SERB-DST Research Intern</h2>
          <p style={{ textAlign: "left" }}>
            • Detect cellular level activity using laser speckle Imaging
            technique.
            <br /> • Implemented different imaging pre-processing technique
            using python & OpenCV.
            <br /> • Design the code for extraction of cellular level activity
            using Fujii’s & GD(Generalize Difference) method and create mask for
            high-lighting the region of interest. <br />• Create Machine
            Learning & Deep learning models for data analysis and accurate
            prediction
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Detailstack;
