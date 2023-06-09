import { useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import {
  SearchFormButton,
  SearchFormInput,
  SearchForm,
  SerchFormWrapper,
} from './Movies.styled';
import { getMoviesByQuery } from 'service/movies-service';
import { Link } from 'react-router-dom';

export default function Movies({ onSubmit }) {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query.trim()) {
      return alert('Enter text');
    }
    onSubmit(query);
    setQuery('');
  };

  useEffect(() => {
    const getMovies = async () => {
      const data = await getMoviesByQuery(query);
      setMovies(data.results);
    };
    getMovies();
  }, [query]);

  return (
    <>
      <SerchFormWrapper>
        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <FiSearch size="16px" />
          </SearchFormButton>
          <SearchFormInput
            placeholder="What movie do you want to find?"
            name="search"
            // required
            autoFocus
            value={query}
            onChange={handleChange}
          />
        </SearchForm>
      </SerchFormWrapper>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
