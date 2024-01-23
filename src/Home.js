import React from "react";
import { IoCallOutline, IoMailOutline, IoTimeOutline } from "react-icons/io5";
import "./Home.css";

export function Home() {
  return (
    <div>
      <Header />
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
        <Address
          icon={<IoTimeOutline />}
          text="Monday-Sat 9:00-18:00\nSunday Closed"
        />
        <Address icon={<IoMailOutline />} text="Email\nexample@logistics.com" />
        <Address icon={<IoCallOutline />} text="Call Us\n+1-354863114" />
      </div>
    </div>
  );
}

function Address({ icon, text }) {
  return (
    <div className="address">
      {icon && <div className="icon">{icon}</div>}
      <p>
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}
