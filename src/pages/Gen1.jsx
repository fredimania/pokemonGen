import React from 'react';
/* importamos el hook personalizado */
import useFetch from '../hooks/useFetch';
/* import el componente Card que muestra la informacion en un formato */
import Card from '../components/Card';

/* declaramos el componente */
const Gen1 = () => {
 /*  llamado al hook y lo paso como argumento */
  const { data: pokemons, loading } = useFetch('https://pokeapi.co/api/v2/pokemon/');

/*   verifica el estado de las api */
  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <h1>Pokemon de la Gen 1 </h1>
     {/*  define al contenedor  */}
      <div className="card-container">
  {/*       aqui se muestra la cantidad de pokemon que desea ver */}
      {pokemons.slice(0, 10).map((pokemon, index) => (
          <Card
        /*   propiedad unica de la lista */
            key={index}
            name={pokemon.name}
            img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gen1;
