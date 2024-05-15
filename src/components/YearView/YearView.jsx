import {Gantt, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import './YearView.css'
import tasks from "../../assets/DummyData.js";
import { useEffect, useState } from "react";

export default function YearView({ selectedDepartments }) {
  const [filterTasks, setFilterTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task) =>
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
    <Gantt
      tasks={filterTasks.length ? filterTasks : tasks}
      viewMode={ViewMode.Month}
      columnWidth={window.innerWidth / 14}
      rowHeight={50}
      viewDate={new Date()}
      ganttHeight={window.innerHeight * 0.66}
      {...deleteSidebar}
    />
  );
}