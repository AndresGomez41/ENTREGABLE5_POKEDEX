import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PokemonDetail = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => setPokemon(res.data));
  }, [id]);
  console.log(pokemon);
  return (
    <div className="details-cont">
        <h2>Pokemon details</h2>
        <div className="basic-details-cont">
            <h2>{pokemon.name}</h2>
            <h3># {pokemon.order}</h3>
            <img src={pokemon.sprites?.other["official-artwork"].front_default} />
            <div> <b>Height: </b> {(pokemon.height)*10} cm</div>
            <div><b>Weight: </b>{(pokemon.weight)/10} Kgs</div>
        </div>
        <div className="stats-cont">
            <h2>STATS</h2>
            {pokemon.stats?.map( stat => (
                <div><b>{stat.stat.name}: </b>{stat.base_stat}</div>
            ))}
            <div><b>base experience: </b>{pokemon.base_experience}</div>
        </div>
      
        <div className="types-cont">
            <h2>TYPES</h2>
            {pokemon.types?.map((type) => (
            <div key={type.type.name}>{type.type.name}</div>
            ))}
        </div>
        <div className="abilities-cont">
            <h2>ABILITIES</h2>
            {pokemon.abilities?.map((ability) => (
            <div>{ability.ability.name}</div>
            ))}
        </div>
        <div className="movements-cont">
            <h2>MOVEMENTS</h2>
            {pokemon.moves?.map((move) => (
                <div>{move.move.name}</div>
                ))}
        </div>
       
    </div>
  );
};

export default PokemonDetail;
