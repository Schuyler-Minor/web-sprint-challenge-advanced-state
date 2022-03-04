// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";
import * as types from "./action-types";

export function moveClockwise() {
  return { type: types.MOVE_CLOCKWISE };
}

export function moveCounterClockwise() {
  return { type: types.MOVE_COUNTERCLOCKWISE };
}

export function selectAnswer(id) {
  return { type: types.SET_SELECTED_ANSWER, payload: id };
}

export function setMessage() {
  return { type: types.SET_INFO_MESSAGE };
}

export function setQuiz() {
  return { type: types.SET_QUIZ_INTO_STATE };
}

export function inputChange(value) {
  return { type: types.INPUT_CHANGE, payload: value };
}

export function resetForm() {
  return { type: types.RESET_FORM };
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then((res) => {
        dispatch({ type: types.INPUT_CHANGE, payload: value });
      })
      .catch((err) => {
        console.log(err);
      });
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer() {
  return function (dispatch) {
    axios
      .post(`http://localhost:9000/api/quiz/answer`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz() {
  return function (dispatch) {
    axios
      .post(`http://localhost:9000/api/quiz/new`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // On successful POST:
  // - Dispatch the correct message to the the appropriate state
  // - Dispatch the resetting of the form
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
