import React from 'react';
// import PropTypes from 'prop-types';
import { Link as SmoothLink } from 'react-scroll';
import BLM from '../../assets/images/undraw_black_lives_matter.svg';
import { SECTION_PATHS } from '../../data/navbar';
import { StackLayout, Grid, Button, Center } from '../primitives';
import AboutSection, {
  ImageWrapper,
  Image,
  Heading,
  Text,
  Title,
} from './styles';

const About = () => (
  <AboutSection id={SECTION_PATHS.ABOUT}>
    <Center totallyCentered fillAvailableSpace>
      <Grid fillAvailableSpace minColumnWidth={500} gap={0}>
        <StackLayout className="stack" as="aside">
          <Title>say a thing</Title>
          <Heading>splash</Heading>
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
        <ImageWrapper>
          <Image src={BLM} />
        </ImageWrapper>
      </Grid>
    </Center>
  </AboutSection>
);

// About.propTypes = {};

export default About;
