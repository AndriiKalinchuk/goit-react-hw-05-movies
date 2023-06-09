import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from 'service/movies-service';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const data = await getTrendingMovies();
      setMovies(data.results);
    };
    getTrending();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
