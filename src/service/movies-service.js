import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `5ec9110f1e3ce6da4f9f57896bcac8c1`,
  include_adult: false,
};

export const getTrendingMovies = async (page = 1) => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: {
      page,
    },
  });
  return data;
};

export const getMoviesByQuery = async (query = '') => {
  const { data } = await axios.get(`/search/movie?query=${query}`);
  return data;
};

export const getMoviesDetailsById = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      id: movieId,
    },
  });
  return data;
};

export const getMoviesCast = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      id: movieId,
    },
  });
  return data.cast;
};

export const getMoviesReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      id: movieId,
    },
  });
  return data.results;
};
