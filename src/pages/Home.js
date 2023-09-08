import Game from "./Game.js";
import StartGame from "./StartGame.js";
import { useState } from "react";

function Home() {

 const [GoGame, setGoGame] = useState(false)
 const [Numbers, setNumbers] = useState([]);
 const [TotalResult, setTotalResult] = useState(0)

 const newNumbers = [];


 const RandomNumber = () => {
    newNumbers[0] = Math.floor(Math.random() * 101);;
    newNumbers[1] = Math.floor(Math.random() * 101);;
    console.log(newNumbers);
    setNumbers(newNumbers);
  };
    

  return (
    <div>
      {GoGame ? <Game setGoGame={setGoGame} RandomNumber={RandomNumber} Numbers={Numbers} newNumber={newNumbers} TotalResult={TotalResult} setTotalResult={setTotalResult}/> : 
      <StartGame setGoGame={setGoGame} RandomNumber={RandomNumber} Numbers={Numbers} TotalResult={TotalResult} setTotalResult={setTotalResult}/>}
    </div>
  );
}

export default Home;
