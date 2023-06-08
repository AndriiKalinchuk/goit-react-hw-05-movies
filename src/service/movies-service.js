import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: `5ec9110f1e3ce6da4f9f57896bcac8c1`,
  include_adult: false,
};

export const getTrendingMovies = async (page = 1, lng) => {
  const { data } = await axios.get(`/trending/movie/day`, {
    params: {
      page,
      language: lng,
    },
  });
  return data;
};

export const getMoviesByQuery = async (page = 1, query = '', lng) => {
  const urlParam = query
    ? `/search/movie?page=${page}&query=${query}&language=${lng}`
    : `/movie/upcoming?page=${page}&language=${lng}`;
  const { data } = await axios.get(urlParam);
  return data;
};

export const getMoviesDetailsById = async (movieId, lng) => {
  const { data } = await axios.get(`movie/${movieId}`, {
    params: {
      id: movieId,
      language: lng,
    },
  });
  return data;
};

export const getMoviesCast = async (movieId, lng) => {
  const { data } = await axios.get(`movie/${movieId}/credits`, {
    params: {
      id: movieId,
      language: lng,
    },
  });
  return data.cast;
};

export const getMoviesReviews = async (movieId, lng) => {
  const { data } = await axios.get(`movie/${movieId}/reviews`, {
    params: {
      id: movieId,
      language: lng,
    },
  });
  return data.results;
};
