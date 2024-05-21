import {Gantt, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import "./SixMonthView.css";
import tasks from "../../assets/DummyData.js";
import React, {useEffect, useState} from "react";
import HoverCard from "../HoverCard/HoverCard.jsx";
import ClickCard from "../ClickCard/ClickCard.jsx";

export default function SixMonthView({selectedDepartments, setViewDate, viewDate}) {
    const [clicked, setClicked] = useState([]);
    const [filterTasks, setFilterTasks] = useState([]);
    // const [viewDate, setViewDate] = useState(new Date());
    const [windowStart, setWindowStart] = useState(new Date()); //
    const [windowEnd, setWindowEnd] = useState(
        new Date(new Date().setMonth(new Date().getMonth() + 2))
    ); //

    // Create a function to update the start and end date of the window based on the viewDate
    const updateWindow = (date) => {
        const start = new Date(date);
        const end = new Date(date);
        end.setMonth(end.getMonth() + 1); // End two months after the view date
        setWindowStart(start);
        setWindowEnd(end);
        console.log("start date is" + start);
        console.log("end date is" + end);
    };

    // Update the window whenever viewDate changes
    useEffect(() => {
        updateWindow(viewDate);
        console.log("view date is" + viewDate);
    }, [viewDate]);

    useEffect(() => {
        console.log(clicked);
    }, [clicked]);

    useEffect(() => {
        const filteredTasks = tasks.filter((task) => {
            const taskStart = new Date(task.start);
            const taskEnd = new Date(task.end);

            return (
                Object.keys(selectedDepartments).some(
                    (dept) => dept === task.department && selectedDepartments[dept]
                ) &&
                ((taskStart >= windowStart && taskStart <= windowEnd) ||
                    (taskEnd >= windowStart && taskEnd <= windowEnd) ||
                    (taskStart <= windowStart && taskEnd >= windowEnd))
            );
        });

        setFilterTasks(filteredTasks);
        console.log(filteredTasks);
    }, [selectedDepartments, tasks, windowStart, windowEnd]);

    const deleteSidebar = {
        // TooltipContent: () => null,
        TaskListHeader: () => null,
        TaskListTable: () => null,
    };
    const clickedEvent = []
    return (
        <>
            {clicked.length > 0 &&
            <ClickCard
                clickHere={() => setClicked([])}
                vis={clicked.length === 0 ? "none" : "block"}
                campaign={clicked[0].id}
                depColor={clicked[0].styles.progressColor}
                blurb={clicked[0].blurb}
                blurbTwo={clicked[0].blurbTwo}
                blurbThree={clicked[0].blurbThree}
                assigned={clicked[0].assigned}
                startDate={clicked[0].start}
                endDate={clicked[0].end}
            />}
            <Gantt
                tasks={filterTasks.length ? filterTasks : tasks}
                viewMode={ViewMode.Month}
                columnWidth={window.innerWidth * 0.33}
                rowHeight={30}
                barFill={95}
                viewDate={viewDate}
                ganttHeight={window.innerHeight * 0.66}
                {...deleteSidebar}
                onClick={(task) => {
                    let event = tasks.find((event) => event.id === task.id);
                    setClicked(Array(event));
                }}
                TooltipContent={
                    ({task}) => <HoverCard
                        campaign={task.id}
                        depColor={task.styles.progressColor}
                        blurb={task.blurb}
                        assigned={task.assigned}
                        startDate={task.start}
                        endDate={task.end}
                    />}
            />
        </>
    );
}
