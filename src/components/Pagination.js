import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCurrentPage,decreaseCurrentPage } from "actions";
class Pagination extends Component {
  componentDidMount() {
    //console.log(this.props.searchStatus)
  }
  handleClickDecreasment=(e)=>{
    this.props.decreaseCurrentPage()
   
  }
  handleClickIncreasment=(e)=>{
    this.props.increaseCurrentPage()
    
  }
  
  renderPagination(){
    const { currentPage, totalPages,totalNum } = this.props.searchStatus;
    if(totalPages!==null && totalPages>1 ){
      return (
        <div className="pagination">
        <div className="left">
          <button id="dec" onClick= { this.handleClickDecreasment}>prev</button>
        </div>
        <div className="middle">
          <div>  {currentPage} / {totalPages} pages</div>
          {totalNum} total
        </div>
        <div className="right">
          <button onClick= { this.handleClickIncreasment}>next</button>
        </div>
      </div>
      )
    }else{
      return null
    }
    
  }
  render() {
    
    return  this.renderPagination()
  }
}

function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus
  };
}

export default connect(
  mapStateToProps,
  {increaseCurrentPage,decreaseCurrentPage}
)(Pagination);
