// src/actions/newsActions.js
import newsService from '../services/newsService';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';

export const fetchNews = (keyword, startDate, endDate) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_NEWS_REQUEST });
    try {
      const response = await newsService.get(`/everything?q=${keyword}&from=${startDate}&to=${endDate}&sortBy=publishedAt`);
      dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data.articles });
    } catch (error) {
      dispatch({ type: FETCH_NEWS_FAILURE, payload: error.message });
    }
  };
};