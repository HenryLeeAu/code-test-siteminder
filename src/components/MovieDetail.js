import React from "react";
import { connect } from "react-redux";

function MovieDetail(props) {
  if (props.movieSearch.currentMovieDetail !== null) {
    const {
      Title,
      Genre,
      Language,
      Director,
      Actors,
      Runtime,
      Poster
    } = props.movieSearch.currentMovieDetail;
    return (
      <li>
        <div>{Title}</div>
        <div>genere: {Genre}</div>
        <p>movie description</p>
        <div>language: {Language}</div>
        <div>Director: {Director}</div>
        <div>Actors: {Actors}</div>
        <div>Duration : {Runtime}</div>
        <img src={Poster} alt={Title} />
      </li>
    );
  } else {
    return <div>nodata</div>;
  }
}
function mapStateToProps(state) {
  return {
    movieSearch: state.movieSearch
  };
}

export default connect(mapStateToProps)(MovieDetail);
