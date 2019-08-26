import React, { Component } from 'react';
import './App.css';
import { usePokemon } from './hooks/usePoke'

const App = React.FC = ()=> {

const pokemons = usePokemon();
console.log("pokemons", pokemons.data)

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
         <p className="App-link">{pokemons.data.name}</p>

         {/* { pokemons.data.sprites ?  <img src={pokemons.data.sprites.back_default} /> : <div></div>  } */}

          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
    );
}

export default App;