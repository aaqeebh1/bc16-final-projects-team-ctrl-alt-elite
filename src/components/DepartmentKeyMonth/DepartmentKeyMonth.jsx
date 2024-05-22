import React, { useEffect } from "react";
import "./DepartmentKeyMonth.css";

const DepartmentKey = ({ handleDepartmentSelection }) => {
  const departmentColors = {
    Transport: "#9F8FEF",
    Housing: "#6CC3E0",
    Skills: "#F5CD47",
    NetZero: "#94C748",
    Internal: "#FEA362",
    Business: "#F87168",
  };

  return (
    <>
      <div className="departmentKey-container">
        <div className="departmentKey">
          <div id="Transport" className="departmentKey__item--month">
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
          <div id="Business" className="departmentKey__item--month">
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
          <div id="NetZero" className="departmentKey__item--month">
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
          <div id="Housing" className="departmentKey__item--month">
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
          <div id="Skills" className="departmentKey__item--month">
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
          <div id="Internal" className="departmentKey__item--month">
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
