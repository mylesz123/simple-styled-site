import styled from 'styled-components';
import { Link as SmoothLink } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { COLORS } from '../../constants';

const OverlayWrapper = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: ${COLORS.BLACK};
  left: 0;
  transition: all 0.2s ease-in;

  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

  .center {
    min-height: -webkit-fill-available;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: ${COLORS.WHITE};

  &:hover {
    color: ${COLORS.RED};
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const Link = styled(SmoothLink)`
  font-size: 1.5rem;
  color: ${COLORS.WHITE};
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  &.active {
    transition: all 0.2s ease-in-out;
    color: ${COLORS.RED};
  }
`;

export { OverlayWrapper as default };
