import { combineReducers } from 'redux';
import { loadingBarReducer } from "react-redux-loading";
import authedUser from './authedUser';
import users from './users';
import polls from './polls';


export default combineReducers({
  authedUser,
  users,
  polls,
  test,
  loadingBar: loadingBarReducer,
});

function test(state={}, action) {
  return ({
    ...state,
    test: "test",
  })
}