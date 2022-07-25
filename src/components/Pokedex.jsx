import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import PokemonList from './PokemonList';

const Pokedex = () => {

    const user = useSelector(state => state.user)

    return (
        <div>
            <h2>Pokedex</h2>
            <p>
                Welcome {user}, here you can find your favorite pokemon
            </p>
            <PokemonList/>

        </div>
    );
};

export default Pokedex;