import React from 'react';
import PropTypes from 'prop-types';
import EntityGroup from '../../components/entityGroup/EntityGroup';

import './scorecard.scss';

const ScoreCard = (props) => {
    const {gameData: { title, entities }} = props;

    const renderEntities = () => {
        return Object.keys(entities).map(entityType => {
            return <EntityGroup
                key={`entity-group-${entityType}`}
                type={entityType}
                options={entities[entityType]}
            />
        })
    }

    return (
        <div className='score-card'>
            <h1 className='entity-type-title'>{title}</h1>
            {renderEntities()}
        </div>
    )
}

ScoreCard.propTypes = {
    gameData: PropTypes.shape({
        title: PropTypes.string,
        entities: PropTypes.shape({})
    })
}

ScoreCard.defaultProps = {
    gameData: {
        title: 'Welcome',
        entities: {}
    }
}

export default ScoreCard;