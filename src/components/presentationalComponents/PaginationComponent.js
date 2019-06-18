import React from 'react';
import PropTypes from 'prop-types';

const PaginationComponent = (props) => {
  const { next , prev, isNextDisabled, isPrevDisabled } = props;
  return (
    <div className="clearfix m-5">
      <nav aria-label="Page navigation">
        <ul className="pagination float-right">
          <li className={isPrevDisabled ? 'page-item disabled': 'page-item text-primary'}>
            <a className="page-link"  onClick={prev} aria-label="Previous">
              <span aria-hidden="true" >&laquo;</span>
              <span className="sr-only" >Previous</span>
            </a>
          </li>
          <li className={isNextDisabled ? 'page-item disabled': 'page-item text-primary'}>
            <a className="page-link"  onClick={next} aria-label="Next">
              <span aria-hidden="true" >&raquo;</span>
              <span className="sr-only" >Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PaginationComponent;


PaginationComponent.propTypes = {
  next: PropTypes.func,
  prev: PropTypes.func,
  isNextDisabled: PropTypes.bool,
  isPrevDisabled: PropTypes.bool,
}

PaginationComponent.defaultProps = {
  next: (movieName, page) => { console.log('noop');},
  prev: (movieName, page) => { console.log('noop');},
  isNextDisabled: false,
  isPrevDisabled: false,
}
