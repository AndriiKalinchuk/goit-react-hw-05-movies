import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
`;
export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
`;

export const ReviewsAuthor = styled.p`
  color: darkblue;
  font-weight: 700;
`;
export const ReviewContent = styled.p`
  font-weight: 400;
`;
