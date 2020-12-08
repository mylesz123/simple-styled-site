import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';
import { Link as SmoothLink } from 'react-scroll';

import { BREAKPOINTS, COLORS } from '../constants';

const NavWrapper = styled.nav`
  background: ${COLORS.BLACK};
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width: ${BREAKPOINTS.TABLET}) {
    transition: 0.8s all ease;
  }
`;

export const Logo = styled(RouterLink)`
  color: ${COLORS.WHITE};
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
  font-size: 1.5rem;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    color: ${COLORS.WHITE};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: ${COLORS.RED};
    }
  }
`;

export const Menu = styled.div`
  display: flex;

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    display: none;
  }
`;

export const Link = styled(SmoothLink)`
  color: ${COLORS.WHITE};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover,
  &:active {
    transition: all 0.2s ease-in-out;
    color: ${COLORS.RED};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: 16px;
    padding: 10px 22px;
  }

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    display: none;
  }
`;

export { NavWrapper as default };
