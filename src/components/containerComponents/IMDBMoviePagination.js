import { connect } from 'react-redux';
import PaginationComponent from '../PaginationComponent';
import { fetchMovies} from '../../actions/fetchMovies';

const mapStateToProps = (state) => {
  const { page, totalPages } = state.pages;
  const { query = '' } = state.ui;
  return {
    page,
    totalPages,
    query,
  }
}

const mapDispatchToProps = null;


const mergeProps = ({ page, totalPages, query }, {dispatch}) => {
  return {
    next: () => {
      if (page < totalPages) {
        console.log(page, totalPages, query);
        dispatch(fetchMovies(query, page + 1));
      }
    },
    prev: () => {
      if (page > 1) {
        console.log(page, totalPages, query);
        dispatch(fetchMovies(query, page - 1));
      }
    },
    isNextDisabled: !(page < totalPages),
    isPrevDisabled: !(page > 1)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(PaginationComponent);
