import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PokemonCard from "./PokemonCard";


const PokemonList = () => { 
  
  const [search, setSearch] = useState("");
  const [pokemonList, setPokemonList] = useState([]);
  const [typeList, setTypeList] = useState([]);

  const navigate = useNavigate();

  const pokemonURL = "https://pokeapi.co/api/v2/pokemon/"
  const allTypesURL = "https://pokeapi.co/api/v2/type/"

  useEffect(() => {
    axios.get(`${pokemonURL}?limit=50&offset=0`)
      .then((res) => setPokemonList(res.data.results));

    axios.get(allTypesURL)
      .then((res) => setTypeList(res.data.results));
  }, []);

  
  const pagination = (mainURL) => {
    const total = 1154
    const pageLimit = 50
    let offset = 0  
    
    const totalPages = Math.ceil( total / pageLimit )      
    const pagesInfo = []   

    for( let i = 0 ; i < totalPages ; i++){
      pagesInfo.push(new pageData( i+1 , `${mainURL}?limit=${pageLimit}&offset=${offset}` ))
      offset += pageLimit
    }

    console.log('pages info',pagesInfo)
          
    return (<div className="pages-cont">

      {pagesInfo.map( page =>       
        <button 
          onClick={ () => handlePage(page.url) } 
          key={page.number}
        >
          {page.number}
        </button>)
      } 
    </div>)
  }
  

  const handlePage = ( url) => {
    axios.get(url)
      .then((res) => setPokemonList(res.data.results));
  }

  function pageData ( number, url ){
    this.number = number,
    this.url = url 
  }

  const submit = (e) => {
    e.preventDefault();
    navigate(`/pokedex/${search}`);
  };
   
  const handleSelect = (e) => {
    const typeUrl = e.target.value;   

    axios.get(typeUrl)
    .then(res => setPokemonList(res.data.pokemon))       
  };

  

  return (
    <div className="form-cont">

      <form onSubmit={submit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </form>

      {/* --crea la lista de tipos de pokemon en un menu -- */}
      <select className="select-cont" onChange={handleSelect}>
        <option value={pokemonURL} >Sellect All</option>
        {typeList.map((type) => (
            <option value={type.url} key={type.url}>
              {type.name}
            </option>
          ))
        }
      </select>
      
      { pagination(pokemonURL) }
      <div className="cards-list-cont">
      {pokemonList?.map( pokemon => 
          <PokemonCard 
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url} 
          />
        )}
      </div>

       

    </div>
  );
};

export default PokemonList;
