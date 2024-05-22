import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import tasks from "../../assets/DummyData.js";
import "../MonthView/MonthView.css";
import { useState, useEffect } from "react";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export default function MonthView({ viewDate }) {
  const [date, setDate] = useState(new Date(viewDate));
  const events = tasks
    .filter((task) => task.type === "task" || task.type === "milestone") // Filter tasks by type
    .map((task) => ({
      title: task.name + " - " + task.id,
      start: task.start,
      end: new Date(task.start + 1),
      allDay: true,
      // Assuming these are all-day events; set to false if not
      resource: {
        department: task.department,
        type: task.type,
        progress: task.progress,
        styles: task.styles,
      },
    }));
  
  useEffect(() => {  
    setDate(new Date(viewDate))
  }, [viewDate])
  

  return (
    <div className="myCustomHeight">
      <Calendar
        date={date}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        toolbar={false}
        style={{ height: window.innerHeight * 0.66, backgroundColor: "white" }}
        eventPropGetter={(events) => {
          const backgroundColor = events.resource.styles.backgroundColor;
          const style = {
            backgroundColor,
            borderRadius: "3px",
            opacity: 0.8,
            border: "0px",
            display: "block",
          };
          return { style };
          
        }}
      />
    </div>
  );
}
