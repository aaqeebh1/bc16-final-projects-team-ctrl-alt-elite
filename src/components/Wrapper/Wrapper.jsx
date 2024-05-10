import React from "react";
import { YearView } from "../YearView/YearView";
import { SixMonthView } from "../YearView/YearView";
import "./Wrapper.css";
import Logo from "../../assets/logo.svg";

const Wrapper = () => {
  return (
    <>
      {/* Header -> logo -> comms -> dashboard*/}
      <header>
        <div className="img-wrapper">
          <img src={Logo} alt="west midland combined authority logo" />
        </div>
        <div className="header-title-wrapper">
          <h1>Communications Dashboard </h1>
        </div>
      </header>
      {/* Navbar -> current year -> view toggle -> departmnent keys -> event type key */}
      <YearView />
      <SixMonthView />
      {/* Magnifiying zoom toggle */}
    </>
  );
};

export default Wrapper;
