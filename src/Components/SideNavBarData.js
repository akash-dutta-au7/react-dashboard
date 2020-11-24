import React from "react";
import { BiRupee } from "react-icons/bi";
import { AiFillHome, AiFillFolderOpen } from "react-icons/ai";
import { IoIosPaper } from "react-icons/io";
import { RiCurrencyFill } from "react-icons/ri";

export const SideNavBarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Cryptocurrencies",
    path: "/crypto",
    icon: <RiCurrencyFill />,
    cName: "nav-text",
  },
  {
    title: "Portfolio",
    path: "/portfolio",
    icon: <AiFillFolderOpen />,
    cName: "nav-text",
  },
  {
    title: "Capitals",
    path: "/capitals",
    icon: <BiRupee />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIosPaper />,
    cName: "nav-text",
  },
];
