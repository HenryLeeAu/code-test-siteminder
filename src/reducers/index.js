import { combineReducers } from 'redux';
import moviesSearchReducer  from 'reducers/movieSearch';

export default combineReducers({
  movieSearch:moviesSearchReducer,
})