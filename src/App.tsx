import React from 'react';
import PokemonSearch from './components/PokemonSearch';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch name="Ken Chen" numberOfPokemons={5}/>
    </div>
  );
}

export default App;
