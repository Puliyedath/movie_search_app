import movies from '../src/reducers/movie_reducers';
import pages from '../src/reducers/page_reducers';
import uiReducers from '../src/reducers/ui_reducers';

describe('movie reducers', () => {
  it('should return the intial state', () => {
    expect(movies(undefined, {})).toEqual([]);
  });

  it('should handle action FETCH_MOVIES_END', () => {
    expect(movies([], {
      type: 'FETCH_MOVIES_END',
      movies: [{id: 123, title: 'test'}]
    })).toEqual(
      { 123: {id: 123, title: 'test' }}
    );
  });
});


describe('page reducers', () => {
  it('should return the intial state', () => {
    expect(pages(undefined, {})).toEqual({});
  });

  it('should handle UPDATE_PAGE_DETAILS action', () => {

    expect(pages({}, {
      type: 'UPDATE_PAGE_DETAILS',
      totalPages: 3,
      page: 1,
    })).toEqual(
      {totalPages: 3, page: 1}
    );

  });

});


describe('ui reducers', () => {
  it('should return the intial state', () => {
    expect(uiReducers(undefined, {})).toEqual({ loading: false, query: '' });
  });

  it('should handle FETCH_MOVIES_START action', () => {

    expect(uiReducers({loading: false, query: ''}, {
      type: 'FETCH_MOVIES_START',
      loading: true,
      query: ''
    })).toEqual({loading: true, query: ''});

  });
})
