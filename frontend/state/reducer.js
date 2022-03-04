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

const initialQuizState = [];
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const initialSelectedAnswerState = false;
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
  switch (action.type) {
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  switch (action.type) {
    case types.INPUT_CHANGE:
      return {
        ...state,
        newQuestion: action.payload,
      };
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
