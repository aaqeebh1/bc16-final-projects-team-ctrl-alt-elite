import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import tasks from "../../assets/DummyData";
import { useEffect, useState } from "react";

export default function SixMonthView({ selectedDepartments }) {
  const [filterTasks, setFilterTasks] = useState([]);
  const [expandedTasks, setExpandedTasks] = useState({});

  useEffect(() => {
    const filteredTasks = tasks.filter((task) =>
      Object.keys(selectedDepartments).some(
        (dept) => dept === task.department && selectedDepartments[dept]
      )
    );
    setFilterTasks(filteredTasks);
  }, [selectedDepartments]);

    const toggleTask = (taskId) => {
      setExpandedTasks((prevState) => ({
        ...prevState,
        [taskId]: !prevState[taskId],
      }));
    };

    const getVisibleTasks = (tasks) => {
      const result = [];
      const addTasks = (taskList) => {
        taskList.forEach((task) => {
          result.push(task);
          if (task.children && expandedTasks[task.id]) {
            addTasks(task.children);
          }
        });
      };
      addTasks(tasks);
      return result;
    };

    const visibleTasks = getVisibleTasks(filterTasks);


  return (
    <Gantt 
      tasks={filterTasks.length ? filterTasks : tasks}
      viewMode={ViewMode.Month}
      viewDate={new Date()}
      columnWidth={window.innerWidth * 0.33}
      rowHeight={50}
      TooltipContent={() => null}
      TaskListHeader={() => null}
      TaskListTable={() => null}
      ganttHeight={window.innerHeight * 0.66}
    />
  );
}
