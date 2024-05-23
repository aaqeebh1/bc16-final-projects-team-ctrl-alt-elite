import React, { useEffect, useState } from "react";
import HoverCard from "../HoverCard/HoverCard";
import "../HoverCard/HoverCard.css";
import tasks from "../../assets/DummyData";

const CustomEvent = ({ event }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [eventTask, setEventTask] = useState({});

  useEffect(() => {
    setEventTask(tasks.find((task) => task.id === event.id));
  }, []);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const eventStyle = {
    padding: "5px",
    borderRadius: "5px",
      color: "black",
  };

  return (
    <div
      style={eventStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <strong>{event.title}</strong>
      {isHovered && (
        <div>
          <HoverCard
            campaign={eventTask.id}
            depColor={eventTask.styles.progressColor}
            blurb={eventTask.blurb}
            assigned={eventTask.assigned}
            startDate={eventTask.start}
            endDate={eventTask.end}
          />
        </div>
      )}
    </div>
  );
};

export default CustomEvent;
