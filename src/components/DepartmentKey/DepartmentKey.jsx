import React from "react";
import "./DepartmentKey.css";

const DepartmentKey = () => {
  const departmentColors = {
    Transport: "#FF0000",
    Economy: "#0000FF",
    Environment: "#00FF00",
    Housing: "#FFFF00",
    Skills: "#FFA500",
    Strategy: "#800080",
  };

  return (
    <>
      <div className="departmentKey-container">
        <div className="departmentKey">
          <div className="departmentKey__item">
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Transport,
                height: "15px",
                width: "15px",
              }}
            >
              {" "}
            </div>
            <div className="departmentKey__item--text">Transport</div>
          </div>
          <div className="departmentKey__item">
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Economy,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Economy</div>
          </div>
          <div className="departmentKey__item">
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Environment,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Environment</div>
          </div>
          <div className="departmentKey__item">
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Environment,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Housing</div>
          </div>
          <div className="departmentKey__item">
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Skills,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Skills</div>
          </div>
          <div className="departmentKey__item">
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Strategy,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Strategy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentKey;
