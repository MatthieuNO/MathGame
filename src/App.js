import "./assets/style/index.scss"
import Home from "./pages/Home.js";
import Game from "./pages/Game.js";
import { useState } from "react";

function App() {
 const [StartGame, setStartGame] = useState(false)

  return (
    <div className="App">
      
      {StartGame ? <Game setStartGame={setStartGame}/> : 
      <Home setStartGame={setStartGame}/>}
      
    </div>
  );
}

export default App;
