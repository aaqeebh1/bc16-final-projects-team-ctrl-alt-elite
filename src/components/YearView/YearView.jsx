import {Gantt, ViewMode} from "gantt-task-react";
import "gantt-task-react/dist/index.css";
import './YearView.css'
import tasks from "../../assets/DummyData.js";

export default function YearView() {
    const deleteSidebar = {
        TooltipContent: () => null,
        TaskListHeader: () => null,
        TaskListTable: () => null,
    }

    return <Gantt tasks={tasks}
                  viewMode={ViewMode.Month}
                  columnWidth={window.innerWidth / 14}
                  rowHeight={50}
                  viewDate={new Date()}
                  ganttHeight={window.innerHeight * 0.66}
                  {...deleteSidebar}
    />
}