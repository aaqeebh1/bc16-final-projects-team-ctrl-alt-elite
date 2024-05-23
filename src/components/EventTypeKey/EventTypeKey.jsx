import React from "react";
import "./EventTypeKey.css";

const EventTypeKey = ({ selectedPlan }) => {
  const eventIcon = {
    social: "📱",
    event: "📅",
    print: "📄",
    pressRelease: "🎥",
    email: "📧",
  };
  return (
    <>
      <div className="event-type-key">
        <div className="event-type-key__item">
          <div className="event-type-key__icon">📱</div>
          <div className="event-type-key__text">Social</div>
        </div>
        <div className="event-type-key__item">
          <div className="event-type-key__icon">📅</div>
          <div className="event-type-key__text">Event</div>
        </div>
        <div className="event-type-key__item">
          <div className="event-type-key__icon">📄</div>
          <div className="event-type-key__text">Print</div>
        </div>
        <div className="event-type-key__item">
          <div className="event-type-key__icon">🎥</div>
          <div className="event-type-key__text">PR</div>
        </div>
        <div className="event-type-key__item">
          <div className="event-type-key__icon">📧</div>
          <div className="event-type-key__text">Email</div>
        </div>
        <div className="event-type-key__item">
          <div className="event-type-key__icon">🎨</div>
          <div className="event-type-key__text">Design</div>
        </div>
      </div>
    </>
  );
};

export default EventTypeKey;
