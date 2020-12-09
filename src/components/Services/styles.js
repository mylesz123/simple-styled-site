import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../constants';

const ServicesSection = styled.section`
  min-height: 800px;
  display: flex;

  .stack {
    height: 100%;
    align-content: center;
  }
`;

export const Heading = styled.h1`
  font-size: 4.5rem;
  color: ${COLORS.RED};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    text-align: center;
    font-size: 3rem;
  }
`;

export const Card = styled.aside`
  margin: 1em;
  background: ${COLORS.LIGHT_BG};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 300px;
  box-shadow: 0 1px 2px ${COLORS.DARK_KNIGHT};
  transition: 0.2s all ease-in-out;

  * {
    padding: 5px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardHeading = styled.h2`
  text-align: center;
  font-size: 2rem;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 1rem;
`;

export const Image = styled.img`
  width: 100%;
  align-self: center;
  max-width: 170px;
  height: 170px;
`;

export { ServicesSection as default };
