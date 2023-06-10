import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'service/movies-service';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  const handleSearch = async search => {
    setSearchParams({ query: search });
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query) {
        return;
      }
      try {
        const data = await getMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      <MovieList movies={movies} location={location} />
    </>
  );
};

export default Movies;
