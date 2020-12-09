import React from 'react';
// import PropTypes from 'prop-types';
import { SECTION_PATHS } from '../../data/navbar';
import { SERVICE_CARDS } from '../../data/services';
import {
  FlexLayout,
  Grid,
  Box,
  Center,
  StackLayout,
} from '../primitives';
import ServiceSection, {
  Card,
  CardHeading,
  Description,
  Image,
  Heading,
} from './styles';

const Services = () => (
  <ServiceSection id={SECTION_PATHS.SERVICES}>
    <StackLayout fillAvailableSpace>
      <Box size="large">
        <Heading>Provided Services</Heading>
      </Box>
      <FlexLayout justifyContent="space-evenly">
        {SERVICE_CARDS.map((card) => (
          <Card>
            <Image src={card.img} />
            <CardHeading>{card.title}</CardHeading>
            <Description>{card.description}</Description>
          </Card>
        ))}
      </FlexLayout>
    </StackLayout>
  </ServiceSection>
);

// Services.propTypes = {};

export default Services;
