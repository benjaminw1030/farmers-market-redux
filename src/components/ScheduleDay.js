import React from "react";
import PropTypes from "prop-types";

function ScheduleDay(props) {
  return (
    <div>
      <p>Day: {props.day}</p>
      <p>Location: {props.location}</p>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>
    </div>
  );
}

ScheduleDay.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string,
};

export default ScheduleDay;
