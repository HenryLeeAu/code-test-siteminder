import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";
class SearchBox extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    //console.log(this.props)
    this.setState({
      value: e.target.value
    },()=>{
      this.props.fetchMovieList(this.state.value);
    });
    this.props.inputKeyword(e.target.value);
    
  };
  render() {
    return (
      <div className="SearchBox">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieSearch: state.movieSearch
  };
}
export default connect(
  mapStateToProps,
  actions
)(SearchBox);
