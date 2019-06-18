import React from 'react';
import { connect } from 'react-redux';
import CardComponent from './CardComponent';

const MovieList = ({ movieCards }) => {
  return (
    <div className="card-columns m-5">
      {
        movieCards.map((mc,i) => (
          <CardComponent { ...mc } key={i} />
        ))
      }
    </div>
  );

};

export default MovieList;

