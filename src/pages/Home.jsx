import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendingMovies } from 'service/movies-service';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getTrending = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
    getTrending();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MovieList movies={movies} location={location} />
    </>
  );
}
