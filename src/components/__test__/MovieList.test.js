import React from 'react';

import MovieList from 'components/MovieList';
import { mount } from 'enzyme';
import Root from 'Root';

describe('MovieList', () => {
  let wrappered;
  const initialState = {
    searchStatus: {
      currentMovieList: [
        {
          imdbID: 'id1',
          Title: 'Marvel',
          Year: '2016',
        },
        {
          imdbID: 'id2',
          Title: 'Spider man',
          Year: '2016',
        },
      ],
    },
  };
  beforeEach(() => {
    wrappered = mount(
      <Root initialState={initialState}>
        <MovieList />
      </Root>
    );
  });
  afterEach(() => {
    wrappered.unmount();
  });
  it('render UI', () => {
    expect(wrappered).toMatchSnapshot();
  });
  it('has 2 movies', () => {
    expect(wrappered.find('.movieList').find('li').length).toBe(2);
  });
});
