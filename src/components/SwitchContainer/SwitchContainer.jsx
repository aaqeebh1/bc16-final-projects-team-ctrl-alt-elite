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
      <label htmlFor="switchYearly">Yearly</label>
      <label htmlFor="switch6Monthly">6 Monthly</label>
      <label htmlFor="switchMonthly">Monthly</label>
      <div className="switch-wrapper">
        <div className="switch">
          <div>Yearly</div>
          <div>6 Monthly</div>
          <div>Monthly</div>
        </div>
      </div>
    </div>
  );
};

export default SwitchesContainer;
