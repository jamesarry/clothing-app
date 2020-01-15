import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

 //passing the user reducer intin user using combineReducer function from redux
export default combineReducers({
  user: userReducer

});
