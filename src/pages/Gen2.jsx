import React from 'react';
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';

const Gen2 = () => {
  const { data: pokemons, loading } = useFetch('https://pokeapi.co/api/v2/pokemon/');

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Pokemon de la Gen 2</h1>
      <div className="card-container">
      {pokemons.slice(0, 10).map((pokemon, index) => (
          <Card
            key={index}
            name={pokemon.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${151 + index + 1}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gen2;
