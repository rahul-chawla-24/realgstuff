import { createStore } from "redux";

// 1. Save all the channels at one place - Application State
let initialState = {
  data: [],
};

// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function
function appReducerFunction(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  //   console.log("Redux state here", state, action);
  switch (action.type) {
    case "SET_DATA":
      stateCopy.data = action.payload;
      return stateCopy;

    case "REALTIME_DATA":
      console.log(stateCopy.data, action.payload.date);
      let index = findWithAttr(stateCopy.data,action.payload.date);
      if (index === -1) {
        stateCopy.data = [...stateCopy.data, action.payload];
      } else {
        stateCopy.data[index] = action.payload;
      }
      return stateCopy;
    default:
      return stateCopy;
  }
}

function findWithAttr(array, value) {
  for (let i = 0; i < array.length; i += 1) {
    // console.log("yes" ,array[i].date , value)
    if (array[i].date === value) {
       console.log("yes" ,array[i].date , value)
      return i;
    }
  }
  return -1;
}

const store = createStore(appReducerFunction);
export default store;
