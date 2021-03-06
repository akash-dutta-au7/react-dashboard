import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { SideNavBarData } from "../SideNavBarData";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const sideBarToggle = () => setSidebar(!sidebar);
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaBars onClick={sideBarToggle} />
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={sideBarToggle}>
            <li className="navbar-toggle">
              <Link className="menu-bars">
                <AiOutlineClose />
              </Link>
            </li>

            {SideNavBarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link path={item.path}>
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    </IconContext.Provider>
  );
};

export default Navbar;
