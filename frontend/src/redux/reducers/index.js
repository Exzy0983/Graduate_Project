import { combineReducers } from 'redux';
import authReducer from './authReducer';
import tutorialsReducer from './tutorialsReducer';

export default combineReducers({
  auth: authReducer,
  tutorials: tutorialsReducer,
});
