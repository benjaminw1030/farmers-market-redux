import React from "react";
import PropTypes from "prop-types";

function ProduceMonth(props) {
  return (
    <div>
      <h3>{props.month}</h3>
      <h3>Available Produce:</h3>
      <ul>
        {props.selection.map((e) => {
          return <li>{e}</li>;
        })}
      </ul>
    </div>
  );
}

ProduceMonth.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
}

export default ProduceMonth