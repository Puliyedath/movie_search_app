import { combineReducers } from 'redux';
import movies from './movie_reducers';
import pages from './page_reducers';
import uiReducers from './ui_reducers'


export default combineReducers({
  movies,
  pages,
  ui: uiReducers,
});
