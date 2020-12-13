import styled from 'styled-components';
import { COLORS } from '../constants';

const FooterWrapper = styled.footer`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${COLORS.BLACK};
`;

export const Header = styled.h2`
  color: ${COLORS.RED};
`;

export const Text = styled.p`
  color: ${COLORS.WHITE};

  a {
    color: ${COLORS.WHITE};
    text-decoration: none;
  }
`;

export const Content = styled.aside`
  color: ${COLORS.RED};
`;

export const ButtonWrapper = styled.section`
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 10px;
    padding: 5px 11px;
  }
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  max-width: 250px;

  * {
    margin-right: 10px;
  }
`;

export { FooterWrapper as default };
