import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const handleClick = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hola Amigos
        </a>
        <button onClick={handleClick}>PokeApi</button>
      </header>
    </div>
  );
}

export default App;
