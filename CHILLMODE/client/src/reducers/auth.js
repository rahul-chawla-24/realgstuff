import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
  } from '../actions/types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    registerMessage:""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case USER_LOADING:
        return {
          ...state,
          isLoading: true
        };
      case USER_LOADED:
        const user = {
          name : ""
        }
        user.name = action.payload
        return {
          ...state,
          isAuthenticated: true,
          isLoading: false,
          user: user
        };
      case LOGIN_SUCCESS:
        console.log(action.payload);
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isAuthenticated: true,
          isLoading: false
        };
        // console.log(state);
        case REGISTER_SUCCESS:
          console.log(action.payload);
          return{
            ...state,
            registerMessage : action.payload.data.message
          }
          
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
        
      case REGISTER_FAIL:
        console.log(action.payload);
        
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
          isAuthenticated: false,
          isLoading: false
        };
        case "GUEST_LOGIN":
          console.log(action.payload);
          localStorage.setItem('token', action.payload.token);
          return {
            ...state,
            user : { name : "Guest"},
            isAuthenticated: true,
            isLoading: false
          };
      default:
        return state;
    }
  }
  