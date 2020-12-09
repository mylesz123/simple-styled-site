import React from 'react';
// import PropTypes from 'prop-types';
import { Link as SmoothLink } from 'react-scroll';
import COUNTING_STARS from '../../assets/images/undraw_counting_stars.svg';
import { SECTION_PATHS } from '../../data/navbar';
import { StackLayout, Grid, Button, Center } from '../primitives';
import DiscoverSection, {
  ImageWrapper,
  Image,
  Heading,
  Text,
  Title,
} from './styles';

const Discover = () => (
  <DiscoverSection id={SECTION_PATHS.DISCOVER}>
    <Center totallyCentered fillAvailableSpace>
      <Grid fillAvailableSpace minColumnWidth={300} gap={3}>
        <ImageWrapper>
          <Image src={COUNTING_STARS} />
        </ImageWrapper>
        <StackLayout className="stack" as="aside">
          <Title>just explore</Title>
          <Heading>discover</Heading>
          <Text>
            This will be something big one day, but for now it's
            small. So treat with love and continue to nourish.
          </Text>

          <Button>
            <SmoothLink
              to={SECTION_PATHS.BANNER}
              smooth
              spy
              offset={-80}
            >
              Learn More
            </SmoothLink>
          </Button>
        </StackLayout>
      </Grid>
    </Center>
  </DiscoverSection>
);

// Discover.propTypes = {};

export default Discover;
