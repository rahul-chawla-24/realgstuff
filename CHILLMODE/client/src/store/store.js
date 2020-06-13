import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {
        isLoggedIn : false,
        userId:"",
        name :"",
        email:""
};

const middleWare = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleWare))
);

export default store;
