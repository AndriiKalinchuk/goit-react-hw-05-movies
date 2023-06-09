import styled from 'styled-components';
import { NavLink as MovieLink } from 'react-router-dom';

export const NavLink = styled(MovieLink)`
  position: relative;
  z-index: 9;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  text-shadow: 0 0.4px 0.4px #fff, inset 40px 40px 40px #fff;
  font-size: 12px;
  font-weight: 500;

  &.active {
    color: #fff;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5523;
  }

  @media screen and (min-width: 480px) {
    font-size: 14px;
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`;

export const WrapperDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  padding: 16px;
  font-weight: 500;
`;

export const MainTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  color: lightblue;
  font-size: 14;
  font-weight: 500;
  letter-spacing: 1.5px;
`;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Genre = styled.li`
  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  color: rgb(0, 0, 0);
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
  padding: 6px;
`;
