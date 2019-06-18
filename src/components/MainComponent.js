import React from 'react';
import IMDBSearchComponent from './containerComponents/IMDBSearchComponent';
import IMDBPaginationComponent from './containerComponents/IMDBMoviePagination';
import IMDBMovieList from './containerComponents/IMDBMovieList';

const MainComponent = (props) => {
  return (
    <div>
      <div className="container-fluid" >
        <IMDBSearchComponent />
        <IMDBPaginationComponent />
        <IMDBMovieList />
      </div>
    </div>
  );
};
export default MainComponent
