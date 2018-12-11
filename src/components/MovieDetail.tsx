import React from 'react';
import { connect } from 'react-redux';

interface IProps {
  currentMovieDetail: {
    Title: string;
    Year: string;
    Genre: string;
    Language: string;
    Director: string;
    Actors: string;
    Runtime: string;
    Poster: string;
    Plot: string;
  };
}
function MovieDetail({searchStatus}:{searchStatus:IProps}) {
  const { currentMovieDetail } = searchStatus;
  if (currentMovieDetail !== null) {
    const {
      Title,
      Year,
      Genre,
      Language,
      Director,
      Actors,
      Runtime,
      Poster,
      Plot,
    } = currentMovieDetail;
    return (
      <div>
        <div className="detailLeft">
          <h2 className="movie-title">{Title}</h2>
          <div className="movie-year">{Year}</div>
          <p className="movie-desc">{Plot}</p>
          <div>genere: {Genre}</div>
          <p>movie description</p>
          <div>language: {Language}</div>
          <div>Director: {Director}</div>
          <div>Actor(s): {Actors}</div>
          <div>Duration : {Runtime}</div>
        </div>
        {Poster !== 'N/A' && <img src={Poster} alt={Title} />}
      </div>
    );
  } else {
    return (
      <div className="before-select">You haven't selected any movie yet!</div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(MovieDetail);
