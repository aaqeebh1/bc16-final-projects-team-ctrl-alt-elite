import React, { useState } from "react";
// import { SixMonthView } from "../SixMonthView/SixMonthView";
import YearView from "../YearView/YearView";
import "./Wrapper.css";
import Logo from "../../assets/logo.svg";
import SwitchesContainer from "../SwitchContainer/SwitchContainer";
import DepartmentKey from "../DepartmentKey/DepartmentKey";
import EventTypeKey from "../EventTypeKey/EventTypeKey";
import SixMonthView from "../SixMonthView/SixMonthView";

const departments = {
  NetZero: false,
  Business: false,
  Transport: false,
  Housing: false,
  Health: false,
  Education: false,
};

const Wrapper = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedPlan, setSelectedPlan] = useState("Yearly");
  const [selectedDepartments, setSelectedDepartments] = useState(departments);
  const year = viewDate.getFullYear();

  const handleDepartmentSelection = (department) => {
    setSelectedDepartments({
      ...selectedDepartments,
      [department]: !selectedDepartments[department],
    });
  };

  function TodayDate() {
    // Get current date
    setViewDate(new Date());
  }

  function ForwardMonth() {
    let newDate = new Date(viewDate);
    newDate.getMonth() === 11
      ? newDate.setFullYear(newDate.getFullYear() + 1) && newDate.setMonth(0)
      : newDate.setMonth(newDate.getMonth() + 1);
    setViewDate(newDate);
  }
  function BackwardMonth() {
    let newDate = new Date(viewDate);
    newDate.getMonth() === 0
      ? newDate.setFullYear(newDate.getFullYear() - 1) && newDate.setMonth(11)
      : newDate.setMonth(newDate.getMonth() - 1);
    setViewDate(newDate);
  }

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
            <div className="buttonWrapper">
              <button
                className="monthButton"
                type="button"
                onClick={BackwardMonth}
              >
                {"<"}
              </button>

              <button className="monthButton" type="button" onClick={TodayDate}>
                Today
              </button>

              <button
                className="monthButton"
                type="button"
                onClick={ForwardMonth}
              >
                {">"}
              </button>
            </div>
            <SwitchesContainer
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />
            <DepartmentKey
              handleDepartmentSelection={handleDepartmentSelection}
            />
            <EventTypeKey />
          </div>
        </nav>
        <div className="view-window">
          {selectedPlan === "Yearly" && (
            <YearView
              selectedDepartments={selectedDepartments}
              setViewDate={setViewDate}
              viewDate={viewDate}
            />
          )}
          {selectedPlan === "Quarterly" && (
            <SixMonthView
              selectedDepartments={selectedDepartments}
              setViewDate={setViewDate}
              viewDate={viewDate}
            />
          )}
          {selectedPlan === "Monthly" && <h1>Monthly</h1>}
        </div>
      </div>
    </>
  );
};

export default Wrapper;
