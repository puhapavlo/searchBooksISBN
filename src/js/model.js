module.exports = {
  async responseSearch(valueSearch, keyAPI) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=isbn:${valueSearch}&key=${keyAPI}`
    )
    const responseJson = await response.json();
    return responseJson;
  },
};
