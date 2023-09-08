import React, { useState } from 'react';

const Game = ({ setGoGame, Numbers, RandomNumber, newNumbers, setTotalResult, TotalResult }) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const addition = Numbers[0] + Numbers[1]

  console.log(addition)

    const resetInput = () => {
      setInputValue("")
      RandomNumber()
    };

    const stopGame = () => {
      setInputValue("")
      setGoGame(false)
      setTotalResult(0)
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const result = parseInt(inputValue);
      if (!isNaN(result) && result === addition) {
        console.log('yes');
        setTotalResult(TotalResult + 1)
        resetInput()
      } else {
        resetInput()
      }
  };

  return (
    <div className="center">
      <h1>Game</h1>
      <p>{Numbers[0]} + {Numbers[1]}</p>
      <form onSubmit={handleSubmit} >
        <input
          type="number"
          placeholder="Entrez votre résultat..."
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Mettre à jour inputValue avec la valeur de l'input
        />
      </form>
      <p>Total : {TotalResult}</p>
      <button onClick={stopGame}>Arrêter</button>
    </div>
  );
};

export default Game;
