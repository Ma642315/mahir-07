// src/api.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
export const fetchUpcomingMovies = (page = 1) =>
  axios.get(`${BASE_URL}/movie/upcoming`, {
    params: { api_key: API_KEY, page },
  });