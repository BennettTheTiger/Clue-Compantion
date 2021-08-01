import { combineReducers } from "redux"
// reducers
import gameState from './gameState';
import gameData from './gameData';

const rootReducer = combineReducers({
    gameState,
    gameData
})

export default rootReducer;