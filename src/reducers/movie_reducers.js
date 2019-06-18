const movies = (state = [], action) => {
  switch(action.type) {
  case 'FETCH_MOVIES_END':
    const movie_dict = {}
    return action.movies.reduce((acc, m) => {
      acc[m.id] = m;
      return acc;
    }, {});
  default:
    return state
    
  }
}

export default movies;
