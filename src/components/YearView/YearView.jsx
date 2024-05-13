import {Gantt, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import './YearView.css'

export default function YearView() {
    let tasks = [
        {
            start: new Date(),
            end: new Date(2024, 9, 8),
            name: "Transport",
            id: "Task 0",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: 'red', progressSelectedColor: 'red' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(),
            name: "Economy",
            id: "Task 1",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: 'blue', progressSelectedColor: 'blue' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(2025, 6, 12),
            name: "Environment",
            id: "Task 2",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: 'green', progressSelectedColor: 'green' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(2025, 6, 12),
            name: "Housing",
            id: "Task 3",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: 'green', progressSelectedColor: 'green' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(2024, 6, 12),
            name: "Skills",
            id: "Task 4",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: 'orange', progressSelectedColor: 'orange' },
        },
        {
            start: new Date(),
            end: new Date(2024, 6, 12),
            name: "Strategy",
            id: "Task 5",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: 'purple', progressSelectedColor: 'purple' },
        },
    ];
    return <Gantt tasks={tasks}
                  viewMode={ViewMode.Month}
                  columnWidth={300}
                  rowHeight={50}
                  preStepsCount={5}
                  viewDate={new Date()}
                  TooltipContent={() => null}
                  TaskListHeader={() => null}
                  TaskListTable={() => null}/>;
}