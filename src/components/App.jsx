import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPages/NotFoundPage';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from './MovieDetails/MovieDetails';
import { SharedLayout } from './Layout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId/*" element={<MovieDetails />}>
          {/* <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} /> */}
        </Route>
      </Route>
    </Routes>
  );
};
