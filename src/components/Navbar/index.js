import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { FaBars } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { SECTION_PATHS, LINKS } from '../../data/navbar';
import { FlexLayout, Box, Button } from '../primitives';
import NavWrapper, {
  Logo,
  MobileIcon,
  Menu,
  Link,
  ButtonWrapper,
} from './styles';
import NavOverlay from './Overlay';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();
  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <NavOverlay {...{ links: LINKS, isOpen, toggleIsOpen }} />
      <NavWrapper>
        <FlexLayout justifyContent="space-between" fillAvailableSpace>
          <Logo to={SECTION_PATHS.BANNER} smooth>
            something
          </Logo>

          <MobileIcon>
            <FaBars onClick={toggleIsOpen} />
          </MobileIcon>
          <Menu>
            {LINKS.map((link) => (
              <Box key={link.path}>
                <Link to={link.path} smooth spy offset={-80}>
                  {link.title}
                </Link>
              </Box>
            ))}
          </Menu>
          <ButtonWrapper>
            <Button primary>
              <RouterLink to="/checkout">Checkout</RouterLink>
            </Button>
          </ButtonWrapper>
        </FlexLayout>
      </NavWrapper>
    </>
  );
};

// Navbar.propTypes = {};

export default Navbar;
