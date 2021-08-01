import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';

import './entity.scss';

const Entity = (props) => {
    const { name } = props;
    return (
        <div className='entity-item'>
            <div className='entity-name'>{name}</div>
            <Button value='test' />
            <Button value='test' />
        </div>
    )
}

Entity.propTypes = {
    item: PropTypes.string
}

export default Entity;