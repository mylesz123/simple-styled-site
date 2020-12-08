import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { Link as SmoothLink } from 'react-scroll';
import Video from '../../assets/videos/video.mp4';
import { LINKS } from '../../data/navbar';

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
    <BannerSection id={LINKS.path}>
      <VideoWrapper>
        <VideoBg autoPlay loop muted type="video/mp4" src={Video} />
      </VideoWrapper>
      <Center className="content" totallyCentered>
        <StackLayout gap={3}>
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
            <SmoothLink to="/">
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
