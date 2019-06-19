/*
* Test fetchMovies async action
*/
import 'isomorphic-fetch';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import { fetchMovies } from '../src/actions/fetchMovies';

const API_KEY = 'fcd8cb610d5292b3ddc058cb2f7dda6c';
const MOVIE_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false`;

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchMovies async action', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('creates fetch_movies_end after fetch movies ', () => {
    fetchMock.mock(MOVIE_API + '&page=1&query=terminator', {
      body: {
        page: 1,
        total_pages: 3,
        results: [{
          adult: false,
          id: 100,
          release_date: '2015-06-23',
          title: 'Terminator',
          vote_count: 3000,
          vote_average: 3.4
        }]
      },
    });

    const expectedActions = [
      { type: 'FETCH_MOVIES_START', loading: true, query: 'terminator' },
      {
        type: 'FETCH_MOVIES_END',
        loading: false,
        movies: [{
          adult: false,
          id: 100,
          release_date: '2015-06-23',
          title: 'Terminator',
          vote_count: 3000,
          vote_average: 3.4
        }]
      },
      { type: 'UPDATE_PAGE_DETAILS', totalPages: 3, page: 1}
    ];

    const store = mockStore({ movies: {}, pages: {}, ui: {} });

    return store.dispatch(
      fetchMovies('terminator', 1)
    ).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
