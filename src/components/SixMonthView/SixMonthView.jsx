import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "string", id: "Department" },
    { type: "string", id: "Campaign Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],
  ["Housing", "🎥  🖥️ 📊 🎨 ☎️ ✅", new Date(2024, 0, 1), new Date(2024, 6, 0)],
  ["Transport", "John Adams", new Date(2024, 0, 1), new Date(2024, 6, 0)],
  ["Net Zero", "Thomas Jefferson", new Date(2024, 0, 1), new Date(2024, 6, 0)],
];


const options = {
  hAxis: {
    minValue: new Date(2024, 0),
    maxValue: new Date(2024, 6),
  },

  
  gridlines: {count: 6},

  format: 'MM',
};

export function SixMonthView() {
    
  return <Chart chartType="Timeline" data={data} width="100%" height="400px" options={options} />;
}
