const pages = (state = {}, action) => {
  switch(action.type) {

  case 'UPDATE_PAGE_DETAILS':
    const { totalPages = 1, page } = action;
    return { totalPages, page, };

  default:
    return state;
  }

};

export default pages;
