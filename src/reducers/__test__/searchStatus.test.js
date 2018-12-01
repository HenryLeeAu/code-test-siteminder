import searchStatusReducer from "reducers/searchStatus";

import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
  UPDATE_CURRENT_PAGE
} from "actions/types";

describe("reducer", () => {
  it("INPUT_KEYWORD", () => {
    const action = {
      type: INPUT_KEYWORD,
      payload: "marvel"
    };
    const newState = searchStatusReducer({}, action);
    expect(newState).toEqual({
      keyword: "marvel"
    });
  });

  it("GET_LIST", () => {
    const action = {
      type: GET_LIST,
      payload: {
        data: {
          totalResults: 10,
          Search: ["list1", "list2"]
        },
        fetchPage: 1
      }
    };
    const newState = searchStatusReducer({}, action);
    expect(newState).toEqual({
      currentPage: 1,
      totalPages: 1,
      currentMovieList: ["list1", "list2"],
      totalNum: 10
    });
  });
  it("SHOW_DETAIL",()=>{
    const action = {
      type: SHOW_DETAIL,
      payload: {
        data:{
          imdbID:"id1",
        }
      }
    };
    const newState = searchStatusReducer({}, action);
    expect(newState).toEqual({
      currentId: "id1",
      currentMovieDetail: {
        imdbID:"id1"
      }
    });
  })
  it("UPDATE_CURRENT_PAGE",()=>{
    const action = {
      type:UPDATE_CURRENT_PAGE,
      payload:{
        updatedNum:2
      }
    }
    const newState = searchStatusReducer({}, action);
    expect(newState).toEqual({
      currentPage:2
    })
  })
});

