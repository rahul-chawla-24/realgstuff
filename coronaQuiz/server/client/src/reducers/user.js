const initialState = {
  firstname: "",
  lastname: "",
  email: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "USER_ADDED":
      console.log(action);
      return {
        ...state,
        firstname: action.payload.firstName,
        lastname: action.payload.lastName,
        email: action.payload.email,
      };
    default:
      return state;
  }
}
