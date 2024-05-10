import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "string", id: "Department" },
    { type: "string", id: "Campaign Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],

  ["Housing", "Green Homes Grant", new Date(2024, 0, 7), new Date(2024, 1, 8)],
  ["Housing", "Right to Buy Week", new Date(2024, 2, 7), new Date(2024, 3, 8)],
  [
    "Transport",
    "Cycle to Work Scheme",
    new Date(2024, 1, 7),
    new Date(2024, 2, 8),
  ],
  [
    "Transport",
    "Public Transport Awareness Campaign",
    new Date(2024, 4, 7),
    new Date(2024, 5, 8),
  ],
  [
    "Transport",
    "Safe Cycling Routes Initiative",
    new Date(2024, 6, 7),
    new Date(2024, 7, 8),
  ],
  [
    "Internal Comms",
    "New Employee Induction Program Launch",
    new Date(2024, 2, 7),
    new Date(2024, 3, 8),
  ],
  [
    "Internal Comms",
    "Mental Health Awareness Week",
    new Date(2024, 5, 7),
    new Date(2024, 6, 8),
  ],
  [
    "Internal Comms",
    "Diversity and Inclusion Campaign",
    new Date(2024, 8, 7),
    new Date(2024, 9, 8),
  ],
  [
    "Skills",
    "Apprenticeship Opportunities",
    new Date(2024, 3, 7),
    new Date(2024, 4, 8),
  ],
  [
    "Skills",
    "Digital Skills for Business Training",
    new Date(2024, 6, 7),
    new Date(2024, 7, 8),
  ],
  [
    "Skills",
    "Career Development Workshops",
    new Date(2024, 9, 7),
    new Date(2024, 10, 8),
  ],
  [
    "Net Zero",
    "Energy Saving Tips for Homeowners",
    new Date(2024, 4, 7),
    new Date(2024, 5, 8),
  ],
  [
    "Net Zero",
    "Sustainable Travel Options Campaign",
    new Date(2024, 7, 7),
    new Date(2024, 8, 8),
  ],
  [
    "Net Zero",
    "Community Green Initiatives Program",
    new Date(2024, 10, 7),
    new Date(2024, 11, 8),
  ],
  [
    "Business",
    "Local Business Grants",
    new Date(2024, 5, 7),
    new Date(2024, 6, 8),
  ],
  [
    "Business",
    "Networking Events for Entrepreneurs",
    new Date(2024, 8, 7),
    new Date(2024, 9, 8),
  ],
  [
    "Business",
    "Export Opportunities Workshop",
    new Date(2024, 11, 7),
    new Date(2025, 0, 8),
  ],
];

export function YearView() {
  return (
    <Chart
      chartType="Timeline"
      data={data}
      width="100%"
      height="95vh"
      options={{
        colors: ["pink", "purple", "blue", "red", "pink", "orange", "green"],
      }}
    />
  );
}
