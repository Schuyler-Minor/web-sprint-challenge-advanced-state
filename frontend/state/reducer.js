// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import * as types from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      return state + 1;
    case types.MOVE_COUNTERCLOCKWISE:
      return state - 1;
    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  return state;
}

const initialSelectedAnswerState = true;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case types.SET_SELECTED_ANSWER:
      return !state;
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  return state;
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  false_answer_text: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return [...state, action.payload];
    case types.INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
