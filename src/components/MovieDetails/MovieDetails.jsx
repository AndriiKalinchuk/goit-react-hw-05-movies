import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

import {
  BackdropContainer,
  BackdropPoster,
  Genre,
  Genres,
  GradientBlockBottom,
  GradientBlockTop,
  MainTitle,
  NavLink,
  WrapperDetails,
  WrapperMovie,
} from './MovieDetails.styled';

import { getMoviesDetailsById } from 'service/movies-service';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);

  const location = useLocation();
  //   const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const { movieId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setError(false);
        const data = await getMoviesDetailsById(movieId);

        setMovieDetails(data.results);
      } catch (error) {
        alert(error.message);
      }
    })();
  }, [movieId]);

  if (!movieId) {
    return;
  }

  const { poster_path, original_title, title, release_date, genres, overview } =
    movieDetails;

  return (
    <>
      {!error && (
        <>
          {/* фонове зображення */}
          {poster_path && (
            <>
              <BackdropContainer>
                <GradientBlockTop></GradientBlockTop>
                {`https://image.tmdb.org/t/p/original${poster_path}` && (
                  <BackdropPoster>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/original${poster_path}`
                          : 'https://www.technocrazed.com/wp-content/uploads/2013/06/Discover_how_cinema_posters_similar_back-443x1024.jpg'
                      }
                      alt={title || original_title}
                      width="1200"
                    />
                  </BackdropPoster>
                )}
                <GradientBlockBottom></GradientBlockBottom>
              </BackdropContainer>
            </>
          )}
          <WrapperMovie>
            <WrapperDetails>
              {/* назва фільму */}
              <MainTitle>
                {title || original_title}
                {release_date && <span> ({parseInt(release_date)})</span>}
              </MainTitle>

              {/* жанри фільму */}
              {genres && (
                <Genres>
                  {genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}
                </Genres>
              )}

              {/* огляд фільму */}
              {overview && (
                <>
                  <h2>{'moviesPage.overview'}</h2>
                  <p>{overview}</p>
                </>
              )}
            </WrapperDetails>
          </WrapperMovie>
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <nav>
            <NavLink to="cast" state={location.state}>
              {'cast'}
            </NavLink>
            <NavLink to="reviews" state={location.state}>
              {'reviews'}
            </NavLink>
          </nav>
          <Suspense fallback={<div> {'loading'}</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
};

export default MovieDetails;
