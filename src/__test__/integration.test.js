import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';
import { baseApi } from 'apis';
import { defaultState } from 'reducers/searchStatus';
describe('Intergation', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest(`${baseApi}&s=marvel&page=1`, {
      status: 200,
      response: {
        Search: [
          {
            Title: 'Marvel One-Shot: Item 47',
            Year: '2012',
            imdbID: 'tt2247732',
            Type: 'movie',
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODcyN15BMl5BanBnXkFtZTcwNTE3OTIxOA@@._V1_SX300.jpg',
          },
        ],
        totalResults: '143',
        Response: 'True',
      },
    });
    moxios.stubRequest(`${baseApi}&i=tt2247732`, {
      status: 200,
      Title: 'The Merv Griffin Show',
      response: {
        Title: 'The Merv Griffin Show',
        Year: '1962–1986',
        Rated: 'N/A',
        Released: '01 Oct 1962',
        Runtime: '60 min',
        Genre: 'Comedy, Family, Music',
        Director: 'N/A',
        Writer: 'N/A',
        Actors: 'Merv Griffin',
        Plot:
          'Merv Griffin invites a series of actors, actresses, writers, and directors to discuss the progressive work they have done and current culture, arts, and entertainment surrounding the numerous projects.',
        Language: 'English',
        Country: 'USA',
        Awards:
          'Nominated for 1 Golden Globe. Another 11 wins & 19 nominations.',
        Poster:
          'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2NjcyMjI5N15BMl5BanBnXkFtZTcwODgyNjMzMQ@@._V1_SX300.jpg',
        Ratings: [{ Source: 'Internet Movie Database', Value: '6.7/10' }],
        Metascore: 'N/A',
        imdbRating: '6.7',
        imdbVotes: '302',
        imdbID: 'tt0055691',
        Type: 'series',
        totalSeasons: '18',
        Response: 'True',
      },
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });
  it('keyin to search list', done => {
    const initialState = {
      searchStatus: defaultState,
    };
    const wrappered = mount(
      <Root initialState={initialState}>
        <App />
      </Root>
    );

    wrappered.find('input').simulate('change', {
      target: { value: 'marvel' },
    });

    setTimeout(() => {
      wrappered.update();
      moxios.wait(() => {
        expect(wrappered).toMatchSnapshot();
        done();
        wrappered.unmount();
      });
    }, 1000);
  });

  it('click movie to show detail', done => {
    moxios.install();
    moxios.stubRequest(`${baseApi}&s=marvel&page=1`, {
      status: 200,
      response: {
        Search: [
          {
            Title: 'Marvel One-Shot: Item 47',
            Year: '2012',
            imdbID: 'tt2247732',
            Type: 'movie',
            Poster:
              'https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODcyN15BMl5BanBnXkFtZTcwNTE3OTIxOA@@._V1_SX300.jpg',
          },
        ],
        totalResults: '143',
        Response: 'True',
      },
    });
    const initialState = {
      searchStatus: {
        keyword: 'marvel',
        currentPage: '1',
        totalPages: '1',
        currentId: null,
        currentMovieDetail: null,
        currentMovieList: [
          {
            imdbID: 'tt2247732',
            Title: 'Marvel',
            Year: '2016',
          },
        ],
      },
    };
    const wrappered = mount(
      <Root initialState={initialState}>
        <App />
      </Root>
    );
    expect(wrappered).toMatchSnapshot();

    wrappered
      .find('.movieList')
      .find('li')
      .simulate('click', 'tt2247732');

    moxios.wait(() => {
      wrappered.update();
      expect(wrappered).toMatchSnapshot();
      done();
      wrappered.unmount();
    });
  });
});
