import React, { useState } from "react";
import './index.css'
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SideNavBarData } from "../SideNavBarData";


const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const sideBarToggle = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-nars">
          <FaBars />
        </Link>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link className="menu-bars">
              <AiOutlineClose onClick={sideBarToggle} />
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
  );
};

export default Navbar;
