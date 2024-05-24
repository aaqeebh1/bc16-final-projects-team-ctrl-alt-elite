import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import tasks from "../../assets/DummyData.js";
import "../MonthView/MonthView.css";
import { useState, useEffect, useRef, useMemo } from "react";
import ClickCard from "../ClickCard/ClickCard.jsx";
import CustomEvent from "./CustomEvent";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export default function MonthView({ viewDate }) {
  const [date, setDate] = useState(new Date(viewDate));
  const [displayClickCard, setDisplayClickCard] = useState(false);
  const [eventTask, setEventTask] = useState({});

  const events = tasks
    .filter((task) => task.type === "task" || task.type === "milestone") // Filter tasks by type
    .map((task) => ({
      id: task.id,
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
    setDate(new Date(viewDate));
  }, [viewDate]);

  const { defaultDate, formats } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 1),
      formats: {
        weekdayFormat: (date, culture, localizer) =>
          localizer.format(date, "dddd", culture),
      },
    }),
    []
  );

  const handleSelected = (event) => {
    setDisplayClickCard(true);
    // match event with task from tasks use this to populate the click card
    setEventTask(tasks.find((task) => task.id === event.id));
  };
  
  return (
    <>
      {displayClickCard && (
        <ClickCard
          clickHere={() => setDisplayClickCard(false)}
          campaign={eventTask.id}
          depColor={eventTask.styles.backgroundColor}
          blurb={eventTask.blurb}
          blurbTwo={eventTask.blurbTwo}
          blurbThree={eventTask.blurbThree}
          assigned={eventTask.assigned}
          startDate={eventTask.start}
          endDate={eventTask.end}
        />
      )}
      <div className="myCustomHeight">
        <Calendar
          formats={formats}
          date={date}
          onNavigate={(date) => setDate(date)}
          localizer={localizer}
          events={events}
          onSelectEvent={handleSelected}
          startAccessor="start"
          endAccessor="end"
          toolbar={false}
          style={{
            height: window.innerHeight * 0.66,
            backgroundColor: "white",
            zIndex: "0",
          }}
          components={{
            event: CustomEvent,
          }}
          tooltipAccessor={null}
          eventPropGetter={(events) => {
            const backgroundColor = events.resource.styles.backgroundColor;
            const style = {
              backgroundColor,
              borderRadius: "3px",
              border: "0px",
              display: "block",
            };
            return { style };
          }}
        />
      </div>
    </>
  );
}
