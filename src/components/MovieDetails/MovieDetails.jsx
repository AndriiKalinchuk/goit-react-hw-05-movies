import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getMoviesDetailsById } from 'service/movies-service';
import {
  MovieWrapper,
  StyledLink,
  Poster,
  DetailWrapper,
  WrapperDetails,
  MainTitle,
  Genres,
  Genre,
  Refs,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const data = await getMoviesDetailsById(movieId);
        setMovieDetails(data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
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
    <MovieWrapper>
      <StyledLink to={location.state?.from ?? '/movies'}>Go back</StyledLink>
      <DetailWrapper>
        <Poster
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : 'https://www.technocrazed.com/wp-content/uploads/2013/06/Discover_how_cinema_posters_similar_back-443x1024.jpg'
          }
          alt={title || original_title}
        />
        <WrapperDetails>
          <MainTitle>
            {title || original_title}
            {release_date && <span> ({parseInt(release_date)})</span>}
          </MainTitle>

          {vote_average && (
            <>
              <p>User Score:{vote_average}</p>
            </>
          )}

          {overview && (
            <>
              <h3>Overview</h3>
              <p>{overview}</p>
            </>
          )}

          {genres && (
            <Genres>
              <h3>Genres:</h3>
              {genres.map((genre, index) => (
                <Genre key={index}>{genre.name}</Genre>
              ))}
            </Genres>
          )}
        </WrapperDetails>
      </DetailWrapper>
      <h3>Additional Information</h3>
      <Refs>
        <li>
          <StyledLink to={`cast`}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={`reviews`}>Reviews</StyledLink>
        </li>
      </Refs>

      <Outlet />
    </MovieWrapper>
  );
};

export default MovieDetails;
