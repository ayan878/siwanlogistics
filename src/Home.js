import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";

const addressData = [
  {
    label: "Opening Hours",
    value: "Monday-Sat 9:00-18:00\nSunday Closed",
    icon: <IoTimeOutline />,
  },
  { label: "Email", value: "example@logistics.com", icon: <IoMailOutline /> },
  { label: "Call Us", value: "+1-354863114", icon: <IoCallOutline /> },
];

export function Home() {
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <div className="logo-header">
        <h3>
          <img src="./logo.png" alt="Logo" />
          TransitFlow
        </h3>
      </div>
      <div className="address-bar">
        {addressData.map((address, index) => (
          <Address
            key={index}
            label={address.label}
            value={address.value}
            icon={address.icon}
          />
        ))}
      </div>
    </div>
  );
}

function Address({ label, value, icon }) {
  return (
    <div className="address">
      {icon && <div className="icon">{icon}</div>}
      <p className="address-text">
        <strong>{label}</strong>:
        {value.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu">
      {/* <Button as="a" variant="danger">
        Button as link
      </Button> */}

      <Navbar expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/pages">
              Pages
            </Nav.Link>
            <Nav.Link as={Link} to="/project">
              Project
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* <Navbar expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="active">
              Home
            </Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </div>
  );
}
