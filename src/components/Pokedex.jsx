import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import PokemonList from './PokemonList';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    return (
        <div className='pokedex-cont'>
            <h1>Pokedex</h1>
            <p>
                Welcome <b>{user}</b>, here you can find your favorite pokemon
            </p>
            <PokemonList/>

        </div>
    );
};

export default Pokedex;