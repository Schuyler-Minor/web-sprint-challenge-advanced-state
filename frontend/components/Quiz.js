import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

function Quiz(props) {
  const onSubmit = (evt) => {
    evt.preventDefault();
  };

  const onChange = (evt) => {
    const { value } = evt.target;
    props.selectAnswer(value);
  };
  console.log(props.selectedAnswer);
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>What is a closure?</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button onClick={onChange}>SELECTED</button>
              </div>

              <div className="answer">
                An elephant
                <button onClick={onChange}>Select</button>
              </div>
            </div>

            <button onSubmit={onSubmit} id="submitAnswerBtn">
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}
export default connect((st) => st, actionCreators)(Quiz);
