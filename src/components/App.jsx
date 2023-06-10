import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPages/NotFoundPage';
import { SharedLayout } from './Layout/SharedLayout';
import Cast from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
