import { FETCH_NEWS_REQUEST, FETCH_NEWS_SUCCESS, FETCH_NEWS_FAILURE } from '../actions/newsActions';

const initialState = {
  news: [],
  error: null,
  loading: false, // Add loading state
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_NEWS_SUCCESS:
      return { ...state, news: action.payload, loading: false, error: null };
    case FETCH_NEWS_FAILURE:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default newsReducer;