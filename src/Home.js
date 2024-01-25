import { useEffect, useState } from "react";
import React from "react";
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

// function Menu(){
//   return (
//     <div className="menu">
//       <nav className="navbar">
//         <ul className="nav-list">
//           <li className="nav-item">
//             <Link to="/">Home</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about">About</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about">Pages</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/about">Project</Link>
//           </li>
//           <li className="nav-item">
//             <Link to="/contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// }
