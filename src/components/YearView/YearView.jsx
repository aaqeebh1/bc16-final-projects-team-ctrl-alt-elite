import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import "./YearView.css";
import tasks from "../../assets/DummyData.js";
import { useEffect, useState } from "react";

export default function YearView({
  selectedDepartments,
  setViewDate,
  viewDate,
}) {
  const [filterTasks, setFilterTasks] = useState([]);
  // const [viewDate, setViewDate] = useState(new Date());
  const yearlyTasks = [];
  tasks.map((task) => {
    if (task.type === "project" || task.type === "milestone") {
      yearlyTasks.push(task);
    }
  });

  useEffect(() => {
    const filteredTasks = yearlyTasks.filter((task) =>
      Object.keys(selectedDepartments).some(
        (dept) => dept === task.department && selectedDepartments[dept]
      )
    );
    setFilterTasks(filteredTasks);
  }, [selectedDepartments]);
  const deleteSidebar = {
    TooltipContent: () => null,
    TaskListHeader: () => null,
    TaskListTable: () => null,
  };

  return (
    <>
      <Gantt
        tasks={filterTasks.length ? filterTasks : yearlyTasks}
        viewMode={ViewMode.Month}
        columnWidth={window.innerWidth / 12.75}
        rowHeight={50}
        viewDate={viewDate}
        ganttHeight={window.innerHeight * 0.66}
        {...deleteSidebar}
      />
    </>
  );
}
