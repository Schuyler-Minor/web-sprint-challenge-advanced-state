import React, { useState, useReducer } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function Form(props) {
  const [values, setValues] = useState(initialFormState);
  console.log(values);
  const onChange = (evt) => {
    const { value } = evt.target;
    setValues({ newQuestion: value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        value={props.values}
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        placeholder="Enter question"
      />
      <input
        value={props.value}
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        placeholder="Enter true answer"
      />
      <input
        value={props.value}
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        placeholder="Enter false answer"
      />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
