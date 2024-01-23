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
          <img src="./logo.png" />
          TransitFlow
        </h3>
      </div>
      <div className="address-bar">
        <div className="address">
          <IoTimeOutline className="icon" />
          <p>
            Monday-Sat 9:00-18:00 <br />
            Sunday Closed
          </p>
        </div>

        <div className="address">
          <IoMailOutline className="icon" />
          <p>Email <br/>example@logistics.com</p>
        </div>
        <div className="address">
          <IoCallOutline className="icon" />
          <p>
            Call Us <br /> +1-354863114
          </p>
        </div>
      </div>
    </div>
  );
}
