import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie, location }) => {
  return (
    <li key={movie.id}>
      <Link to={`/movies/${movie.id}`} state={{ from: location }}>
        {movie.title}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default MovieItem;
