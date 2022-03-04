// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import * as types from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case types.MOVE_CLOCKWISE:
      if (state >= 0 && state < 6) return state + 1;

    case types.MOVE_COUNTERCLOCKWISE:
      if (state > -1 && state <= 6) return state - 1;
    default:
      return state;
  }
}

const initialQuizState = [];
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case types.SET_QUIZ_INTO_STATE:
      return [...state, action.payload];
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
      console.log(action, state);
      return {
        ...state,
        newQuestion: action.payload,
        newTrueAnswer: action.payload,
        newFalseAnswer: action.payload,
      };
    case types.RESET_FORM:
      return state;
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
