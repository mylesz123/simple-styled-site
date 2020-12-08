import React from 'react';
import PropTypes from 'prop-types';

import CenterWrapper from './styles';

export default function Center({
  className,
  children,
  totallyCentered,
  ...rest
}) {
  return (
    <CenterWrapper {...{ className, totallyCentered, ...rest }}>
      {children}
    </CenterWrapper>
  );
}

Center.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  totallyCentered: PropTypes.bool,
};
