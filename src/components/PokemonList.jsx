import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [typeList, setTypeList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setPokemonList(res.data.results));

    axios.get("https://pokeapi.co/api/v2/type/")
      .then((res) => setTypeList(res.data.results));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${search}`);
  };
   
  const handleSelect = (e) => {
    const typeUrl = e.target.value;
    alert(typeUrl);
    
    axios.get(typeUrl)
    .then(res => setPokemonList(res.data.pokemon))   
    
  };


  return (
    <div>

      <form onSubmit={submit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

      {/* --crea la lista de tipos de pokemon en un menu -- */}
      <select onChange={handleSelect}>
        {typeList.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))
        }
      </select>

      
      
      {pokemonList?.map( pokemon => 
          <PokemonCard 
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
          />
        )}



    </div>
  );
};

export default PokemonList;
