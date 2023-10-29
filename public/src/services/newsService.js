// src/services/newsService.js
import axios from 'axios';

const API_KEY = 'f4f737485ff54d23800faadbe7cd85ad';
const baseURL = 'https://newsapi.org/v2';

const newsService = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default newsService;
