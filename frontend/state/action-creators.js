// ❗ You don't need to add extra action creators to achieve MVP
import axios from "axios";
import * as types from "./action-types";

export const moveClockwise = () => {
  return { type: types.MOVE_CLOCKWISE };
};

export const moveCounterClockwise = () => {
  return { type: types.MOVE_COUNTERCLOCKWISE };
};

export const selectAnswer = () => {
  return { type: types.SET_SELECTED_ANSWER };
};

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
export const postQuiz = () => (dispatch) => {
  axios
    .post(`http://localhost:9000/api/quiz/new`)
    .then((res) => {
      console.log(res);
      dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: id });
    })
    .catch((err) => {
      console.log(err);
    });
  // On successful POST:
  // - Dispatch the correct message to the the appropriate state
  // - Dispatch the resetting of the form
};
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
