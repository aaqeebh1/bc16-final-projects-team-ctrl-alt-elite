import React from "react";
// import { YearView } from "../YearView/YearView";
// import { SixMonthView } from "../SixMonthView/SixMonthView";
import "./Wrapper.css";
import Logo from "../../assets/logo.svg";
import SwitchesContainer from "../SwitchContainer/SwitchContainer";
import DepartmentKey from "../DepartmentKey/DepartmentKey";
import EventTypeKey from "../EventTypeKey/EventTypeKey";

const Wrapper = () => {
  const year = new Date().getFullYear();
  return (
    <>
      {/* Header -> logo -> comms -> dashboard*/}
      <header>
        <div className="img-wrapper">
          <img
            className="logo-img"
            src={Logo}
            alt="west midland combined authority logo"
          />
        </div>
        <div className="header-title-wrapper">
          <h1>Communications Dashboard </h1>
        </div>
      </header>
      {/* Navbar -> current year -> view toggle -> departmnent keys -> event type key */}
      <nav className="nav-bar">
        <div className="nav-wrapper">
          <h1 className="year">{year}</h1>
        <SwitchesContainer />
         <DepartmentKey /> 
        <EventTypeKey/>
        </div>
      </nav>
      {/* <YearView />
      <SixMonthView /> */}
      {/* Magnifiying zoom toggle */}
    </>
  );
};

export default Wrapper;
