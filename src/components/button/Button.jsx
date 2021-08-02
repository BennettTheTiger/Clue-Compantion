import React from 'react';
import PropType from 'prop-types';

import './button.scss';

const Button = (props) => {
  const { classes, onClick, value } = props;
  return (
    <button
      type="button"
      className={`${classes} clue-btn`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropType.string,
  onClick: PropType.func,
  classes: PropType.string,
};

Button.defaultProps = {
  value: 'None',
  classes: '',
  onClick: () => {},
};

export default Button;
