import React from 'react';
import PropType from 'prop-types';

import './button.scss';

const Button = (props) => {
    const {classes,  onClick} = props;
    return (<button 
        className={`${classes} clue-btn`}
        onClick={onClick}
    >{props.value}
    </button>)
}

Button.propTypes = {
    value: PropType.string,
    onClick: PropType.func,
    classes: PropType.string
}

Button.defaultProps = {
    value: 'None',
    classes: '',
    onClick: () => {}
}

export default Button;