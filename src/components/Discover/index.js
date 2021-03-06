import React from 'react';
// import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import COUNTING_STARS from '../../assets/images/undraw_counting_stars.svg';
import { SECTION_PATHS, ROUTES } from '../../data/navbar';
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
      <Grid fillAvailableSpace minColumnWidth={300} gap={0}>
        <ImageWrapper>
          <Image src={COUNTING_STARS} />
        </ImageWrapper>
        <StackLayout className="stack" as="aside">
          <Title>check out out work</Title>
          <Heading>discover</Heading>
          <Text>
            This will be something big one day, but for now it's
            small. So treat with love and continue to nourish.
          </Text>

          <Button>
            <RouterLink to={ROUTES.GALLERY}>Explore</RouterLink>
          </Button>
        </StackLayout>
      </Grid>
    </Center>
  </DiscoverSection>
);

// Discover.propTypes = {};

export default Discover;
