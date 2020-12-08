import React from 'react';
import PropTypes from 'prop-types';

import FlexLayoutWrapper from './styles';

const FlexLayout = ({
  children,
  className,
  fillAvailableSpace = false,
  justifyContent,
  ...rest
}) => (
  <FlexLayoutWrapper
    {...{ className, fillAvailableSpace, justifyContent, ...rest }}
  >
    {children}
  </FlexLayoutWrapper>
);

FlexLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fillAvailableSpace: PropTypes.bool,
  justifyContent: PropTypes.string,
};

export default FlexLayout;
