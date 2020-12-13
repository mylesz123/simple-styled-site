import React from 'react';
// import PropTypes from 'prop-types';

import SimpleReactLightbox, {
  SRLWrapper,
} from 'simple-react-lightbox';

import { Link as RouterLink } from 'react-router-dom';

import { ROUTES } from '../../data/navbar';
import { PHOTO_DATA } from '../../data/gallery';
import { Button, FlexLayout } from '../primitives';

import Image, { BackToHome } from './styles';

// const morePhotos = Array(3).fill(PHOTO_DATA);

// each item generated should have a unique key (the img src), so no duplicate photos.
const Gallery = () => (
  <SimpleReactLightbox>
    <FlexLayout>
      <BackToHome>
        <Button>
          <RouterLink to={ROUTES.HOME}>Back</RouterLink>
        </Button>
      </BackToHome>
      <SRLWrapper>
        {PHOTO_DATA.map(({ alt, src, maxWidth }, index) => (
          <Image key={`${src}${index}`} {...{ maxWidth, src, alt }} />
        ))}

        {/* {morePhotos.map((photo) =>
          photo.map(({ alt, src, maxWidth }, index) => (
            <Image
              key={`${src}${index}`}
              {...{ alt, maxWidth, src }}
            />
          ))
        )} */}
      </SRLWrapper>
    </FlexLayout>
  </SimpleReactLightbox>
);

// Gallery.propTypes = {};

export default Gallery;
