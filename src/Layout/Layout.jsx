import { Button } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/img/logo.svg"
import Switcher from "../components/Switcher";

const Layout = () => {
  return (
    <div className="dark:bg-black dark:text-white">
      <div className="flex justify-between items-center px-[5%] py-[15px] md:mb-[90vh]">
        <img src={logo} alt="" className="w-[140px]"/>
        <ul className="flex justify-between items-center gap-4 md:flex-col md:absolute md:top-[70px] md:left-[37%]">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/page2"}>Как покупать</Link>
          </li>
          <li>
            <Link to={"/page3"}>Распродажи</Link>
          </li>
          <li>
            <Link to={"/page4"}>Цены</Link>
          </li>
          <li>
            <Link to={"/page5"}>Помощь</Link>
          </li>
          <li>
            <Link to={"/page6"}>Бонусы</Link>
          </li>
          <li>
            <Link to={"/page7"}>Блог</Link>
          </li>
          <li>
            <Link to={"/page8"}>Магазины</Link>
          </li>
        </ul>
        <Switcher/>
      </div>
      <Outlet/>
    </div>
  );
};

export default Layout;
