import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  max-width: 100%;
  width: 180px;
  height: 100%;

  border-radius: 8px;
  border: none;
  outline: none;

  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
`;

export const CastPhoto = styled.img`
  display: block;
  min-height: 100%;
  height: 240px;
  width: 100%;
  border-radius: 8px;
`;

export const Wrap = styled.div`
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  padding: 4px;
`;

export const MovieHero = styled.span`
  color: darkgray;
`;

export const ActorsName = styled.h3`
  margin-bottom: 16px;
  text-align: center;
  color: darkblue;
  font-size: 12px;
  font-weight: 500;
`;

export const ActorsCharacter = styled.p`
  margin-bottom: 16px;
  text-align: center;
  color: darkgrey;
  font-size: 8;
  font-weight: 500;
`;
