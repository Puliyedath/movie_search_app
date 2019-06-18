import React from 'react';
import IMDBSearchComponent from './containerComponents/IMDBSearchComponent';
import PaginationComponent from './containerComponents/IMDBMoviePagination';

const MainComponent = (props) => {
  return (
    <div>
      <div className="container-fluid" >
        <IMDBSearchComponent />
        <PaginationComponent />

        <div className="card-columns m-5">
          {
            [1,2,3,4,5,6].map(i => (
              <div className="card" key={i}>
                <img className="card-img-top"
                     src="https://via.placeholder.com/50.png"  alt="Card image cap" />
                <div className="card-body" >
                  <h5 className="card-title" >Card title 1</h5>
                  <p className="card-text" >
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                  <a href="#"  className="btn btn-primary" >Go somewhere</a>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
export default MainComponent
