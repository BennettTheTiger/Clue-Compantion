import React from 'react';
import PropTypes from 'prop-types';
import Entity from '../entity';

const EntityGroup = (props) => {

    const { type, options } = props;
    return (
        <section className='entitiy-group'>
            <h2>{type}</h2>
            {options.map(item => <Entity key={`item-${item.name}`} {...item} />)}
        </section>
    )
}

EntityGroup.propTypes = {
    type: PropTypes.string,
    options: PropTypes.array
}

EntityGroup.defaultProps = {
    type: 'unknown',
    options: []
}

export default EntityGroup;