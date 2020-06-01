const initialState = {
  questions: [],
  result: [],
  loading: true,
  score: 0,
  total: 0,
  selectAllQues: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_QUESTIONS":
      return { ...state, questions: action.payload, loading: false ,result : [] , score : 0 , total : 0 , selectAllQues : false};
    case "RESULT":
      let arr = [...state.result];
      let formQues = true;
      arr[action.payload.index] = action.payload.value;
      for (let i = 0; i < state.questions.length; i++) {
        if (arr[i] == null) {
          formQues = false;
        }
      }
      console.log(arr);
      return { ...state, result: arr, selectAllQues: formQues };
    case "GET_RESULT":
      console.log(state)
      let resultarr = [...state.result];
      let resultScore = 0;
      let totalScore = 5 * state.questions.length;
      for (let i = 0; i < resultarr.length; i++) {
        if (resultarr[i] === "true") {
          resultScore += 5;
        }
      }
      console.log("result" , resultScore, totalScore ,resultarr);
      return { ...state, score: resultScore, total: totalScore };

    default:
      return state;
  }
}
