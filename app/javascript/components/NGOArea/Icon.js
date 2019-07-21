import React from 'react';

const Icon = ({ name, fixedWidth }) => (
  <i className={`fa fa-${name}${fixedWidth ? ' fa-fw' : ''}`} />
);

Icon.defaultProps = {
  fixedWidth: false
}

export default Icon;
