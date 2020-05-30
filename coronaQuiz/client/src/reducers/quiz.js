import { connect } from "react-redux";

const initialState = {
  questions: [],
  result: [],
  score: 0,
  total: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_QUESTIONS":
      return { ...state, questions: action.payload };
    case "RESULT":
      let arr = [...state.result];
      arr[action.payload.index] = action.payload.value;
      console.log(arr);
      return { ...state, result: arr };
    case "GET_RESULT":
      let array = [...state.result];
      let resultScore = 0;
      let totalScore = 5 * state.questions.length;
    for(let i =0 ; i <array.length ; i ++){
        if(array[i] === "true"){
            resultScore += 5;
        }
    }
      return { ...state, score: resultScore, total: totalScore };

    default:
      return state;
  }
}

const filterArray = (array, fields, value) => {
  fields = Array.isArray(fields) ? fields : [fields];

  return array.filter((item) => fields.some((field) => item[field] === value));
};
