import styled from 'styled-components';
import { COLORS, BREAKPOINTS } from '../constants';

const DiscoverSection = styled.section`
  display: flex;
  background: ${COLORS.RED};
  padding: 0 30px;
  height: 800px;

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    height: 100vh;
  }

  .stack {
    @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
      justify-self: flex-start;
      align-items: flex-start;
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
  color: ${COLORS.BLACK};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    text-align: center;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  color: ${COLORS.BLACK};

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
    text-align: start;
  }
  @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
    text-align: center;
  }
`;

export const ImageWrapper = styled.aside`
  max-width: 450px;
  height: 100%;
`;

export const Image = styled.img`
  width: 90%;
  padding: 1em;
`;

export { DiscoverSection as default };
