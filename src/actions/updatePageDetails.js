function updatePageDetails(pageData) {
  return {
    type: 'UPDATE_PAGE_DETAILS',
    ...pageData,
  }
}

export default updatePageDetails;
