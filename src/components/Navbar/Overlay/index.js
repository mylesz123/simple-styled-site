import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

import { Grid, Center, StackLayout, Button } from '../../primitives';

import OverlayWrapper, { CloseIcon, Icon, Link } from './styles';

const NavOverlay = ({
  links = [],
  isOpen,
  toggleIsOpen = () => {},
}) => (
  <OverlayWrapper {...{ isOpen }}>
    <Icon>
      <CloseIcon onClick={toggleIsOpen} />
    </Icon>
    <Center totallyCentered className="center">
      <Grid gap={7}>
        <StackLayout gap={4}>
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={toggleIsOpen}
            >
              {link.title}
            </Link>
          ))}
        </StackLayout>

        <Button primary>
          <RouterLink to="/checkout">Checkout</RouterLink>
        </Button>
      </Grid>
    </Center>
  </OverlayWrapper>
);

NavOverlay.propTypes = {
  isOpen: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.object),
  toggleIsOpen: PropTypes.func,
};

export default NavOverlay;
