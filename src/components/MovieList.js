import React, { Component } from 'react';
import MovieListItem from 'components/MovieListItem'
import { connect } from "react-redux";
import { fetchMovieDetail } from "actions";
class MovieList extends Component {
  handleClickList(id){
    this.props.fetchMovieDetail(id)
    
  }
  renderList(){
   return this.props.movieSearch.fetchMovieList.map((movie,index)=>{
      return <li key={`${movie.imdbID}${movie.Title}`} 
                onClick={(e)=>this.handleClickList(movie.imdbID)}>{movie.Title} {movie.Year}</li>
    })
  }

  componentDidUpdate(){
    //console.log(this.props.movieSearch.fetchMovieList)
  }
  render() {
    return (
      <ul className="movieList">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieSearch: state.movieSearch
  };
}

export default connect(
  mapStateToProps,{fetchMovieDetail}
)(MovieList);


