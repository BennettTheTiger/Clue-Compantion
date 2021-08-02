import { ENTITY_TYPES, ENTITIES } from "../../../data/constants";
import { DEFAULT_GAME } from "../../../data/defaultGame";
import { TOGGLE_ELEGIBLE } from "../actions/types";
import update from 'immutability-helper';

const ITEM_DATA_TO_APPEND = {
    isElegible: true
}

function getAllDataTypes(gameType = DEFAULT_GAME){
    let defaultState = {}
    Object.keys(ENTITY_TYPES).forEach(entityType => {
        gameType[ENTITIES][entityType].forEach(item => 
            defaultState[item.name] = Object.assign(item, ITEM_DATA_TO_APPEND)
        );
    });
    return defaultState;
}

function gameState(state = getAllDataTypes(), action) {
    switch(action.type){
        case TOGGLE_ELEGIBLE:
            return update(state, {
                [action.entityName]: { $merge: {isElegible: !state[action.entityName].isElegible }}
            });
        default:
            return state
    }
}

export default gameState;

