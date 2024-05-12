import { useState } from "react";
import "./SwitchContainer.css";

const SwitchesContainer = () => {
  const [selectedPlan, setSelectedPlan] = useState("Yearly");

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <div className="switches-container">
      <input
        type="radio"
        id="switchYearly"
        name="switchPlan"
        value="Yearly"
        checked={selectedPlan === "Yearly"}
        onChange={handlePlanChange}
      />
      <input
        type="radio"
        id="switch6Monthly"
        name="switchPlan"
        value="6Monthly"
        checked={selectedPlan === "6Monthly"}
        onChange={handlePlanChange}
      />
      <input
        type="radio"
        id="switchMonthly"
        name="switchPlan"
        value="Monthly"
        checked={selectedPlan === "Monthly"}
        onChange={handlePlanChange}
      />
      <label htmlFor="switchYearly">Year</label>
      <label htmlFor="switch6Monthly">6 Month</label>
      <label htmlFor="switchMonthly">Month</label>
      <div className="switch-wrapper">
        <div className="switch">
          <div>Year</div>
          <div>6 Month</div>
          <div>Month</div>
        </div>
      </div>
    </div>
  );
};

export default SwitchesContainer;
