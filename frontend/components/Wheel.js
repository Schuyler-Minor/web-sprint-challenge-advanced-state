import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

function Wheel(props) {
  const clockwiseChange = (evt) => {
    const { value } = evt.target;
    props.moveClockwise(value);
  };

  const counterChange = (evt) => {
    const { value } = evt.target;
    props.moveCounterClockwise(value);
  };

  console.log(props.wheel);
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>
          B
        </div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>
        {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick={counterChange} id="counterClockwiseBtn">
          Counter clockwise
        </button>
        <button onClick={clockwiseChange} id="clockwiseBtn">
          Clockwise
        </button>
      </div>
    </div>
  );
}

export default connect((st) => st, actionCreators)(Wheel);
