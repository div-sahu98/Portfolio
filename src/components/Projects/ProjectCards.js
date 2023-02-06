import React from "react";
import Card from "react-bootstrap/Card";
import { motion } from "framer-motion";
function ProjectCards(props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
      }}
      whileTap={{
        scale: 0.9,
        boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.3)",
      }}
      className="project-card-view"
      style={{ backgroundColor: "transparent", height: "600px" }}
    >
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </motion.div>
  );
}
export default ProjectCards;
