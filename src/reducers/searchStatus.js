import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
  UPDATE_CURRENT_PAGE
} from "actions/types";

const defaultState = {
  keyword: "",
  currentPage: null,
  totalPages: null,
  totalNum: null,
  currentId:null,
  currentMovieList: [],
  currentMovieDetail: null,

  visitedMovieDetailList: []
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case INPUT_KEYWORD:
      return { ...state, keyword: action.payload };
    case GET_LIST:
      const totalPages = Math.ceil(action.payload.data.totalResults / 10);
      return {
        ...state,
        currentPage:action.payload.fetchPage,
        totalPages,
        currentMovieList: action.payload.data.Search,
        totalNum: action.payload.data.totalResults
      };
    case SHOW_DETAIL:
      return {
        ...state,
        currentId:action.payload.data.imdbID,
        currentMovieDetail: action.payload.data,
      
      };
    
    case UPDATE_CURRENT_PAGE:
      return {
       ...state,
       currentPage:action.payload.updatedNum
     }
   
    default:
      return state;
  }
}
