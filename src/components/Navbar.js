import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        ></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <div onClick={() => updateExpanded(false)}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </div>

            <div as={Link} to="/about" onClick={() => updateExpanded(false)}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </div>

            <div as={Link} to="/project" onClick={() => updateExpanded(false)}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
              Projects
            </div>

            <div as={Link} to="/resume" onClick={() => updateExpanded(false)}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </div>

            <Button
              href="https://github.com/div-sahu98"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
              <AiFillStar style={{ fontSize: "1.1em" }} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
