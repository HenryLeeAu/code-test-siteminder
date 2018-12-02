import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
  UPDATE_CURRENT_PAGE,
} from 'actions/types';
import axios from 'axios';
import { baseApi } from 'apis';
export function inputKeyword(keyword) {
  return {
    type: INPUT_KEYWORD,
    payload: keyword,
  };
}
export const getList = data => {
  return {
    type: GET_LIST,
    payload: data,
  };
};
export const fetchMovieList = (keyword, page) => {
  const fetchPage = typeof page === 'number' && page > 0 ? page : 1;
  return dispatch => {
    axios
      .get(`${baseApi}&s=${keyword}&page=${fetchPage}`)
      .then(res => res.data)
      .then(data => {
        if (data.Response === 'False') {
          console.log(data.Error);
          return false;
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
    payload: data,
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
        console.log('request fail');
      });
  };
};
export const updateCurrentPageNum = num => {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: num,
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
