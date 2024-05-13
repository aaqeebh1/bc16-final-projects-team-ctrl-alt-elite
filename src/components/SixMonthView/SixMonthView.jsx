import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

export default function SixMonthView() {
  let tasks = [
    {
      start: new Date(2024, 1, 1),
      end: new Date(2024, 1, 2),
      name: "Idea",
      id: "Task 0",
      type: "task",
      progress: 45,
      isDisabled: true,
      styles: { progressColor: "#ffbb54", progressSelectedColor: "#ff9e0d" },
    },
  ];
  return (
    <Gantt
      tasks={tasks}
      viewMode={ViewMode.Month}
      viewDate={new Date(2024, 3, 1)}
      columnWidth={400}
      rowHeight={50}
      TooltipContent={() => null}
      TaskListHeader={() => null}
      TaskListTable={() => null}
    />
  );
}
