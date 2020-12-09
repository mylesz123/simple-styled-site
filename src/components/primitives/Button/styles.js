import styled from 'styled-components';
import { COLORS } from '../../constants';

const ButtonWrapper = styled.button`
  width: fit-content;
  outline: none;
  border: none;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 50px;
  background: ${({ primary }) =>
    primary ? COLORS.RED : COLORS.WHITE};
  padding: 10px 22px;
  color: ${({ primary }) => (primary ? COLORS.BLACK : COLORS.RED)};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? COLORS.WHITE : COLORS.BLACK};
    color: ${({ primary }) => (primary ? COLORS.RED : COLORS.WHITE)};
  }
`;

export { ButtonWrapper as default };
