import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
  RECOVER_DETAIL,
  UPDATE_CURRENT_PAGE
} from "actions/types";
import axios from "axios";
import { baseApi } from "apis";
//import _ from "lodash";
export function inputKeyword(keyword) {
  return {
    type: INPUT_KEYWORD,
    payload: keyword
  };
}
export const getList = ({ data, fetchPage }) => {
  console.log(data, fetchPage);
  return {
    type: GET_LIST,
    payload: { data, fetchPage }
  };
};
export const fetchMovieList = (keyword, page) => {
  const fetchPage = typeof page === "number" && page > 0 ? page : 1;

  return dispatch => {
    axios
      .get(`${baseApi}&s=${keyword}&page=${fetchPage}`)
      .then(res => res.data)
      .then(data => {
        //handle response err msg
        if (data.Response === "False") {
          console.log(data.Error);
        } else {
          dispatch(getList({ data, fetchPage }));
        }
      })
      .catch(error => {});
  };
};
export const showMovieDetail = data => {
  return {
    type: SHOW_DETAIL,
    payload: data
  };
};
export const recoverMovieDetail = data => {
  return {
    type: RECOVER_DETAIL,
    payload: data
  };
};
export const fetchMovieDetail = id => {
  return (dispatch, getState) => {
    axios
      .get(`${baseApi}&i=${id}`)
      .then(res => res.data)
      .then(data => {
        dispatch(showMovieDetail({ data }));
      })
      .catch(error => {
        //console.log('This client is not exist');
      });
  };
};
export const updateCurrentPageNum = num => {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: num
  };
};
export const increaseCurrentPage = () => {
  return (dispatch, getState) => {
    const { currentPage, totalPages, keyword } = getState().searchStatus;
    if (currentPage >= totalPages) return false;

    dispatch(fetchMovieList(keyword, currentPage + 1));
  };
};

export const decreaseCurrentPage = () => {
  return (dispatch, getState) => {
    const { currentPage, keyword } = getState().searchStatus;
    if (currentPage <= 1) return false;
    dispatch(fetchMovieList(keyword, currentPage - 1));
  };
};
