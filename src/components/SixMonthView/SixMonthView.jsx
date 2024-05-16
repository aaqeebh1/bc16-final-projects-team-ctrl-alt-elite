import {Gantt, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import './SixMonthView.css';
import tasks from "../../assets/DummyData.js";
import {useEffect, useState} from "react";


export default function SixMonthView({selectedDepartments}) {
  const [filterTasks, setFilterTasks] = useState([]);
  const [viewDate, setViewDate] = useState(new Date());


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
      <>
        <div className="buttonWrapper">
          <button className="monthButton" type="button" onClick={() => {
            let newDate = new Date(viewDate);


            if (newDate.getMonth() === 0) {
              newDate.setFullYear(newDate.getFullYear() - 1);
              newDate.setMonth(11);
            } else {
              newDate.setMonth(newDate.getMonth() - 1);
            }


            setViewDate(newDate);
          }}>{"<"}
          </button>
          <button className="monthButton" type="button" onClick={() => {
            let newDate = new Date(); // Get current date
            setViewDate(newDate);
          }}>Today
          </button>
          <button className="monthButton" type="button" onClick={() => {
            let newDate = new Date(viewDate);


            if (newDate.getMonth() === 11) {
              newDate.setFullYear(newDate.getFullYear() + 1);
              newDate.setMonth(0);
            } else {
              newDate.setMonth(newDate.getMonth() + 1);
            }


            setViewDate(newDate);
          }}>{">"}
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
