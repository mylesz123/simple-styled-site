import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../constants';

const AboutSection = styled.section`
  display: flex;
  background: ${COLORS.BLACK};
  padding: 0 30px;
  height: 800px;

  .stack {
    @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
      justify-self: flex-end;
      align-items: flex-end;
      max-width: 350px;
    }
    @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
      justify-self: center;
      align-items: center;
    }
  }
`;

export const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  max-width: 500px;
  color: ${COLORS.RED};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  color: ${COLORS.RED};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    text-align: center;
    font-size: 4rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  max-width: 400px;
  color: ${COLORS.WHITE};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    text-align: end;
  }
  @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
    text-align: center;
  }
`;

export const ImageWrapper = styled.aside`
  max-width: 450px;
  height: 100%;
  grid-column: 2;
  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const Image = styled.img`
  width: 90%;
  padding: 1em;
`;

export { AboutSection as default };
