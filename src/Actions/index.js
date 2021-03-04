const fetchQuotesPending = () => ({
  type: "FETCH_QUOTES_PENDING",
});

const fetchQuotesSuccess = (quotes) => ({
  type: "FETCH_QUOTES_SUCCESS",
  quotes,
});

const fetchQuotesFailed = () => ({
  type: "FETCH_QUOTES_FAILED",
});

const changeCategory = (category) => ({
  type: "CHANGE_CATEGORY",
  category,
});

const addFavorite = (id) => ({
  type: "ADD_FAVORITE",
  id,
});

export default { fetchQuotesSuccess, fetchQuotesFailed, fetchQuotesPending };
