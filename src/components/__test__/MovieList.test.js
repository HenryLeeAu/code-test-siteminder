import React from 'react';

import MovieList from 'components/MovieList';
import { mount } from 'enzyme';
import RootTest from 'RootTest';

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
      <RootTest initialState={initialState}>
        <MovieList />
      </RootTest>
    );
  });
  afterEach(() => {
    wrappered.unmount();
  });
  it('render UI', () => {
    expect(wrappered).toMatchSnapshot();
  });
  it('have 2 movies', () => {
    expect(wrappered.find('.movieList').find('li').length).toEqual(2);
  });
});
