import React from 'react';
import PropTypes from 'prop-types';
import SearchField from 'react-search-field';

const MovieSearchComponent = ({ placeholder, onSubmit }) => (
  <div className="form-group has-search m-5" >
    <SearchField classNames="w-100"
                 placeholder="Search for Movies"
                 onSearchClick={(value, event) => onSubmit(value, event) } 
                 onEnter={(value, event) => onSubmit(value, event) } />
  </div>
);

MovieSearchComponent.propTypes = {
  placeholder: PropTypes.string,
  onSubmit: PropTypes.func
}

MovieSearchComponent.defaultProps = {
  placeholder: "Search for Movies",
  onSubmit: () => { console.log('noop')}
}

export default MovieSearchComponent
