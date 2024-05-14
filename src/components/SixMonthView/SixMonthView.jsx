import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import tasks from "../../assets/DummyData";

export default function SixMonthView() {
  return (
    <Gantt
      tasks={tasks}
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
