import React from 'react';
import PropTypes from 'prop-types';

import StackLayoutWrapper from './styles';

const StackLayout = ({ children, className, gap, ...props }) => (
  <StackLayoutWrapper {...{ className, gap, ...props }}>
    {children}
  </StackLayoutWrapper>
);

StackLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fillAvailableSpace: PropTypes.bool,
  gap: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7]),
  props: PropTypes.shape({}),
};

StackLayout.defaultProps = {
  fillAvailableSpace: false,
};

export default StackLayout;
