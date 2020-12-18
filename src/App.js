import React from "react";
import './App.scss';
import { useState, useEffect, Fragment } from "react";
import ListContainer from "./components/list-container/list-container.component";

const App = () =>{
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(res => res.json())
    .then(data => {
      setPokemon(data.results)
    })
  }, []);

  const filterPokemon = pokemon.filter(data => {
    return data.name.toLowerCase().includes(search.toLowerCase())
  })


  return(
    <Fragment>
      <div className='nav'>
        <h2>Filter through gen 1 Pokemon: <input type='search' value={search} placeholder='Enter Text Here...' onChange={e => setSearch(e.target.value)} /></h2>   
      </div>
      <ListContainer data={filterPokemon} />
    </Fragment>
  )
}

export default App;
