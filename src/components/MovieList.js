import React, { Component } from 'react';
import MovieListItem from 'components/MovieListItem';
import { connect } from 'react-redux';
import { fetchMovieDetail } from 'actions';
class MovieList extends Component {
  handleClickList(id) {
    this.props.fetchMovieDetail(id);
  }
  renderList() {
    return this.props.searchStatus.currentMovieList.map((movie, index) => {
      const { imdbID, Title, Year } = movie;
      return (
        <MovieListItem
          key={`${imdbID}${Title}`}
          onClick={e => this.handleClickList(imdbID)}
          title={Title}
          year={Year}
          clicked={imdbID === this.props.searchStatus.currentId}
        />
      );
    });
  }
  render() {
    return <ul className="movieList">{this.renderList()}</ul>;
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(
  mapStateToProps,
  { fetchMovieDetail }
)(MovieList);
