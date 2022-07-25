import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokemonDetail = () => {

    const { id } = useParams()

    const [ pokemon, setPokemon ] = useState({})

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
    },[id])

    return (
        <div>
            <h2>Pokemon details</h2>
            <h2>{pokemon.name}</h2>
            <div> <b>Height: </b> {pokemon.height}</div>
            <div> <b>Weight: </b>{pokemon.weight}</div>
            <img src={pokemon.sprites?.other['official-artwork'].front_default}/>
        </div>
    );
};

export default PokemonDetail;