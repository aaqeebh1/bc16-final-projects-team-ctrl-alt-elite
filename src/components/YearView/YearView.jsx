import React from "react";
import {Chart} from "react-google-charts";


const example = {
    department: "Housing",
    campaign_name: "Housing Campaign"
}

export const data = [
    [
        {type: "string", id: "Department"},
        {type: "string", id: "Campaign Name"},
        {type: "date", id: "Start"},
        {type: "date", id: "End"},
    ],
    [example.department, example.campaign_name, new Date(2024, 3, 30), new Date(2024, 8, 4)],
    ["Department", "One 🐸🐸🐸", new Date(2024, 3, 30), new Date(2024, 5, 4)],
    ["Department", "Two", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "Three", new Date(2024, 3, 30), new Date(2024, 8, 4)],
    ["Department", "Four", new Date(2024, 3, 30), new Date(2024, 5, 4)],
    ["Department", "Five", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "Six", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "One", new Date(2024, 3, 30), new Date(2024, 5, 4)],
    ["Department", "Two", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "Three", new Date(2024, 3, 30), new Date(2024, 8, 4)],
    ["Department", "Four", new Date(2024, 3, 30), new Date(2024, 5, 4)],
    ["Department", "Five", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "Six", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "One", new Date(2024, 3, 30), new Date(2024, 5, 4)],
    ["Department", "Two", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "Three", new Date(2024, 3, 30), new Date(2024, 8, 4)],
    ["Department", "Four", new Date(2024, 3, 30), new Date(2024, 5, 4)],
    ["Department", "Five", new Date(2024, 0, 1), new Date(2024, 13, 25)],
    ["Department", "Six", new Date(2024, 0, 1), new Date(2024, 13, 25)],
];

export function YearView() {
    return <Chart chartType="Timeline" data={data} width="100%" height="95vh"
                  options={{colors: ["pink", "purple", "blue", "red", "pink", "orange", "green"]}}/>;
}
