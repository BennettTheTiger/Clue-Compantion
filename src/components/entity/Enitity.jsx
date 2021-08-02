import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import interactions from '../../app/redux/actions/interactions';

import './entity.scss';

function mapDispatchToProps(dispatch) {
    return bindActionCreators(interactions, dispatch)
}

function mapStateToProps(state) {
    return { allEntities: state.gameState }
}

const Entity = (props) => {
    const { name, toggleElegible, allEntities } = props;
    const entityData = allEntities[name];

    function toggleElegibility() {
        return toggleElegible(name);
    }

    return (
        <div className='entity-item'>
            <div className={cn('entity-name', {
                elegible: entityData.isElegible
                })}>
                {name}
            </div>
            <Button 
                classes='elegible-btn' 
                value='Elegible' 
                onClick={toggleElegibility}
            />
        </div>
    )
}

Entity.propTypes = {
    name: PropTypes.string,
    toggleElegible: PropTypes.func,
    allEntities: PropTypes.array
}

Entity.defaultProps = {
    name: ''
}

export default  connect(mapStateToProps, mapDispatchToProps)(Entity);