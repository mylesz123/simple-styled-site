import styled from 'styled-components';
import { RiArrowRightSLine, RiArrowRightLine } from 'react-icons/ri';

import { COLORS, BREAKPOINTS } from '../constants';

const BannerSection = styled.section`
  display: flex;
  background: ${COLORS.BLACK};
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  .content {
    position: inherit;
  }

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    justify-content: center;
  }
`;

export const VideoWrapper = styled.div`
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${COLORS.BLACK};
`;

export const Heading = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: ${COLORS.RED};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    font-size: 4rem;
  }

  @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
    font-size: 3rem;
  }
`;

export const Text = styled.p`
  font-size: 1.5rem;
  max-width: 500px;
  color: ${COLORS.WHITE};

  @media screen and (max-width: ${BREAKPOINTS.XLPHONE}) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const ButtonIcon = styled(RiArrowRightSLine)`
  margin: -4px;
`;

export const LongButtonIcon = styled(RiArrowRightLine)`
  margin: -4px;
`;

export { BannerSection as default };
