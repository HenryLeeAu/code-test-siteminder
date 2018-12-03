import React from 'react';

import SearchBox from 'components/SearchBox';
import { mount } from 'enzyme';
import Root from 'Root';

let wrappered;
let fetchMovieList = jest.fn();
beforeEach(() => {
  wrappered = mount(
    <Root>
      <SearchBox fetchMovieList={fetchMovieList} />
    </Root>
  );
});
afterEach(() => {
  wrappered.unmount();
});

describe('Searchbox', () => {
  it('render each component', () => {
    expect(wrappered).toMatchSnapshot();
  });

  it('update text and call search function', () => {
    const instance = wrappered.find('SearchBox').instance();
    const search = jest.spyOn(instance, 'search');
    wrappered.find('input').simulate('change', {
      target: { value: 'marvel' },
    });
    wrappered.update();
    expect(search).toHaveBeenCalledTimes(1);
    expect(wrappered.find('input').prop('value')).toBe('marvel');
  });
});
