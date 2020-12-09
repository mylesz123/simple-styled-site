import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Link as SmoothLink } from 'react-scroll';
import Video from '../../assets/videos/video.mp4';
import { SECTION_PATHS } from '../../data/navbar';

import { Button, StackLayout, Center } from '../primitives';

import BannerSection, {
  ButtonIcon,
  LongButtonIcon,
  VideoWrapper,
  VideoBg,
  Heading,
  Text,
} from './styles';

const Banner = () => {
  const [hover, setHover] = useState(false);
  const toggleHoverEffect = () => setHover(!hover);
  return (
    <BannerSection id={SECTION_PATHS.BANNER}>
      <VideoWrapper>
        <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
      </VideoWrapper>
      <Center className="content" totallyCentered>
        <StackLayout className="stack">
          <Heading>something</Heading>
          <Text>
            This will be something big one day, but for now it's
            small. So treat with love and continue to nourish.
          </Text>

          <Button
            primary
            onMouseEnter={toggleHoverEffect}
            onMouseLeave={toggleHoverEffect}
          >
            <SmoothLink
              to={SECTION_PATHS.ABOUT}
              smooth
              spy
              offset={-80}
            >
              Learn More {hover ? <LongButtonIcon /> : <ButtonIcon />}
            </SmoothLink>
          </Button>
        </StackLayout>
      </Center>
    </BannerSection>
  );
};

// Banner.propTypes = {};

export default Banner;
