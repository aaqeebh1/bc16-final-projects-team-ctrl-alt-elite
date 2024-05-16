import React from "react";
import "./DepartmentKey.css";

const DepartmentKey = ({ handleDepartmentSelection }) => {
  const departmentColors = {
    Transport: "#9F8FEF",
    Housing: "#6CC3E0",
    Skills: "#F5CD47",
    NetZero: "#94C748",
    Internal: "#FEA362",
    Business: "#F87168",
  };

  // BGWM - #F87168 (Business)

  // Internal - #FEA362 (Internal)

  // ESHC - #F5CD47 (Skills)

  // SENZ - #94C748 (Net Zero)

  // HPR - #6CC3E0 (Housing)

  // Transport - #9F8FEF (Transport)

  return (
    <>
      <div className="departmentKey-container">
        <div className="departmentKey">
          <div
            className="departmentKey__item"
            onClick={() => handleDepartmentSelection("Transport")}
          >
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Transport,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Transport</div>
          </div>
          <div
            className="departmentKey__item"
            onClick={() => handleDepartmentSelection("Business")}
          >
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Business,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Business</div>
          </div>
          <div
            className="departmentKey__item"
            onClick={() => handleDepartmentSelection("NetZero")}
          >
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.NetZero,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Net Zero</div>
          </div>
          <div
            className="departmentKey__item"
            onClick={() => handleDepartmentSelection("Housing")}
          >
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Housing,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Housing</div>
          </div>
          <div
            className="departmentKey__item"
            onClick={() => handleDepartmentSelection("Skills")}
          >
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
          <div
            className="departmentKey__item"
            onClick={() => handleDepartmentSelection("Internal")}
          >
            <div
              className="departmentKey__item--color"
              style={{
                backgroundColor: departmentColors.Internal,
                height: "15px",
                width: "15px",
              }}
            ></div>
            <div className="departmentKey__item--text">Internal</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentKey;
