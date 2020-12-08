import React from 'react';
import PropTypes from 'prop-types';
import ButtonWrapper from './styles';

// this is only to be used with react router, or react scroll link api
const Button = ({
  children,
  onClick = () => {},
  primary = false,
  ...rest
}) => (
  <ButtonWrapper {...{ onClick, primary, ...rest }}>
    {children}
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
};

export default Button;
