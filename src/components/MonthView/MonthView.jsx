import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import tasks from "../../assets/DummyData.js";

// Setup the localizer by providing the moment (or globalize, or Luxon) Object
// to the correct localizer.
const localizer = momentLocalizer(moment); // or globalizeLocalizer

export default function MonthView() {
  return (
    <div className="myCustomHeight">
      <Calendar
        localizer={localizer}
        events={tasks}
        startAccessor="start"
        endAccessor="end"
        toolbar={false}
        style={{ height: 500 }}
      />
    </div>
  );
}
