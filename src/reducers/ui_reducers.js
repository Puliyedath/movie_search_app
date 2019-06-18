const uiReducers = (state = {loading: false, query: ''}, action) => {
  switch(action.type) {
  case 'FETCH_MOVIES_START':
    const { loading, query } = action;
    
    return {loading, query,};
  case 'FETCH_MOVIES_END':
    return { loading: action.loading, query: state.query};
  default:
    return {loading: false, query: state.query};
    
  }
}

export default uiReducers;
