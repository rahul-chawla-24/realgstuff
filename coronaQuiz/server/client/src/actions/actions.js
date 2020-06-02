import axios from "axios";

export const sendUserDetails = ({firstName,lastName,email}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Request body
  const body = {
    firstName,
    lastName,
    email,
  };

  let user = await axios.post("/user/add", body, config);
  dispatch({
    type: "USER_ADDED",
    payload: user.data,
  });
};

export const fetchQuizQuestions = () => async (dispatch) => {

  let questions =  await axios.get('/questions/all');
    dispatch({
        type : "FETCH_QUESTIONS",
        payload : questions.data
    });


}

export const resultAction = (value, index) => async (dispatch) => {
    dispatch({
        type : "RESULT",
        payload : {value,index}
    })
}

export const getResult = () => async (dispatch) => {
    dispatch({
        type : "GET_RESULT",
    })
}