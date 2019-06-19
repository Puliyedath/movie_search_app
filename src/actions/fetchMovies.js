import 'cross-fetch';
import updatePageDetails from './updatePageDetails';

const API_KEY = 'fcd8cb610d5292b3ddc058cb2f7dda6c';
const MOVIE_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false`;

function searchMovies(movieName) {
  return {
    type: 'FETCH_MOVIES_START',
    loading: true,
    query: movieName,
  }
}

function receiveMovies(json) {
  return {
    type: 'FETCH_MOVIES_END',
    loading: false,
    movies: json,
  }
}

export function fetchMovies(movieName, page=1) {
  return function(dispatch) {
    dispatch(searchMovies(movieName));
    return fetch(MOVIE_API + '&page=' + page + '&query=' + movieName)
      .then(resp => resp.json())
      .then(json => {
        dispatch(receiveMovies(json.results));
        return json;
      }).then(json => {
        dispatch(updatePageDetails({page: json.page, totalPages: json.total_pages}));
        return json;
      })
      .catch(err => console.log(err));
  }
}
