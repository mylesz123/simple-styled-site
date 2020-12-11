import React from 'react';
// import PropTypes from 'prop-types';\
import { Link as SmoothLink } from 'react-scroll';

// animations
import UseAnimations from 'react-useanimations';
import facebook from 'react-useanimations/lib/facebook';
import twitter from 'react-useanimations/lib/twitter';
import instagram from 'react-useanimations/lib/instagram';
//

// react icons
import { RiArrowUpLine } from 'react-icons/ri';
import { BiPhone } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
//

import { SECTION_PATHS } from '../../data/navbar';
import { Grid, StackLayout, Button, FlexLayout } from '../primitives';
import { COLORS } from '../constants';
import FooterWrapper, {
  Header,
  Text,
  ButtonWrapper,
  Content,
  SocialMediaLinks,
} from './styles';

const socialMedia = [
  {
    name: 'twitter',
    animation: twitter,
    href: 'https://twitter.com',
  },
  {
    name: 'instagram',
    animation: instagram,
    href: 'https://instagram.com',
  },
  {
    name: 'facebook',
    animation: facebook,
    href: 'https://facebook.com',
  },
];

const Footer = () => (
  <FooterWrapper>
    <FlexLayout fillAvailableSpace>
      <Grid fillAvailableSpace>
        <StackLayout as="aside">
          <Header>something</Header>
          <Text>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:something@gmail.com"
            >
              <HiOutlineMail /> something@gmail.com
            </a>
          </Text>
          <Text>
            <BiPhone /> +1 (777)777-7777
          </Text>
        </StackLayout>

        <Content>
          <StackLayout>
            <Text>Find us on social media</Text>
            <SocialMediaLinks>
              {socialMedia.map(({ name, animation, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <UseAnimations
                    animation={animation}
                    strokeColor={COLORS.RED}
                  />
                </a>
              ))}
            </SocialMediaLinks>
          </StackLayout>
        </Content>
      </Grid>
      <ButtonWrapper>
        <Button>
          <SmoothLink
            to={SECTION_PATHS.BANNER}
            smooth
            spy
            offset={-80}
          >
            <RiArrowUpLine />
          </SmoothLink>
        </Button>
      </ButtonWrapper>
    </FlexLayout>
  </FooterWrapper>
);

// Footer.propTypes = {};

export default Footer;
