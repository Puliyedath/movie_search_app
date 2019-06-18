import React from 'react';
import PropTypes from 'prop-types';

const PaginationComponent = (props) => {
  const { next , prev } = props;
  return (
    <div className="clearfix m-5">
      <ul className="pagination float-right">
        <li className="page-item" >
          <a className="page-link"  onClick={prev} aria-label="Previous">
            <span aria-hidden="true" >&laquo;</span>
            <span className="sr-only" >Previous</span>
          </a>
        </li>
        <li className="page-item" >
          <a className="page-link"  onClick={next} aria-label="Next">
            <span aria-hidden="true" >&raquo;</span>
            <span className="sr-only" >Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default PaginationComponent;


PaginationComponent.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func
}

PaginationComponent.defaultProps = {
  next: (movieName, page) => { console.log('noop');},
  prev: (movieName, page) => { console.log('noop');},
}
