import React from "react";

import Pagination from "components/Pagination";
import { mount, unmount } from "enzyme";
import RootTest from "RootTest";
describe("Pagination", () => {
  it("more than 1 pages", () => {
    const initialState = {
      searchStatus: {
        totalPages:4,
        currentPage:1,
        totalNum:40
      }
    }
    const wrappered = mount(
      <RootTest initialState={initialState}>
        <Pagination />
      </RootTest>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });
  it("less than 1 page", () => {
    const initialState = {
      searchStatus: {
        totalPages:null,
        currentPage:null,
        totalNum:null
      }
    }
    const wrappered = mount(
      <RootTest >
        <Pagination initialState={initialState} />
      </RootTest>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });
});