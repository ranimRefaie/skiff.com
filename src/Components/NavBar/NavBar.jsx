import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./NavBar.css";
import DropDown from "../DropDown/DropDown";
import { useState } from "react";

const NavBar = () => {
  const [collapse, setCollapse] = useState("rn-nav-items");
  const [toggleIcon, setToggleIcon] = useState("toggler-icon");

  const onToggle = () => {
    collapse === "rn-nav-items"
      ? setCollapse("rn-nav-items nav-collapse")
      : setCollapse("rn-nav-items");

    toggleIcon === "toggler-icon"
      ? setToggleIcon("toggler-icon toggle")
      : setToggleIcon("toggler-icon");
  };

  return (
    <div className="rn-navbar">
      <div className="rn-container-nav">
        <div className="rn-logo">
          <img src={logo} alt="" />
        </div>

        <div className={collapse}>
          <ul>
            <DropDown name="Product" />
            <Link>Pricing</Link>
            <DropDown name="Blog" />
            <DropDown name="Resources" />
            <Link>Download</Link>
            <Link>Sign in</Link>
          </ul>
        </div>

        <div className="buttons">
          <button className="rn-btn-nav">Start for free</button>

          <div className={toggleIcon} onClick={onToggle}>
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
