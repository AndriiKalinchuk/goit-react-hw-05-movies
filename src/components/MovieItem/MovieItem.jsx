import {
  MovieItemStyle,
  MoviePoster,
  MovieTitle,
  ReleaseDate,
} from './MovieItem.styled';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import NoImage from '/src/assets/no-image';

export default function MovieItem({
  movie: { id, poster_path, original_title, title, release_date },
  state,
}) {
  return (
    <MovieItemStyle>
      <Link to={`/movies/${id}`} state={state}>
        <MoviePoster>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : `https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3APoster_not_available.jpg&psig=AOvVaw3mUwBO4lOBKWX5_NORL1Q7&ust=1686322112988000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNjT98b1s_8CFQAAAAAdAAAAABAE`
            }
            alt={original_title}
            width="200"
          />
        </MoviePoster>
        <MovieTitle>{title}</MovieTitle>
        {release_date && <ReleaseDate>{parseInt(release_date)}</ReleaseDate>}
      </Link>
    </MovieItemStyle>
  );
}

MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    id: PropTypes.number.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
  }).isRequired,
  state: PropTypes.objectOf(PropTypes.object).isRequired,
};
