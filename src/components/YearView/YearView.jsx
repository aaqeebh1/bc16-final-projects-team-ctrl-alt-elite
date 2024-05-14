import {Gantt, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import './YearView.css'

export default function YearView() {
    let tasks = [
        {
            start: new Date(),
            end: new Date(2024, 9, 8),
            name: "Business",
            id: "Task 0",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#F87168', progressSelectedColor: '#F87168' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(),
            name: "Internal",
            id: "Task 1",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#FEA362', progressSelectedColor: '#FEA362' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(2025, 6, 12),
            name: "Skills",
            id: "Task 2",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#FFA500', progressSelectedColor: '#FFA500' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(2025, 6, 12),
            name: "Net Zero",
            id: "Task 3",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#94C748', progressSelectedColor: '#94C748' },
        },
        {
            start: new Date(2024, 1, 1),
            end: new Date(2024, 6, 12),
            name: "Housing",
            id: "Task 4",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#FFFF00', progressSelectedColor: '#FFFF00' },
        },
        {
            start: new Date(),
            end: new Date(2024, 6, 12),
            name: "Transport",
            id: "Task 5",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#FF0000', progressSelectedColor: '#FF0000' },
        },
        {
            start: new Date(),
            end: new Date(2024, 6, 12),
            name: "Transport",
            id: "Task 6",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#FF0000', progressSelectedColor: '#FF0000' },
        },
        {
            start: new Date(),
            end: new Date(2024, 9, 12),
            name: "Strategy",
            id: "Task 10",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#800080', progressSelectedColor: '#800080' },
        },
        {
            start: new Date(),
            end: new Date(2024, 10, 12),
            name: "Environment",
            id: "Task 11",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#00FF00', progressSelectedColor: '#00FF00' },
        },
        {
            start: new Date(),
            end: new Date(2025, 2, 12),
            name: "Economy",
            id: "Task 12",
            type: "task",
            progress: 100,
            isDisabled: false,
            styles: { progressColor: '#0000FF', progressSelectedColor: '#0000FF' },
        },
    ];
    return <Gantt tasks={tasks}
                  viewMode={ViewMode.Month}
                  columnWidth={window.innerWidth / 13}
                  rowHeight={50}
                  preStepsCount={5}
                  viewDate={new Date()}
                  ganttHeight={590}
                  TooltipContent={() => null}
                  TaskListHeader={() => null}
                  TaskListTable={() => null}/>;
}