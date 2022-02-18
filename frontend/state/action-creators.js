// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";
import * as types from "./action-types";

export const moveClockwise = (number) => {
  return { type: MOVE_CLOCKWISE, payload: number };
};

export const moveCounterClockwise = (number) => {
  return { type: MOVE_COUNTER_CLOCKWISE, payload: number };
};

export function selectAnswer() {}

export function setMessage() {}

export const setQuiz = () => ({
  type: types.SET_QUIZ_INTO_STATE,
  payload: {
    question_text: "",
    true_answer_text: "",
    false_answer_text: "",
  },
});

export const inputChange = (value) => ({
  type: types.INPUT_CHANGE,
  payload: value,
});

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    axios
      .get(`http://localhost:9000/api/quiz/next`)
      .then((res) => {
        console.log(res);
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
export function postQuiz(id) {
  return function (dispatch) {
    axios
      .post(`http://localhost:9000/api/quiz/new`)
      .then((res) => {
        debugger;
        console.log(res);
        dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: res.question });
      })
      .catch((err) => {
        console.log(err);
      });
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
