import {
  inputKeyword,
  getList,
  showMovieDetail,
  updateCurrentPageNum,
  decreaseCurrentPage,
  increaseCurrentPage,
  fetchMovieList,
  fetchMovieDetail,
  
} from "actions";
import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
  UPDATE_CURRENT_PAGE
} from "actions/types";

describe("inputKeyword", () => {
  it("has the correct type", () => {
    const action = inputKeyword();
    expect(action.type).toEqual(INPUT_KEYWORD);
  });
  it("has the correct payload", () => {
    const action = inputKeyword("Marvel");
    expect(action.payload).toEqual("Marvel");
  });
});

describe("gestList", () => {
  it("has the correct type", () => {
    const action = getList();
    expect(action.type).toEqual(GET_LIST);
  });
  it("has the correct payload", () => {
    const action = getList({});
    expect(action.payload).toEqual({});
  });
});

describe("showMovieDetail", () => {
  it("has the correct type", () => {
    const action = showMovieDetail();
    expect(action.type).toEqual(SHOW_DETAIL);
  });
  it("has the correct payload", () => {
    const action = showMovieDetail({});
    expect(action.payload).toEqual({});
  });
});

describe("updateCurrentPageNum", () => {
  it("has the correct type", () => {
    const action = updateCurrentPageNum();
    expect(action.type).toEqual(UPDATE_CURRENT_PAGE);
  });
  it("has the correct payload", () => {
    const action = updateCurrentPageNum(4);
    expect(action.payload).toEqual(4);
  });
});

describe("decreaseCurrentPage", () => {
  let dispatch;
  beforeEach(()=>{
    dispatch = jest.fn() 
  })
  it("currentPage>1", async () => {
    const getState = function() {
      return {
        searchStatus: {
          currentPage: 2,
          keyword: "Marvel"
        }
      };
    };
    await decreaseCurrentPage()(dispatch, getState);
    expect(dispatch).toBeCalledWith(expect.any(Function));
  });
  it("currentPage<=1", async () => {
    const getState = function() {
      return {
        searchStatus: {
          currentPage: 1,
          keyword: "Marvel"
        }
      };
    };
    const result = await decreaseCurrentPage()(dispatch, getState);
    expect(result).toEqual(false);
  });
});



describe("increaseCurrentPage", () => {
  let dispatch;
  beforeEach(()=>{
    dispatch = jest.fn() 
  })
  it("currentPage >= totalPages", async () => {
    const getState = function() {
      return {
        searchStatus: {
          currentPage: 7,
          totalPages:5,
          keyword: "Marvel"
        }
      };
    };
    const result = await increaseCurrentPage()(dispatch, getState);
    expect(result).toEqual(false);
  });
  it("currentPage < totalPages", async () => {
    const getState = function() {
      return {
        searchStatus: {
          currentPage: 2,
          totalPages:5,
          keyword: "Marvel"
        }
      };
    };
    await increaseCurrentPage()(dispatch, getState);
    expect(dispatch).toBeCalledWith(expect.any(Function));
  });
 
});
