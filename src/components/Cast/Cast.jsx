import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMoviesCast } from 'service/movies-service';
import {
  ActorsCharacter,
  ActorsName,
  CastItem,
  CastList,
  CastPhoto,
  Wrap,
} from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMoviesCast(movieId);
      setCastList(data);
    };

    fetchData();
  }, [movieId]);

  if (!castList) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {castList.length > 0 && (
        <CastList>
          {castList.map(actor => (
            <CastItem key={actor.id}>
              <CastPhoto
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : 'https://www.technocrazed.com/wp-content/uploads/2013/06/Discover_how_cinema_posters_similar_back-443x1024.jpg'
                }
                alt={actor.name}
                width="120"
              />

              <Wrap>
                <ActorsName>{actor.name}</ActorsName>
                {actor.character && (
                  <ActorsCharacter>{actor.character}</ActorsCharacter>
                )}
              </Wrap>
            </CastItem>
          ))}
        </CastList>
      )}
    </>
  );
};

export default Cast;
