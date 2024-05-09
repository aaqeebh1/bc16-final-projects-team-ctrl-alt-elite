import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "string", id: "Department" },
    { type: "string", id: "Campaign Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],
  ["Housing", "Housing Campaign", new Date(2024, 3, 30), new Date(2025, 8, 4)],
  ["Transport", "John Adams", new Date(2024, 3, 30), new Date(2025, 5, 4)],
  ["Net Zero", "Thomas Jefferson", new Date(2024, 3, 30), new Date(2025, 2, 4)],
];

export function YearView() {
  return <Chart chartType="Timeline" data={data} width="100%" height="400px" />;
}
