import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../constants';

const ServicesSection = styled.section`
  display: flex;
`;

export const Heading = styled.h1`
  font-size: 5rem;
  color: ${COLORS.RED};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    text-align: center;
    font-size: 4rem;
  }
`;

export const Card = styled.aside`
  margin: 1em;
  padding: 1em;
  background: ${COLORS.LIGHT_BG};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 300px;
  box-shadow: 0 1px 3px ${COLORS.DARK_KNIGHT};
  transition: 0.2s all ease-in-out;

  * {
    padding: 20px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardHeading = styled.h2`
  text-align: center;
  font-size: 3rem;
`;

export const Description = styled.p`
  text-align: center;
  font-size: 2rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export { ServicesSection as default };
