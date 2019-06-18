import React from 'react';
import { connect } from 'react-redux';
import MovieList from '../presentationalComponents/MovieList';
import withLoadingIcon from '../presentationalComponents/Loading';
import withEmptyComponent from '../presentationalComponents/EmptyComponent';

const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w185/';
const mapStateToProps = ({movies, ui}) => {
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
  return { movieCards, ui, };
}

export default connect(
  mapStateToProps,
  null
)(withLoadingIcon(withEmptyComponent(MovieList)));
