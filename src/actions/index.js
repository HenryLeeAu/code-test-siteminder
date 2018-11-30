import { INPUT_KEYWORD,GET_LIST,SHOW_DETAIL,RECOVER_DETAIL } from 'actions/types'
import axios from 'axios'
import { baseApi } from 'api'
import _ from 'lodash'
export function inputKeyword(keyword){
  return {
    type:INPUT_KEYWORD,
    payload :keyword
  }
}
export const getList = data =>{
  return {
    type:GET_LIST,
    payload :data
  }
}
export const fetchMovieList = keyword => {

  return dispatch => {
    axios.get(`http://www.omdbapi.com/?&apikey=81f5bea7&s=flash`)
      .then(res => res.data)
      .then(data => {
     
        dispatch(getList({data}))
        //dispatch(getTheme({ color: data.color }));
      })
      .catch(error => {
       // console.log('This client is not exist');
      });
  };
};
export const showMovieDetail = data =>{
  return {
    type:SHOW_DETAIL,
    payload :data
   
  }
}
export const recoverMovieDetail = data =>{
  return {
    type:RECOVER_DETAIL,
    payload :data
   
  }
}
export const fetchMovieDetail = id =>{
  return (dispatch,getState) => {
    const fetchedMovies = getState().movieSearch.fetchedMovies
    const matchedMovie = _.find(fetchedMovies , function(o) {
      return o.imdbID == id 
    });

    if(matchedMovie){
      dispatch(recoverMovieDetail({matchedMovie}))
      return false
    }
  
    axios.get(`http://www.omdbapi.com/?&apikey=81f5bea7&i=${id}`)
      .then(res => res.data)
      .then(data => {
        dispatch(showMovieDetail({data}))
      
      })
      .catch(error => {
        //console.log('This client is not exist');
      });
  };
}

/*
export function fetchComments(){
  const response =axios.get('http://jsonplaceholder.typicode.com/comments')
  return {
    type: FETCH_COMMENTS,
    payload: response
  }
}
export function changeAuth(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }

}*/