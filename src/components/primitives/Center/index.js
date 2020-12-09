import React from 'react';
import PropTypes from 'prop-types';

import CenterWrapper from './styles';

export default function Center({
  className,
  children,
  fillAvailableSpace = false,
  totallyCentered,
  ...rest
}) {
  return (
    <CenterWrapper
      {...{ className, fillAvailableSpace, totallyCentered, ...rest }}
    >
      {children}
    </CenterWrapper>
  );
}

Center.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fillAvailableSpace: PropTypes.bool,
  totallyCentered: PropTypes.bool,
};
