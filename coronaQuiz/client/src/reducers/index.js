import {combineReducers} from 'redux';
import quizReducer from './quiz';
import userReducer from './user';

export default combineReducers({
    quiz : quizReducer,
    user : userReducer
})