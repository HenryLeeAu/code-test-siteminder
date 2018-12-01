import React from "react";
import { connect } from "react-redux";

function MovieDetail(props) {
  const { currentMovieDetail } =props.searchStatus;
  if (currentMovieDetail !== null) {
    const {
      Title,
      Genre,
      Language,
      Director,
      Actors,
      Runtime,
      Poster
    } = currentMovieDetail;
    return (
      <div>
        <div className="detailLeft">
          <div>{Title}</div>
          <div>genere: {Genre}</div>
          <p>movie description</p>
          <div>language: {Language}</div>
          <div>Director: {Director}</div>
          <div>Actors: {Actors}</div>
          <div>Duration : {Runtime}</div>
        </div>
        { Poster !== 'N/A' && <img src={Poster} alt={Title} />}
      </div>
    );
  } else {
    return <div>Please search from left side</div>;
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus
  };
}

export default connect(mapStateToProps)(MovieDetail);
