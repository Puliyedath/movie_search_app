import { connect } from 'react-redux';
import MovieSearchComponent from '../MovieSearchComponent';
import { fetchMovies} from '../../actions/fetchMovies';


const mapStateToProps = state => {
  return {
    query: state.query || ''
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (value, event) => {
      if (value) {
        dispatch(fetchMovies(value));
      }
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieSearchComponent);
