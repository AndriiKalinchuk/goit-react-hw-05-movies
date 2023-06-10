import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieWrapper = styled.div`
  margin-top: 20px;
`;

export const StyledLink = styled(Link)`
  margin-left: 16px;
  padding: 8px 16px;
  border: 1px solid;
  background-color: lightskyblue;
  border-radius: 4px;
  text-decoration: none;
  color: darkblue;
  font-size: 16px;
  font-weight: 700;

  &.active {
    color: #fff;
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #fd5523;
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 16px;
  font-weight: 500;
`;

export const Poster = styled.img`
  width: 30%;
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
  margin-bottom: 20px;
  text-align: center;
  color: darkblue;
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

export const Refs = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;
