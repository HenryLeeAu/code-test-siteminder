import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
} from 'actions/types';

const defaultState = {
  keyword: '',
  currentPage: '',
  totalPage: '',
  totalNum: '',
  fetchMovieList: [],
  currentMovieDetail: null,
  fetchedMovies: [],
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case INPUT_KEYWORD:
      return { ...state, keyword: action.payload };
    case GET_LIST:
      const totalPage = Math.ceil(action.payload.data.totalResults / 10);
      return {
        ...state,
        currentPage: 1,
        totalPage,
        fetchMovieList: action.payload.data.Search,
        totalNum: action.payload.data.totalResults,
      };
    case SHOW_DETAIL:
      return {
        ...state,
        currentMovieDetail: action.payload.data,
        fetchedMovies: [...state.fetchedMovies, action.payload.data],
      };
    default:
      return state;
  }
}
