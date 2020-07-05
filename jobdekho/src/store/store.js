import { createStore } from "redux";

// 1. Save all the channels at one place - Application State
let initialState = {
  candidates: [],
  applications: [],
  questions: [],
  applicationInfo: null,
};

// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function
function appReducerFunction(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  //   console.log("Redux state here", state, action);
  switch (action.type) {
    case "CANDIDATES_FETCHED":
      stateCopy.candidates = action.payload;
      return stateCopy;
    case "APPLICATIONS_FETCHED":
      stateCopy.applications = action.payload;
      return stateCopy;
    case "QUESTIONS_FETCHED":
      stateCopy.questions = action.payload;
      return stateCopy;
    case "APPLICATION_DETAILS_FETCHED":
      stateCopy.applicationInfo = action.payload;
      return stateCopy;
    case "CLEAR_APPLICATION_INFO":
      stateCopy.applicationInfo = null;
      return stateCopy;
    default:
      return stateCopy;
  }
}

const store = createStore(appReducerFunction);
export default store;
