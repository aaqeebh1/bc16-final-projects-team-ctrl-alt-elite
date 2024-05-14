import React, { useState } from "react";
// import { SixMonthView } from "../SixMonthView/SixMonthView";
import YearView from "../YearView/YearView";
import "./Wrapper.css";
import Logo from "../../assets/logo.svg";
import SwitchesContainer from "../SwitchContainer/SwitchContainer";
import DepartmentKey from "../DepartmentKey/DepartmentKey";
import EventTypeKey from "../EventTypeKey/EventTypeKey";
import SixMonthView from "../SixMonthView/SixMonthView";

const Wrapper = () => {
  const [selectedPlan, setSelectedPlan] = useState("Yearly");
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
      <div className="wrapper-container">
        <nav className="nav-bar">
          <div className="nav-wrapper">
            <h1 className="year">{year}</h1>
            <SwitchesContainer
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
            <DepartmentKey />
            <EventTypeKey />
          </div>
        </nav>
        <div className="view-window">
          {selectedPlan === "Yearly" && <YearView />}
          {selectedPlan === "Quarterly" && <SixMonthView />}
          {selectedPlan === "Monthly" && <h1>Monthly</h1>}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
