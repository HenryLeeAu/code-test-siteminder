import React, { Component } from 'react';
import SearchBox from 'components/SearchBox';
import MovieList from 'components/MovieList';
import MovieDetail from 'components/MovieDetail';
import Pagination from 'components/Pagination';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="sidebar">
          <SearchBox />
          <div className="movieListWrap">
            <MovieList />
          </div>
          <Pagination />
        </div>
        <div className="detail">
          <MovieDetail />
        </div>
      </div>
    );
  }
}

export default App;
