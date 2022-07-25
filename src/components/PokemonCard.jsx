import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const PokemonCard = ({url}) => {

    const [ pokemon, setPokemon ] = useState()

    const navigate = useNavigate()
    

    useEffect( () => {
        axios.get(url)
          .then( res => setPokemon(res.data))
    },[])

    //console.log(pokemon)
    
    return (
        <div className='card-cont' onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
            <h2>{pokemon?.name}</h2>
            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            {pokemon?.types.map(type =>
            <div key={type.type.name}>
                <b>Type: </b>
                {type.type.name}
            </div>
            )}
        </div>
    );
};

export default PokemonCard;