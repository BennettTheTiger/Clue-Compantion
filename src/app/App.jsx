import React from 'react'
import { useSelector } from 'react-redux';
import ScoreCard from '../views/scorecard';

const App = () => {
    const gameData = useSelector(state => state.gameData);
    return <ScoreCard gameData={gameData}/>
}

export default App;