import React, { Component } from 'react';
import MovieListItem from './MovieListItem';
import { connect } from 'react-redux';
import { fetchMovieDetail } from '../actions';

interface IList {
  imdbID: string;
  Title: string;
  Year: string;
}
interface IProps {
  fetchMovieDetail(id: string): any;
  searchStatus: {
    currentMovieList: IList[];
    currentId: string;
  };
}
class MovieList extends Component<IProps> {
  handleClickList(id: string) {
    this.props.fetchMovieDetail(id);
  }
  renderList() {
    const { currentMovieList, currentId } = this.props.searchStatus;
    return currentMovieList.map((movie, index) => {
      const { imdbID, Title, Year } = movie;
      return (
        <MovieListItem
          key={`${imdbID}${Title}${index}`}
          onClick={(e: Event) => this.handleClickList(imdbID)}
          title={Title}
          year={Year}
          clicked={imdbID === currentId}
        />
      );
    });
  }
  render() {
    return (
      <ul className="movieList"  >
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state: any) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(
  mapStateToProps,
  { fetchMovieDetail }
)(MovieList);
