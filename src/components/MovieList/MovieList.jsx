import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from 'components/MovieItem/MovieItem';

const MovieList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} location={location} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieList;
