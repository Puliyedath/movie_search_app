import { connect } from 'react-redux';
import MovieList from '../MovieList';

const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w185/';
const mapStateToProps = ({movies}) => {
  const movieCards = Object.keys(movies).map(k => {
    const movie = movies[k];
    return {
      src: POSTER_BASE_URL + (movies[k].poster_path || movies[k].background_path),
      desc: movies[k].overview,
      title: movies[k].original_title,
      alt: movies[k].original_title,
      releaseDate : movies[k].release_date,
      voteCount: movies[k].vote_count,
    }
  })
  return { movieCards };
}

export default connect(
  mapStateToProps,
  null
)(MovieList);
