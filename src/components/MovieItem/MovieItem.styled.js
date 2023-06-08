import styled from 'styled-components';

export const MovieItemStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;

  max-width: 100%;
  width: 260px;
  height: 100%;

  border: none;
  transform: scale(1);
  border-radius: 8px;

  background-color: transparent;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }

  img {
    display: block;
    min-height: 100%;
    height: 420px;
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: transform 250ms linear;
    transform: scale(1);

    object-fit: cover;
    object-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const MoviePoster = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h2`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 8px;
  padding-right: 8px;
  max-width: 100%;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  color: '#356859';
  text-align: center;

  font-size: 12px;
  font-weight: 700;
`;

export const ReleaseDate = styled.p`
  position: absolute;
  top: 10px;
  left: 10px;

  padding-left: 8px;
  padding-right: 8px;

  background-color: #fff;
  color: rgba(255, 66, 8, 1);

  border-radius: 8px;
  font-size: 10px;
`;

export const Stars = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0;
  padding-bottom: 0;
  width: 50%;
  height: 22px;
  border-radius: 8px;
  background-color: transparent;
  backdrop-filter: blur(7.5px);
`;
