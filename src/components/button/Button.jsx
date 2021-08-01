import React from 'react';
import PropType from 'prop-types';

const Button = (props) => {
    console.log(props);
    return <button>{props.value}</button>
}

Button.propTypes = {
    value: PropType.string,
    onClick: PropType.func
}

Button.defaultProps = {
    value: 'None',
    onClick: () => {}
}

export default Button;