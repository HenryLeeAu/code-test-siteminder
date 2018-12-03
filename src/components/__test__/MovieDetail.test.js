import React from 'react';
import MovieDetail from 'components/MovieDetail';
import { mount } from 'enzyme';
import Root from 'Root';

describe('movieDetail', () => {
  it('initial screen', () => {
    const initialState = {
      searchStatus: {
        currentMovieDetail: null,
      },
    };
    const wrappered = mount(
      <Root initialState={initialState}>
        <MovieDetail />
      </Root>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });

  it('with detail', () => {
    const initialState = {
      searchStatus: {
        currentMovieDetail: {
          Title: 'Marvel',
          Genre: 'Comedy, Horrible',
          Language: 'English',
          Director: 'Henry Lee',
          Actors: 'Actor1, Actor2, Actor3',
          Runtime: '45mins',
          Poster: 'abc.jpg',
        },
      },
    };
    const wrappered = mount(
      <Root initialState={initialState}>
        <MovieDetail />
      </Root>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });

  it('no poster', () => {
    const initialState = {
      searchStatus: {
        currentMovieDetail: {
          Poster: 'N/A',
        },
      },
    };
    const wrappered = mount(
      <Root initialState={initialState}>
        <MovieDetail />
      </Root>
    );
    expect(wrappered).toMatchSnapshot();
    wrappered.unmount();
  });
});
