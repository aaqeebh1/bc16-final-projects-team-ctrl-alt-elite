import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import "./SixMonthView.css";
import tasks from "../../assets/DummyData.js";
import { useEffect, useState } from "react";

export default function SixMonthView({ selectedDepartments }) {
  const [filterTasks, setFilterTasks] = useState([]);
  const [viewDate, setViewDate] = useState(new Date());
  const [windowStart, setWindowStart] = useState(new Date()); //
  const [windowEnd, setWindowEnd] = useState(
    new Date(new Date().setMonth(new Date().getMonth() + 2))
  ); //

  // Create a function to update the start and end date of the window based on the viewDate
  const updateWindow = (date) => {
    const start = new Date(date);
    const end = new Date(date);
    end.setMonth(end.getMonth() + 2); // End two months after the view date
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
    TooltipContent: () => null,
    TaskListHeader: () => null,
    TaskListTable: () => null,
  };

  return (
    <>
      <div className="buttonWrapper">
        <button
          className="monthButton"
          type="button"
          onClick={() => {
            let newDate = new Date(viewDate);
            if (newDate.getMonth() === 0) {
              newDate.setFullYear(newDate.getFullYear() - 1);
              newDate.setMonth(11);
            } else {
              newDate.setMonth(newDate.getMonth() - 1);
            }
            setViewDate(newDate);
          }}
        >
          {"<"}
        </button>

        <button
          className="monthButton"
          type="button"
          onClick={() => {
            let newDate = new Date(); // Get current date
            setViewDate(newDate);
          }}
        >
          Today
        </button>

        <button
          className="monthButton"
          type="button"
          onClick={() => {
            let newDate = new Date(viewDate);
            if (newDate.getMonth() === 11) {
              newDate.setFullYear(newDate.getFullYear() + 1);
              newDate.setMonth(0);
            } else {
              newDate.setMonth(newDate.getMonth() + 1);
            }
            setViewDate(newDate);
          }}
        >
          {">"}
        </button>
      </div>
      <Gantt
        tasks={filterTasks.length ? filterTasks : tasks}
        viewMode={ViewMode.Month}
        columnWidth={window.innerWidth * 0.33}
        rowHeight={50}
        viewDate={viewDate}
        ganttHeight={window.innerHeight * 0.66}
        {...deleteSidebar}
      />
    </>
  );
}
