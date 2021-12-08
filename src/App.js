import Juego from './componentes/juego'
import { useState } from 'react'
function App() {
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState("");
  const data = [
    {
      id: 1,
      imagen: "images/icon-rock.svg",
      clase: "rock"
    },
    {
      id: 2,
      imagen: "images/icon-paper.svg",
      clase: "paper"
    },
    {
      id: 3,
      imagen: "images/icon-scissors.svg",
      clase: "scissors"
    }
  ];
  const [juego, setJuegos] = useState([...data]);

  const handleClick = (e) => {
    const random = Math.floor(Math.random() * (4 - 1) + 1);
    const computer = juego.filter(i => i.id === random);
    const lose = {
      id: e.id,
      imagen: e.imagen,
      clase: e.clase,
      lose: true
    };
    const win = {
      id: e.id,
      imagen: e.imagen,
      clase: e.clase,
      win: true
    };
    if (e.clase === computer[0].clase) {
      setJuegos([e, e]);
    } else if ((e.clase === "rock" && computer[0].clase !== "paper") || (e.clase === "paper" && computer[0].clase !== "scissors") || (e.clase === "scissors" && computer[0].clase !== "rock")) {
      setJuegos([win, ...computer]);
      setScore(score + 1);
    } else {
      setJuegos([lose, ...computer]);
      setScore(score - 1);
    }
  }
  const handleClickAgain = () => {
    setJuegos([...data])
  }

  const handleRules = () => {
    setRules("rules-active")
  }
  const handleClickRules = () => {
    setRules("");
  }

  return (
    <div className="App">
      <header>
        <div id="span">
          <span>ROCK</span>
          <span>PAPER</span>
          <span>SCISSORS</span>
        </div>
        <div id="score">
          <h4>SCORE</h4>
          <h1>{score}</h1>
        </div>
      </header>
      <Juego juego={juego} handleClick={handleClick} handleClickAgain={handleClickAgain} />
      <footer>
        <button id="rules" onClick={handleRules}>RULES</button>
        <div id="modal" className={rules !== "" ? rules : ""}>
          <div>
            <div id="modal-rules">
              <h2>RULES</h2>
              <p onClick={handleClickRules}>X</p>
            </div>
            <img src="images\image-rules.svg" />
          </div>
        </div>
      </footer>
    </div >
  );
}

export default App;
