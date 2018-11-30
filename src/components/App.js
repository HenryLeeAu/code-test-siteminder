import React, { Component } from "react";
import SearchBox from 'components/SearchBox';
import MovieList from "components/MovieList";
import MovieDetail from "components/MovieDetail";
import Pagination from 'components/Pagination';



class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <MovieList />
        <Pagination />
        <MovieDetail />
      </div>
    );
  }
}

export default App;
