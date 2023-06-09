import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesDetailsById } from 'service/movies-service';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const data = await getMoviesDetailsById(movieId);
      setMovieDetails(data);
    };
    getDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const {
    poster_path,
    original_title,
    title,
    vote_average,
    release_date,
    genres,
    overview,
  } = movieDetails;

  return (
    <>
      <Link to={location.state?.from ?? '/'}>Go back</Link>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original${poster_path}`
            : 'https://www.technocrazed.com/wp-content/uploads/2013/06/Discover_how_cinema_posters_similar_back-443x1024.jpg'
        }
        alt={title || original_title}
        width="1200"
      />
      <h1>
        {title || original_title}
        {release_date && <span> ({parseInt(release_date)})</span>}
      </h1>

      {vote_average && (
        <>
          <p>User Score:{vote_average}</p>
        </>
      )}

      {overview && (
        <>
          <h2>Overview</h2>
          <p>{overview}</p>
        </>
      )}

      {genres && (
        <>
          <h2>Genres:</h2>
          <ul>
            {genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
          </ul>
        </>
      )}

      <nav>
        <Link to={`${location.pathname}/cast`}>Cast</Link>
        <Link to={`${location.pathname}/reviews`}>Reviews</Link>
      </nav>

      <Outlet />
    </>
  );
};

export default MovieDetails;
