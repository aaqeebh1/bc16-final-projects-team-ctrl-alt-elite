import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css";

export default function SixMonthView() {
  let tasks = [
    {
      start: new Date(2024, 1, 7),
      end: new Date(2024, 2, 8),
      name: "Cycle to Work Scheme",
      id: "Task 0",
      type: "task",
      isDisabled: true,
      progress: 100,
      styles: { progressColor: "#CF9FFF", progressSelectedColor: "#CF9FFF" },
    },

    {
      start: new Date(2024, 3, 7),
      end: new Date(2024, 6, 8),
      name: "New Employee Induction Programme",
      id: "Task 1",
      type: "task",
      isDisabled: true,
      progress: 100,
      styles: { progressColor: "#FF5C00", progressSelectedColor: "#FF5C00" },
    },
  ];
  return (
    <Gantt
      tasks={tasks}
      viewMode={ViewMode.Month}
      viewDate={new Date()}
      columnWidth={500}
      rowHeight={50}
      TooltipContent={() => null}
      TaskListHeader={() => null}
      TaskListTable={() => null}
    />
  );
}
