import React, { useState } from 'react';

const Game = ({ setStartGame }) => {
  // Définissez inputValue et setInputValue en utilisant useState
  const [inputValue, setInputValue] = useState('');
    const [Numbers, setNumbers] = useState([]);
  // Une fonction pour générer 2 chiffres entre 1 et 100
  
  const RandomNumber = (max, min) => {
    const newNumbers = [];
    newNumbers[0] = Math.floor(Math.random() * (max - min + 1)) + min;
    newNumbers[1] = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(newNumbers);
    setNumbers(newNumbers); // Utilisez setNumbers pour mettre à jour l'état
  };
    
  // Générez les chiffres aléatoires au moment de la création du composant
  const numbersMax = RandomNumber(100, 1);

  // Une fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const result = parseInt(inputValue); // on convertit la valeur de l'input en nombre
    if (!isNaN(result) && result === numbersMax[0] + numbersMax[1]) {
      console.log('yes');
    } else {
      console.log('no');
    }
  };

  return (
    <div className="center">
      <h1>Game</h1>
      <p>{Numbers[0]} + {Numbers[1]}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Entrez votre résultat..."
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Mettez à jour inputValue avec la valeur de l'input
        />
      </form>
      <button onClick={RandomNumber}>dert</button>
      <button onClick={() => setStartGame(false)}>Arrêter</button>
    </div>
  );
};

export default Game;
