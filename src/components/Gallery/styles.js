import styled from 'styled-components';
import { COLORS } from '../constants';

export const BackToHome = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  button {
    color: ${COLORS.WHITE};
    background-color: ${COLORS.BLACK};
  }
`;

const Image = styled.img`
  min-width: 200px;
  max-width: ${({ maxWidth }) => `${maxWidth}px` || '600px'};
  width: 100%;
  height: 300px;
  margin: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;

export { Image as default };
