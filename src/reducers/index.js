import { combineReducers } from 'redux';
import searchStatusReducer from 'reducers/searchStatus';

export default combineReducers({
  searchStatus: searchStatusReducer,
});
