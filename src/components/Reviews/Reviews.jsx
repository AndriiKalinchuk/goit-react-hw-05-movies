import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { getMoviesReviews } from 'service/movies-service';

import {
  ReviewContent,
  ReviewItem,
  ReviewsAuthor,
  ReviewsList,
} from './Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const data = await getMoviesReviews(movieId);
      setMovieReviews(data);
    };

    fetchReviews();
  }, [movieId]);

  if (!movieReviews) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {movieReviews.length > 0 ? (
        <ReviewsList>
          {movieReviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewsAuthor>Author: {review.author}</ReviewsAuthor>
              <ReviewContent>{review.content}</ReviewContent>
            </ReviewItem>
          ))}
        </ReviewsList>
      ) : (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
