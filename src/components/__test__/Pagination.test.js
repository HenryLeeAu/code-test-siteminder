import React from 'react';

import Pagination from 'components/Pagination';
import { mount } from 'enzyme';
import Root from 'Root';
describe('Pagination', () => {
  it('more than 1 pages', () => {
    const initialState = {
      searchStatus: {
        totalPages: 4,
        currentPage: 1,
        totalNum: 40,
      },
    };
    const wrappered = mount(
      <Root initialState={initialState}>
        <Pagination />
      </Root>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });
  
  it('less than 1 page', () => {
    const initialState = {
      searchStatus: {
        totalPages: null,
        currentPage: null,
        totalNum: null,
      },
    };
    const wrappered = mount(
      <Root>
        <Pagination initialState={initialState} />
      </Root>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });
});
