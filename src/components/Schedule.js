import React from "react";
import ScheduleDay from "./ScheduleDay";
import { v4 } from "uuid";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A",
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C",
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F",
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E",
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D",
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G",
  },
];

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDay: 0,
    };
  }

  handleChange = (event) => {
    const selectedDay = parseInt(event.target.value);
    this.setState({
      currentDay: selectedDay,
    });
  }

  render() {
    
    const dropDownList = (
      <select onChange={this.handleChange}>
        {marketSchedule.map((daySched, index) => {
          return (
            <option key={v4()} value={index}>
              {daySched.day}
            </option>
          );
        })}
      </select>
    );
    const scheduleDay = marketSchedule[this.state.currentDay];
    return (
      <div className="col-6">
        {dropDownList}
        <ScheduleDay
          day={scheduleDay.day}
          location={scheduleDay.location}
          hours={scheduleDay.hours}
          booth={scheduleDay.booth}
        />
      </div>
    );
  }
}

export default Schedule;