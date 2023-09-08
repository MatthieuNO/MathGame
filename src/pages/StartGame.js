import React from 'react';
import Game from './Game.js';

const StartGame = ({setGoGame, RandomNumber}) => {

    const handleGameStart = () => {
            RandomNumber(); 
            setGoGame(true); 
        };
        

    return (
        <div className="center">
             <h1>Welcome</h1>
            <button onClick={handleGameStart}>Game Start</button>
        </div>
    );
};


export default StartGame;